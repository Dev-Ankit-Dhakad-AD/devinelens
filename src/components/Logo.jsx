import React from 'react';

export default function Logo({ size = 48, showText = true }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer' }}>
      {/* SVG Emblem matching the uploaded logo */}
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#64748b" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Metallic Ring */}
        <circle cx="100" cy="100" r="94" stroke="url(#silverGrad)" strokeWidth="4" fill="rgba(10,10,12,0.9)" />

        {/* Inner Arch Circles */}
        <path d="M 50 75 A 65 65 0 0 1 150 75" stroke="url(#silverGrad)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M 50 125 A 65 65 0 0 0 150 125" stroke="url(#silverGrad)" strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* DEVINE Text */}
        <text 
          x="100" 
          y="98" 
          textAnchor="middle" 
          fill="url(#silverGrad)" 
          fontFamily="'Cinzel', serif" 
          fontSize="28" 
          fontWeight="700" 
          letterSpacing="3"
        >
          DEVINE
        </text>

        {/* L E N S with side rules */}
        <line x1="38" y1="114" x2="68" y2="114" stroke="url(#silverGrad)" strokeWidth="1.5" />
        <text 
          x="100" 
          y="119" 
          textAnchor="middle" 
          fill="url(#silverGrad)" 
          fontFamily="'Cinzel', serif" 
          fontSize="14" 
          fontWeight="600" 
          letterSpacing="4"
        >
          LENS
        </text>
        <line x1="132" y1="114" x2="162" y2="114" stroke="url(#silverGrad)" strokeWidth="1.5" />
      </svg>

      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span className="font-brand text-silver-gradient" style={{ fontSize: '1.35rem', fontWeight: '800', letterSpacing: '2px', lineHeight: '1' }}>
            DEVINE LENS
          </span>
          <span style={{ fontSize: '0.62rem', color: 'var(--text-secondary)', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: '3px' }}>
            CAPTURING SPECIAL MOMENTS
          </span>
        </div>
      )}
    </div>
  );
}
