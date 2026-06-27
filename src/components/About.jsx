import React from 'react';
import { Film, Sparkles, Phone, Check } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

export default function About() {
  return (
    <section id="about" style={{ padding: '5rem 0', position: 'relative', background: 'var(--bg-secondary)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ color: 'var(--silver-primary)', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '700' }}>
            Meet The Creators
          </span>
          <h2 className="font-brand text-silver-gradient" style={{ fontSize: '2.3rem', marginTop: '0.4rem', marginBottom: '0.8rem' }}>
            Amit & Sahil
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '550px', margin: '0 auto', fontSize: '0.95rem' }}>
            We are young enthusiasts passionate about capturing special event moments and turning them into creative Instagram Reels.
          </p>
          <div style={{ width: '50px', height: '3px', background: 'var(--silver-gradient)', margin: '1.2rem auto 0 auto' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'stretch' }}>
          
          {/* Creator 1: Amit */}
          <div className="silver-border-box" style={{
            padding: '2rem',
            borderRadius: 'var(--radius-md)',
            background: 'var(--bg-card)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  border: '1.5px solid var(--silver-primary)',
                  background: 'rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Sparkles size={24} color="var(--silver-light)" />
                </div>
                <div>
                  <h3 className="font-heading" style={{ fontSize: '1.5rem', color: '#fff' }}>Amit</h3>
                  <p style={{ color: 'var(--silver-primary)', fontSize: '0.85rem', fontWeight: '600' }}>Content Creator</p>
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.2rem', lineHeight: '1.6' }}>
                "I love being present at events, looking out for genuine laughs, dancing moves, and special moments that look amazing on social media."
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#e4e4e7' }}>
                  <Check size={14} color="var(--silver-primary)" /> Capturing Event Moments & Vibe
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#e4e4e7' }}>
                  <Check size={14} color="var(--silver-primary)" /> Casual, Friendly & Approachable
                </div>
              </div>
            </div>

            <a href={`tel:${BRAND_INFO.owners[0].rawPhone}`} className="btn-outline-silver" style={{ justifyContent: 'center', fontSize: '0.9rem', padding: '0.75rem' }}>
              <Phone size={16} /> Call Amit ({BRAND_INFO.owners[0].phone})
            </a>
          </div>

          {/* Creator 2: Sahil */}
          <div className="silver-border-box" style={{
            padding: '2rem',
            borderRadius: 'var(--radius-md)',
            background: 'var(--bg-card)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  border: '1.5px solid var(--silver-primary)',
                  background: 'rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Film size={24} color="var(--silver-light)" />
                </div>
                <div>
                  <h3 className="font-heading" style={{ fontSize: '1.5rem', color: '#fff' }}>Sahil</h3>
                  <p style={{ color: 'var(--silver-primary)', fontSize: '0.85rem', fontWeight: '600' }}>Reel Editor</p>
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.2rem', lineHeight: '1.6' }}>
                "I focus on editing the clips into fast, trendy reels with background music and smooth cuts so you can post them on Instagram right away."
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#e4e4e7' }}>
                  <Check size={14} color="var(--silver-primary)" /> Beat-Synced Transitions & Music
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#e4e4e7' }}>
                  <Check size={14} color="var(--silver-primary)" /> Ready-to-Post Vertical Videos
                </div>
              </div>
            </div>

            <a href={`tel:${BRAND_INFO.owners[1].rawPhone}`} className="btn-outline-silver" style={{ justifyContent: 'center', fontSize: '0.9rem', padding: '0.75rem' }}>
              <Phone size={16} /> Call Sahil ({BRAND_INFO.owners[1].phone})
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
