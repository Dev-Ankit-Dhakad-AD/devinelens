import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';
import Logo from './Logo';

export default function Navbar({ onBookClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        padding: scrolled ? '0.6rem 0' : '1rem 0',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(8, 8, 10, 0.95)' : 'rgba(8, 8, 10, 0.6)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(226, 232, 240, 0.2)' : '1px solid transparent'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Emblem Logo */}
        <a href="#hero" style={{ textDecoration: 'none' }}>
          <Logo size={36} showText={true} />
        </a>

        {/* Desktop Navigation */}
        <nav style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              style={{
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: '500',
                letterSpacing: '0.5px'
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Quick Contact */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button onClick={onBookClick} className="btn-silver desktop-btn" style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}>
            <Sparkles size={15} /> Book Shoot
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--border-silver)',
              color: 'var(--silver-light)',
              padding: '0.5rem',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px'
            }}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%', left: 0, right: 0,
          background: 'rgba(8, 8, 10, 0.98)',
          backdropFilter: 'blur(24px)',
          borderBottom: '1px solid var(--border-silver)',
          padding: '1.5rem 1.2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.2rem',
          boxShadow: '0 20px 40px rgba(0,0,0,0.8)'
        }}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '600',
                paddingBottom: '0.6rem',
                borderBottom: '1px solid rgba(255,255,255,0.08)'
              }}
            >
              {link.name}
            </a>
          ))}

          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              onBookClick();
            }} 
            className="btn-silver" 
            style={{ width: '100%', marginTop: '0.5rem' }}
          >
            <Sparkles size={16} /> Book Your Shoot Now
          </button>

          <div style={{ paddingTop: '0.8rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <div style={{ color: 'var(--silver-light)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700' }}>
              Direct Call Creators
            </div>
            <a href={`tel:${BRAND_INFO.owners[0].rawPhone}`} style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem' }}>
              <Phone size={16} color="var(--silver-light)" /> Amit: {BRAND_INFO.owners[0].phone}
            </a>
            <a href={`tel:${BRAND_INFO.owners[1].rawPhone}`} style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem' }}>
              <Phone size={16} color="var(--silver-light)" /> Sahil: {BRAND_INFO.owners[1].phone}
            </a>
          </div>
        </div>
      )}
      
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .desktop-btn { display: inline-flex !important; }
        }
        @media (max-width: 767px) {
          .desktop-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
