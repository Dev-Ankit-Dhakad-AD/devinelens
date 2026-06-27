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
        paddingTop: '7rem',
        paddingBottom: '4rem',
        overflow: 'hidden'
      }}
    >
      {/* Background Overlay */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'linear-gradient(rgba(8,8,10,0.8), rgba(8,8,10,0.95)), url("https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000")',
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
          gap: '0.6rem',
          padding: '0.4rem 1.2rem',
          borderRadius: 'var(--radius-full)',
          border: '1px solid var(--border-silver)',
          background: 'rgba(16, 16, 22, 0.85)',
          marginBottom: '1.5rem'
        }}>
          <Sparkles size={14} color="var(--silver-light)" />
          <span style={{ fontSize: '0.85rem', color: 'var(--silver-light)', fontWeight: '600', letterSpacing: '1px' }}>
            INSTAGRAM REEL & EVENT HIGHLIGHT CREATORS
          </span>
        </div>

        {/* Brand Title */}
        <h1 className="font-brand text-silver-gradient silver-glow-text" style={{
          fontSize: 'clamp(2.8rem, 7vw, 5.2rem)',
          fontWeight: '900',
          lineHeight: '1.1',
          letterSpacing: '4px',
          marginBottom: '1rem'
        }}>
          {BRAND_INFO.name}
        </h1>

        {/* Tagline */}
        <p className="font-heading" style={{
          fontSize: 'clamp(1.1rem, 2.5vw, 1.7rem)',
          color: '#fff',
          fontStyle: 'italic',
          marginBottom: '1.2rem'
        }}>
          "Capturing Special Moments For Instagram"
        </p>

        <p style={{
          maxWidth: '620px',
          margin: '0 auto 2.2rem auto',
          color: 'var(--text-secondary)',
          fontSize: '1rem',
          lineHeight: '1.7'
        }}>
          Hi! We are <strong>Amit & Sahil</strong>. We capture fun, candid moments at weddings, pre-weddings, and car showroom deliveries to create trendy, ready-to-post Instagram Reels.
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <button onClick={onBookClick} className="btn-silver" style={{ fontSize: '0.95rem', padding: '0.85rem 2rem' }}>
            <Film size={18} /> Book Your Reel Shoot
          </button>
          <a href="#portfolio" className="btn-outline-silver" style={{ fontSize: '0.95rem', padding: '0.85rem 2rem' }}>
            <Play size={16} fill="currentColor" /> Watch Sample Reels
          </a>
        </div>

        {/* Grounded Info Bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '1.4rem',
          borderRadius: 'var(--radius-md)',
          background: 'rgba(16, 16, 22, 0.75)',
          backdropFilter: 'blur(12px)',
          border: '1px solid var(--border-silver)'
        }}>
          <div>
            <div className="font-brand text-silver-gradient" style={{ fontSize: '1.8rem', fontWeight: '800' }}>Instagram Ready</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Vertical 9:16 Reels</div>
          </div>
          <div>
            <div className="font-brand text-silver-gradient" style={{ fontSize: '1.8rem', fontWeight: '800' }}>Fast Turnaround</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Quick Delivery For Stories & Reels</div>
          </div>
          <div>
            <div className="font-brand text-silver-gradient" style={{ fontSize: '1.8rem', fontWeight: '800' }}>Direct Contact</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Connect with Amit & Sahil</div>
          </div>
        </div>

      </div>
    </section>
  );
}
