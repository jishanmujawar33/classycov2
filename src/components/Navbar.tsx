import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Lookbook', href: '#lookbook' },
    { name: 'Tees', href: '#tees' },
    { name: 'Jeans', href: '#jeans' },
    { name: 'The Store', href: '#store' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-block tracking-tighter"
        >
          CLASSYCO<span className="text-street-accent">.</span>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <a 
            href="https://instagram.com/__classyco.__" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-link text-street-accent"
          >
            IG
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white relative z-[70]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-[60] flex flex-col justify-center items-start px-8 md:px-20"
          >
            <div className="flex flex-col space-y-4 md:space-y-6 w-full">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  onClick={() => setIsOpen(false)}
                  className="heading-bold text-5xl sm:text-6xl md:text-9xl text-white hover:text-street-accent flex items-center group transition-all duration-300 w-full"
                >
                  <span className="group-hover:translate-x-4 transition-transform duration-300">
                    {link.name}
                  </span>
                  <ArrowRight className="ml-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all hidden md:block" size={64} />
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 pt-8 border-t border-white/10 w-full"
              >
                <a
                  href="https://instagram.com/__classyco.__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl md:text-3xl font-block text-street-accent hover:text-white transition-colors"
                >
                  @__classyco.__
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
