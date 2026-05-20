import { useState, type FormEvent } from 'react';
import { Send, CheckCircle, AlertCircle, Clock, MapPin, Phone, Mail } from 'lucide-react';

const psychologists = [
  'Patricia Vidal Diéguez',
  'Victoria Cenalmor Aparicio',
  'Josefa María Molero Espinosa',
  'María Elena Aragón Gracia',
  'Amanda Nogales Martín',
  'Sin preferencia',
];

const timeSlots = [
  '09:00 - 10:00',
  '10:00 - 11:00',
  '11:00 - 12:00',
  '12:00 - 13:00',
  '16:00 - 17:00',
  '17:00 - 18:00',
  '18:00 - 19:00',
  '19:00 - 20:00',
];

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    preferred_psychologist: '',
    preferred_date: '',
    preferred_time: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-appointment-email`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Error al enviar la solicitud');
      }

      setStatus('success');
      setForm({
        name: '',
        email: '',
        phone: '',
        preferred_psychologist: '',
        preferred_date: '',
        preferred_time: '',
        message: '',
      });

      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contacto" className="py-24 bg-sage-800 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 20%, rgba(180,150,108,0.4) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(119,135,104,0.3) 0%, transparent 50%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-sage-300 text-sm font-semibold tracking-widest uppercase mb-4">
            Contacto
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Pide tu cita{' '}
            <span className="text-warm-400">ahora</span>
          </h2>
          <p className="text-sage-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Completa el formulario y nos pondremos en contacto contigo lo antes
            posible para confirmar tu cita.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="font-display text-xl font-semibold text-white mb-6">
                Información de contacto
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-sage-700 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-sage-300" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Dirección</p>
                    <p className="text-sage-300 text-sm">
                      Calle de la Paz, 24, 2º B
                      <br />
                      28001 Madrid
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-sage-700 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-sage-300" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Teléfono</p>
                    <p className="text-sage-300 text-sm">91 123 45 67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-sage-700 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-sage-300" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-sage-300 text-sm">
                      info@psicologiavida.es
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-sage-700 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-sage-300" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Horario</p>
                    <p className="text-sage-300 text-sm">
                      Lunes a Viernes: 9:00 - 21:00
                      <br />
                      Sábados: 9:00 - 14:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-xl shadow-black/10"
            >
              {status === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 flex items-center gap-3 animate-in fade-in">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <p className="text-green-700 text-sm">
                    Tu solicitud de cita se ha enviado correctamente. Nos
                    pondremos en contacto contigo pronto.
                  </p>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-3 animate-in fade-in">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <p className="text-red-700 text-sm">
                    Ha ocurrido un error. Por favor, inténtalo de nuevo.
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sage-700 text-sm font-medium mb-1.5">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-sage-200 text-sage-800 text-sm focus:outline-none focus:ring-2 focus:ring-sage-500/30 focus:border-sage-400 transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sage-700 text-sm font-medium mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-sage-200 text-sage-800 text-sm focus:outline-none focus:ring-2 focus:ring-sage-500/30 focus:border-sage-400 transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sage-700 text-sm font-medium mb-1.5">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-sage-200 text-sage-800 text-sm focus:outline-none focus:ring-2 focus:ring-sage-500/30 focus:border-sage-400 transition-all"
                    placeholder="600 000 000"
                  />
                </div>
                <div>
                  <label className="block text-sage-700 text-sm font-medium mb-1.5">
                    Psicóloga preferida
                  </label>
                  <select
                    name="preferred_psychologist"
                    value={form.preferred_psychologist}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-sage-200 text-sage-800 text-sm focus:outline-none focus:ring-2 focus:ring-sage-500/30 focus:border-sage-400 transition-all bg-white"
                  >
                    <option value="">Selecciona una opción</option>
                    {psychologists.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sage-700 text-sm font-medium mb-1.5">
                    Fecha preferida
                  </label>
                  <input
                    type="date"
                    name="preferred_date"
                    value={form.preferred_date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 rounded-xl border border-sage-200 text-sage-800 text-sm focus:outline-none focus:ring-2 focus:ring-sage-500/30 focus:border-sage-400 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sage-700 text-sm font-medium mb-1.5">
                    Horario preferido
                  </label>
                  <select
                    name="preferred_time"
                    value={form.preferred_time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-sage-200 text-sage-800 text-sm focus:outline-none focus:ring-2 focus:ring-sage-500/30 focus:border-sage-400 transition-all bg-white"
                  >
                    <option value="">Selecciona horario</option>
                    {timeSlots.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sage-700 text-sm font-medium mb-1.5">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-sage-200 text-sage-800 text-sm focus:outline-none focus:ring-2 focus:ring-sage-500/30 focus:border-sage-400 transition-all resize-none"
                  placeholder="Cuéntanos brevemente cómo podemos ayudarte..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-sage-700 text-white font-semibold rounded-xl hover:bg-sage-800 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-lg"
              >
                {status === 'submitting' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Solicitar cita
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
