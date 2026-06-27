import React, { useState } from 'react';
import { PORTFOLIO } from '../data/mockData';
import { Play, Film } from 'lucide-react';

export default function Portfolio({ onOpenLightbox }) {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Wedding Reels', 'Pre-Weddings', 'Car Delivery', 'Solo Reels'];

  const filteredItems = filter === 'All' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => item.category === filter);

  return (
    <section id="portfolio" style={{ padding: '5rem 0', position: 'relative', background: 'var(--bg-secondary)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ color: 'var(--silver-primary)', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <Film size={16} /> Instagram Reel Samples
          </span>
          <h2 className="font-brand text-silver-gradient" style={{ fontSize: '2.4rem', marginTop: '0.4rem', marginBottom: '0.8rem' }}>
            Recent Event Moments & Reels
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto', fontSize: '0.95rem' }}>
            Check out some of our recent Instagram reels captured at weddings, pre-weddings, and car showroom deliveries.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: '0.6rem 1.3rem',
                borderRadius: 'var(--radius-full)',
                border: filter === f ? '1px solid var(--silver-primary)' : '1px solid var(--border-glass)',
                background: filter === f ? 'var(--silver-gradient)' : 'transparent',
                color: filter === f ? '#09090b' : 'var(--text-secondary)',
                fontWeight: '800',
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Portfolio Gallery Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
          gap: '1.5rem'
        }}>
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="silver-border-box"
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                height: '340px',
                cursor: 'pointer',
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
              }}
            >
              {/* Overlay Gradient */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(to top, rgba(8,8,10,0.95) 0%, rgba(8,8,10,0.15) 60%, transparent 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '1.4rem'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '56px', height: '56px',
                  borderRadius: '50%',
                  background: 'var(--silver-gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 20px rgba(255,255,255,0.4)'
                }}>
                  <Play size={24} color="#09090b" fill="#09090b" style={{ marginLeft: '3px' }} />
                </div>

                <span style={{
                  alignSelf: 'flex-start',
                  fontSize: '0.7rem',
                  padding: '0.2rem 0.6rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(255,255,255,0.15)',
                  color: 'var(--silver-light)',
                  fontWeight: '600',
                  border: '1px solid rgba(255,255,255,0.3)',
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  {item.category}
                </span>

                <h3 className="font-heading" style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.3rem' }}>
                  {item.title}
                </h3>
                
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
