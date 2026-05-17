import { motion } from 'motion/react';

const JEANS = [
  { id: 1, name: "Rough Edge Denim", price: "₹2,499", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=600" },
  { id: 2, name: "Street Baggy Fit", price: "₹2,999", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=600" },
  { id: 3, name: "Noir Cargo Jeans", price: "₹3,499", image: "https://images.unsplash.com/photo-1604176354204-926873ff3da9?auto=format&fit=crop&q=80&w=600" },
  { id: 4, name: "Vintage Wash Straight", price: "₹2,799", image: "https://images.unsplash.com/photo-1565084888279-aff9969bb042?auto=format&fit=crop&q=80&w=600" },
  { id: 5, name: "Distressed Streetwear", price: "₹3,299", image: "https://images.unsplash.com/photo-1582552938357-104a2426b9cc?auto=format&fit=crop&q=80&w=600" },
  { id: 6, name: "Midnight Slim Denim", price: "₹2,599", image: "https://images.unsplash.com/photo-1514316440535-43098f98f6d6?auto=format&fit=crop&q=80&w=600" },
];

export default function JeansCollection() {
  return (
    <section id="jeans" className="py-16 md:py-24 bg-boutique-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16 gap-6">
          <div>
            <span className="font-angular text-street-accent tracking-widest uppercase mb-4 block">Premium Denim</span>
            <h2 className="heading-bold text-3xl sm:text-6xl">Jeans Collection</h2>
          </div>
          <button className="nav-link border-b border-white pb-1 group flex items-center">
            View All Denim <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {JEANS.map((jean, index) => (
            <motion.div
              key={jean.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-white/5 mb-3 md:mb-4 group-hover:shadow-[0_20px_50px_rgba(79,70,229,0.2)] transition-shadow">
                <img 
                  src={jean.image} 
                  alt={jean.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
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
