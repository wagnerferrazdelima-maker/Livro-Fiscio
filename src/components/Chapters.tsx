import React from 'react';
import { motion } from 'motion/react';
import { Shield, Heart, Scale, Sun, Waves, Zap, Leaf, CheckCircle2, Check } from 'lucide-react';

const pillars = [
  { chapter: '01', title: 'Adaptabilidade', icon: Waves, desc: 'Identidade Inabalável e Postura Ajustável.' },
  { chapter: '02', title: 'Respeito', icon: Shield, desc: 'Ensine seus filhos a honrar e a viver com propósito.' },
  { chapter: '03', title: 'Intencionalidade', icon: Zap, desc: 'Defina objetivos. Intenção corrige sem destruir.' },
  { chapter: '04', title: 'Amor Inquebrantável', icon: Heart, desc: 'O poder do Amor sem condições.' },
  { chapter: '05', title: 'Limites', icon: Scale, desc: 'Autoridade é a linguagem do céu.' },
  { chapter: '06', title: 'Graça e Perdão', icon: Leaf, desc: 'Perdão é discipulado emocional.' },
  { chapter: '07', title: 'Gratidão', icon: Sun, desc: 'Gera acesso espiritual e emoções fortes.' }
];

const learningPoints = [
  "Como desenvolver filhos fortes emocionalmente",
  "Como ensinar respeito sem perder a conexão",
  "Como criar limites saudáveis dentro de casa",
  "Como fortalecer a fé e o caráter dos seus filhos",
  "Como preparar crianças para os desafios do futuro",
  "Como corrigir sem gritos e sem culpa",
  "Como construir um lar mais forte, unido e seguro"
];

const targetAudience = [
  "Querem filhos fortes em vez de filhos frágeis",
  "Desejam educar com princípios e propósito",
  "Querem restaurar a autoridade dentro de casa",
  "Desejam preparar os filhos para o mundo real",
  "Querem deixar um legado para as próximas gerações"
];

export const Chapters = () => {
  return (
    <section className="py-12 md:py-32 bg-brand-paper relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Learning Section */}
        <div className="mb-20">
          <div className="section-label mb-6">
            <div className="w-6 h-px bg-brand-secondary" />
            <span>📖 O QUE VOCÊ VAI APRENDER</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-black mb-10 max-w-3xl leading-tight">
            Sabedoria Prática para Formar uma <span className="text-brand-secondary italic">Geração Resiliente.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            {learningPoints.map((point, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 py-2 border-b border-black/5"
              >
                <CheckCircle2 className="w-5 h-5 text-brand-secondary shrink-0 mt-1" />
                <span className="text-black/80 font-medium">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pillars Section */}
        <div className="mb-20">
          <div className="section-label mb-6">
            <div className="w-6 h-px bg-brand-secondary" />
            <span>🔥 OS 7 PILARES DO TREINAMENTO</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-black/5 hover:border-brand-secondary/30 transition-all group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-black/5 rounded-xl flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-black transition-colors mb-4 md:mb-6">
                  <p.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-black">{p.title}</h3>
                <p className="text-xs md:text-sm text-black/50 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
            <div className="bg-black text-white p-8 rounded-[2rem] shadow-xl flex flex-col justify-center items-center text-center col-span-2 lg:col-span-1">
              <p className="text-xs font-bold uppercase tracking-widest mb-2 text-brand-secondary">Prático e Aplicável</p>
              <p className="text-sm italic opacity-80">"Tudo explicado de forma simples para a rotina da sua família."</p>
            </div>
          </div>
        </div>

        {/* Who is it for Section */}
        <div className="bg-white p-10 md:p-16 rounded-[3rem] border border-black/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/10 rounded-full blur-3xl -mr-16 -mt-16" />
          
          <div className="relative z-10">
            <div className="section-label mb-6">
              <div className="w-6 h-px bg-brand-secondary" />
              <span>👨‍👩‍👧‍👦 ESTE LIVRO É PARA VOCÊ?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black mb-8">
              Para Pais que não aceitam o <span className="text-brand-secondary italic">Padrão do Mundo.</span>
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {targetAudience.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-secondary/20 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-brand-secondary" />
                  </div>
                  <span className="text-black font-semibold text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-brand-secondary/5 rounded-full blur-[120px] -ml-96" />
    </section>
  );
};
