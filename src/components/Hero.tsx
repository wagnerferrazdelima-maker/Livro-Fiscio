import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BookOpen, Truck, ShieldCheck, Star, Users } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-6 pb-12 md:pt-12 md:pb-20 overflow-hidden paper-texture">
      {/* Decorative gradient */}
      <div className="absolute top-0 inset-x-0 h-96 bg-linear-to-b from-brand-paper/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-24">
          
          {/* Left Side: Editorial Copy */}
          <div className="flex-1 text-center lg:text-left z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="section-label justify-center lg:justify-start">
                <div className="w-6 h-px bg-brand-secondary" />
                <span>OFERTA DE LANÇAMENTO EXCLUSIVA</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold font-serif leading-[1.1] mb-6 md:mb-8 text-black">
                Crie Filhos <span className="text-brand-secondary italic">Inabaláveis</span> Para um Mundo em Caos.
              </h1>
              
              <div className="space-y-4 md:space-y-6 text-base md:text-xl text-black/70 mb-8 md:mb-10 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                <p>
                  Como criar filhos fortes em caráter, fé e disciplina em um mundo que tenta confundir e enfraquecer a próxima geração?
                </p>
                <p className="hidden md:block">
                  Pai de 3 filhos, pastor e Sargento da Polícia Militar, Wagner Ferraz revela neste manual prático os princípios que tem usado para formar filhos com valores, respeito e propósito — antes que o mundo ensine o contrário.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 justify-center lg:justify-start mb-10 md:mb-12">
                <a 
                  href="#resgatar-meu-livro-agora" 
                  className="w-full sm:w-auto"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('resgatar-meu-livro-agora')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="button-premium text-xl md:text-2xl w-full flex items-center justify-center gap-4 cursor-pointer bg-brand-secondary text-black py-4 px-8"
                  >
                    <BookOpen className="w-6 h-6 md:w-7 md:h-7" />
                    RESGATAR MEU LIVRO FÍSICO AGORA
                  </motion.button>
                </a>
                
                <div className="flex flex-col items-center sm:items-start text-black/60">
                  <div className="flex items-center gap-1 text-brand-secondary">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest mt-1">1228 Famílias Impactadas</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-black/10 max-w-[320px] md:max-w-md mx-auto lg:mx-0">
                <div className="flex items-center gap-2 text-black/60 text-[10px] md:text-xs font-bold uppercase tracking-wider">
                  <Truck className="w-4 h-4 md:w-5 md:h-5 text-brand-secondary" />
                  <span>Envio Próprio</span>
                </div>
                <div className="flex items-center gap-2 text-black/60 text-[10px] md:text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-brand-secondary" />
                  <span>Pagamento Seguro</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Premium Book Mockup */}
          <div className="w-full max-w-[300px] md:max-w-none md:flex-1 relative perspective-[1500px]">
             <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="relative z-10"
            >
              {/* Main Book Cover */}
              <div className="relative w-full max-w-[280px] md:max-w-[450px] mx-auto bg-stone-900 rounded-r-2xl rounded-l-md book-mockup-shadow overflow-hidden group">
                 <img 
                  src="https://i.postimg.cc/zvkhpzsN/capa-Paternidade-Proposito-By-Wagner-Ferraz.png" 
                  alt="Capa do Livro Pais e Filhos: Paternidade com Propósito"
                  className="w-full h-auto block group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                
                {/* Spine Effect */}
                <div className="absolute left-0 top-0 bottom-0 w-6 bg-linear-to-r from-black/40 to-transparent" />
              </div>

              {/* Float Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-4 md:-right-12 bg-brand-accent text-black w-24 h-24 md:w-28 md:h-28 rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-white z-20"
              >
                <span className="text-[11px] uppercase font-bold tracking-widest leading-none">Exemplar</span>
                <span className="text-3xl font-black leading-none my-1">GRÁTIS</span>
                <span className="text-[10px] uppercase font-black tracking-widest leading-none">Hoje</span>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
