import React from 'react';
import { Hero } from '../components/Hero';
import { Chapters } from '../components/Chapters';
import { Author } from '../components/Author';
import { CTASection } from '../components/CTASection';
import { FAQ } from '../components/FAQ';
import { ProcessSteps } from '../components/ProcessSteps';
import { ShieldCheck, Book, Instagram, Youtube } from 'lucide-react';

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-brand-warm selection:bg-brand-secondary selection:text-white">
      {/* Top Banner (Scarcity) */}
      <div className="bg-brand-secondary text-black py-3 px-4 text-center text-[10px] md:text-xs font-black tracking-[0.3em] relative z-[100] border-b border-black/10 uppercase">
        Últimas unidades do 1º Lote Gratuito: 14 exemplares restantes
      </div>

      <main>
        <Hero />
        
        {/* Why this book? */}
        <section id="o-livro" className="py-10 md:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="section-label">
                  <div className="w-6 h-px bg-brand-secondary" />
                  <span>A MISSÃO DO PAI</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                  Se você não treinar seus filhos, o <span className="text-brand-secondary italic">mundo</span> irá educá-los.
                </h2>
                <div className="space-y-6 text-black/70">
                  <p className="text-base md:text-lg">
                    Estamos vivendo uma crise de identidade sem precedentes. Como pai, pastor e sargento, vi de perto o que acontece quando uma criança cresce sem limites claros e sem uma base espiritual inabalável.
                  </p>
                  <p className="font-semibold text-black italic">
                    Este não é apenas um livro de leitura. É um manual tático para pais que decidiram liderar seus lares com propósito.
                  </p>
                </div>
                
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                   <div className="flex items-start gap-4 p-4 rounded-2xl bg-black/[0.03]">
                     <ShieldCheck className="w-6 h-6 text-brand-secondary shrink-0" />
                     <div>
                       <h4 className="font-bold text-sm mb-1 uppercase">Blindagem Moral</h4>
                       <p className="text-xs text-black/50">Prepare-os para resistirem às pressões da cultura do caos.</p>
                     </div>
                   </div>
                   <div className="flex items-start gap-4 p-4 rounded-2xl bg-black/[0.03]">
                     <Book className="w-6 h-6 text-brand-secondary shrink-0" />
                     <div>
                       <h4 className="font-bold text-sm mb-1 uppercase">Práticas Reais</h4>
                       <p className="text-xs text-black/50">Nada de teorias vazias. Ações práticas para o dia a dia.</p>
                     </div>
                   </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-black/5 rounded-[3rem] overflow-hidden shadow-2xl relative shadow-brand-secondary/10">
                   <img 
                    src="https://i.postimg.cc/6q44DprQ/Gemini-Generated-Image-ck8rvick8rvick8r.png" 
                    alt="Pai e filho" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                   />
                </div>
                {/* Floating quote */}
                <div className="absolute -bottom-6 -right-2 md:-bottom-8 md:-right-12 bg-white p-4 md:p-8 rounded-3xl shadow-2xl max-w-[220px] sm:max-w-[280px] md:max-w-sm border border-black/5">
                  <p className="text-brand-secondary font-serif italic text-sm md:text-lg leading-tight mb-2">"Paternidade não é sobre controle, é sobre treinamento para a vitória."</p>
                  <p className="text-[9px] md:text-[10px] font-black tracking-widest uppercase text-black/30">Wagner Ferraz</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProcessSteps />

        <section id="capítulos">
          <Chapters />
        </section>
        
        <section id="o-autor">
          <Author />
        </section>

        <section id="dúvidas">
          <FAQ />
        </section>

        <CTASection />
      </main>

      {/* Footer */}
      <footer className="bg-black pt-10 pb-6 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col items-center mb-6">
            <div className="flex gap-6">
               <a 
                 href="https://www.instagram.com/wagnerferrazoficial" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-secondary hover:text-black transition-colors"
               >
                 <Instagram className="w-6 h-6" />
               </a>
               <a 
                 href="https://www.youtube.com/@wagnerferrazoficial" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-secondary hover:text-black transition-colors"
               >
                 <Youtube className="w-6 h-6" />
               </a>
            </div>
          </div>
          
          <div className="pt-4 border-t border-white/5 flex flex-col items-center text-center gap-2 text-[10px] font-bold uppercase tracking-widest">
            <p className="text-white">Wagner Ferraz Oficial @2k26</p>
            <p className="text-white/60">Direitos Reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
