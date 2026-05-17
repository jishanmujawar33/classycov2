import { motion } from 'motion/react';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function StoreInfo() {
  return (
    <section id="store" className="py-24 bg-boutique-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-street-accent/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-angular text-street-accent tracking-widest uppercase mb-4 block">Physical Base</span>
            <h2 className="heading-bold text-5xl sm:text-7xl md:text-9xl mb-8 leading-none">
              MUMBAI<span className="text-street-accent">.</span>
            </h2>
            <h3 className="heading-bold text-3xl mb-6">The Base.</h3>
            <p className="text-white/60 text-lg mb-12 max-w-md leading-relaxed font-sans">
              Located in the heart of Kandivali East. Come through to check the fits, feel the fabrics, 
              and secure the latest drops in person. This is where the culture breathes.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-street-accent p-3 rounded-none mt-1">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs text-street-accent mb-2">Location</h4>
                  <p className="text-white font-sans">Shop No. 320, Hanuman Nagar,<br />Akurli Road, Kandivali (East),<br />Mumbai - 400101</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-none mt-1">
                  <Clock size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs text-white/50 mb-2">Hours</h4>
                  <p className="text-white font-sans">11:00 AM — 09:30 PM<br />Monday — Saturday</p>
                </div>
              </div>
            </div>

            <motion.a 
              href="https://maps.google.com/?q=Shop+No.+320,+Hanuman+Nagar,+Akurli+Road,+Kandivali+East,+Mumbai-400101"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 10 }}
              className="inline-flex items-center gap-4 mt-12 group"
            >
              <span className="button-primary">Get Directions</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-white/5 relative overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800" 
                alt="Store Interface"
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 border-[20px] border-black/20 pointer-events-none" />
              
              <div className="absolute -bottom-10 -left-10 bg-street-accent p-12 hidden md:block">
                <p className="heading-bold text-4xl text-white">Timeless<br />Style.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
