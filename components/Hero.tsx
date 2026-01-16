import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              O sistema definitivo para WhatsApp
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Transforme o WhatsApp em uma <span className="text-green-600">Máquina de Vendas</span> e Atendimento
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg">
              Check-in, Wi-Fi, Cardápio Digital e Pagamentos. Tudo automatizado para clubes, eventos e restaurantes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all shadow-xl shadow-green-200 hover:-translate-y-1">
                Começar Agora
                <ArrowRight size={20} />
              </button>
              <button className="flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all hover:border-slate-300">
                Ver Demonstração
              </button>
            </div>

            <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-1">
                <CheckCircle size={16} className="text-green-500" /> Sem fidelidade
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle size={16} className="text-green-500" /> Configuração rápida
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle size={16} className="text-green-500" /> Suporte dedicado
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-green-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-300 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
            <img 
              src="https://picsum.photos/800/800?random=1" 
              alt="Dashboard Agent Mais" 
              className="relative rounded-2xl shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500"
            />
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 border border-slate-100 animate-bounce" style={{animationDuration: '3s'}}>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Status</p>
                  <p className="text-sm font-bold text-slate-800">Pagamento Aprovado</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;