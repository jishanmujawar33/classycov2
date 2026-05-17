import { motion } from 'motion/react';
import { JEANS } from '../data/jeans';

export default function JeansCollection() {
  return (
    <section id="jeans" className="py-16 md:py-24 bg-boutique-black px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {JEANS.map((jean, index) => (
            <motion.div
              key={jean.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden bg-white/5 mb-3 md:mb-4 group-hover:shadow-[0_20px_50px_rgba(79,70,229,0.2)] transition-shadow">
                <img 
                  src={jean.image} 
                  alt={jean.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-street-accent text-white text-[7px] md:text-[8px] font-bold uppercase tracking-widest px-2 py-1">
                  Limited Drop
                </div>
              </div>
              <h3 className="font-classyco text-xs md:text-sm mb-1 group-hover:text-street-accent transition-colors">{jean.name}</h3>
              <div className="flex justify-between items-center">
                <p className="text-[8px] md:text-[10px] text-white/40 uppercase tracking-widest">Heavy Denim</p>
                <p className="font-bold text-xs md:text-sm tracking-tight">{jean.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
