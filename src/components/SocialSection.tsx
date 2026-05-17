import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

const POSTS = [
  { 
    id: 1, 
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=400",
    url: "https://www.instagram.com/p/DBonp4fNfH4/" 
  },
  { 
    id: 2, 
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=400",
    url: "https://www.instagram.com/p/DBmUnK3S9C6/" 
  },
  { 
    id: 3, 
    image: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?auto=format&fit=crop&q=80&w=400",
    url: "https://www.instagram.com/p/DBlXUuWS3P5/" 
  },
  { 
    id: 4, 
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=400",
    url: "https://www.instagram.com/p/DBj2u8NSU97/" 
  },
  { 
    id: 5, 
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=400",
    url: "https://www.instagram.com/__classyco.__/" 
  },
  { 
    id: 6, 
    image: "https://images.unsplash.com/photo-1491336477066-31156b5e4f35?auto=format&fit=crop&q=80&w=400",
    url: "https://www.instagram.com/__classyco.__/" 
  },
];

export default function SocialSection() {
  const instagramUrl = "https://instagram.com/__classyco.__";

  return (
    <section className="py-24 md:py-40 bg-black overflow-hidden relative">
      {/* Decorative Marquee background */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full opacity-[0.03] select-none pointer-events-none hidden md:block">
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="text-[20vw] font-bold uppercase tracking-tighter"
          >
            CLASSYCO CLASSYCO CLASSYCO CLASSYCO
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 md:mb-32">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 5, scale: 1.1 }}
              className="mb-12 flex justify-center"
            >
              <div className="w-20 h-20 md:w-28 md:h-28 bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] rounded-[30%] flex items-center justify-center shadow-[0_20px_50px_rgba(214,36,159,0.3)] border-4 border-white/10 group cursor-pointer relative overflow-hidden">
                <Instagram size={40} className="text-white md:w-16 md:h-16 relative z-10" />
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-[10rem] tracking-tighter mb-12 leading-none relative"
            >
              <span className="font-teko font-black uppercase block text-white/90 scale-y-110">Join The</span>
              <div className="relative inline-block group">
                <span className="font-marathi text-transparent bg-clip-text bg-[linear-gradient(to_bottom,#4f46e5,#312e81)] text-[5rem] md:text-[16rem] block font-extrabold relative z-10 drop-shadow-[0_10px_40px_rgba(79,70,229,0.5)] transition-transform duration-500 group-hover:scale-105">
                  कल्चर
                </span>
                <svg 
                  className="absolute -bottom-2 md:-bottom-12 left-0 w-full h-8 md:h-24 text-street-accent/30 pointer-events-none" 
                  viewBox="0 0 500 100" 
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M10,80 C150,95 350,60 490,85"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                  />
                  <motion.path
                    d="M50,70 C150,80 300,50 450,75"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeInOut", delay: 0.8 }}
                  />
                </svg>
              </div>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/50 text-sm md:text-base uppercase tracking-[0.4em] mb-16 max-w-lg mx-auto leading-relaxed"
            >
              Daily drops, community features, and the lifestyle of the modern street standard.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4 mb-20">
            {POSTS.map((post, index) => (
              <motion.a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 0.98 }}
                className="relative aspect-square overflow-hidden group block bg-white/5"
              >
                <img 
                  src={post.image} 
                  alt="Instagram Post" 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-street-accent/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <Instagram size={32} className="mx-auto mb-2 text-white" />
                    <span className="font-bold text-[10px] uppercase tracking-widest text-white">View Post</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="text-center">
            <motion.a 
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex flex-col items-center group"
            >
              <span className="text-2xl md:text-5xl font-bold text-white group-hover:bg-[linear-gradient(45deg,#f09433_0%,#e6683c_25%,#dc2743_50%,#cc2366_75%,#bc1888_100%)] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                @__classyco.__
              </span>
              <div className="h-px w-0 group-hover:w-full bg-[linear-gradient(to_right,#f09433,#dc2743,#bc1888)] transition-all duration-500 mt-2" />
              <span className="mt-4 text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/30 group-hover:text-white transition-colors">
                Follow us on Instagram
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
