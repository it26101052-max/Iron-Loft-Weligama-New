import React, { useState } from 'react';
import { HOTEL_CONFIG } from '../data/hotelData';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, Clock, Globe } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    dates: '',
    message: '',
    preferredContact: 'WhatsApp',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const text = `Hello Iron Loft Concierge,\n\nName: ${formData.name || 'A Guest'}\nEmail: ${formData.email || 'N/A'}\nSubject: ${formData.subject}\nMessage: ${formData.message || 'I would like to inquire about a stay.'}`;
    window.open(`https://wa.me/${HOTEL_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#121212]">
      {/* Header Banner */}
      <section className="relative py-24 sm:py-32 bg-[#121212] text-[#F9F6F0] overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-25">
          <img
            src="/src/assets/images/hero_weligama_iron_loft_1793974561163.jpg"
            alt="Contact Iron Loft"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#C2A676]">
            <span>Concierge & Reservations</span>
            <span aria-hidden="true">·</span>
            <span>Weligama, Sri Lanka</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white max-w-4xl leading-tight">
            Connect with our resident concierge.
          </h1>
          <p className="text-base sm:text-lg font-light text-white/70 max-w-2xl leading-relaxed">
            Whether inquiring about residence availability, bespoke culinary evenings, or private airport transfers, we are at your service.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-20 sm:py-28">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Contact Channels & Map Preview */}
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-4">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#715B32] block">
                  Direct Concierge
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#121212]">
                  We respond promptly.
                </h2>
                <p className="text-sm font-light text-[#5A564F] leading-relaxed">
                  Our reservations manager is available daily from 06:00 AM to 22:00 PM Sri Lanka Standard Time (GMT +5:30).
                </p>
              </div>

              {/* Direct Action Channels */}
              <div className="space-y-4 text-xs text-[#121212]">
                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/${HOTEL_CONFIG.whatsappNumber}?text=Hello%20Iron%20Loft%20Concierge,%20I%20have%20an%20inquiry.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 bg-[#F3EFE6] border border-[#121212]/8 hover:border-[#715B32] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#121212] text-[#C2A676] group-hover:bg-[#715B32] group-hover:text-white transition-colors">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-[#715B32] block">
                        Immediate Messaging
                      </span>
                      <span className="text-sm font-medium text-[#121212]">
                        WhatsApp Concierge
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-[#715B32] font-semibold uppercase tracking-wider">
                    Chat Now →
                  </span>
                </a>

                {/* Email Channel */}
                <a
                  href={`mailto:${HOTEL_CONFIG.email}`}
                  className="flex items-center justify-between p-5 bg-[#F3EFE6] border border-[#121212]/8 hover:border-[#715B32] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#121212] text-[#C2A676] group-hover:bg-[#715B32] group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-[#715B32] block">
                        Official Inquiries
                      </span>
                      <span className="text-sm font-medium text-[#121212]">
                        {HOTEL_CONFIG.email}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-[#715B32] font-semibold uppercase tracking-wider">
                    Email →
                  </span>
                </a>

                {/* Phone Channel */}
                <a
                  href={`tel:${HOTEL_CONFIG.phone}`}
                  className="flex items-center justify-between p-5 bg-[#F3EFE6] border border-[#121212]/8 hover:border-[#715B32] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#121212] text-[#C2A676] group-hover:bg-[#715B32] group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-[#715B32] block">
                        Voice Telephone
                      </span>
                      <span className="text-sm font-medium text-[#121212] font-mono">
                        {HOTEL_CONFIG.phone}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-[#715B32] font-semibold uppercase tracking-wider">
                    Call →
                  </span>
                </a>
              </div>

              {/* Physical Sanctuary Address & Map */}
              <div className="p-6 bg-[#EAE5D9] border border-[#121212]/8 space-y-4">
                <span className="text-[11px] font-semibold tracking-widest uppercase text-[#715B32] block">
                  Sanctuary Coordinates
                </span>
                <p className="text-xs text-[#121212] font-light leading-relaxed">
                  {HOTEL_CONFIG.address}
                </p>
                <div className="font-mono text-xs text-[#715B32]">
                  {HOTEL_CONFIG.coordinates}
                </div>
                <div className="text-[11px] text-[#5A564F] pt-2 border-t border-[#121212]/8 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#715B32]" />
                  <span>Check-in: 14:00 · Check-out: 11:00</span>
                </div>
              </div>
            </div>

            {/* Right: Contact Enquiry Form */}
            <div className="lg:col-span-7 bg-[#F3EFE6] p-8 sm:p-12 border border-[#121212]/8">
              {submitted ? (
                <div className="space-y-6 text-center py-12">
                  <div className="w-16 h-16 bg-[#121212] text-[#C2A676] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#715B32] block">
                      Inquiry Dispatched
                    </span>
                    <h3 className="font-display text-3xl font-normal text-[#121212]">
                      Thank you, {formData.name}.
                    </h3>
                    <p className="text-sm font-light text-[#5A564F] max-w-md mx-auto leading-relaxed">
                      Your inquiry has been received by our reservations team. A concierge will review your message and reply to {formData.email} within 4 hours.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      type="button"
                      onClick={handleSendWhatsApp}
                      className="h-11 px-6 bg-[#121212] text-[#F9F6F0] text-xs font-semibold tracking-[0.14em] uppercase hover:bg-[#715B32] transition-colors flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 text-[#C2A676]" />
                      <span>Also Open in WhatsApp</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="h-11 px-6 border border-[#121212] text-[#121212] text-xs font-semibold tracking-[0.14em] uppercase hover:bg-white transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2 border-b border-[#121212]/8 pb-4">
                    <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#715B32] block">
                      Inquiry Form
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#121212]">
                      Send an Architectural Inquiry
                    </h3>
                    <p className="text-xs text-[#5A564F] font-light">
                      Please fill out the form below. For urgent reservations within 48 hours, we recommend reaching out via WhatsApp directly.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 bg-red-100 text-red-800 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-semibold tracking-[0.16em] uppercase text-[#715B32] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Julian Henderson"
                        className="w-full bg-transparent border-b border-[#121212]/20 py-2.5 text-xs text-[#121212] placeholder:text-[#5A564F]/50 focus:outline-hidden focus:border-[#715B32] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-semibold tracking-[0.16em] uppercase text-[#715B32] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. julian@example.com"
                        className="w-full bg-transparent border-b border-[#121212]/20 py-2.5 text-xs text-[#121212] placeholder:text-[#5A564F]/50 focus:outline-hidden focus:border-[#715B32] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-semibold tracking-[0.16em] uppercase text-[#715B32] mb-1">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +44 7911 123456"
                        className="w-full bg-transparent border-b border-[#121212]/20 py-2.5 text-xs text-[#121212] placeholder:text-[#5A564F]/50 focus:outline-hidden focus:border-[#715B32] transition-colors font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-semibold tracking-[0.16em] uppercase text-[#715B32] mb-1">
                        Inquiry Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-transparent border-b border-[#121212]/20 py-2.5 text-xs text-[#121212] focus:outline-hidden focus:border-[#715B32] transition-colors cursor-pointer"
                      >
                        <option value="General Inquiry">General Residence Inquiry</option>
                        <option value="Suite Availability">Suite Availability & Rates</option>
                        <option value="Private Buyout">Full Enclave Private Buyout (4 Suites)</option>
                        <option value="Experiences & Surf">Surf Coaching & Southern Experiences</option>
                        <option value="Airport Transfer">Airport Transfer & Transportation</option>
                        <option value="Media & Architecture">Press, Media & Architectural Inquiries</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold tracking-[0.16em] uppercase text-[#715B32] mb-1">
                      Target Travel Dates (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.dates}
                      onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                      placeholder="e.g. 15 December – 22 December 2026 (7 Nights)"
                      className="w-full bg-transparent border-b border-[#121212]/20 py-2.5 text-xs text-[#121212] placeholder:text-[#5A564F]/50 focus:outline-hidden focus:border-[#715B32] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold tracking-[0.16em] uppercase text-[#715B32] mb-1">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share any specific requirements, guest count, or questions..."
                      className="w-full bg-transparent border-b border-[#121212]/20 py-2.5 text-xs text-[#121212] placeholder:text-[#5A564F]/50 focus:outline-hidden focus:border-[#715B32] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="w-full sm:w-auto h-12 px-8 bg-[#121212] text-[#F9F6F0] text-xs font-semibold tracking-[0.16em] uppercase hover:bg-[#715B32] transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <span>Dispatch Inquiry</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={handleSendWhatsApp}
                      className="w-full sm:w-auto h-12 px-6 border border-[#121212] text-[#121212] text-xs font-semibold tracking-[0.14em] uppercase hover:bg-[#121212] hover:text-[#F9F6F0] transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 text-[#715B32]" />
                      <span>Send via WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
