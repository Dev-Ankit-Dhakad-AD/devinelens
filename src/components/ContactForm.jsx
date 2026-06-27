import React, { useState } from 'react';
import { Phone, Mail, Calendar, User, MessageSquare, CheckCircle, Send, MessageCircle } from 'lucide-react';
import { BRAND_INFO, SERVICES } from '../data/mockData';

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function ContactForm({ selectedService, setSelectedService }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    category: selectedService || 'Wedding & Event Reels',
    targetDate: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, category: selectedService }));
    }
  }, [selectedService]);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (!phoneDigits) {
      newErrors.phone = 'Phone / WhatsApp number is required';
    } else if (phoneDigits.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendWhatsAppInquiry = () => {
    const text = `Hi Devine Lens! 👋%0A%0AI would like to inquire about an event reel shoot.%0A%0A📌 *Details:*%0A• *Name:* ${encodeURIComponent(formData.fullName)}%0A• *Phone:* ${encodeURIComponent(formData.phone)}%0A• *Category:* ${encodeURIComponent(formData.category)}%0A• *Target Date:* ${encodeURIComponent(formData.targetDate || 'Not specified')}%0A• *Message:* ${encodeURIComponent(formData.message || 'None')}`;
    
    // WhatsApp URL to Amit's number
    const whatsappUrl = `https://wa.me/917974616093?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      sendWhatsAppInquiry();
    }
  };

  return (
    <section id="contact" style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ color: 'var(--silver-primary)', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '700' }}>
            Reach Out To Us
          </span>
          <h2 className="font-brand text-silver-gradient" style={{ fontSize: '2.4rem', marginTop: '0.4rem', marginBottom: '0.8rem' }}>
            Book Your Dates With Devine Lens
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto', fontSize: '0.95rem' }}>
            Fill out the form below or connect directly on WhatsApp / Call with Amit & Sahil.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '2.5rem' }}>
          
          {/* Direct Contact Info Panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
            
            <div className="silver-border-box" style={{
              padding: '2rem',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-card)',
              backdropFilter: 'blur(16px)'
            }}>
              <h3 className="font-heading" style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1.2rem' }}>
                Direct Call / WhatsApp
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {BRAND_INFO.owners.map((owner, idx) => (
                  <a 
                    key={idx}
                    href={`tel:${owner.rawPhone}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '0.9rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(8, 8, 10, 0.7)',
                      border: '1px solid var(--border-glass)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--silver-primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-glass)'}
                  >
                    <div style={{
                      width: '40px', height: '40px',
                      borderRadius: '50%',
                      background: 'var(--silver-gradient)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Phone size={18} color="#09090b" />
                    </div>
                    <div>
                      <div style={{ color: '#fff', fontWeight: '700', fontSize: '1rem' }}>{owner.name}</div>
                      <div style={{ color: 'var(--silver-light)', fontSize: '0.9rem', fontWeight: '600' }}>{owner.phone}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Channels */}
            <div className="silver-border-box" style={{
              padding: '2rem',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-card)',
              backdropFilter: 'blur(16px)'
            }}>
              <h3 className="font-heading" style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.8rem' }}>
                Instagram Handle
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '1.2rem' }}>
                Follow @devinelens_ on Instagram for our latest reel uploads and stories.
              </p>

              <a href={BRAND_INFO.socials.instagram} target="_blank" rel="noreferrer" className="btn-outline-silver" style={{ padding: '0.7rem 1.2rem', fontSize: '0.88rem', width: '100%', justifyContent: 'center' }}>
                <InstagramIcon size={18} /> Visit @devinelens_
              </a>
            </div>

          </div>

          {/* Form Panel */}
          <div className="silver-border-box" style={{
            padding: '2.2rem 1.8rem',
            borderRadius: 'var(--radius-md)',
            background: 'var(--bg-card)',
            backdropFilter: 'blur(16px)'
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{
                  width: '64px', height: '64px',
                  borderRadius: '50%',
                  background: 'var(--silver-gradient)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.2rem auto'
                }}>
                  <CheckCircle size={36} color="#09090b" />
                </div>
                <h3 className="font-heading" style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.4rem' }}>
                  Inquiry Sent via WhatsApp!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                  Thank you, <strong>{formData.fullName}</strong>. Your inquiry details for <strong>{formData.category}</strong> have been opened in WhatsApp. Amit & Sahil will respond shortly!
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <button 
                    onClick={() => sendWhatsAppInquiry()}
                    className="btn-silver"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <MessageCircle size={18} /> Resend on WhatsApp
                  </button>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="btn-outline-silver"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Fill Another Form
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                
                {/* Full Name */}
                <div>
                  <label style={{ display: 'block', color: 'var(--silver-light)', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.3rem' }}>
                    Full Name <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input 
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem 0.75rem 2.4rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(8, 8, 10, 0.8)',
                        border: errors.fullName ? '1px solid #ef4444' : '1px solid var(--border-glass)',
                        color: '#fff',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                    <User size={16} color="var(--text-secondary)" style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)' }} />
                  </div>
                  {errors.fullName && <span style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '0.2rem', display: 'block' }}>{errors.fullName}</span>}
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label style={{ display: 'block', color: 'var(--silver-light)', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.3rem' }}>
                    Phone / WhatsApp Number <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input 
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem 0.75rem 2.4rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(8, 8, 10, 0.8)',
                        border: errors.phone ? '1px solid #ef4444' : '1px solid var(--border-glass)',
                        color: '#fff',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                    <Phone size={16} color="var(--text-secondary)" style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)' }} />
                  </div>
                  {errors.phone && <span style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '0.2rem', display: 'block' }}>{errors.phone}</span>}
                </div>

                {/* Category Selector */}
                <div>
                  <label style={{ display: 'block', color: 'var(--silver-light)', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.3rem' }}>
                    Reel / Event Type
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(8, 8, 10, 0.8)',
                      border: '1px solid var(--border-glass)',
                      color: '#fff',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  >
                    {SERVICES.map(s => (
                      <option key={s.id} value={s.title} style={{ background: '#101014', color: '#fff' }}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Target Date */}
                <div>
                  <label style={{ display: 'block', color: 'var(--silver-light)', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.3rem' }}>
                    Target Date(s)
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input 
                      type="date"
                      value={formData.targetDate}
                      onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem 0.75rem 2.4rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(8, 8, 10, 0.8)',
                        border: '1px solid var(--border-glass)',
                        color: '#fff',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                    <Calendar size={16} color="var(--text-secondary)" style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)' }} />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: 'block', color: 'var(--silver-light)', fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.3rem' }}>
                    Message / Special Requests
                  </label>
                  <div style={{ position: 'relative' }}>
                    <textarea 
                      rows={3}
                      placeholder="Share details about your event, timing, or preferences..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem 0.75rem 2.4rem',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(8, 8, 10, 0.8)',
                        border: '1px solid var(--border-glass)',
                        color: '#fff',
                        fontSize: '0.9rem',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                    <MessageSquare size={16} color="var(--text-secondary)" style={{ position: 'absolute', left: '0.8rem', top: '0.9rem' }} />
                  </div>
                </div>

                <button type="submit" className="btn-silver" style={{ width: '100%', justifyContent: 'center', marginTop: '0.4rem', fontSize: '0.95rem', padding: '0.9rem' }}>
                  <Send size={16} /> Send WhatsApp Inquiry
                </button>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
