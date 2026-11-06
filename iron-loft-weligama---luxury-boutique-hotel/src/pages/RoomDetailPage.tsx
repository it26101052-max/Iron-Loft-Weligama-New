import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  Users,
  BedDouble,
  Eye,
  Check,
  Calendar,
  MessageCircle,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { ROOMS, HOTEL_CONFIG, Room } from '../data/hotelData';

export const RoomDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Find room or fallback to first
  const roomIndex = ROOMS.findIndex((r) => r.slug === slug);
  const room = roomIndex !== -1 ? ROOMS[roomIndex] : ROOMS[0];

  const prevRoom = ROOMS[(roomIndex - 1 + ROOMS.length) % ROOMS.length];
  const nextRoom = ROOMS[(roomIndex + 1) % ROOMS.length];

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Quick booking state
  const today = new Date();
  const defCheckIn = new Date(today);
  defCheckIn.setDate(today.getDate() + 10);
  const defCheckOut = new Date(defCheckIn);
  defCheckOut.setDate(defCheckIn.getDate() + 3);

  const [checkIn, setCheckIn] = useState(defCheckIn.toISOString().split('T')[0]);
  const [checkOut, setCheckOut] = useState(defCheckOut.toISOString().split('T')[0]);
  const [guests, setGuests] = useState('2');

  const nights = Math.max(
    1,
    Math.round(
      (new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24)
    ) || 1
  );
  const estimatedTotal = room.pricePerNight * nights;

  const handleBookNow = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/booking?room=${room.slug}&checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`);
  };

  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#121212]">
      {/* Top Breadcrumb & Navigation */}
      <div className="bg-[#121212] text-white/70 py-4 px-6 sm:px-8 lg:px-16 border-b border-white/10 text-xs">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          <Link
            to="/rooms"
            className="flex items-center gap-2 hover:text-[#C2A676] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="tracking-[0.14em] uppercase">All Suites Collection</span>
          </Link>
          <div className="hidden sm:flex items-center gap-4 text-[11px] tracking-wider uppercase text-white/50">
            <span>Residence {roomIndex + 1} of {ROOMS.length}</span>
            <span>·</span>
            <span className="text-[#C2A676]">{room.name}</span>
          </div>
        </div>
      </div>

      {/* Main Suite Hero Gallery */}
      <section className="bg-[#121212] text-[#F9F6F0] py-8 sm:py-12 border-b border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 space-y-6">
          {/* Active Featured Image */}
          <div className="relative aspect-[16/9] lg:aspect-[21/9] w-full overflow-hidden bg-[#1A1A1A] border border-white/10">
            <img
              src={room.images[activeImageIndex] || room.images[0]}
              alt={room.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-all duration-700"
            />
            <div className="absolute bottom-6 left-6 bg-[#121212]/90 backdrop-blur-xs px-4 py-2 border border-white/10 text-xs text-white/90">
              <span className="font-mono text-[#C2A676]">{activeImageIndex + 1}</span>
              <span className="text-white/40"> / {room.images.length}</span>
              <span className="ml-3 uppercase tracking-wider text-[11px] text-white/70">
                {activeImageIndex === 0 ? 'Primary Architectural View' : `Perspective ${activeImageIndex + 1}`}
              </span>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="grid grid-cols-4 gap-3 sm:gap-4">
            {room.images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                className={`relative aspect-[16/10] overflow-hidden border transition-all cursor-pointer ${
                  activeImageIndex === idx
                    ? 'border-[#C2A676] opacity-100 ring-1 ring-[#C2A676]'
                    : 'border-white/10 opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Suite Details & Booking Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Suite Architectural Narrative & Amenities */}
            <div className="lg:col-span-8 space-y-12">
              {/* Title & Core Metadata */}
              <div className="space-y-4 border-b border-[#121212]/8 pb-8">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#715B32] block">
                  {room.subtitle}
                </span>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#121212]">
                  {room.name}
                </h1>
                <p className="text-sm sm:text-base font-light text-[#5A564F] leading-relaxed">
                  {room.tagline}
                </p>

                {/* Key Specs Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#121212]/8 text-xs">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#715B32] font-semibold block">
                      Internal & Terrace Area
                    </span>
                    <span className="text-sm font-normal text-[#121212] font-mono mt-1 block">
                      {room.area}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#715B32] font-semibold block">
                      Maximum Occupancy
                    </span>
                    <span className="text-sm font-normal text-[#121212] mt-1 block">
                      {room.guests}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#715B32] font-semibold block">
                      Bedding Arrangement
                    </span>
                    <span className="text-sm font-normal text-[#121212] mt-1 block">
                      {room.bed}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#715B32] font-semibold block">
                      Coastal Aspect
                    </span>
                    <span className="text-sm font-normal text-[#121212] mt-1 block">
                      {room.view}
                    </span>
                  </div>
                </div>
              </div>

              {/* Long Description Prose */}
              <div className="space-y-4 text-sm sm:text-base font-light text-[#5A564F] leading-relaxed">
                <h3 className="font-display text-2xl font-normal text-[#121212] tracking-tight">
                  The Sanctuary Experience
                </h3>
                {room.longDescription.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Architectural Highlights */}
              <div className="p-8 bg-[#F3EFE6] border border-[#121212]/8 space-y-4">
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#715B32] block">
                  Architectural Intent
                </span>
                <ul className="space-y-3 text-xs sm:text-sm text-[#121212] font-light">
                  {room.architecturalHighlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-[#C2A676] mt-1.5 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Full Amenities Grid */}
              <div className="space-y-8 border-t border-[#121212]/8 pt-8">
                <h3 className="font-display text-2xl font-normal text-[#121212] tracking-tight">
                  Suite Amenities & Inclusions
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs text-[#121212]">
                  {/* Comfort */}
                  <div className="space-y-3">
                    <span className="text-[11px] font-semibold tracking-widest uppercase text-[#715B32] block border-b border-[#121212]/8 pb-2">
                      Sleep & Comfort
                    </span>
                    <ul className="space-y-2 font-light text-[#5A564F]">
                      {room.amenities.comfort.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#715B32] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bathroom */}
                  <div className="space-y-3">
                    <span className="text-[11px] font-semibold tracking-widest uppercase text-[#715B32] block border-b border-[#121212]/8 pb-2">
                      Bath & Wellness
                    </span>
                    <ul className="space-y-2 font-light text-[#5A564F]">
                      {room.amenities.bathroom.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#715B32] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology */}
                  <div className="space-y-3">
                    <span className="text-[11px] font-semibold tracking-widest uppercase text-[#715B32] block border-b border-[#121212]/8 pb-2">
                      Connectivity & Sound
                    </span>
                    <ul className="space-y-2 font-light text-[#5A564F]">
                      {room.amenities.technology.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#715B32] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Complimentary */}
                  <div className="space-y-3">
                    <span className="text-[11px] font-semibold tracking-widest uppercase text-[#715B32] block border-b border-[#121212]/8 pb-2">
                      Resident Privileges
                    </span>
                    <ul className="space-y-2 font-light text-[#5A564F]">
                      {room.amenities.complimentary.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#715B32] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Monolith Reservation Box */}
            <div className="lg:col-span-4 sticky top-28">
              <div className="bg-[#1A1A1A] text-[#F9F6F0] p-6 sm:p-8 border border-[#C2A676]/30 shadow-2xl space-y-6">
                <div className="border-b border-white/10 pb-4 flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C2A676] block">
                      Nightly Rate
                    </span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="font-mono text-3xl font-light text-white">
                        ${room.pricePerNight}
                      </span>
                      <span className="text-xs text-white/50 uppercase tracking-widest font-light">
                        USD / Night
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] text-[#C2A676] tracking-wider uppercase font-mono">
                    Direct Best Rate
                  </span>
                </div>

                <form onSubmit={handleBookNow} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-[10px] font-semibold tracking-[0.16em] uppercase text-[#C2A676] mb-1">
                      Check-In Date
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-[#121212] border border-white/20 px-3 py-2.5 text-[#F9F6F0] font-light focus:outline-hidden focus:border-[#C2A676]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold tracking-[0.16em] uppercase text-[#C2A676] mb-1">
                      Check-Out Date
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      min={checkIn}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-[#121212] border border-white/20 px-3 py-2.5 text-[#F9F6F0] font-light focus:outline-hidden focus:border-[#C2A676]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold tracking-[0.16em] uppercase text-[#C2A676] mb-1">
                      Guests
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full bg-[#121212] border border-white/20 px-3 py-2.5 text-[#F9F6F0] font-light focus:outline-hidden focus:border-[#C2A676]"
                    >
                      <option value="1">1 Adult</option>
                      <option value="2">2 Adults</option>
                      <option value="3">3 Adults</option>
                      <option value="4">4 Adults</option>
                    </select>
                  </div>

                  {/* Live Calculation */}
                  <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-white/70">
                    <div className="flex justify-between">
                      <span>${room.pricePerNight} × {nights} Night{nights > 1 ? 's' : ''}</span>
                      <span className="font-mono text-white">${estimatedTotal}</span>
                    </div>
                    <div className="flex justify-between text-[11px] text-white/50">
                      <span>Sri Lanka Tourism Levy & Service</span>
                      <span>Included</span>
                    </div>
                    <div className="flex justify-between text-sm font-semibold text-white pt-2 border-t border-white/10">
                      <span>Estimated Total</span>
                      <span className="font-mono text-[#C2A676] text-base">${estimatedTotal}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full h-12 bg-[#C2A676] text-[#121212] font-semibold text-xs tracking-[0.16em] uppercase hover:bg-white transition-colors duration-200 flex items-center justify-center gap-2 mt-2"
                  >
                    <span>Reserve {room.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>

                <div className="pt-2 border-t border-white/10 text-center">
                  <a
                    href={`https://wa.me/${HOTEL_CONFIG.whatsappNumber}?text=Hello%20Concierge,%20I%20am%20interested%20in%20reserving%20the%20${encodeURIComponent(room.name)}%20from%20${checkIn}%20to%20${checkOut}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-[#C2A676] hover:underline"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                  <p className="text-[10px] text-white/40 mt-2 font-light">
                    Direct boutique booking. No hidden fees. Pay upon arrival.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prev / Next Suite Navigator */}
      <section className="border-t border-[#121212]/8 bg-[#F3EFE6]">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#121212]/8">
          <Link
            to={`/rooms/${prevRoom.slug}`}
            className="p-8 sm:p-12 group hover:bg-[#EAE5D9] transition-colors flex items-center gap-6"
          >
            <div className="p-3 bg-[#121212] text-[#C2A676] group-hover:bg-[#C2A676] group-hover:text-[#121212] transition-colors shrink-0">
              <ArrowLeft className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-semibold tracking-widest uppercase text-[#715B32] block">
                Previous Residence
              </span>
              <span className="font-display text-2xl font-normal text-[#121212]">
                {prevRoom.name}
              </span>
              <span className="text-xs text-[#5A564F] block font-mono mt-0.5">
                ${prevRoom.pricePerNight} / Night
              </span>
            </div>
          </Link>

          <Link
            to={`/rooms/${nextRoom.slug}`}
            className="p-8 sm:p-12 group hover:bg-[#EAE5D9] transition-colors flex items-center justify-between gap-6 text-right"
          >
            <div className="w-full">
              <span className="text-[10px] font-semibold tracking-widest uppercase text-[#715B32] block">
                Next Residence
              </span>
              <span className="font-display text-2xl font-normal text-[#121212]">
                {nextRoom.name}
              </span>
              <span className="text-xs text-[#5A564F] block font-mono mt-0.5">
                ${nextRoom.pricePerNight} / Night
              </span>
            </div>
            <div className="p-3 bg-[#121212] text-[#C2A676] group-hover:bg-[#C2A676] group-hover:text-[#121212] transition-colors shrink-0">
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};
