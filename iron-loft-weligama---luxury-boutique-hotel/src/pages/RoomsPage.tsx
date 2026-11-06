import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Check, Sparkles, SlidersHorizontal } from 'lucide-react';
import { ROOMS } from '../data/hotelData';
import { RoomCard } from '../components/RoomCard';
import { BookingBar } from '../components/BookingBar';

export const RoomsPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ocean' | 'penthouse' | 'garden'>('all');

  const filteredRooms = ROOMS.filter((room) => {
    if (filter === 'all') return true;
    if (filter === 'ocean') return room.view.toLowerCase().includes('ocean');
    if (filter === 'penthouse') return room.slug.includes('penthouse');
    if (filter === 'garden') return room.view.toLowerCase().includes('garden');
    return true;
  });

  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#121212]">
      {/* Header Banner */}
      <section className="relative py-24 sm:py-32 bg-[#121212] text-[#F9F6F0] overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-25">
          <img
            src="/src/assets/images/suite_grand_penthouse_1793974562373.jpg"
            alt="Suites collection"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#C2A676]">
            <span>Private Quarters</span>
            <span aria-hidden="true">·</span>
            <span>Weligama, Sri Lanka</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white max-w-4xl leading-tight">
            Four bespoke suites sculpted for solace and stillness.
          </h1>
          <p className="text-base sm:text-lg font-light text-white/70 max-w-2xl leading-relaxed">
            Every residence at Iron Loft offers generous private outdoor living, dedicated plunge or soaking pools, custom blackened steel detailing, and uninterrupted views across the tropical landscape.
          </p>
        </div>
      </section>

      {/* Booking Quick Selector Strip */}
      <section className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 -mt-8 relative z-20">
        <BookingBar />
      </section>

      {/* Main Rooms Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 space-y-12">
          {/* Interactive Filter Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#121212]/8 pb-6">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-[#715B32]" />
              <span className="text-xs font-semibold tracking-[0.16em] uppercase text-[#121212]">
                Filter Quarters ({filteredRooms.length} Available)
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setFilter('all')}
                className={`px-4 py-2 text-xs font-semibold tracking-[0.12em] uppercase transition-colors ${
                  filter === 'all'
                    ? 'bg-[#121212] text-[#F9F6F0]'
                    : 'bg-[#EAE5D9] text-[#121212] hover:bg-[#121212]/10'
                }`}
              >
                All Suites
              </button>
              <button
                type="button"
                onClick={() => setFilter('ocean')}
                className={`px-4 py-2 text-xs font-semibold tracking-[0.12em] uppercase transition-colors ${
                  filter === 'ocean'
                    ? 'bg-[#121212] text-[#F9F6F0]'
                    : 'bg-[#EAE5D9] text-[#121212] hover:bg-[#121212]/10'
                }`}
              >
                Oceanfront
              </button>
              <button
                type="button"
                onClick={() => setFilter('penthouse')}
                className={`px-4 py-2 text-xs font-semibold tracking-[0.12em] uppercase transition-colors ${
                  filter === 'penthouse'
                    ? 'bg-[#121212] text-[#F9F6F0]'
                    : 'bg-[#EAE5D9] text-[#121212] hover:bg-[#121212]/10'
                }`}
              >
                Rooftop Penthouse
              </button>
              <button
                type="button"
                onClick={() => setFilter('garden')}
                className={`px-4 py-2 text-xs font-semibold tracking-[0.12em] uppercase transition-colors ${
                  filter === 'garden'
                    ? 'bg-[#121212] text-[#F9F6F0]'
                    : 'bg-[#EAE5D9] text-[#121212] hover:bg-[#121212]/10'
                }`}
              >
                Garden Courtyard
              </button>
            </div>
          </div>

          {/* Suites Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* Direct Inclusions Guarantee */}
      <section className="py-20 bg-[#F3EFE6] border-t border-[#121212]/8">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#715B32] block">
              The Resident Privilege
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#121212]">
              Complimentary with every reservation.
            </h2>
            <p className="text-xs sm:text-sm font-light text-[#5A564F]">
              Every booking includes thoughtful inclusions curated to ensure effortless relaxation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-[#121212]">
            <div className="p-6 bg-[#F9F6F0] border border-[#121212]/8 space-y-2">
              <div className="flex items-center gap-2 font-semibold tracking-wider uppercase text-[#715B32]">
                <Check className="w-4 h-4 text-[#715B32]" />
                <span>Anytime Breakfast</span>
              </div>
              <p className="font-light text-[#5A564F] leading-relaxed">
                Enjoy tropical fruits, artisan sourdough, and local hoppers served whenever you wake, wherever you choose.
              </p>
            </div>

            <div className="p-6 bg-[#F9F6F0] border border-[#121212]/8 space-y-2">
              <div className="flex items-center gap-2 font-semibold tracking-wider uppercase text-[#715B32]">
                <Check className="w-4 h-4 text-[#715B32]" />
                <span>Dedicated Butler</span>
              </div>
              <p className="font-light text-[#5A564F] leading-relaxed">
                24/7 discreet WhatsApp and in-person assistance for luggage, transport, bookings, and refreshments.
              </p>
            </div>

            <div className="p-6 bg-[#F9F6F0] border border-[#121212]/8 space-y-2">
              <div className="flex items-center gap-2 font-semibold tracking-wider uppercase text-[#715B32]">
                <Check className="w-4 h-4 text-[#715B32]" />
                <span>Surf Board Valet</span>
              </div>
              <p className="font-light text-[#5A564F] leading-relaxed">
                Complimentary board storage, fresh water wash-down, organic surf wax, and daily wave conditions briefing.
              </p>
            </div>

            <div className="p-6 bg-[#F9F6F0] border border-[#121212]/8 space-y-2">
              <div className="flex items-center gap-2 font-semibold tracking-wider uppercase text-[#715B32]">
                <Check className="w-4 h-4 text-[#715B32]" />
                <span>Sunset Tea Ceremony</span>
              </div>
              <p className="font-light text-[#5A564F] leading-relaxed">
                Daily tasting of hand-picked Southern Province virgin white teas served with local spiced sweetmeats.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
