import { User, Heart, Brain, Shield } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const psychologists: TeamMember[] = [
  {
    name: 'Patricia Vidal Diéguez',
    role: 'Psicóloga General Sanitaria',
    specialty: 'Adolescencia y Dependencia Emocional',
    description:
      'Graduada en Psicología y Máster en Psicología General Sanitaria. Su pasión es la atención a adolescentes, especializada en Trastornos de Conducta Alimentarias. Publicó un artículo en la Revista Psicothema sobre Dependencia emocional entre adolescentes. Experta en Mediación por la Universidad de Barcelona.',
    icon: <Heart className="w-5 h-5" />,
    image: '/src/assets/team/Patricia_Vidal.png',
    matricula: 'M-90421',
  },
  {
    name: 'Victoria Cenalmor Aparicio',
    role: 'Psicóloga General Sanitaria',
    specialty: 'Terapia Cognitivo-Conductual Infantil',
    description:
      'Licenciada en Psicología y Máster en Psicología General Sanitaria. Especializada en Intervención en Acoso Escolar, TDAH y Autismo. Formada en Terapias de tercera Generación orientadas a población infantil. Experta en aplicación de nuevas tecnologías con niños para mejorar la conexión.',
    icon: <Brain className="w-5 h-5" />,
    image: '/src/assets/team/Victoria_Cenalmor.png',
    matricula: 'M-60542',
  },
  {
    name: 'Josefa María Molero Espinosa',
    role: 'Psicóloga General Sanitaria',
    specialty: 'Asistencia en Situaciones de Emergencia',
    description:
      'Licenciada en Psicología y Máster en Psicología General Sanitaria. CumLauder con matrícula de honor. Experta en ansiedad, estrés, análisis de conducta y conductas adictivas. Su trabajo está orientado a la atención de personas con ansiedad y estrés. Profesora en la Universidad de Valencia desde 2010.',
    icon: <Shield className="w-5 h-5" />,
    image: '/src/assets/team/Josefa_Maria_Molero.png',
    matricula: 'M-60542',
  },
  {
    name: 'María Elena Aragón Gracia',
    role: 'Psicóloga General Sanitaria',
    specialty: 'Terapias Familiares',
    description:
      'Licenciada en Psicología y Máster en Psicología General Sanitaria, especializada en terapias familiares. Formada en la Universidad de Harvard en depresión y Trastornos Obsesivos Compulsivos. Trabajó 5 años en Harvard como psicóloga adjunta. Aplica técnicas con enfoque innovador importado desde EEUU.',
    icon: <User className="w-5 h-5" />,
    image: '/src/assets/team/Maria_Elena_Aragon.png',
    matricula: 'M-87454',
  },
  {
    name: 'Amanda Nogales Martín',
    role: 'Psicóloga General Sanitaria',
    specialty: 'Duelo y Psicología Pediátrica',
    description:
      'Graduada en Psicología y Máster en Psicología General Sanitaria, especializada en Terapias de Duelo. Experta en psicología de cuidados paliativos y psicooncología pediátrica. Su trabajo está orientado a la atención de personas que han perdido a un ser querido. Formada en atención infantil en situación de separación y divorcios.',
    icon: <Heart className="w-5 h-5" />,
    image: '/src/assets/team/Amanda_Nogales.png',
    matricula: 'M-89898',
  },
];

const auxiliaryTeam = [
  {
    name: 'Marta Sánchez',
    role: 'Coordinadora de Citas',
    description: 'Gestiona agendas y asegura que cada paciente reciba atención en el momento adecuado.',
  },
  {
    name: 'Lucía Fernández',
    role: 'Administración',
    description: 'Responsable de la gestión administrativa y la facturación del centro.',
  },
  {
    name: 'Paula García',
    role: 'Recepción y Atención',
    description: 'Primera cara amable que verás al llegar. Se encarga de recibir y orientar a cada paciente.',
  },
];

export default function TeamSection() {
  return (
    <section id="equipo" className="py-24 bg-sand-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block text-sage-600 text-sm font-semibold tracking-widest uppercase mb-4">
            Nuestro equipo
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-sage-800 mb-6">
            Profesionales que cuidan{' '}
            <span className="text-warm-500">de ti</span>
          </h2>
          <p className="text-sage-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Cada miembro de nuestro equipo aporta experiencia, sensibilidad y
            compromiso para acompañarte en tu proceso de cambio.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {psychologists.map((member) => (
            <div
              key={member.name}
              className="relative bg-white rounded-2xl shadow-md shadow-sage-200/30 border border-sage-100 overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="h-1.5 bg-gradient-to-r from-sage-400 to-sage-300" />
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-sage-100 to-sand-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-semibold text-sage-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-warm-500 text-xs font-semibold mb-2">
                  {member.matricula}
                </p>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sage-50 text-sage-600 text-xs font-medium mb-3">
                  {member.icon}
                  <span>{member.specialty}</span>
                </div>
                <p className="text-sage-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Auxiliary Team */}
        <div className="text-center mb-10">
          <span className="inline-block text-sage-600 text-sm font-semibold tracking-widest uppercase mb-3">
            Equipo Auxiliar
          </span>
          <h3 className="font-display text-2xl font-bold text-sage-800">
            Detrás de cada buena atención
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {auxiliaryTeam.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-xl p-6 border border-sand-200 hover:border-sage-200 transition-all duration-300 hover:shadow-md group"
            >
              <div className="w-12 h-12 rounded-full bg-sand-100 flex items-center justify-center mb-4 group-hover:bg-sage-100 transition-colors">
                <User className="w-5 h-5 text-sand-600 group-hover:text-sage-600 transition-colors" />
              </div>
              <h4 className="font-display text-base font-semibold text-sage-800 mb-1">
                {member.name}
              </h4>
              <p className="text-warm-500 text-sm font-medium mb-2">
                {member.role}
              </p>
              <p className="text-sage-500 text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
