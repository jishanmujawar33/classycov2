import { motion } from 'motion/react';
import { ArrowDown, Instagram } from 'lucide-react';

export default function Hero() {
  const whatsappNumber = "917738499923"; 
  const instagramUrl = "https://instagram.com/__classyco.__";
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
          className="relative"
        >
          {/* Logo Background behind text */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center -z-10 pointer-events-none">
            <img 
              src="/images/logo.png" 
              alt="" 
              className="w-[120vw] sm:w-[90vw] md:w-[70vw] max-w-[1200px] opacity-[0.05] scale-125"
            />
          </div>

          <div className="flex justify-center mb-8">
            <img 
              src="/images/logo.png" 
              alt="Street Core Logo" 
              className="w-28 sm:w-40 h-auto opacity-100 brightness-[2.5]"
            />
          </div>
          <span className="font-angular text-street-accent tracking-widest uppercase mb-4 block">Mumbai Born • Street Bred</span>
          <h1 className="heading-bold text-3xl sm:text-7xl md:text-[10vw] mb-8 text-white leading-tight">
            The <br className="sm:hidden" /> New <br className="hidden md:block" /> Standard<span className="text-street-accent">.</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-12">
            <a href="#tees" className="button-primary w-full md:w-auto text-center">
              Shop Collection
            </a>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-outline w-full md:w-auto text-center flex items-center justify-center gap-2"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>

              WhatsApp
            </a>
            <a 
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-outline w-full md:w-auto text-center flex items-center justify-center gap-2"
            >
              <Instagram size={18} />
              Instagram
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
