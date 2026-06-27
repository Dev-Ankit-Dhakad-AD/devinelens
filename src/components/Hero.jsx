import React from 'react';
import { Film, Play, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

export default function Hero({ onBookClick }) {
  return (
    <section 
      id="hero" 
      style={{
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '6.5rem',
        paddingBottom: '3.5rem',
        overflow: 'hidden'
      }}
    >
      {/* Background Overlay */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'linear-gradient(rgba(8,8,10,0.8), rgba(8,8,10,0.96)), url("https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.75)',
        zIndex: 1
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        
        {/* Creator Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.4rem 1rem',
          borderRadius: 'var(--radius-full)',
          border: '1px solid var(--border-silver)',
          background: 'rgba(16, 16, 22, 0.85)',
          marginBottom: '1.2rem',
          maxWidth: '100%'
        }}>
          <Sparkles size={14} color="var(--silver-light)" style={{ flexShrink: 0 }} />
          <span style={{ fontSize: '0.78rem', color: 'var(--silver-light)', fontWeight: '600', letterSpacing: '1px' }}>
            INSTAGRAM REEL & EVENT CREATORS
          </span>
        </div>

        {/* Brand Title */}
        <h1 className="font-brand text-silver-gradient silver-glow-text" style={{
          fontSize: 'clamp(2.2rem, 8vw, 5.2rem)',
          fontWeight: '900',
          lineHeight: '1.1',
          letterSpacing: '2px',
          marginBottom: '0.8rem'
        }}>
          {BRAND_INFO.name}
        </h1>

        {/* Tagline */}
        <p className="font-heading" style={{
          fontSize: 'clamp(1.1rem, 3.5vw, 1.7rem)',
          color: '#fff',
          fontStyle: 'italic',
          marginBottom: '1rem',
          padding: '0 0.5rem'
        }}>
          "Capturing Special Moments For Instagram"
        </p>

        <p style={{
          maxWidth: '620px',
          margin: '0 auto 2rem auto',
          color: 'var(--text-secondary)',
          fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
          lineHeight: '1.6',
          padding: '0 0.5rem'
        }}>
          Hi! We are <strong>Amit & Sahil</strong>. We capture fun, candid moments at weddings, pre-weddings, and car showroom deliveries to create trendy, ready-to-post Instagram Reels.
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          <button onClick={onBookClick} className="btn-silver" style={{ fontSize: '0.95rem' }}>
            <Film size={18} /> Book Your Reel Shoot
          </button>
          <a href="#portfolio" className="btn-outline-silver" style={{ fontSize: '0.95rem' }}>
            <Play size={16} fill="currentColor" /> Watch Sample Reels
          </a>
        </div>

        {/* Info Bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '1.2rem',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '1.2rem',
          borderRadius: 'var(--radius-md)',
          background: 'rgba(16, 16, 22, 0.8)',
          backdropFilter: 'blur(12px)',
          border: '1px solid var(--border-silver)'
        }}>
          <div>
            <div className="font-brand text-silver-gradient" style={{ fontSize: '1.5rem', fontWeight: '800' }}>Instagram Ready</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Vertical 9:16 Reels</div>
          </div>
          <div>
            <div className="font-brand text-silver-gradient" style={{ fontSize: '1.5rem', fontWeight: '800' }}>Fast Delivery</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Quick Turnaround</div>
          </div>
          <div>
            <div className="font-brand text-silver-gradient" style={{ fontSize: '1.5rem', fontWeight: '800' }}>Direct Contact</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Talk to Amit & Sahil</div>
          </div>
        </div>

      </div>
    </section>
  );
}
