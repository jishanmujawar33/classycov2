import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
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
          <h1 className="heading-bold text-6xl sm:text-7xl md:text-[10vw] leading-none mb-8 text-white">
            The <br className="sm:hidden" /> New <br /> Standard<span className="text-street-accent">.</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
            <button className="button-primary w-full md:w-auto">
              Shop Collection
            </button>
            <button className="button-outline w-full md:w-auto">
              View Lookbook
            </button>
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
