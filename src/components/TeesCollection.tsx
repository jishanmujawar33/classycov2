import { motion } from 'motion/react';

const TEES = [
  { id: 1, name: "Midnight Boxy Tee", price: "₹1,499", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=600" },
  { id: 2, name: "Street Core White", price: "₹1,499", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=600" },
  { id: 3, name: "Archive Heavy Fit", price: "₹1,799", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=600" },
  { id: 4, name: "Essential Oversize", price: "₹1,299", image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=600" },
];

export default function TeesCollection() {
  return (
    <section id="tees" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="font-angular text-street-accent tracking-widest uppercase mb-4 block">Essentials</span>
            <h2 className="heading-bold text-6xl">Tees Collection</h2>
          </div>
          <button className="nav-link border-b border-white pb-1 group flex items-center">
            View All Drops <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </div>

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
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
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
