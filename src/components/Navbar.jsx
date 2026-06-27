import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';
import Logo from './Logo';

export default function Navbar({ onBookClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
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
        padding: scrolled ? '0.7rem 0' : '1.2rem 0',
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(8, 8, 10, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(226, 232, 240, 0.2)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Emblem Logo */}
        <a href="#hero" style={{ textDecoration: 'none' }}>
          <Logo size={42} showText={true} />
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
                letterSpacing: '0.5px',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--silver-light)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Quick Contact */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={onBookClick} className="btn-silver" style={{ padding: '0.6rem 1.4rem', fontSize: '0.88rem' }}>
            <Sparkles size={16} /> Book Reel Shoot
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: '1px solid var(--border-silver)',
              color: 'var(--silver-light)',
              padding: '0.5rem',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
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
          background: 'rgba(10, 10, 14, 0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border-silver)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.2rem'
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
                paddingBottom: '0.5rem',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
              }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ paddingTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <div style={{ color: 'var(--silver-light)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Direct Call Creators</div>
            <a href={`tel:${BRAND_INFO.owners[0].rawPhone}`} style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={16} color="var(--silver-light)" /> Amit: {BRAND_INFO.owners[0].phone}
            </a>
            <a href={`tel:${BRAND_INFO.owners[1].rawPhone}`} style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={16} color="var(--silver-light)" /> Sahil: {BRAND_INFO.owners[1].phone}
            </a>
          </div>
        </div>
      )}
      
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
