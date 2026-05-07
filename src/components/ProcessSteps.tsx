import React from 'react';
import { motion } from 'motion/react';
import { FormInput, CreditCard, Box } from 'lucide-react';

const steps = [
  {
    icon: FormInput,
    title: 'Preencha seus Dados',
    desc: 'Informe o endereço correto onde deseja receber seu exemplar físico.'
  },
  {
    icon: CreditCard,
    title: 'Contribua com o Frete',
    desc: 'O livro é por nossa conta. Você paga apenas o custo logístico de envio.'
  },
  {
    icon: Box,
    title: 'Receba em Casa',
    desc: 'Nossos envios são feitos em até 48h úteis após a confirmação do frete. O prazo de entrega varia de 5 a 22 dias úteis dependendo da sua região.'
  }
];

export const ProcessSteps = () => {
  return (
    <section className="py-10 md:py-16 bg-black text-white overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Como garantir o seu exemplar:</h2>
          <p className="text-white/40 max-w-xl mx-auto text-sm">Siga estes 3 passos simples para receber o manual prático em sua residência.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-px border-t border-dashed border-white/20 z-0" />
          
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-brand-secondary rounded-full flex items-center justify-center mb-6 shadow-2xl shadow-brand-secondary/30 relative">
                 <s.icon className="w-8 h-8 text-black" />
                 <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-sm">
                   {i + 1}
                 </div>
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 text-white">{s.title}</h3>
              <p className="text-white text-sm leading-relaxed px-4">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative BG texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none grayscale">
        <img src="https://www.transparenttextures.com/patterns/carbon-fibre.png" alt="" className="w-full h-full" />
      </div>
    </section>
  );
};
