import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-green-600 font-semibold tracking-wide uppercase text-sm mb-2">Resultados Comprovados</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
            Histórias de Sucesso
          </h3>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Veja como empresas reais estão transformando seu atendimento com a nossa tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative"
            >
              <Quote className="absolute top-8 right-8 text-green-100" size={40} />
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-green-500"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{testimonial.role}</p>
                </div>
              </div>

              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full">
                  {testimonial.company}
                </span>
              </div>

              <p className="text-slate-600 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;