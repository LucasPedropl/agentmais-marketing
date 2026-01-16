import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-green-600 font-semibold tracking-wide uppercase text-sm mb-2">Funcionalidades</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Tudo o que você precisa em uma única plataforma
          </h3>
          <p className="text-lg text-slate-600">
            Do check-in à fidelização, o Agent Mais automatiza cada etapa da interação com seu cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg hover:border-green-200 transition-all group"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                <feature.icon className="text-green-600 group-hover:text-white transition-colors" size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <ul className="space-y-2">
                {feature.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;