import { Heart, Brain, Users, Sun, Leaf, Sparkles } from 'lucide-react';

const services = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Terapia Individual',
    description:
      'Espacio personal para explorar tus emociones, pensamientos y comportamientos con un enfoque adaptado a tus necesidades.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Terapia de Pareja',
    description:
      'Mejora la comunicación, resuelve conflictos y fortalece el vínculo con tu pareja a través del diálogo terapéutico.',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Terapia Familiar',
    description:
      'Trabaja las dinámicas familiares, mejora las relaciones y construye un hogar más armonioso y comprensivo.',
  },
  {
    icon: <Sun className="w-6 h-6" />,
    title: 'Psicología Infantil',
    description:
      'Atención especializada para los más pequeños, utilizando técnicas lúdicas y adaptadas a su desarrollo.',
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: 'Gestión del Estrés',
    description:
      'Aprende técnicas de mindfulness y regulación emocional para afrontar los desafíos del día a día.',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Crecimiento Personal',
    description:
      'Descubre tu potencial, trabaja la autoestima y construye una vida más plena y consciente.',
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sage-600 text-sm font-semibold tracking-widest uppercase mb-4">
            Servicios
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-sage-800 mb-6">
            Cómo podemos{' '}
            <span className="text-warm-500">ayudarte</span>
          </h2>
          <p className="text-sage-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Ofrecemos un abanico de servicios psicológicos adaptados a cada
            etapa y necesidad de tu vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl border border-sage-100 hover:border-sage-200 bg-sand-50/50 hover:bg-white transition-all duration-500 hover:shadow-lg hover:shadow-sage-100/50 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-sage-100 text-sage-600 flex items-center justify-center mb-5 group-hover:bg-sage-600 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-sage-800 mb-3">
                {service.title}
              </h3>
              <p className="text-sage-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
