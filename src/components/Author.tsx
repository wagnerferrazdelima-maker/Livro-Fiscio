import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export const Author = () => {
  return (
    <section id="o-autor" className="py-12 md:py-16 bg-white border-y border-black/5">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 relative">
            <div className="w-full aspect-[3/4] md:aspect-[4/5] bg-black/5 rounded-3xl overflow-hidden shadow-2xl relative group">
              <img 
                src="https://i.postimg.cc/CxhN3t7R/fdb915e4-67be-44a4-a77b-60c33e0cc43c.jpg" 
                alt="Wagner Ferraz"
                className="w-full h-full object-cover transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/5 mix-blend-multiply transition-opacity group-hover:opacity-0" />
            </div>
            {/* Artistic Badge */}
            <div className="absolute -bottom-4 -right-1 sm:-right-4 md:-bottom-6 md:-right-6 bg-brand-secondary text-black p-4 md:p-6 rounded-2xl shadow-xl max-w-[180px] md:max-w-[240px]">
              <p className="text-[10px] md:text-sm font-serif italic mb-1">"Família - A base de tudo"</p>
              <p className="text-[9px] md:text-xs uppercase tracking-widest font-bold">Wagner Ferraz</p>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2 text-black uppercase tracking-[0.3em] font-bold text-xs mb-4">
              <div className="h-px w-8 bg-black" />
              <span>Conheça os Autores</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-black leading-tight">
              Wagner Ferraz e Katia Ferraz
            </h2>
            
            <div className="space-y-6 text-black/70 leading-relaxed">
              <p className="text-base md:text-lg font-semibold text-black">
                Pai de 3, Pastor e 1º Sargento da PMRO, Maratonista e <span className="text-brand-secondary">Legendário 128809</span>.
              </p>
              
              <p>
                Ao lado de minha esposa, Katia Ferraz, tenho o privilégio de viver a missão da paternidade fundamentada em princípios divinos.
              </p>
              
              <p>
                Temos três filhos — Kadyja, Kadyson e Kayfer — e há mais de 22 anos trabalhamos com famílias, ajudando pais e filhos a construir laços mais fortes e profundos.
              </p>

              <p>
                Como pastor, aprendi sobre o poder do amor, da disciplina e da oração. Minha experiência militar me ensinou a importância da autoridade, do respeito e da estrutura. Juntos, somos uma equipe na missão de sermos pais que refletem o coração de Deus.
              </p>
              
              <div className="p-6 md:p-8 bg-black/5 rounded-2xl border-l-4 border-brand-secondary relative mt-10 md:mt-12 mb-10 md:mb-12">
                <Quote className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-10 h-10 md:w-12 md:h-12 text-black/10" />
                <p className="text-black italic text-base md:text-lg leading-relaxed">
                  "Este livro é um presente que queremos compartilhar com você. Esperamos que você encontre sabedoria prática para criar filhos cheios de fé e propósito."
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 border border-black/5 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-brand-secondary" />
                  <span className="text-sm font-semibold">22+ Anos com Famílias</span>
                </div>
                <div className="flex items-center gap-3 p-4 border border-black/5 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-brand-secondary" />
                  <span className="text-sm font-semibold">Princípios e Fundamentos Milenares</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
