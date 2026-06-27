import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import LightboxModal from './components/LightboxModal';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { Phone } from 'lucide-react';
import { BRAND_INFO } from './data/mockData';

export default function App() {
  const [lightboxItem, setLightboxItem] = useState(null);
  const [selectedService, setSelectedService] = useState('');

  const scrollToContact = (serviceTitle = '') => {
    if (serviceTitle) {
      setSelectedService(serviceTitle);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      
      {/* Navigation Header */}
      <Navbar onBookClick={() => scrollToContact()} />

      {/* Main Content Sections */}
      <main style={{ flexGrow: 1 }}>
        <Hero onBookClick={() => scrollToContact()} />
        <About />
        <Services onSelectService={(title) => scrollToContact(title)} />
        <Portfolio onOpenLightbox={(item) => setLightboxItem(item)} />
        <ContactForm selectedService={selectedService} setSelectedService={setSelectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lightbox Modal */}
      <LightboxModal 
        item={lightboxItem} 
        onClose={() => setLightboxItem(null)} 
        onBookClick={() => scrollToContact()} 
      />

      {/* Floating Quick Dial Button */}
      <div style={{
        position: 'fixed',
        bottom: '2rem', right: '2rem',
        zIndex: 990,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.8rem'
      }}>
        <a 
          href={`tel:${BRAND_INFO.owners[0].rawPhone}`} 
          title={`Call Amit ${BRAND_INFO.owners[0].phone}`}
          style={{
            width: '54px', height: '54px',
            borderRadius: '50%',
            background: 'var(--silver-gradient)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(255,255,255,0.3)',
            textDecoration: 'none',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
        >
          <Phone size={24} color="#09090b" />
        </a>
      </div>

    </div>
  );
}
