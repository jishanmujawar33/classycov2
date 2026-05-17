import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

const POSTS = [
  { id: 1, image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=400" },
  { id: 2, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=400" },
  { id: 3, image: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?auto=format&fit=crop&q=80&w=400" },
  { id: 4, image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=400" },
];

export default function SocialSection() {
  return (
    <section className="py-16 md:py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 md:mb-16 gap-8">
          <div>
            <h2 className="heading-bold text-3xl sm:text-6xl md:text-8xl mb-4">Social Archive<span className="text-street-accent">.</span></h2>
            <p className="text-white/40 uppercase tracking-[0.3em] font-bold text-xs">Stay updated with the latest drops and lifestyle.</p>
          </div>
          <a 
            href="https://instagram.com/__classyco.__" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white/5 px-8 py-4 hover:bg-street-accent transition-colors group"
          >
            <Instagram size={24} className="group-hover:rotate-12 transition-transform" />
            <span className="font-classyco tracking-widest text-sm">@__classyco.__</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {POSTS.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden group"
            >
              <img 
                src={post.image} 
                alt="Instagram Post" 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-street-accent/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center">
                  <Instagram size={32} className="mx-auto mb-2" />
                  <span className="font-bold text-[10px] uppercase tracking-widest">View Post</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
