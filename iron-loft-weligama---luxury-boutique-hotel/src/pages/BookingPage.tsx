import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ROOMS, HOTEL_CONFIG, Room } from '../data/hotelData';
import {
  Calendar,
  Users,
  Home,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  Clock,
  Sparkles,
  ArrowRight,
  Copy,
  Check
} from 'lucide-react';

export const BookingPage: React.FC = () => {
  const [searchParams] = useSearchParams();

  // Helper date functions
  const formatDate = (date: Date) => date.toISOString().split('T')[0];
  const today = new Date();
  const defaultCheckIn = new Date(today);
  defaultCheckIn.setDate(today.getDate() + 14);
  const defaultCheckOut = new Date(defaultCheckIn);
  defaultCheckOut.setDate(defaultCheckIn.getDate() + 3);

  // Initialize form from URL params if present
  const queryRoom = searchParams.get('room');
  const queryCheckIn = searchParams.get('checkIn');
  const queryCheckOut = searchParams.get('checkOut');
  const queryGuests = searchParams.get('guests');
  const queryRequest = searchParams.get('request');

  const [selectedRoomSlug, setSelectedRoomSlug] = useState<string>(
    queryRoom || 'the-iron-penthouse'
  );
  const [checkIn, setCheckIn] = useState<string>(queryCheckIn || formatDate(defaultCheckIn));
  const [checkOut, setCheckOut] = useState<string>(queryCheckOut || formatDate(defaultCheckOut));
  const [adults, setAdults] = useState<string>(queryGuests || '2');
  const [children, setChildren] = useState<string>('0');

  // Guest details
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [specialRequests, setSpecialRequests] = useState(
    queryRequest ? `Inquiring regarding ${queryRequest.replace('experience-', 'experience: ')}` : ''
  );

  // Add-on options
  const [airportTransfer, setAirportTransfer] = useState(false);
  const [sunsetChampagne, setSunsetChampagne] = useState(false);
  const [privateSurfCoach, setPrivateSurfCoach] = useState(false);

  // Status
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [validationError, setValidationError] = useState('');
  const [copied, setCopied] = useState(false);

  // Selected room object
  const selectedRoom = ROOMS.find((r) => r.slug === selectedRoomSlug) || ROOMS[0];

  // Calculation
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const nights = Math.max(
    1,
    Math.round((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24)) || 1
  );

  const roomSubtotal = selectedRoom.pricePerNight * nights;
  const transferCost = airportTransfer ? 95 : 0;
  const champagneCost = sunsetChampagne ? 120 : 0;
  const surfCost = privateSurfCoach ? 75 : 0;
  const addOnsTotal = transferCost + champagneCost + surfCost;
  const totalEstimated = roomSubtotal + addOnsTotal;

  // Build formatted WhatsApp message
  const generateWhatsAppMessage = (refNum?: string) => {
    return `*IRON LOFT WELIGAMA — RESERVATION INQUIRY*
${refNum ? `*Reference:* #${refNum}\n` : ''}
*Guest:* ${firstName} ${lastName}
*Email:* ${email}
*Phone:* ${phone || 'Not provided'}
*Country:* ${country || 'International'}

*Residence:* ${selectedRoom.name}
*Dates:* ${checkIn} to ${checkOut} (${nights} Night${nights > 1 ? 's' : ''})
*Occupancy:* ${adults} Adults${Number(children) > 0 ? `, ${children} Children` : ''}

*Add-Ons Requested:*
${airportTransfer ? '• CMB Airport Private Chauffeur ($95)\n' : ''}${sunsetChampagne ? '• Sunset Terrace Champagne Setup ($120)\n' : ''}${privateSurfCoach ? '• Private Dawn Surf Coaching Session ($75)\n' : ''}${!airportTransfer && !sunsetChampagne && !privateSurfCoach ? '• None\n' : ''}
*Special Notes:* ${specialRequests || 'None'}
*Estimated Total:* $${totalEstimated} USD (Pay upon arrival)

_Please confirm availability and hold our residence._`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !email.includes('@')) {
      setValidationError('Please complete your name and a valid email address.');
      return;
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
      setValidationError('Departure date must be after arrival date.');
      return;
    }

    setValidationError('');
    const newRef = `ILW-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(newRef);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenWhatsAppDirect = () => {
    const msg = generateWhatsAppMessage(bookingRef || undefined);
    window.open(`https://wa.me/${HOTEL_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleCopySummary = () => {
    const text = generateWhatsAppMessage(bookingRef);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#121212]">
      {/* Header Banner */}
      <section className="relative py-20 sm:py-28 bg-[#121212] text-[#F9F6F0] overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-25">
          <img
            src="/src/assets/images/hero_weligama_iron_loft_1793974561163.jpg"
            alt="Booking Iron Loft"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#C2A676]">
            <span>Direct Reservations</span>
            <span aria-hidden="true">·</span>
            <span>Weligama Bay, Sri Lanka</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-normal tracking-tight text-white max-w-4xl leading-tight">
            Reserve your private sanctuary.
          </h1>
          <p className="text-sm sm:text-base font-light text-white/70 max-w-2xl leading-relaxed">
            Direct reservation inquiry with personal concierge confirmation. No immediate online credit card charging; rates are guaranteed and payable upon arrival.
          </p>
        </div>
      </section>

      {/* Main Reservation Container */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
          {submitted ? (
            /* Confirmation and Dispatch Card */
            <div className="max-w-3xl mx-auto bg-[#F3EFE6] border border-[#121212]/8 p-8 sm:p-14 space-y-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#121212] text-[#C2A676] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#715B32] block">
                  Reservation Inquiry Dispatched
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#121212]">
                  Thank you, {firstName}.
                </h2>
                <div className="inline-block px-4 py-2 bg-[#EAE5D9] border border-[#121212]/10 font-mono text-sm tracking-wider text-[#121212]">
                  Inquiry Reference: <strong>{bookingRef}</strong>
                </div>
                <p className="text-sm font-light text-[#5A564F] max-w-lg mx-auto leading-relaxed">
                  Your reservation request for <strong>{selectedRoom.name}</strong> from <strong>{checkIn}</strong> to <strong>{checkOut}</strong> has been logged. Our reservations manager will contact you at <strong>{email}</strong> within 4 hours to verify dates and confirm your sanctuary.
                </p>
              </div>

              {/* Inquiry Summary Box */}
              <div className="bg-[#F9F6F0] p-6 border border-[#121212]/8 space-y-4 text-xs">
                <span className="text-[11px] font-semibold tracking-widest uppercase text-[#715B32] block border-b border-[#121212]/8 pb-2">
                  Inquiry Specifications
                </span>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[#5A564F] block">Residence</span>
                    <span className="font-medium text-[#121212]">{selectedRoom.name}</span>
                  </div>
                  <div>
                    <span className="text-[#5A564F] block">Duration</span>
                    <span className="font-medium text-[#121212]">{nights} Night{nights > 1 ? 's' : ''} ({checkIn} – {checkOut})</span>
                  </div>
                  <div>
                    <span className="text-[#5A564F] block">Guests</span>
                    <span className="font-medium text-[#121212]">{adults} Adults{Number(children) > 0 ? `, ${children} Children` : ''}</span>
                  </div>
                  <div>
                    <span className="text-[#5A564F] block">Estimated Total</span>
                    <span className="font-mono font-semibold text-[#121212] text-sm">${totalEstimated} USD</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-[#121212]/8">
                <button
                  type="button"
                  onClick={handleOpenWhatsAppDirect}
                  className="w-full sm:w-auto h-12 px-8 bg-[#121212] text-[#F9F6F0] text-xs font-semibold tracking-[0.16em] uppercase hover:bg-[#715B32] transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#C2A676]" />
                  <span>Send Direct via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="w-full sm:w-auto h-12 px-6 border border-[#121212] text-[#121212] text-xs font-semibold tracking-[0.14em] uppercase hover:bg-white transition-colors flex items-center justify-center gap-2"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied to Clipboard' : 'Copy Summary'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-[#5A564F] underline hover:text-[#121212] p-2"
                >
                  Edit Inquiry
                </button>
              </div>
            </div>
          ) : (
            /* Reservation Form & Live Summary */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Form Fields */}
              <div className="lg:col-span-8 space-y-10">
                <form onSubmit={handleSubmit} className="space-y-10">
                  {validationError && (
                    <div className="p-4 bg-red-100 border border-red-300 text-red-900 text-xs">
                      {validationError}
                    </div>
                  )}

                  {/* Step 1: Residence Selection */}
                  <div className="bg-[#F3EFE6] p-6 sm:p-8 border border-[#121212]/8 space-y-6">
                    <div className="border-b border-[#121212]/8 pb-3">
                      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#715B32] block">
                        Step 01
                      </span>
                      <h3 className="font-display text-2xl font-normal text-[#121212]">
                        Select Your Residence
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {ROOMS.map((r) => {
                        const isSelected = r.slug === selectedRoomSlug;
                        return (
                          <div
                            key={r.slug}
                            onClick={() => setSelectedRoomSlug(r.slug)}
                            className={`p-4 border transition-all cursor-pointer flex flex-col justify-between ${
                              isSelected
                                ? 'bg-[#121212] text-[#F9F6F0] border-[#121212]'
                                : 'bg-[#F9F6F0] text-[#121212] border-[#121212]/10 hover:border-[#121212]/30'
                            }`}
                          >
                            <div className="space-y-2">
                              <div className="aspect-[16/9] overflow-hidden bg-stone-300 mb-2">
                                <img
                                  src={r.images[0]}
                                  alt={r.name}
                                  referrerPolicy="no-referrer"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex items-center justify-between">
                                <span className={`text-[10px] uppercase tracking-wider font-semibold ${isSelected ? 'text-[#C2A676]' : 'text-[#715B32]'}`}>
                                  {r.area.split('/')[0]}
                                </span>
                                <span className="font-mono text-xs font-semibold">
                                  ${r.pricePerNight} / night
                                </span>
                              </div>
                              <h4 className="font-display text-lg font-normal">
                                {r.name}
                              </h4>
                              <p className={`text-[11px] font-light line-clamp-2 ${isSelected ? 'text-white/70' : 'text-[#5A564F]'}`}>
                                {r.tagline}
                              </p>
                            </div>

                            <div className="pt-3 mt-3 border-t border-current/10 flex items-center justify-between text-[11px]">
                              <span>{isSelected ? '✓ Selected Residence' : 'Select'}</span>
                              <Link
                                to={`/rooms/${r.slug}`}
                                onClick={(e) => e.stopPropagation()}
                                className={`underline ${isSelected ? 'text-[#C2A676]' : 'text-[#715B32]'}`}
                              >
                                View Specs
                              </Link>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Dates & Occupancy */}
                  <div className="bg-[#F3EFE6] p-6 sm:p-8 border border-[#121212]/8 space-y-6">
                    <div className="border-b border-[#121212]/8 pb-3">
                      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#715B32] block">
                        Step 02
                      </span>
                      <h3 className="font-display text-2xl font-normal text-[#121212]">
                        Stay Duration & Occupancy
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                      <div>
                        <label className="block text-[10px] font-semibold tracking-[0.16em] uppercase text-[#715B32] mb-1">
                          Arrival Date *
                        </label>
                        <input
                          type="date"
                          required
                          value={checkIn}
                          min={formatDate(today)}
                          onChange={(e) => setCheckIn(e.target.value)}
                          className="w-full bg-[#F9F6F0] border border-[#121212]/20 px-3 py-2.5 text-xs text-[#121212] focus:outline-hidden focus:border-[#715B32]"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-semibold tracking-[0.16em] uppercase text-[#715B32] mb-1">
                          Departure Date *
                        </label>
                        <input
                          type="date"
                          required
                          value={checkOut}
                          min={checkIn}
                          onChange={(e) => setCheckOut(e.target.value)}
                          className="w-full bg-[#F9F6F0] border border-[#121212]/20 px-3 py-2.5 text-xs text-[#121212] focus:outline-hidden focus:border-[#715B32]"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-semibold tracking-[0.16em] uppercase text-[#715B32] mb-1">
                          Adults (12+ Yrs)
                        </label>
                        <select
                          value={adults}
                          onChange={(e) => setAdults(e.target.value)}
                          className="w-full bg-[#F9F6F0] border border-[#121212]/20 px-3 py-2.5 text-xs text-[#121212] focus:outline-hidden focus:border-[#715B32] cursor-pointer"
                        >
                          <option value="1">1 Adult</option>
                          <option value="2">2 Adults</option>
                          <option value="3">3 Adults</option>
                          <option value="4">4 Adults</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[10px] font-semibold tracking-[0.16em] uppercase text-[#715B32] mb-1">
                          Children (0–11 Yrs)
                        </label>
                        <select
                          value={children}
                          onChange={(e) => setChildren(e.target.value)}
                          className="w-full bg-[#F9F6F0] border border-[#121212]/20 px-3 py-2.5 text-xs text-[#121212] focus:outline-hidden focus:border-[#715B32] cursor-pointer"
                        >
                          <option value="0">0 Children</option>
                          <option value="1">1 Child</option>
                          <option value="2">2 Children</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Guest Profile */}
                  <div className="bg-[#F3EFE6] p-6 sm:p-8 border border-[#121212]/8 space-y-6">
                    <div className="border-b border-[#121212]/8 pb-3">
                      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#715B32] block">
                        Step 03
                      </span>
                      <h3 className="font-display text-2xl font-normal text-[#121212]">
                        Primary Resident Information
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
                      <div>
                        <label className="block text-[10px] font-semibold tracking-[0.16em] uppercase text-[#715B32] mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="e.g. Julian"
                          className="w-full bg-[#F9F6F0] border border-[#121212]/20 px-3 py-2.5 text-xs text-[#121212] focus:outline-hidden focus:border-[#715B32]"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-semibold tracking-[0.16em] uppercase text-[#715B32] mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="e.g. Henderson"
                          className="w-full bg-[#F9F6F0] border border-[#121212]/20 px-3 py-2.5 text-xs text-[#121212] focus:outline-hidden focus:border-[#715B32]"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-semibold tracking-[0.16em] uppercase text-[#715B32] mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. julian@example.com"
                          className="w-full bg-[#F9F6F0] border border-[#121212]/20 px-3 py-2.5 text-xs text-[#121212] focus:outline-hidden focus:border-[#715B32]"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-semibold tracking-[0.16em] uppercase text-[#715B32] mb-1">
                          WhatsApp / Mobile Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. +44 7911 123456"
                          className="w-full bg-[#F9F6F0] border border-[#121212]/20 px-3 py-2.5 text-xs text-[#121212] focus:outline-hidden focus:border-[#715B32] font-mono"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-[10px] font-semibold tracking-[0.16em] uppercase text-[#715B32] mb-1">
                          Country of Residence
                        </label>
                        <input
                          type="text"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          placeholder="e.g. United Kingdom / Singapore / Australia / Germany"
                          className="w-full bg-[#F9F6F0] border border-[#121212]/20 px-3 py-2.5 text-xs text-[#121212] focus:outline-hidden focus:border-[#715B32]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Bespoke Add-Ons & Special Requests */}
                  <div className="bg-[#F3EFE6] p-6 sm:p-8 border border-[#121212]/8 space-y-6">
                    <div className="border-b border-[#121212]/8 pb-3">
                      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#715B32] block">
                        Step 04
                      </span>
                      <h3 className="font-display text-2xl font-normal text-[#121212]">
                        Curated Add-Ons & Special Requests
                      </h3>
                    </div>

                    <div className="space-y-3 text-xs">
                      {/* Checkbox 1: Airport transfer */}
                      <label className="flex items-start gap-3 p-3 bg-[#F9F6F0] border border-[#121212]/10 cursor-pointer hover:border-[#121212]/30">
                        <input
                          type="checkbox"
                          checked={airportTransfer}
                          onChange={(e) => setAirportTransfer(e.target.checked)}
                          className="mt-0.5 accent-[#121212]"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between font-medium text-[#121212]">
                            <span>CMB International Airport Luxury Chauffeur Transfer</span>
                            <span className="font-mono text-[#715B32]">+$95 USD</span>
                          </div>
                          <p className="text-[11px] text-[#5A564F] font-light mt-0.5">
                            Private door-to-door transfer in luxury sedan via Southern Expressway with Wi-Fi & refreshments.
                          </p>
                        </div>
                      </label>

                      {/* Checkbox 2: Sunset champagne */}
                      <label className="flex items-start gap-3 p-3 bg-[#F9F6F0] border border-[#121212]/10 cursor-pointer hover:border-[#121212]/30">
                        <input
                          type="checkbox"
                          checked={sunsetChampagne}
                          onChange={(e) => setSunsetChampagne(e.target.checked)}
                          className="mt-0.5 accent-[#121212]"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between font-medium text-[#121212]">
                            <span>Sunset Terrace Champagne & Botanical Canapés</span>
                            <span className="font-mono text-[#715B32]">+$120 USD</span>
                          </div>
                          <p className="text-[11px] text-[#5A564F] font-light mt-0.5">
                            Chilled bottle of French Champagne with artisan Ceylon spice canapés served on your arrival evening.
                          </p>
                        </div>
                      </label>

                      {/* Checkbox 3: Surf coaching */}
                      <label className="flex items-start gap-3 p-3 bg-[#F9F6F0] border border-[#121212]/10 cursor-pointer hover:border-[#121212]/30">
                        <input
                          type="checkbox"
                          checked={privateSurfCoach}
                          onChange={(e) => setPrivateSurfCoach(e.target.checked)}
                          className="mt-0.5 accent-[#121212]"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between font-medium text-[#121212]">
                            <span>Private Dawn Surf Coaching Session (2.5h)</span>
                            <span className="font-mono text-[#715B32]">+$75 USD</span>
                          </div>
                          <p className="text-[11px] text-[#5A564F] font-light mt-0.5">
                            One-on-one ocean instruction in Weligama Bay with premium custom board and drone photography.
                          </p>
                        </div>
                      </label>
                    </div>

                    <div>
                      <label className="block text-[10px] font-semibold tracking-[0.16em] uppercase text-[#715B32] mb-1">
                        Dietary Preferences / Arrival Notes / Questions
                      </label>
                      <textarea
                        rows={3}
                        value={specialRequests}
                        onChange={(e) => setSpecialRequests(e.target.value)}
                        placeholder="Please inform us of any flight details, dietary requirements, or celebratory occasions..."
                        className="w-full bg-[#F9F6F0] border border-[#121212]/20 p-3 text-xs text-[#121212] focus:outline-hidden focus:border-[#715B32] resize-none"
                      />
                    </div>
                  </div>

                  {/* Submission Row */}
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <button
                      type="submit"
                      className="w-full sm:w-auto flex-1 h-13 px-8 bg-[#121212] text-[#F9F6F0] text-xs font-semibold tracking-[0.18em] uppercase hover:bg-[#715B32] transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <span>Submit Reservation Inquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        const msg = generateWhatsAppMessage();
                        window.open(`https://wa.me/${HOTEL_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
                      }}
                      className="w-full sm:w-auto h-13 px-6 bg-[#C2A676] text-[#121212] text-xs font-semibold tracking-[0.16em] uppercase hover:bg-white transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 text-[#121212]" />
                      <span>Instant WhatsApp Inquiry</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Right Column: Sticky Rate Breakdown Monolith */}
              <div className="lg:col-span-4 sticky top-28">
                <div className="bg-[#1A1A1A] text-[#F9F6F0] p-6 sm:p-8 border border-[#C2A676]/30 shadow-2xl space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C2A676] block">
                      Estimated Summary
                    </span>
                    <h3 className="font-display text-2xl font-normal text-white mt-1">
                      {selectedRoom.name}
                    </h3>
                    <p className="text-xs text-white/60 font-light mt-1">
                      {nights} Night{nights > 1 ? 's' : ''} ({checkIn} → {checkOut})
                    </p>
                  </div>

                  <div className="space-y-3 text-xs text-white/70">
                    <div className="flex justify-between">
                      <span>${selectedRoom.pricePerNight} × {nights} nights</span>
                      <span className="font-mono text-white">${roomSubtotal}</span>
                    </div>

                    {airportTransfer && (
                      <div className="flex justify-between text-xs text-[#C2A676]">
                        <span>Airport Chauffeur</span>
                        <span className="font-mono">+$95</span>
                      </div>
                    )}

                    {sunsetChampagne && (
                      <div className="flex justify-between text-xs text-[#C2A676]">
                        <span>Champagne Setup</span>
                        <span className="font-mono">+$120</span>
                      </div>
                    )}

                    {privateSurfCoach && (
                      <div className="flex justify-between text-xs text-[#C2A676]">
                        <span>Private Surf Session</span>
                        <span className="font-mono">+$75</span>
                      </div>
                    )}

                    <div className="flex justify-between text-[11px] text-white/50 pt-2 border-t border-white/10">
                      <span>Service Charge & Tourism Tax</span>
                      <span>Included</span>
                    </div>

                    <div className="flex justify-between text-base font-semibold text-white pt-3 border-t border-white/10">
                      <span>Estimated Total</span>
                      <span className="font-mono text-[#C2A676] text-xl">${totalEstimated} USD</span>
                    </div>
                  </div>

                  {/* Reassurances */}
                  <div className="pt-4 border-t border-white/10 space-y-2 text-[11px] text-white/60 font-light">
                    <div className="flex items-center gap-2 text-white/80">
                      <ShieldCheck className="w-4 h-4 text-[#C2A676]" />
                      <span>Direct Boutique Booking Guarantee</span>
                    </div>
                    <p>
                      No pre-payment or credit card required now. Your reservation is personally confirmed by our team with flexible cancellation up to 14 days prior to arrival.
                    </p>
                  </div>

                  <div className="pt-2 text-center">
                    <a
                      href={`https://wa.me/${HOTEL_CONFIG.whatsappNumber}?text=Hello%20Concierge,%20I%20have%20questions%20regarding%20rates%20for%20the%20${encodeURIComponent(selectedRoom.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-[#C2A676] hover:underline"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Chat with Concierge</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
