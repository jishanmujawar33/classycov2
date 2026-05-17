import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Volume2, VolumeX, Maximize2 } from 'lucide-react';

interface VideoSectionProps {
  videoUrl: string;
  titleTop: string;
  titleBottom: string;
  showDescription?: boolean;
  isBottomCursive?: boolean;
}

export default function VideoSection({ 
  videoUrl, 
  titleTop, 
  titleBottom, 
  showDescription = true,
  isBottomCursive = false
}: VideoSectionProps) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Sync mute state if it changes externally or on load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <section className="relative py-12 md:py-24 bg-black overflow-hidden px-6">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-street-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-6 md:space-y-8"
          >
            <div>
              <h2 className="heading-bold text-4xl md:text-6xl lg:text-8xl text-white">
                {titleTop} <br className="hidden md:block" />
                <span className={`
                  text-street-accent
                  ${isBottomCursive ? "font-cursive text-5xl md:text-7xl lg:text-9xl normal-case block mt-2" : ""}
                `}>
                  {titleBottom}{!isBottomCursive && "."}
                </span>
              </h2>
            </div>
            
            {showDescription && (
              <p className="text-white/50 text-sm md:text-lg leading-relaxed max-w-xl font-light">
                Experience the energy of Mumbai's street culture. Our first brand film captures 
                the raw, unfiltered perspective of our upcoming Archive collection. 
                Turn up the sound for the full experience.
              </p>
            )}

          </motion.div>

          {/* Right Side: Video Player */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative group overflow-hidden bg-boutique-black rounded-[2rem] shadow-[0_0_100px_-20px_rgba(79,70,229,0.2)] border border-white/10 w-full max-w-[340px] md:max-w-[400px] aspect-[9/16]">
              
              {/* Mute/Unmute Toggle (Top Right) */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMuted(!isMuted);
                }}
                className="absolute top-6 right-6 z-50 w-12 h-12 bg-black/60 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 text-white hover:bg-street-accent hover:border-street-accent transition-all duration-300 active:scale-90"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>

              {/* Video Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 pointer-events-none" />
              
              {/* The Video */}
              <video 
                ref={videoRef}
                autoPlay 
                loop 
                muted={isMuted}
                playsInline 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Scanning Lines Overlay (Artistic Effect) */}
              <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
              
              {/* Decorative Corner Focus */}
              <div className="absolute inset-4 border border-white/5 rounded-[1.5rem] pointer-events-none z-30" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Background Text Decor */}
      <div className="absolute -bottom-12 -left-12 font-block text-[15vw] leading-none text-white/[0.02] select-none pointer-events-none rotate-[-5deg]">
        CLASSYCO
      </div>
    </section>
  );
}
