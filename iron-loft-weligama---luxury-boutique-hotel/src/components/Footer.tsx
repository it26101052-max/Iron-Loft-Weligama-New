import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Mail, MapPin, Phone, ArrowRight, Check } from 'lucide-react';
import { HOTEL_CONFIG, ROOMS } from '../data/hotelData';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim() && newsletterEmail.includes('@')) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#121212] text-[#F9F6F0] pt-20 pb-12 border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
        {/* Top Tier: Brand Statement & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C2A676] block">
              Architectural Sanctuary · Southern Sri Lanka
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#F9F6F0] max-w-2xl leading-tight">
              Iron Loft Weligama is an unhurried sanctuary where raw coastal brutalism meets ocean calm.
            </h2>
            <p className="text-sm font-light text-white/60 max-w-xl leading-relaxed">
              Designed with blackened iron, volcanic stone, and warm alabaster plaster. Four private residences perched above the surf line of Weligama Bay.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <div className="bg-[#1A1A1A] p-6 sm:p-8 border border-white/10">
              <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#C2A676] block mb-2">
                Private Dispatch
              </span>
              <p className="text-xs text-white/70 mb-4">
                Receive seasonal seasonal surf reports, culinary evenings, and private residence availability.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-[#C2A676] py-3">
                  <Check className="w-4 h-4" />
                  <span>Your address has been added to our private guest journal.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 bg-transparent border-b border-white/30 px-3 py-2 text-xs text-[#F9F6F0] placeholder:text-white/40 focus:outline-hidden focus:border-[#C2A676] transition-colors"
                  />
                  <button
                    type="submit"
                    className="h-10 px-5 bg-[#C2A676] text-[#121212] font-semibold text-xs tracking-[0.12em] uppercase hover:bg-white transition-colors shrink-0 flex items-center justify-center gap-2"
                  >
                    <span>Inscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Middle Tier: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 py-14 border-b border-white/10 text-xs">
          {/* Column 1: Navigation */}
          <div className="col-span-1 lg:col-span-3 space-y-3">
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#C2A676] block">
              Exploration
            </span>
            <ul className="space-y-2.5 text-white/70 font-light">
              <li>
                <Link to="/" className="hover:text-[#C2A676] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#C2A676] transition-colors">About Our Architecture</Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-[#C2A676] transition-colors">Rooms & Suites</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#C2A676] transition-colors">Visual Gallery</Link>
              </li>
              <li>
                <Link to="/experiences" className="hover:text-[#C2A676] transition-colors">Curated Experiences</Link>
              </li>
              <li>
                <Link to="/location" className="hover:text-[#C2A676] transition-colors">Location & Surf Bay</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#C2A676] transition-colors">Contact Concierge</Link>
              </li>
            </ul>
          </div>

          {/* Column 2: The Residences */}
          <div className="col-span-1 lg:col-span-3 space-y-3">
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#C2A676] block">
              The Residences
            </span>
            <ul className="space-y-2.5 text-white/70 font-light">
              {ROOMS.map((room) => (
                <li key={room.id}>
                  <Link
                    to={`/rooms/${room.slug}`}
                    className="hover:text-[#C2A676] transition-colors flex items-center justify-between group"
                  >
                    <span>{room.name}</span>
                    <span className="text-[10px] text-white/40 group-hover:text-[#C2A676]">
                      ${room.pricePerNight}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/booking"
                  className="text-[#C2A676] font-medium tracking-wider uppercase hover:underline"
                >
                  Direct Reservation Inquiry →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Direct Concierge */}
          <div className="col-span-2 lg:col-span-3 space-y-3">
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#C2A676] block">
              Concierge Desk
            </span>
            <div className="space-y-2.5 text-white/70 font-light">
              <a
                href={`tel:${HOTEL_CONFIG.phone}`}
                className="flex items-center gap-2 hover:text-[#C2A676] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C2A676] shrink-0" />
                <span>{HOTEL_CONFIG.phone}</span>
              </a>
              <a
                href={`mailto:${HOTEL_CONFIG.email}`}
                className="flex items-center gap-2 hover:text-[#C2A676] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#C2A676] shrink-0" />
                <span>{HOTEL_CONFIG.email}</span>
              </a>
              <a
                href={`https://wa.me/${HOTEL_CONFIG.whatsappNumber}?text=Hello%20Concierge,%20I%20have%20an%20inquiry%20regarding%20Iron%20Loft%20Weligama.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#C2A676] font-medium hover:underline pt-1"
              >
                <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Direct WhatsApp Chat</span>
              </a>
              <p className="text-[11px] text-white/50 pt-2">
                Check-in: {HOTEL_CONFIG.checkIn} · Check-out: {HOTEL_CONFIG.checkOut}
              </p>
            </div>
          </div>

          {/* Column 4: Location & Coordinates */}
          <div className="col-span-2 lg:col-span-3 space-y-3">
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#C2A676] block">
              Sanctuary Address
            </span>
            <div className="space-y-2 text-white/70 font-light">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C2A676] shrink-0 mt-0.5" />
                <span>{HOTEL_CONFIG.address}</span>
              </p>
              <div className="pt-2 font-mono text-[11px] tracking-wider text-white/50">
                {HOTEL_CONFIG.coordinates}
              </div>
              <p className="text-[11px] text-white/40">
                Galle Dutch Fort: 35 min · Colombo Airport (CMB): 2h 15m
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Quiet Inscription */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50 font-light">
          <div>
            © {new Date().getFullYear()} {HOTEL_CONFIG.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-white transition-colors">Architectural Code</Link>
            <span>·</span>
            <Link to="/booking" className="hover:text-white transition-colors">Booking Guarantee</Link>
            <span>·</span>
            <Link to="/contact" className="hover:text-white transition-colors">Privacy & Concierge</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
