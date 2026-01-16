import React from 'react';
import { Send, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA */}
        <div className="bg-green-600 rounded-3xl p-8 md:p-16 text-center mb-20 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para revolucionar seu atendimento?</h2>
            <p className="text-green-50 mb-8 text-lg">
              Junte-se a centenas de empresas que estão automatizando vendas e fidelizando clientes com o Agent Mais.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-colors shadow-lg">
                Falar com Consultor
              </button>
            </div>
          </div>
          
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 border-b border-slate-800 pb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="font-bold text-2xl tracking-tight">Agent<span className="text-green-500">Mais</span></span>
            </div>
            <p className="text-slate-400 max-w-sm">
              A plataforma completa para transformar o WhatsApp em um hub de comunicação, vendas e automação para seu negócio.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Produto</h3>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#features" className="hover:text-green-400 transition-colors">Funcionalidades</a></li>
              <li><a href="#comparison" className="hover:text-green-400 transition-colors">Comparativo</a></li>
              <li><a href="#journey" className="hover:text-green-400 transition-colors">Jornada do Cliente</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Planos</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Contato</h3>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-2">
                <Send size={16} />
                contato@agentmais.com.br
              </li>
              <li>(11) 99999-9999</li>
              <li className="flex gap-4 mt-4">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <Linkedin size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 text-center text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Agent Mais. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;