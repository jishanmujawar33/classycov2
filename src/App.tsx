import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import Lookbook from './components/Lookbook';
import TeesCollection from './components/TeesCollection';
import JeansCollection from './components/JeansCollection';
import StoreInfo from './components/StoreInfo';
import SocialSection from './components/SocialSection';
import WhatsAppFAB from './components/WhatsAppFAB';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-street-accent selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <VideoSection 
          videoUrl="https://vlysnaubipsnogprgpdz.supabase.co/storage/v1/object/public/videos/Brand-Video.mp4"
          titleTop="THE SOUL OF"
          titleBottom="STREET"
        />
        <Lookbook />
        <VideoSection 
          videoUrl="https://vlysnaubipsnogprgpdz.supabase.co/storage/v1/object/public/videos/Img%206855.mp4"
          titleTop="TEES"
          titleBottom="Collection"
          showDescription={false}
          isBottomCursive={true}
        />
        <TeesCollection />
        <VideoSection 
          videoUrl="https://vlysnaubipsnogprgpdz.supabase.co/storage/v1/object/public/videos/Img%206889.mp4"
          titleTop="JEANS"
          titleBottom="Collection"
          showDescription={false}
          isBottomCursive={true}
        />
        <JeansCollection />
        <StoreInfo />
        <SocialSection />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
