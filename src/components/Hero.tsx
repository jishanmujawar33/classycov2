import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const whatsappNumber = "917738499923"; 
  const message = "Hi Classyco! I saw your website and would like to check the latest drops.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Marquee Text */}
      <div className="absolute inset-0 flex flex-col justify-center pointer-events-none overflow-hidden select-none">
        <motion.div 
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="marquee-text"
        >
          CLASSYCO CLASSYCO CLASSYCO CLASSYCO
        </motion.div>
        <motion.div 
          initial={{ x: 0 }}
          animate={{ x: -100 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="marquee-text text-street-accent/20"
        >
          LUXURY STREETWEAR LUXURY STREETWEAR
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-angular text-street-accent tracking-widest uppercase mb-4 block">Mumbai Born • Street Bred</span>
          <h1 className="heading-bold text-4xl xs:text-5xl sm:text-7xl md:text-[10vw] leading-tight md:leading-[0.85] mb-8 text-white">
            The <br className="xs:hidden" /> New <br /> Standard<span className="text-street-accent">.</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
            <a href="#tees" className="button-primary w-full md:w-auto text-center">
              Shop Collection
            </a>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-outline w-full md:w-auto text-center flex items-center justify-center gap-2"
            >
              Contact on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-street-accent"
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
