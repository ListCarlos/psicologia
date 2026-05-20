import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sage-800 via-sage-700 to-sage-900" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(180,150,108,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(119,135,104,0.3) 0%, transparent 50%), radial-gradient(circle at 60% 80%, rgba(208,117,88,0.15) 0%, transparent 50%)',
        }}
      />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-60" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-warm-400 animate-pulse" />
          <span className="text-white/80 text-sm font-medium tracking-wide">
            Atención profesional y cercana
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6">
          Tu bienestar{' '}
          <span className="text-warm-400">emocional</span>{' '}
          es nuestra prioridad
        </h1>

        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
          Un equipo de psicólogas comprometidas con tu crecimiento personal.
          Ofrecemos un espacio seguro para transformar tu vida.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contacto"
            className="px-8 py-4 bg-warm-500 text-white font-semibold rounded-full hover:bg-warm-600 transition-all duration-300 hover:shadow-xl hover:shadow-warm-500/25 hover:-translate-y-0.5"
          >
            Solicitar cita
          </a>
          <a
            href="#equipo"
            className="px-8 py-4 bg-white/10 text-white font-medium rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
          >
            Conoce al equipo
          </a>
        </div>
      </div>

      <a
        href="#equipo"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
