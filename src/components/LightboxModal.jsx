import React from 'react';
import { X, Sparkles } from 'lucide-react';

export default function LightboxModal({ item, onClose, onBookClick }) {
  if (!item) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      zIndex: 2000,
      background: 'rgba(0, 0, 0, 0.92)',
      backdropFilter: 'blur(16px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      {/* Close Button */}
      <button 
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '1.5rem', right: '1.5rem',
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid var(--border-silver)',
          color: 'var(--silver-light)',
          padding: '0.6rem',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <X size={24} />
      </button>

      <div style={{
        maxWidth: '900px',
        width: '100%',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-silver)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        boxShadow: '0 0 40px rgba(255,255,255,0.15)'
      }}>
        {/* Media View */}
        {item.type === 'video' ? (
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, background: '#000' }}>
            <iframe
              src={`${item.videoUrl}?autoplay=1`}
              title={item.title}
              style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                border: 'none'
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <img 
            src={item.image} 
            alt={item.title}
            style={{ width: '100%', maxHeight: '60vh', objectFit: 'cover', display: 'block' }}
          />
        )}

        {/* Details Footer */}
        <div style={{ padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--silver-primary)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700' }}>
              {item.category}
            </span>
            <h3 className="font-heading" style={{ fontSize: '1.5rem', color: '#fff', margin: '0.2rem 0' }}>
              {item.title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              {item.description}
            </p>
          </div>

          <button 
            onClick={() => {
              onClose();
              onBookClick();
            }}
            className="btn-silver"
            style={{ fontSize: '0.9rem' }}
          >
            <Sparkles size={16} /> Book Reel Shoot
          </button>
        </div>
      </div>
    </div>
  );
}
