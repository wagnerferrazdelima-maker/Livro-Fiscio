import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Plus } from 'lucide-react';

const faqs = [
  {
    q: "O livro é realmente gratuito?",
    a: "Sim, o valor impresso do livro é coberto pelo meu ministério e parceiros. Você contribui apenas com o custo logístico de envio (frete) para que possamos enviar para todo o Brasil."
  },
  {
    q: "Quanto tempo demora para chegar?",
    a: "Nossos envios são feitos em até 24h úteis após a confirmação do frete. O prazo de entrega varia de 5 a 12 dias úteis dependendo da sua região."
  },
  {
    q: "É um e-book ou livro físico?",
    a: "Este é um LIVRO FÍSICO, com capa premium e papel de alta qualidade, feito para você ler, sublinhar e guardar como um manual de consulta no seu lar."
  },
  {
    q: "Por que você está dando o livro?",
    a: "Acredito que a crise na paternidade é um dos maiores problemas da nossa sociedade atual. Como pastor e sargento, minha missão é equipar o maior número possível de pais com ferramentas práticas e bíblicas."
  }
];

export const FAQ = () => {
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <section id="dúvidas" className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <div className="section-label justify-center">
            <div className="w-6 h-px bg-brand-secondary" />
            <span>DÚVIDAS FREQUENTES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-black">Perguntas Comuns</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border border-black/5 rounded-3xl overflow-hidden bg-black/[0.02]">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-black/[0.04] transition-colors"
              >
                <span className="font-bold text-black">{f.q}</span>
                {open === i ? <Plus className="w-5 h-5 rotate-45 transition-transform" /> : <Plus className="w-5 h-5 transition-transform" />}
              </button>
              
              <motion.div
                initial={false}
                animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-black/60 leading-relaxed">
                  {f.a}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-black/30 text-sm italic">Não encontrou sua dúvida? Fale com nosso suporte pelo Instagram.</p>
        </div>
      </div>
    </section>
  );
};
