import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mic2, 
  Video, 
  PlayCircle, 
  Heart,
  Users, 
  Check, 
  ArrowRight,
  TrendingDown,
  Truck
} from 'lucide-react';

interface Product {
  id: string;
  title: string;
  description: string;
  oldPrice: string;
  newPriceText: string;
  priceValue: number;
  icon: React.ElementType;
  isBestChoice?: boolean;
  isSpecial?: boolean;
}

const products: Product[] = [
  {
    id: 'mesa',
    title: '🌿 TREINAMENTO DIGITAL: MESA COM PROPÓSITO',
    description: 'By Katia Ferraz ✨. Transforme a mesa de sua casa em um ambiente de conexão, ensino e legado 💒. Aprenda a liderar o destino emocional e espiritual da sua família, construindo memórias eternas. 🌿\n\n📖 LIVRO DIGITAL PDF',
    oldPrice: 'R$ 37,00',
    newPriceText: '+ R$ 10,00',
    priceValue: 10.00,
    icon: Heart,
  },
  {
    id: 'audio',
    title: '🎧 AUDIOLIVRO COMPLETO EM MP3 + PDF',
    description: 'Paternidade com Propósito 🎧: Manual Prático para Treinar Filhos Fortes. Ouça no carro, no trabalho, na academia ou em casa. Este é um guia prático para pais que desejam deixar um legado forte. 🔥',
    oldPrice: 'R$ 27,00',
    newPriceText: '+ R$ 17,00',
    priceValue: 17.00,
    icon: Mic2,
    isSpecial: true,
  },
  {
    id: 'frete',
    title: 'FRETE PARA TODO PAÍS',
    description: 'Valor referente por logística. Garanta a entrega segura do seu exemplar em qualquer lugar do Brasil com rastreamento completo.',
    oldPrice: 'R$ 47,00',
    newPriceText: 'R$ 27,90',
    priceValue: 27.90,
    icon: Truck,
  },
  {
    id: 'vip',
    title: '👨‍👩‍👧‍👦 GRUPO VIP ANUAL PARA PAIS',
    description: 'Uma jornada anual de transformação 👨‍👩‍👧‍👦. Conteúdo prático semanal, encontros ao vivo exclusivos e estratégias reais para educar filhos com valores sólidos e propósito. Não eduque sozinho, faça parte dessa comunidade! 🚀',
    oldPrice: 'R$ 197,00',
    newPriceText: '+ R$ 67,00',
    priceValue: 67.00,
    icon: Users,
  },
  {
    id: 'curso',
    title: '🎥 🎓 CURSO GRAVADO: CRIANDO FILHOS FORTES',
    description: 'Forme filhos resilientes com 18 aulas práticas (média de 5 min) e 5 módulos completos 🎓. Estratégias reais para fortalecer o comportamento e a segurança emocional sem gritos ou culpa. 🔥',
    oldPrice: 'R$ 297,00',
    newPriceText: '+ R$ 97,00',
    priceValue: 97.00,
    icon: Video,
  },
  {
    id: 'combo',
    title: '💎 COMBO PREMIUM: ACESSO TOTAL',
    description: '🚨 ESTA É SUA ÚNICA CHANCE! Leve TUDO (Ebooks + Curso) por preço de custo. Pare de lutar sozinho! Tenha o arsenal completo para formar filhos resilientes agora. ÚLTIMA CHANCE DE LEVAR TUDO POR ESTE VALOR! 🎯\n\n✅ VALOR JÁ INCLUSO O FRETE.',
    oldPrice: 'R$ 655,00',
    newPriceText: '+ R$ 197,00',
    priceValue: 197.00,
    icon: PlayCircle,
    isBestChoice: true,
  }
];

export const OffersPage = () => {
  const [selected, setSelected] = useState<string[]>(['mesa', 'frete']);
  const [showFreeShippingToast, setShowFreeShippingToast] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleProduct = (id: string) => {
    if (id === 'frete') return; // Shipping is mandatory
    
    setSelected(prev => {
      const isSelectingCombo = id === 'combo' && !prev.includes('combo');
      if (isSelectingCombo) {
        setShowFreeShippingToast(true);
        setTimeout(() => setShowFreeShippingToast(false), 4000);
      }
      return prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id];
    });
  };

  const calculateTotal = () => {
    const isComboSelected = selected.includes('combo');
    return products
      .filter(p => selected.includes(p.id))
      .reduce((sum, p) => {
        if (isComboSelected && p.id === 'frete') return sum;
        return sum + p.priceValue;
      }, 0)
      .toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  };

  const handleCheckout = () => {
    const isComboSelected = selected.includes('combo');
    const selectedProducts = products.filter(p => selected.includes(p.id));
    const total = calculateTotal();
    
    let message = `Olá! Gostaria de fazer meu pedido:\n\n`;
    message += `🛒 *ÍTENS SELECIONADOS:*\n`;
    selectedProducts.forEach(p => {
      if (isComboSelected && p.id === 'frete') {
        message += `- ${p.title} (*GRÁTIS*)\n`;
      } else {
        message += `- ${p.title} (${p.newPriceText})\n`;
      }
    });
    message += `\n💰 *TOTAL:* R$ ${total}`;
    message += `\n💳 *FORMA DE PAGAMENTO:* Pix ou Cartão de Crédito`;
    message += `\n\nAguardo instruções para o pagamento!`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "5569992294953"; // Wagner Ferraz Oficial
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      {/* Preload critical hero image */}
      <link rel="preload" as="image" href="https://i.postimg.cc/3wbqDrmk/Gemini-Generated-Image-eta9maeta9maeta9-(1).png" />
      
      {/* Hero Image - Edge to Edge */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full overflow-hidden"
      >
        <img 
          src="https://i.postimg.cc/3wbqDrmk/Gemini-Generated-Image-eta9maeta9maeta9-(1).png" 
          alt="Banner de Ofertas Wagner Ferraz" 
          className="w-full h-auto object-cover block"
          referrerPolicy="no-referrer"
          priority="high"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1200";
          }}
        />
      </motion.div>

      <AnimatePresence>
        {showFreeShippingToast && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] bg-[#FF4D00] text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 border-2 border-white/20"
          >
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <Truck className="w-5 h-5 text-[#FF4D00]" />
            </div>
            <span className="font-black text-[10px] sm:text-sm uppercase italic tracking-tight text-center">
              PARABÉNS! VOCÊ GANHOU FRETE GRÁTIS DO LIVRO FÍSICO 📦
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-[#FF4D00] font-black text-2xl sm:text-3xl md:text-5xl tracking-tighter uppercase mb-2 italic"
          >
            APROVEITE TODOS PRODUTOS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-slate-500 font-bold tracking-[0.3em] uppercase text-xs sm:text-sm mb-12"
          >
            Oferta Exclusiva e Limitada
          </motion.p>
        </div>

        <div className="max-w-xl mx-auto space-y-6">
          {products.map((product) => (
            <div key={product.id} className="relative">
              {product.isBestChoice && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 bg-[#FF4D00] px-4 sm:px-6 py-1 rounded-full flex items-center gap-2 shadow-lg border border-white/20 max-w-[90vw]">
                  <span className="text-white font-black text-[9px] sm:text-[10px] uppercase tracking-widest text-center">
                    💎 MELHOR ESCOLHA - ECONOMIZE R$ 458,00 💎
                  </span>
                </div>
              )}

              {product.isSpecial && (
                <div className="text-center mb-4 flex items-center justify-center gap-2 text-slate-400">
                  <div className="h-px w-8 bg-slate-200" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">+ CONDIÇÃO ESPECIAL COM SUPERDESCONTO</span>
                  <div className="h-px w-8 bg-slate-200" />
                </div>
              )}

              <motion.div
                whileTap={product.id !== 'frete' ? { scale: 0.98 } : {}}
                onClick={() => toggleProduct(product.id)}
                className={`relative rounded-[2rem] p-4 sm:p-6 md:p-8 transition-all border-2 
                  ${selected.includes(product.id) 
                    ? product.isBestChoice ? 'border-[#FF4D00] bg-[#FFF5F0] shadow-[0_0_40px_-10px_rgba(255,77,0,0.15)]' : 'border-[#FF4D00] bg-white' 
                    : 'border-white bg-white hover:border-slate-200'
                  }
                  ${product.isBestChoice ? 'mt-4 ring-4 ring-[#FF4D00]/5' : ''}
                  ${product.id === 'frete' ? 'cursor-default' : 'cursor-pointer'}
                `}
              >
                <div className="flex gap-3 sm:gap-4 md:gap-6">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shrink-0 
                    ${product.isBestChoice ? 'bg-[#FF4D00]' : 'bg-slate-100'}
                  `}>
                    <product.icon className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 ${product.isBestChoice ? 'text-white' : 'text-slate-400'}`} />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col mb-2">
                       <span className="text-[10px] font-bold text-slate-400 line-through tracking-wider">De {product.oldPrice}</span>
                       <span className={`font-black uppercase tracking-tight ${product.isBestChoice ? 'text-[#FF4D00] text-lg md:text-xl' : 'text-[#FF4D00] text-sm md:text-base'}`}>
                         {product.id === 'frete' 
                           ? (selected.includes('combo') ? 'FRETE GRÁTIS LIBERADO! 🎉' : 'VALOR OBRIGATÓRIO') 
                           : `Por Apenas ${product.newPriceText}`
                         }
                       </span>
                    </div>

                    <h3 className="text-slate-800 font-black text-lg leading-tight mb-2 uppercase italic flex items-center gap-2">
                      {product.title}
                    </h3>
                    
                    <p className={`text-xs md:text-sm leading-relaxed font-medium whitespace-pre-line ${product.isBestChoice ? 'text-slate-700' : 'text-slate-500'}`}>
                      {product.description.split('\n\n').map((part, i) => (
                        part.includes('VALOR JÁ INCLUSO O FRETE') ? (
                          <span key={i} className="block mt-4 p-3 bg-[#FF4D00] text-white font-black text-center rounded-xl text-[10px] md:text-xs tracking-widest uppercase">
                            {part}
                          </span>
                        ) : part
                      ))}
                    </p>
                  </div>

                  <div className="flex items-start pt-2">
                    <div className={`w-6 h-6 md:w-8 md:h-8 rounded-lg border-2 transition-all flex items-center justify-center
                      ${selected.includes(product.id) ? 'bg-[#FF4D00] border-[#FF4D00]' : 'border-slate-200 bg-white'}
                      ${product.id === 'frete' ? 'opacity-50' : ''}
                    `}>
                      <AnimatePresence>
                        {selected.includes(product.id) && (
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                          >
                            <Check className="w-4 h-4 md:w-5 md:h-5 text-white stroke-[4]" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="mt-12 sticky bottom-6 z-50">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCheckout}
            className="w-full bg-[#FF4D00] text-white py-6 rounded-[2rem] font-black text-xl md:text-2xl flex items-center justify-center gap-4 shadow-[0_20px_50px_-15px_rgba(255,77,0,0.4)] hover:shadow-none transition-all uppercase italic"
          >
            FINALIZAR MEU PEDIDO
            <ArrowRight className="w-8 h-8" />
          </motion.button>
        </div>

        <div className="mt-8 text-center pb-12">
          <p className="text-slate-400 text-[10px] uppercase font-black tracking-[0.2em]">Pague em até 12x no cartão de crédito OU NO PIX</p>
        </div>
      </div>
    </div>
  );
};
