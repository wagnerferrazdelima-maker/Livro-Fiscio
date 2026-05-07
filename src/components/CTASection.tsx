import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Truck, AlertCircle, ShoppingCart } from 'lucide-react';

export const CTASection = () => {
  return (
    <section id="resgatar-meu-livro-agora" className="py-12 md:py-16 bg-brand-secondary text-black overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-black/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/20 rounded-full blur-[120px] -ml-64 -mb-64" />

      <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-black text-white rounded-full text-[10px] md:text-xs font-black tracking-[0.3em] mb-8 md:mb-10 shadow-2xl uppercase">
            <AlertCircle className="w-4 h-4 text-brand-secondary" />
            DISPONIBILIDADE LIMITADA
          </div>
          
          <h2 className="text-3xl md:text-6xl font-serif font-bold mb-8 md:mb-10 leading-[1.1] max-w-4xl mx-auto">
            Não é sorteio. Não é promoção passageira. <br className="hidden md:block" />
            <span className="text-black/80 italic">É minha missão com o seu lar.</span>
          </h2>
          
          <div className="bg-white/30 backdrop-blur-md p-6 md:p-12 rounded-[2.5rem] border border-black/10 mb-10 md:mb-12 flex flex-col md:flex-row items-center gap-8 md:gap-10 text-left shadow-xl">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block px-3 py-1 bg-black text-white text-[10px] font-black tracking-widest rounded mb-4 uppercase">
                Missão Paternidade
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 flex items-center justify-center md:justify-start gap-3">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-4 h-4 text-brand-secondary" />
                </div>
                O LIVRO É GRATUITO
              </h3>
              <p className="text-black/80 text-base md:text-lg leading-relaxed font-medium">
                Você contribui apenas com o custo de envio para sua residência. Quero que essa mensagem chegue ao maior número de pais possível.
              </p>
            </div>
            
            <div className="w-full md:w-px h-px md:h-32 bg-black/10" />
            
            <div className="text-center md:text-right shrink-0">
              <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] opacity-40 mb-1">VALOR DO EXEMPLAR</div>
              <p className="text-5xl md:text-6xl font-serif font-black mb-1">GRÁTIS</p>
              <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.1em] text-black/60">+ custo do frete</p>
            </div>
          </div>
          
          <div className="relative inline-block group w-full sm:w-auto">
            <Link to="/checkout" className="block w-full">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-black text-white px-8 md:px-16 py-5 md:py-6 rounded-2xl text-lg md:text-2xl font-black shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] hover:shadow-none transition-all flex items-center justify-center gap-4 cursor-pointer relative z-10 w-full"
              >
                RESGATAR MEU LIVRO FÍSICO AGORA
              </motion.button>
            </Link>
            <div className="absolute inset-0 bg-black blur-2xl opacity-20 group-hover:opacity-0 transition-opacity" />
          </div>
          
          <div className="mt-12 md:mt-16 flex flex-wrap justify-center gap-8 md:gap-12 border-t border-black/10 pt-8 md:pt-10">
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-brand-secondary transition-colors">
                <Truck className="w-5 h-5" />
              </div>
              <span className="text-xs font-black uppercase tracking-widest">Envio em 48h úteis</span>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-brand-secondary transition-colors">
                <AlertCircle className="w-5 h-5" />
              </div>
              <span className="text-xs font-black uppercase tracking-widest">Estoque Limitado</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
