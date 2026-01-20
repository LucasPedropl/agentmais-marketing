import React from 'react';
import { Star, MessageSquare, BarChart3, TrendingUp, Heart } from 'lucide-react';

const FeedbackSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-green-400 text-sm font-semibold mb-6">
              <Heart size={14} className="fill-current" />
              Retenção e Fidelidade
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Saiba o que seu cliente pensa <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                antes dele ir embora.
              </span>
            </h2>
            
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Não espere uma avaliação ruim nas redes sociais. O Agent Mais dispara automaticamente uma pesquisa de satisfação via WhatsApp assim que o cliente encerra a conta ou sai do evento.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 border border-slate-700">
                  <MessageSquare className="text-green-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Feedback Automático</h4>
                  <p className="text-slate-400 text-sm">Disparo programado pós-experiência sem intervenção manual.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 border border-slate-700">
                  <BarChart3 className="text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Métricas em Tempo Real</h4>
                  <p className="text-slate-400 text-sm">Acompanhe seu NPS (Net Promoter Score) e identifique pontos de melhoria.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative mx-auto lg:mx-0 w-full max-w-md">
            
            {/* Phone Mockup */}
            <div className="bg-white rounded-[2.5rem] shadow-2xl border-8 border-slate-800 overflow-hidden relative z-10 transform transition-transform hover:scale-[1.02] duration-500">
              <div className="bg-slate-100 p-4 border-b border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">A</div>
                <div>
                  <p className="font-bold text-slate-800 text-sm">Agent Mais</p>
                  <p className="text-xs text-green-600">Online</p>
                </div>
              </div>
              
              <div className="p-6 bg-[#e5ddd5] h-[400px] space-y-4 flex flex-col relative overflow-hidden">
                {/* Chat Pattern Overlay */}
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")'}}></div>

                {/* Messages */}
                <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] self-start relative z-10">
                  <p className="text-sm text-slate-800">Olá João! 👋 Espero que tenha curtido a noite no <strong>Clube Campestre</strong>.</p>
                  <span className="text-[10px] text-slate-400 block text-right mt-1">19:42</span>
                </div>

                <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] self-start relative z-10">
                  <p className="text-sm text-slate-800">De 0 a 5, qual nota você daria para o nosso atendimento hoje?</p>
                  <span className="text-[10px] text-slate-400 block text-right mt-1">19:42</span>
                </div>

                <div className="bg-[#dcf8c6] p-3 rounded-lg rounded-tr-none shadow-sm max-w-[85%] self-end relative z-10">
                  <div className="flex gap-1 text-yellow-500 mb-1">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                  <p className="text-sm text-slate-800">Foi excelente! O garçom foi muito rápido.</p>
                  <span className="text-[10px] text-slate-500 block text-right mt-1">19:45</span>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-10 -right-4 lg:-right-12 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-xl z-20 w-64 animate-bounce" style={{animationDuration: '4s'}}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-slate-300 text-xs uppercase tracking-wider font-semibold">NPS Atual</p>
                  <p className="text-3xl font-bold text-white mt-1">75</p>
                </div>
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <TrendingUp className="text-green-400" size={20} />
                </div>
              </div>
              <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                <div className="bg-green-500 h-full w-[75%] rounded-full"></div>
              </div>
              <p className="text-green-400 text-xs mt-3 font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                Zona de Qualidade
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;