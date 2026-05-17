import { motion } from 'motion/react';

import tee1 from '../assets/images/tees/tees_1.webp';
import tee2 from '../assets/images/tees/tees_2.webp';
import tee3 from '../assets/images/tees/tees_3.webp';

const LOOKS = [
  {
    id: 1,
    title: "The Oversized Tee",
    description: "280 GSM heavy cotton with a signature boxy fit. Drop shoulders and high neck rib.",
    image: tee1,
    link: "#tees"
  },
  {
    id: 2,
    title: "Street Culture",
    description: "Bridging architectural lines with fluid street movement. Designed for the city.",
    image: tee2,
    link: "#tees"
  },
  {
    id: 3,
    title: "Minimal Luxe",
    description: "Subtle branding and premium materials. Luxury you can feel and wear every day.",
    image: tee3,
    link: "#tees"
  }
];

export default function Lookbook() {
  return (
    <section id="lookbook" className="py-16 md:py-24 bg-boutique-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="heading-bold text-3xl sm:text-6xl md:text-8xl mb-6 md:mb-8"
          >
            The <span className="text-street-accent">Collection.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-white/60 leading-relaxed font-sans"
          >
            Bridging the gap between luxury and the street. Our latest drop features heavy fabrics, 
            boxy silhouettes, and the specific fits you've seen on the feed. Every piece is 
            crafted to last and designed to make a statement.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LOOKS.map((look, index) => (
            <motion.div
              key={look.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-white/5 mb-6">
                <img 
                  src={look.image} 
                  alt={look.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a href={look.link} className="button-outline scale-75">Explore</a>
                </div>
              </div>
              <h3 className="heading-bold text-2xl mb-2 group-hover:text-street-accent transition-colors">{look.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{look.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
