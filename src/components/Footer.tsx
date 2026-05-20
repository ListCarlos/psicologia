import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-sage-900 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-sage-400" strokeWidth={1.5} />
            <span className="font-display text-lg font-semibold text-white">
              Serendipia
            </span>
          </div>

          <div className="flex items-center gap-8 text-sm text-sage-400">
            <a href="#inicio" className="hover:text-white transition-colors">
              Inicio
            </a>
            <a href="#equipo" className="hover:text-white transition-colors">
              Equipo
            </a>
            <a href="#servicios" className="hover:text-white transition-colors">
              Servicios
            </a>
            <a href="#contacto" className="hover:text-white transition-colors">
              Contacto
            </a>
          </div>

          <p className="text-sage-500 text-sm">
            &copy; {new Date().getFullYear()} Gabinete Psicológico Serendipia
          </p>
        </div>
      </div>
    </footer>
  );
}
