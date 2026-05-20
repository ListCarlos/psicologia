import { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#equipo', label: 'Equipo' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" className="flex items-center gap-2 group">
            <Heart
              className={`w-7 h-7 transition-colors duration-300 ${
                scrolled ? 'text-sage-600' : 'text-white'
              } group-hover:text-warm-500`}
              strokeWidth={1.5}
            />
            <span
              className={`font-display text-xl font-semibold transition-colors duration-300 ${
                scrolled ? 'text-sage-800' : 'text-white'
              }`}
            >
              Serendipia
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-warm-500 ${
                  scrolled ? 'text-sage-700' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="px-5 py-2.5 bg-sage-600 text-white text-sm font-medium rounded-full hover:bg-sage-700 transition-all duration-300 hover:shadow-lg"
            >
              Pedir Cita
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors ${
              scrolled ? 'text-sage-700' : 'text-white'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-sage-100">
          <div className="px-6 py-4 space-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-sage-700 text-sm font-medium py-2 hover:text-warm-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="block text-center px-5 py-2.5 bg-sage-600 text-white text-sm font-medium rounded-full hover:bg-sage-700 transition-all"
            >
              Pedir Cita
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
