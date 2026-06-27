import React from 'react';
import { BRAND_INFO } from '../data/mockData';
import { Phone } from 'lucide-react';
import Logo from './Logo';

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  return (
    <footer style={{
      background: '#050507',
      borderTop: '1px solid var(--border-silver)',
      paddingTop: '3.5rem',
      paddingBottom: '2rem',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2.5rem',
          marginBottom: '2.5rem'
        }}>
          
          {/* Col 1: Brand Info & Emblem */}
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <Logo size={40} showText={true} />
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '1.2rem' }}>
              Capturing special event moments for Instagram Reels. Framing memories that matter.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href={BRAND_INFO.socials.instagram} target="_blank" rel="noreferrer" style={{ color: 'var(--silver-light)' }}>
                <InstagramIcon size={22} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-heading" style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.3s ease' }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--silver-light)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div>
            <h4 className="font-heading" style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}>Creators</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {BRAND_INFO.owners.map((o, idx) => (
                <a key={idx} href={`tel:${o.rawPhone}`} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={14} color="var(--silver-light)" /> {o.name}: {o.phone}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '1.8rem',
          borderTop: '1px solid var(--border-glass)',
          textAlign: 'center',
          color: 'var(--text-secondary)',
          fontSize: '0.82rem'
        }}>
          <p>© {new Date().getFullYear()} DEVINE LENS. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
