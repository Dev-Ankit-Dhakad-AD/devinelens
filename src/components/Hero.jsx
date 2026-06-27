import React from 'react';
import { Film, Play, Sparkles, Smartphone, Zap, PhoneCall, Heart } from 'lucide-react';
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
        paddingTop: 'clamp(9.5rem, 22vh, 12rem)',
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
        
        {/* Creator Pill Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          padding: '0.35rem 0.9rem',
          borderRadius: 'var(--radius-full)',
          border: '1px solid var(--border-silver)',
          background: 'rgba(16, 16, 22, 0.92)',
          marginBottom: '1.2rem',
          maxWidth: '95%',
          boxShadow: '0 4px 14px rgba(0,0,0,0.6)'
        }}>
          <Sparkles size={13} color="var(--silver-light)" style={{ flexShrink: 0 }} />
          <span style={{ fontSize: 'clamp(0.68rem, 2.4vw, 0.78rem)', color: 'var(--silver-light)', fontWeight: '700', letterSpacing: '0.8px', whiteSpace: 'nowrap' }}>
            EVENT & INSTAGRAM REEL CREATORS
          </span>
        </div>

        {/* Brand Title */}
        <h1 className="font-brand text-silver-gradient silver-glow-text" style={{
          fontSize: 'clamp(2.2rem, 8vw, 5.2rem)',
          fontWeight: '900',
          lineHeight: '1.15',
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

        {/* Balanced Symmetrical 4-Card Info Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '1rem',
          maxWidth: '850px',
          margin: '0 auto',
          padding: '1.2rem 1rem',
          borderRadius: 'var(--radius-md)',
          background: 'rgba(16, 16, 22, 0.85)',
          backdropFilter: 'blur(16px)',
          border: '1px solid var(--border-silver)'
        }}>
          <div style={{ padding: '0.6rem 0.4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem' }}>
            <Smartphone size={20} color="var(--silver-light)" />
            <div style={{ fontFamily: 'var(--font-body)', fontWeight: '700', fontSize: '0.95rem', color: '#fff' }}>Instagram Ready</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Vertical 9:16 Reels</div>
          </div>

          <div style={{ padding: '0.6rem 0.4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem' }}>
            <Zap size={20} color="var(--silver-light)" />
            <div style={{ fontFamily: 'var(--font-body)', fontWeight: '700', fontSize: '0.95rem', color: '#fff' }}>Fast Delivery</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>24-48 Hr Delivery</div>
          </div>

          <div style={{ padding: '0.6rem 0.4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem' }}>
            <Heart size={20} color="var(--silver-light)" />
            <div style={{ fontFamily: 'var(--font-body)', fontWeight: '700', fontSize: '0.95rem', color: '#fff' }}>Real Moments</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>100% Candid Vibe</div>
          </div>

          <div style={{ padding: '0.6rem 0.4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem' }}>
            <PhoneCall size={20} color="var(--silver-light)" />
            <div style={{ fontFamily: 'var(--font-body)', fontWeight: '700', fontSize: '0.95rem', color: '#fff' }}>Direct Talk</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Amit & Sahil</div>
          </div>
        </div>

      </div>
    </section>
  );
}
