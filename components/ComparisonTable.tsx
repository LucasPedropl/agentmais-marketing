import React from 'react';
import { COMPARISON_DATA } from '../constants';
import { Check } from 'lucide-react';

const ComparisonTable: React.FC = () => {
  return (
    <section id="comparison" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Impacto Real no Seu Negócio</h2>
          <p className="mt-4 text-slate-600">Veja como o Agent Mais gera valor para ambos os lados.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-5 font-semibold text-lg border-b border-slate-800 w-1/3">Função</th>
                  <th className="p-5 font-semibold text-lg border-b border-slate-800 w-1/3 bg-green-600">Para o Cliente</th>
                  <th className="p-5 font-semibold text-lg border-b border-slate-800 w-1/3">Para a Empresa</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {COMPARISON_DATA.map((row, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-medium text-slate-900">{row.feature}</td>
                    <td className="p-5 text-slate-600 bg-green-50/30">
                      <div className="flex items-start gap-2">
                        <Check size={18} className="text-green-600 mt-1 flex-shrink-0" />
                        {row.clientImpact}
                      </div>
                    </td>
                    <td className="p-5 text-slate-600">
                      <div className="flex items-start gap-2">
                        <Check size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                        {row.companyImpact}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;