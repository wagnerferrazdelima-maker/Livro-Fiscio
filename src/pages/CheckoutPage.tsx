import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ShieldCheck, User, Mail, Phone, ArrowRight, Loader2 } from 'lucide-react';

export const CheckoutPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const maskPhone = (value: string) => {
    let v = value.replace(/\D/g, "");
    if (v.length > 11) v = v.substring(0, 11);

    if (v.length === 0) return "";
    if (v.length <= 2) return `(${v}`;
    if (v.length <= 3) return `(${v.substring(0, 2)})${v.substring(2)}`;
    if (v.length <= 7) return `(${v.substring(0, 2)})${v.substring(2, 3)} ${v.substring(3)}`;
    return `(${v.substring(0, 2)})${v.substring(2, 3)} ${v.substring(3, 7)}-${v.substring(7)}`;
  };

  const isRepeated = (v: string) => {
    return v.length > 0 && v.split('').every(char => char === v[0]);
  };

  const digits = whatsapp.replace(/\D/g, '');
  const isWhatsappValid = digits.length === 11 && !isRepeated(digits);
  const isFormValid = fullName.trim().length >= 3 && email.includes('@') && isWhatsappValid;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    setIsLoading(true);

    try {
      console.log("Starting lead save...");
      await addDoc(collection(db, 'leads'), {
        fullName,
        email,
        whatsapp,
        createdAt: serverTimestamp(),
      });
      console.log("Lead saved successfully, navigating...");
      
      // Navigate to offers page using relative path for robustness
      window.scrollTo(0, 0);
      navigate('../ofertas', { replace: true });
    } catch (error) {
      console.error("Firestore Error details: ", error);
      
      // Fallback: if Firestore fails (like quota exceeded), let the user buy anyway!
      // This ensures the sales funnel stays open even if data logging fails.
      console.log("Proceeding to offers despite Firestore error...");
      window.scrollTo(0, 0);
      navigate('../ofertas', { replace: true });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-paper flex flex-col justify-center items-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl p-6 sm:p-12 border border-black/5"
      >
        <div className="text-center mb-8 sm:mb-10">
          <div className="flex justify-start mb-4 sm:mb-6">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-black/40 hover:text-brand-secondary transition-colors"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Voltar
            </button>
          </div>
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-brand-secondary" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-black mb-2">Quase lá!</h1>
          <p className="text-black/50 text-xs sm:text-sm">
            Preencha seus dados para prosseguir e garantir seu exemplar.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">Nome Completo</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/20" />
              <input 
                required
                minLength={3}
                type="text" 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Ex: João Silva"
                className="w-full pl-12 pr-4 py-4 bg-black/5 border-transparent focus:border-brand-secondary focus:bg-white rounded-2xl transition-all outline-none text-black font-medium"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">E-mail Melhor</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/20" />
              <input 
                required
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="w-full pl-12 pr-4 py-4 bg-black/5 border-transparent focus:border-brand-secondary focus:bg-white rounded-2xl transition-all outline-none text-black font-medium"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">WhatsApp</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/20" />
              <input 
                required
                type="tel" 
                value={whatsapp}
                onChange={(e) => setWhatsapp(maskPhone(e.target.value))}
                placeholder="(00)0 0000-0000"
                className="w-full pl-12 pr-4 py-4 bg-black/5 border-transparent focus:border-brand-secondary focus:bg-white rounded-2xl transition-all outline-none text-black font-medium"
              />
              {digits.length > 0 && isRepeated(digits) && (
                <p className="text-red-500 text-[10px] mt-1 ml-1 font-bold">Número inválido (não use apenas números repetidos)</p>
              )}
            </div>
          </div>

          <motion.button
            whileHover={isFormValid && !isLoading ? { scale: 1.02 } : {}}
            whileTap={isFormValid && !isLoading ? { scale: 0.98 } : {}}
            disabled={!isFormValid || isLoading}
            className={`w-full py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-xl transition-all ${
              isFormValid && !isLoading 
                ? 'bg-black text-white hover:shadow-none cursor-pointer' 
                : 'bg-black/20 text-black/30 cursor-not-allowed shadow-none'
            }`}
          >
            {isLoading ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : (
              <>
                PROSSIGA
                <ArrowRight className="w-6 h-6 text-brand-secondary" />
              </>
            )}
          </motion.button>
        </form>

        <p className="mt-8 text-center text-[10px] text-black/30 font-bold uppercase tracking-widest">
          🔒 Seus dados estão 100% seguros
        </p>
      </motion.div>
    </div>
  );
};
