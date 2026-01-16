import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Funcionalidades', href: '#features' },
    { name: 'Comparativo', href: '#comparison' },
    { name: 'Jornada', href: '#journey' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="font-bold text-2xl text-slate-800 tracking-tight">Agent<span className="text-green-600">Mais</span></span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-600 hover:text-green-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-green-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors shadow-lg shadow-green-200">
              Falar com Consultor
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-slate-600 hover:text-green-600 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-green-600 hover:bg-green-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 px-3">
              <button className="w-full bg-green-600 text-white px-5 py-3 rounded-lg font-semibold shadow-md">
                Falar com Consultor
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;