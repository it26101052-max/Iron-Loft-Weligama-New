import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, Home, ArrowRight } from 'lucide-react';
import { ROOMS } from '../data/hotelData';

interface BookingBarProps {
  initialRoomSlug?: string;
  className?: string;
}

export const BookingBar: React.FC<BookingBarProps> = ({ initialRoomSlug, className = '' }) => {
  const navigate = useNavigate();

  // Helper to format date YYYY-MM-DD
  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const today = new Date();
  const defaultCheckIn = new Date(today);
  defaultCheckIn.setDate(today.getDate() + 7);
  const defaultCheckOut = new Date(defaultCheckIn);
  defaultCheckOut.setDate(defaultCheckIn.getDate() + 3);

  const [checkIn, setCheckIn] = useState(formatDate(defaultCheckIn));
  const [checkOut, setCheckOut] = useState(formatDate(defaultCheckOut));
  const [guests, setGuests] = useState('2');
  const [roomSlug, setRoomSlug] = useState(initialRoomSlug || 'the-iron-penthouse');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      checkIn,
      checkOut,
      guests,
      room: roomSlug,
    });
    navigate(`/booking?${params.toString()}`);
  };

  return (
    <div className={`w-full bg-[#1A1A1A] text-[#F9F6F0] border border-[#C2A676]/30 shadow-2xl ${className}`}>
      <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 divide-y md:divide-y-0 lg:divide-x divide-white/10">
        {/* Check-In */}
        <div className="lg:col-span-3 p-4 sm:p-5 flex items-center gap-3">
          <Calendar className="w-5 h-5 text-[#C2A676] shrink-0" />
          <div className="flex-1">
            <label htmlFor="bar-checkin" className="block text-[10px] font-semibold tracking-[0.18em] uppercase text-[#C2A676]">
              Arrival Date
            </label>
            <input
              id="bar-checkin"
              type="date"
              value={checkIn}
              min={formatDate(today)}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-transparent text-sm text-[#F9F6F0] font-light focus:outline-hidden cursor-pointer"
            />
          </div>
        </div>

        {/* Check-Out */}
        <div className="lg:col-span-3 p-4 sm:p-5 flex items-center gap-3">
          <Calendar className="w-5 h-5 text-[#C2A676] shrink-0" />
          <div className="flex-1">
            <label htmlFor="bar-checkout" className="block text-[10px] font-semibold tracking-[0.18em] uppercase text-[#C2A676]">
              Departure Date
            </label>
            <input
              id="bar-checkout"
              type="date"
              value={checkOut}
              min={checkIn}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-transparent text-sm text-[#F9F6F0] font-light focus:outline-hidden cursor-pointer"
            />
          </div>
        </div>

        {/* Guests Selector */}
        <div className="lg:col-span-2 p-4 sm:p-5 flex items-center gap-3">
          <Users className="w-5 h-5 text-[#C2A676] shrink-0" />
          <div className="flex-1">
            <label htmlFor="bar-guests" className="block text-[10px] font-semibold tracking-[0.18em] uppercase text-[#C2A676]">
              Occupancy
            </label>
            <select
              id="bar-guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-transparent text-sm text-[#F9F6F0] font-light focus:outline-hidden cursor-pointer"
            >
              <option value="1" className="bg-[#1A1A1A] text-white">1 Guest</option>
              <option value="2" className="bg-[#1A1A1A] text-white">2 Guests</option>
              <option value="3" className="bg-[#1A1A1A] text-white">3 Guests</option>
              <option value="4" className="bg-[#1A1A1A] text-white">4 Guests</option>
            </select>
          </div>
        </div>

        {/* Room / Suite */}
        <div className="lg:col-span-2 p-4 sm:p-5 flex items-center gap-3">
          <Home className="w-5 h-5 text-[#C2A676] shrink-0" />
          <div className="flex-1">
            <label htmlFor="bar-room" className="block text-[10px] font-semibold tracking-[0.18em] uppercase text-[#C2A676]">
              Residence
            </label>
            <select
              id="bar-room"
              value={roomSlug}
              onChange={(e) => setRoomSlug(e.target.value)}
              className="w-full bg-transparent text-sm text-[#F9F6F0] font-light focus:outline-hidden cursor-pointer truncate"
            >
              {ROOMS.map((r) => (
                <option key={r.slug} value={r.slug} className="bg-[#1A1A1A] text-white">
                  {r.name} (${r.pricePerNight})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Search / CTA */}
        <div className="lg:col-span-2 p-3 sm:p-4 flex items-center">
          <button
            type="submit"
            className="w-full h-12 bg-[#C2A676] text-[#121212] font-semibold text-xs tracking-[0.16em] uppercase hover:bg-white transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <span>Inquire Stay</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
};
