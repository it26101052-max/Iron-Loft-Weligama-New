import React from 'react';
import { HOTEL_CONFIG } from '../data/hotelData';
import { MapPin, Plane, Train, Compass, Car, Waves, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LocationPage: React.FC = () => {
  const distances = [
    {
      place: "Weligama Surf Bay & Peeler",
      dist: "Direct Beachfront Access",
      desc: "World-renowned sandy bottom wave break, protected bay waters, and morning surf coaching."
    },
    {
      place: "Mirissa Harbor & Whale Point",
      dist: "10 Minutes (4.2 km)",
      desc: "Departure point for blue whale watching catamarans, deep-sea fishing, and coconut palm headlands."
    },
    {
      place: "Galle Dutch Fort (UNESCO)",
      dist: "35 Minutes (28 km)",
      desc: "Historic 17th-century coral stone ramparts, colonial boutique ateliers, and jewelers."
    },
    {
      place: "Bandaranaike International Airport (CMB)",
      dist: "2h 15m (175 km via Southern Expressway)",
      desc: "Door-to-door private luxury chauffeur transfer arranged by our concierge desk."
    },
    {
      place: "Weligama Railway Station",
      dist: "5 Minutes (2.1 km)",
      desc: "Historic coastal train station connecting Colombo Fort and Galle along the scenic ocean rail line."
    },
    {
      place: "Handunugoda Virgin White Tea Estate",
      dist: "25 Minutes (18 km)",
      desc: "Low-country tea hills producing the untouched white tea and true Ceylon cinnamon."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#121212]">
      {/* Header Banner */}
      <section className="relative py-24 sm:py-32 bg-[#121212] text-[#F9F6F0] overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-25">
          <img
            src="/src/assets/images/hero_weligama_iron_loft_1793974561163.jpg"
            alt="Weligama Location"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#C2A676]">
            <span>Geography & Transit</span>
            <span aria-hidden="true">·</span>
            <span>Southern Province</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white max-w-4xl leading-tight">
            Secluded on the headland of Weligama Bay.
          </h1>
          <p className="text-base sm:text-lg font-light text-white/70 max-w-2xl leading-relaxed">
            Perched between the quiet rhythm of traditional stilt fishermen and the world-class surf breaks of Sri Lanka's southern coast.
          </p>
        </div>
      </section>

      {/* Map & Coordinates Grid */}
      <section className="py-20 sm:py-28 border-b border-[#121212]/8">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Map Container */}
            <div className="lg:col-span-7 bg-[#1A1A1A] border border-[#121212]/10 p-2 sm:p-4">
              <div className="aspect-[16/11] w-full bg-stone-900 relative overflow-hidden">
                <iframe
                  title="Iron Loft Weligama Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.211470557458!2d80.4287!3d5.9735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae113a7b5bbbbbb%3A0x123456789!2sWeligama%20Bay%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1680000000000!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(70%) contrast(1.15)' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-white/80 border-t border-white/10 mt-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C2A676]" />
                  <span>{HOTEL_CONFIG.address}</span>
                </div>
                <div className="font-mono text-[#C2A676]">
                  {HOTEL_CONFIG.coordinates}
                </div>
              </div>
            </div>

            {/* Right: Arrival Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#715B32] block">
                  Getting Here
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#121212]">
                  Seamless transfers to your sanctuary.
                </h2>
                <p className="text-sm font-light text-[#5A564F] leading-relaxed">
                  Whether arriving from Colombo International Airport or exploring the historic south coast, our concierge desk coordinates private door-to-door transit.
                </p>
              </div>

              <div className="space-y-4 text-xs text-[#121212]">
                <div className="p-5 bg-[#F3EFE6] border border-[#121212]/8 space-y-2">
                  <div className="flex items-center gap-2 font-semibold tracking-wider uppercase text-[#715B32]">
                    <Car className="w-4 h-4 text-[#715B32]" />
                    <span>Private Chauffeur Service</span>
                  </div>
                  <p className="font-light text-[#5A564F] leading-relaxed">
                    Air-conditioned luxury sedan or van with cold bottled water, Wi-Fi, and cold lemongrass scented towels directly from Bandaranaike International Airport (CMB) via the scenic Southern Expressway.
                  </p>
                </div>

                <div className="p-5 bg-[#F3EFE6] border border-[#121212]/8 space-y-2">
                  <div className="flex items-center gap-2 font-semibold tracking-wider uppercase text-[#715B32]">
                    <Train className="w-4 h-4 text-[#715B32]" />
                    <span>Scenic Ocean Train</span>
                  </div>
                  <p className="font-light text-[#5A564F] leading-relaxed">
                    Sri Lanka's iconic coastal train runs directly from Colombo Fort along the crashing waves of the Indian Ocean to Weligama. Our private car meets you directly on the platform.
                  </p>
                </div>

                <div className="p-5 bg-[#F3EFE6] border border-[#121212]/8 space-y-2">
                  <div className="flex items-center gap-2 font-semibold tracking-wider uppercase text-[#715B32]">
                    <Plane className="w-4 h-4 text-[#715B32]" />
                    <span>Aviation & Helicopter Charter</span>
                  </div>
                  <p className="font-light text-[#5A564F] leading-relaxed">
                    Chartered helicopter or sea-plane connections land at nearby Koggala Lake or private helipad (45 minutes flight time from Colombo), followed by a 15-minute chauffeur drive.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${HOTEL_CONFIG.whatsappNumber}?text=Hello%20Concierge,%20I%20would%20like%20to%20arrange%20an%20airport%20transfer%20to%20Iron%20Loft%20Weligama.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase text-[#121212] hover:text-[#715B32] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#715B32]" />
                  <span>Request Airport Transfer via Concierge</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Distances Matrix */}
      <section className="py-20 sm:py-28 bg-[#F3EFE6]">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 space-y-12">
          <div className="space-y-3">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#715B32] block">
              Regional Proximity
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#121212]">
              Key Landmarks & Travel Times
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {distances.map((item, index) => (
              <div
                key={index}
                className="bg-[#F9F6F0] p-6 sm:p-8 border border-[#121212]/8 space-y-3"
              >
                <div className="flex items-baseline justify-between border-b border-[#121212]/8 pb-3">
                  <h4 className="font-display text-xl font-normal text-[#121212]">
                    {item.place}
                  </h4>
                </div>
                <div className="font-mono text-sm font-semibold text-[#715B32]">
                  {item.dist}
                </div>
                <p className="text-xs font-light text-[#5A564F] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
