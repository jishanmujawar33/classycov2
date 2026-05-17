import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-boutique-black pt-16 md:pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-12 md:mb-20">
          <div className="md:col-span-2">
            <a href="#" className="text-3xl font-block tracking-tighter mb-8 block">
              CLASSYCO<span className="text-street-accent">.</span>
            </a>
            <p className="text-white/40 max-w-sm font-sans mb-8 leading-relaxed">
              Curated menswear for the next generation. Quality oversized fits, premium fabrics, 
              and pure street culture in Kandivali East. Representing the city, defining the fit.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/__classyco.__" className="p-3 bg-white/5 hover:bg-[linear-gradient(45deg,#f09433_0%,#e6683c_25%,#dc2743_50%,#cc2366_75%,#bc1888_100%)] transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-angular text-white uppercase tracking-widest text-sm mb-8">Navigate</h4>
            <ul className="space-y-4">
              <li><a href="#lookbook" className="nav-link">Lookbook</a></li>
              <li><a href="#tees" className="nav-link">Tees Collection</a></li>
              <li><a href="#store" className="nav-link">The Boutique</a></li>
              <li><a href="https://instagram.com/__classyco.__" className="nav-link">Instagram</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-angular text-white uppercase tracking-widest text-sm mb-8">Connect</h4>
            <ul className="space-y-6">
              <li>
                <a href="tel:+917738499923" className="flex items-center gap-4 text-white/60 hover:text-white transition-colors">
                  <Phone size={18} className="text-street-accent" />
                  <span className="text-sm font-sans">+91 77384 99923</span>
                </a>
              </li>
              <li>
                <a href="mailto:contact@classyco.in" className="flex items-center gap-4 text-white/60 hover:text-white transition-colors">
                  <Mail size={18} className="text-street-accent" />
                  <span className="text-sm font-sans">contact@classyco.in</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://maps.google.com/?q=Shop+No.+320,+Hanuman+Nagar,+Akurli+Road,+Kandivali+East,+Mumbai-400101" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 text-white/60 hover:text-white transition-colors"
                >
                  <MapPin size={18} className="text-street-accent mt-1" />
                  <span className="text-sm font-sans">Shop 320, Hanuman Nagar,<br />Kandivali East, Mumbai</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6 mb-8">
          <p className="text-[10px] uppercase tracking-widest text-white/20">
            © 2024 Classyco Menswear. All rights reserved.
          </p>
          <div className="flex flex-col items-center">
            <span className="font-cursive text-street-accent text-3xl md:text-4xl opacity-50 select-none pointer-events-none">
              Made in Mumbai
            </span>
            <span className="font-marathi text-[10px] text-white/10 uppercase tracking-[0.4em] -mt-2">
              मुंबई मध्ये बनवलेले
            </span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] uppercase tracking-widest text-white/20 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-white/20 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
