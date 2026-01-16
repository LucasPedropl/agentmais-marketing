import React from 'react';
import { JOURNEY_STEPS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-semibold text-sm mb-6">
              Exemplo Prático
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              A Jornada de João <br/>
              <span className="text-slate-500 text-2xl font-medium">no restaurante "Sabor & Arte"</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Veja como a experiência do cliente é fluida, desde a chegada até a notificação de entrega, sem instalar nenhum aplicativo extra.
            </p>
            
            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-2xl relative">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Resultado</h3>
              <p className="text-slate-300 mb-6">
                João teve uma experiência personalizada e rápida. O restaurante automatizou o atendimento, capturou o contato de João (lead) e aumentou o ticket médio com a promoção.
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-slate-700">
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-400">100%</p>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">Automático</p>
                </div>
                <div className="h-10 w-px bg-slate-700"></div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-400">0</p>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">Filas</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute left-8 top-8 bottom-8 w-1 bg-slate-100 -z-10"></div>
            
            <div className="space-y-8">
              {JOURNEY_STEPS.map((step, index) => (
                <div key={index} className="flex gap-6 relative group">
                  <div className="flex-shrink-0 w-16 h-16 bg-white border-2 border-green-100 rounded-full flex items-center justify-center shadow-sm z-10 group-hover:border-green-500 group-hover:scale-110 transition-all duration-300">
                    <step.icon className="text-slate-600 group-hover:text-green-600" size={24} />
                  </div>
                  <div className="bg-slate-50 p-6 rounded-xl flex-1 border border-slate-100 hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h4>
                    <p className="text-slate-600 text-sm">{step.description}</p>
                  </div>
                  {index !== JOURNEY_STEPS.length - 1 && (
                     <div className="lg:hidden absolute left-8 top-16 h-full w-0.5 bg-slate-200 -z-10"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;