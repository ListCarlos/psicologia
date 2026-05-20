import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface AppointmentRequest {
  name: string;
  email: string;
  phone: string;
  preferred_psychologist: string;
  preferred_date: string;
  preferred_time: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const body: AppointmentRequest = await req.json();

    const emailBody = `
Nueva solicitud de cita

Datos del contacto:
- Nombre: ${body.name}
- Email: ${body.email}
- Teléfono: ${body.phone}

Preferencias:
- Psicóloga preferida: ${body.preferred_psychologist || "Sin preferencia"}
- Fecha preferida: ${body.preferred_date || "No especificada"}
- Hora preferida: ${body.preferred_time || "No especificada"}

Mensaje:
${body.message || "Sin mensaje adicional"}
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
      },
      body: JSON.stringify({
        from: "Psicología Vida <noreply@psicologiavida.com>",
        to: Deno.env.get("CLINIC_EMAIL") || "info@psicologiavida.com",
        reply_to: body.email,
        subject: `Nueva solicitud de cita - ${body.name}`,
        text: emailBody,
      }),
    });

    if (!response.ok) {
      throw new Error(`Email service error: ${response.statusText}`);
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Solicitud de cita enviada correctamente",
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Error desconocido",
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
