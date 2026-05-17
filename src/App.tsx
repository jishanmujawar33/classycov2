import Navbar from './components/Navbar';
import Hero from './components/Hero';
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
        <Lookbook />
        <TeesCollection />
        <JeansCollection />
        <StoreInfo />
        <SocialSection />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
