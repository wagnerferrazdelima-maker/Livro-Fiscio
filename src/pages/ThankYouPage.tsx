import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Instagram, Youtube, ArrowRight } from 'lucide-react';

export const ThankYouPage = () => {
  return (
    <div className="min-h-screen bg-brand-paper flex flex-col justify-center items-center p-4 text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl p-10 md:p-16 border border-black/5"
      >
        <div className="w-20 h-20 bg-green-500/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </div>
        
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-black mb-6">
          Obrigado pelo seu interesse!
        </h1>
        
        <p className="text-black/60 text-base md:text-lg mb-10 leading-relaxed">
          Seus dados foram salvos com sucesso. Agora você está um passo mais próximo de transformar a realidade do seu lar.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a 
            href="https://www.instagram.com/wagnerferrazoficial" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-black/5 rounded-3xl hover:bg-brand-secondary transition-all group"
          >
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
              <Instagram className="w-6 h-6 text-black" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-black uppercase tracking-widest text-black/30">Siga no Instagram</p>
              <p className="font-bold text-black">@wagnerferrazoficial</p>
            </div>
          </a>

          <a 
            href="https://www.youtube.com/@wagnerferrazoficial" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-black/5 rounded-3xl hover:bg-brand-secondary transition-all group"
          >
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
              <Youtube className="w-6 h-6 text-black" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-black uppercase tracking-widest text-black/30">Acompanhe no Youtube</p>
              <p className="font-bold text-black">Canal Wagner Ferraz</p>
            </div>
          </a>
        </div>

        <motion.a
          whileHover={{ x: 10 }}
          href="https://pay.hotmart.com/WAGNER_FERRAZ_LIVRO"
          className="inline-flex items-center gap-3 text-brand-secondary font-black uppercase tracking-widest text-sm"
        >
          Ir para o checkout final
          <ArrowRight className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </div>
  );
};
