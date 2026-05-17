import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFAB() {
  const whatsappNumber = "917738499923"; 
  const message = "Hi Classyco! I saw your website and would like to check the latest drops.";
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
    >
      <MessageCircle size={28} fill="currentColor" />
      <span className="absolute right-full mr-4 bg-boutique-black text-white text-[10px] tracking-widest uppercase font-bold px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Quick Inquiry
      </span>
    </motion.a>
  );
}
