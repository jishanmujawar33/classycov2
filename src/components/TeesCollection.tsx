import { motion } from 'motion/react';
import { TEES } from '../data/tees';

export default function TeesCollection() {
  return (
    <section id="tees" className="pb-16 md:pb-24 bg-black px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {TEES.map((tee, index) => (
            <motion.div
              key={tee.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden bg-white/5 mb-4 group-hover:shadow-[0_20px_50px_rgba(79,70,229,0.2)] transition-shadow">
                <img 
                  src={tee.image} 
                  alt={tee.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-street-accent text-white text-[8px] font-bold uppercase tracking-widest px-2 py-1">
                  New Arrival
                </div>
              </div>
              <h3 className="font-classyco text-sm mb-1 group-hover:text-street-accent transition-colors">{tee.name}</h3>
              <div className="flex justify-between items-center">
                <p className="text-[10px] text-white/40 uppercase tracking-widest">Premium Fit</p>
                <p className="font-bold text-sm tracking-tight">{tee.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
