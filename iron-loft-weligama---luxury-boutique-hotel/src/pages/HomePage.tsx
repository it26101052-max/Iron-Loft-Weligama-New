import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, ShieldCheck, Waves, Sparkles, MapPin, ArrowUpRight } from 'lucide-react';
import { ROOMS, EXPERIENCES, HOTEL_HIGHLIGHTS, HOTEL_CONFIG } from '../data/hotelData';
import { BookingBar } from '../components/BookingBar';
import { RoomCard } from '../components/RoomCard';

export const HomePage: React.FC = () => {
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#121212]">
      {/* 1. Cinematic Hero Section */}
      <section className="relative w-full min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#121212]">
        {/* Background Image with rich editorial contrast gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_weligama_iron_loft_1793974561163.jpg"
            alt="Iron Loft Weligama architectural coastal hotel"
            referrerPolicy="no-referrer"
            onLoad={() => setHeroImageLoaded(true)}
            className={`w-full h-full object-cover object-center transition-all duration-1000 ${
              heroImageLoaded ? 'scale-100 opacity-90' : 'scale-105 opacity-0'
            }`}
          />
          {/* Subtle multi-tier architectural gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-[#121212]/20" />
          <div className="absolute inset-0 bg-radial-[at_center_center] from-transparent via-[#121212]/20 to-[#121212]/60" />
        </div>

        {/* Top Hero Brand & Status */}
        <div className="relative z-10 max-w-[1600px] w-full mx-auto px-6 sm:px-8 lg:px-16 pt-12 sm:pt-16 flex items-center justify-between text-[#F9F6F0]">
          <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#C2A676] font-medium">
            <span>5.9735° N, 80.4287° E</span>
            <span aria-hidden="true">·</span>
            <span>Weligama Bay, Sri Lanka</span>
          </div>
          <div className="hidden sm:block text-xs font-light text-white/70 tracking-[0.16em] uppercase">
            Four Oceanfront Architectural Residences
          </div>
        </div>

        {/* Center Hero Headlines & Direct CTA */}
        <div className="relative z-10 max-w-[1600px] w-full mx-auto px-6 sm:px-8 lg:px-16 py-16 sm:py-20 text-[#F9F6F0]">
          <div className="max-w-3xl space-y-6">
            <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-[#C2A676] border-b border-[#C2A676]/40 pb-1">
              Understated Coastal Brutalism
            </span>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.08] text-balance">
              Where raw charcoal iron meets the eternal rhythm of the Indian Ocean.
            </h1>
            <p className="text-base sm:text-lg font-light text-white/80 max-w-xl leading-relaxed">
              An architectural sanctuary carved into the southern cliffside of Weligama. Intimate, unhurried, and sculpted from monolithic basalt, travertine stone, and weathered steel.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/booking"
                className="h-13 px-8 bg-[#C2A676] text-[#121212] text-xs font-semibold tracking-[0.18em] uppercase hover:bg-white transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <span>Reserve Your Residence</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/rooms"
                className="h-13 px-8 border border-white/40 text-white text-xs font-semibold tracking-[0.18em] uppercase hover:bg-white hover:text-[#121212] transition-colors duration-200 flex items-center justify-center"
              >
                Explore The Suites
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Hero: Anchored Monolithic Booking Bar */}
        <div className="relative z-10 max-w-[1600px] w-full mx-auto px-6 sm:px-8 lg:px-16 pb-8 sm:pb-12">
          <BookingBar />
        </div>
      </section>

      {/* 2. Editorial Introduction & Philosophy */}
      <section className="py-24 sm:py-32 border-b border-[#121212]/8">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#715B32] block">
                The Architectural Philosophy
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-normal tracking-tight text-[#121212] leading-tight">
                A sanctuary designed for unhurried contemplation.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-[#5A564F] text-base sm:text-lg font-light leading-relaxed">
              <p>
                Iron Loft Weligama rejects the disposable extravagance of conventional resort hospitality. Conceived through a radical dialogue between Japanese wabi-sabi and Sri Lankan tropical modernism, the architecture harnesses raw cast concrete and blackened iron frameworks to frame the raw coastal elements.
              </p>
              <p>
                Each of our four bespoke residences is oriented to capture the natural ocean trade winds, dissolving the boundary between indoors and the Indian Ocean. Here, the only schedules kept are the morning swell at Weligama point and the golden descent of the sun into the palm line.
              </p>
              <div className="pt-4 flex items-center gap-6 text-xs font-semibold tracking-[0.16em] uppercase text-[#121212]">
                <Link to="/about" className="inline-flex items-center gap-2 group hover:text-[#715B32] transition-colors">
                  <span className="underline underline-offset-8 decoration-[#C2A676]">Read Architectural Dossier</span>
                  <ArrowRight className="w-4 h-4 text-[#715B32] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Residences / Suites */}
      <section className="py-24 sm:py-32 bg-[#F3EFE6]/60 border-b border-[#121212]/8">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#121212]/8 pb-8">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#715B32] block">
                Private Quarters
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#121212]">
                The Residences & Suites
              </h2>
            </div>
            <Link
              to="/rooms"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#121212] hover:text-[#715B32] transition-colors group"
            >
              <span>View All 4 Suites</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOMS.slice(0, 3).map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Architectural Pillars & Highlights */}
      <section className="py-24 sm:py-32 border-b border-[#121212]/8 bg-[#121212] text-[#F9F6F0]">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 space-y-16">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C2A676] block">
              Pillars of Iron Loft
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-normal tracking-tight text-white leading-tight">
              Crafted from the earth, tempered by the sea.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/10 pt-4">
            {HOTEL_HIGHLIGHTS.map((highlight) => (
              <div key={highlight.number} className="pt-6 lg:pt-0 lg:px-6 first:pl-0 space-y-4">
                <span className="font-mono text-2xl font-light text-[#C2A676]">
                  {highlight.number}
                </span>
                <div className="space-y-1">
                  <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/50 block">
                    {highlight.subtitle}
                  </span>
                  <h3 className="font-display text-2xl font-normal text-white">
                    {highlight.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm font-light text-white/70 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Experience Previews */}
      <section className="py-24 sm:py-32 border-b border-[#121212]/8">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#121212]/8 pb-8">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#715B32] block">
                Immersion & Discovery
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#121212]">
                Curated Southern Experiences
              </h2>
            </div>
            <Link
              to="/experiences"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#121212] hover:text-[#715B32] transition-colors group"
            >
              <span>View All Experiences</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {EXPERIENCES.slice(0, 3).map((exp) => (
              <div
                key={exp.id}
                className="group bg-[#F3EFE6] border border-[#121212]/8 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE5D9]">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute top-4 left-4 bg-[#121212]/90 text-[#F9F6F0] px-3 py-1 text-[10px] font-semibold tracking-[0.18em] uppercase">
                      {exp.category}
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 space-y-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#715B32] block">
                      Duration: {exp.duration} · {exp.timing}
                    </span>
                    <h3 className="font-display text-2xl font-normal text-[#121212] group-hover:text-[#715B32] transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-light text-[#5A564F] leading-relaxed line-clamp-3">
                      {exp.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0">
                  <Link
                    to="/experiences"
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase text-[#121212] group-hover:text-[#715B32] transition-colors"
                  >
                    <span>Discover Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Photo Highlights Showcase */}
      <section className="py-24 sm:py-32 bg-[#EAE5D9]/40 border-b border-[#121212]/8">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#715B32] block">
                Visual Sanctuary
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#121212]">
                Architectural Moments
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#121212] hover:text-[#715B32] transition-colors"
            >
              <span>Explore Gallery</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="aspect-[4/3] overflow-hidden border border-[#121212]/8 bg-stone-300">
              <img
                src="/src/assets/images/suite_ocean_loft_1793974562664.jpg"
                alt="Double height ocean loft"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden border border-[#121212]/8 bg-stone-300">
              <img
                src="/src/assets/images/wellness_pool_sanctuary_1793974563896.jpg"
                alt="Volcanic pool at dusk"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
              />
            </div>
            <div className="aspect-[4/3] overflow-hidden border border-[#121212]/8 bg-stone-300">
              <img
                src="/src/assets/images/suite_grand_penthouse_1793974562373.jpg"
                alt="Grand penthouse terrace"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Location Preview */}
      <section className="py-24 sm:py-32 border-b border-[#121212]/8">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#715B32] block">
                The Weligama Setting
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-normal tracking-tight text-[#121212] leading-tight">
                Secluded on the headland overlooking the bay.
              </h2>
              <p className="text-sm sm:text-base font-light text-[#5A564F] leading-relaxed">
                Positioned directly on the pristine southern coastline of Sri Lanka, Weligama Bay offers world-class gentle surf waves alongside untouched palm coves. Iron Loft is conveniently located for quiet seclusion while offering effortless access to the region's historic cultural sites.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#121212]/8">
                <div>
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-[#715B32] block">
                    Galle Dutch Fort
                  </span>
                  <span className="font-display text-2xl font-normal text-[#121212]">
                    35 Minutes
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-[#715B32] block">
                    Colombo Airport (CMB)
                  </span>
                  <span className="font-display text-2xl font-normal text-[#121212]">
                    2h 15m (Expressway)
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-[#715B32] block">
                    Mirissa Blue Whales
                  </span>
                  <span className="font-display text-2xl font-normal text-[#121212]">
                    10 Minutes
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-[#715B32] block">
                    Weligama Surf Point
                  </span>
                  <span className="font-display text-2xl font-normal text-[#121212]">
                    Direct Beach Access
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/location"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#121212] hover:text-[#715B32] transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#715B32]" />
                  <span>View Travel & Transit Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#1A1A1A] p-8 border border-[#121212]/10 text-white space-y-6">
              <div className="aspect-[16/10] bg-stone-800 overflow-hidden relative">
                <iframe
                  title="Iron Loft Weligama Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.211470557458!2d80.4287!3d5.9735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae113a7b5bbbbbb%3A0x123456789!2sWeligama%20Bay%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1680000000000!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(70%) contrast(1.1)' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
              <div className="flex items-center justify-between text-xs text-white/70">
                <span className="font-mono">{HOTEL_CONFIG.coordinates}</span>
                <span className="tracking-widest uppercase text-[#C2A676]">Southern Province</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final Cinematic Booking CTA */}
      <section className="relative py-28 sm:py-36 bg-[#121212] text-[#F9F6F0] overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/src/assets/images/hero_weligama_iron_loft_1793974561163.jpg"
            alt="Iron Loft architectural sanctuary"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-8">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C2A676] block">
            Exclusive Sanctuary
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-normal tracking-tight text-white leading-tight">
            Reserve your residency on the coast of Weligama.
          </h2>
          <p className="text-sm sm:text-base font-light text-white/70 max-w-xl mx-auto leading-relaxed">
            With only four bespoke suites, each stay at Iron Loft is tailored to absolute privacy. Speak directly with our reservations manager or inquire online.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/booking"
              className="h-13 px-8 bg-[#C2A676] text-[#121212] text-xs font-semibold tracking-[0.18em] uppercase hover:bg-white transition-colors duration-200"
            >
              Direct Reservation Inquiry
            </Link>
            <a
              href={`https://wa.me/${HOTEL_CONFIG.whatsappNumber}?text=Hello%20Concierge,%20I%20would%20like%20to%20inquire%20about%20staying%20at%20Iron%20Loft%20Weligama.`}
              target="_blank"
              rel="noopener noreferrer"
              className="h-13 px-8 border border-white/30 text-[#F9F6F0] text-xs font-semibold tracking-[0.18em] uppercase hover:bg-white/10 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <span>WhatsApp Concierge</span>
              <ArrowUpRight className="w-4 h-4 text-[#C2A676]" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
