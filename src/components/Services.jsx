import React, { useState } from 'react';
import { SERVICES } from '../data/mockData';
import { Film, Car, Sparkles, Camera, HeartHandshake, CheckCircle, ArrowRight } from 'lucide-react';

const iconMap = {
  Film, Car, Sparkles, Camera, HeartHandshake
};

export default function Services({ onSelectService }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Wedding Reels', 'Car Delivery', 'Pre-Weddings', 'Solo Reels'];

  const filteredServices = activeCategory === 'All' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="services" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ color: 'var(--silver-primary)', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '700' }}>
            What We Do
          </span>
          <h2 className="font-brand text-silver-gradient" style={{ fontSize: '2.4rem', marginTop: '0.4rem', marginBottom: '0.8rem' }}>
            Reel Packages & Shoots
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto', fontSize: '0.95rem' }}>
            We capture special moments and edit them into high-quality vertical reels ready to upload on Instagram.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.65rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                border: activeCategory === cat ? '1px solid var(--silver-primary)' : '1px solid var(--border-glass)',
                background: activeCategory === cat ? 'var(--silver-gradient)' : 'rgba(18, 18, 24, 0.6)',
                color: activeCategory === cat ? '#09090b' : 'var(--text-primary)',
                fontWeight: activeCategory === cat ? '800' : '500',
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(8px)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Film;
            return (
              <div 
                key={service.id} 
                className="silver-border-box"
                style={{
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-card)',
                  backdropFilter: 'blur(16px)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  border: service.isFeatured ? '1.5px solid var(--silver-primary)' : '1px solid var(--border-silver)'
                }}
              >
                {/* Header Image */}
                <div style={{
                  height: '190px',
                  backgroundImage: `linear-gradient(to bottom, transparent 40%, var(--bg-card) 100%), url(${service.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                  padding: '1.2rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between'
                }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(8, 8, 10, 0.85)',
                    border: '1px solid var(--silver-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <IconComponent size={20} color="var(--silver-light)" />
                  </div>

                  <span style={{
                    fontSize: '0.72rem',
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    background: service.isFeatured ? 'var(--silver-gradient)' : 'rgba(0,0,0,0.7)',
                    color: service.isFeatured ? '#09090b' : 'var(--silver-light)',
                    fontWeight: service.isFeatured ? '800' : '500',
                    border: '1px solid rgba(226,232,240,0.3)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    {service.category}
                  </span>
                </div>

                {/* Body */}
                <div style={{ padding: '1.4rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 className="font-heading" style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '0.6rem' }}>
                    {service.title}
                  </h3>
                  
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '1.2rem', flexGrow: 1, lineHeight: '1.5' }}>
                    {service.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '1.4rem' }}>
                    {service.features.map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.83rem', color: '#e4e4e7' }}>
                        <CheckCircle size={14} color="var(--silver-primary)" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => onSelectService(service.title)}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      background: service.isFeatured ? 'var(--silver-gradient)' : 'transparent',
                      border: service.isFeatured ? 'none' : '1px solid var(--border-silver)',
                      color: service.isFeatured ? '#09090b' : 'var(--silver-light)',
                      fontWeight: '800',
                      fontSize: '0.88rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (!service.isFeatured) {
                        e.currentTarget.style.background = 'var(--silver-gradient)';
                        e.currentTarget.style.color = '#09090b';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!service.isFeatured) {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'var(--silver-light)';
                      }
                    }}
                  >
                    Inquire For Reel Shoot <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
