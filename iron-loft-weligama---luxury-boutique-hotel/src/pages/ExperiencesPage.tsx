import React, { useState } from 'react';
import { EXPERIENCES, HOTEL_CONFIG, Experience } from '../data/hotelData';
import { Clock, Calendar, Check, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ExperiencesPage: React.FC = () => {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);

  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#121212]">
      {/* Header Banner */}
      <section className="relative py-24 sm:py-32 bg-[#121212] text-[#F9F6F0] overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-25">
          <img
            src="/src/assets/images/hero_weligama_iron_loft_1793974561163.jpg"
            alt="Southern Sri Lanka Experiences"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#C2A676]">
            <span>Bespoke Itineraries</span>
            <span aria-hidden="true">·</span>
            <span>Southern Sri Lanka</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white max-w-4xl leading-tight">
            Curated encounters with ocean, earth, and heritage.
          </h1>
          <p className="text-base sm:text-lg font-light text-white/70 max-w-2xl leading-relaxed">
            From the world-renowned gentle swells of Weligama Bay to virgin white tea plantations and secluded whale waters, our private experiences are crafted exclusively for residents of Iron Loft.
          </p>
        </div>
      </section>

      {/* Main Experiences List */}
      <section className="py-20 sm:py-28">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={exp.id}
                className="group bg-[#F3EFE6] border border-[#121212]/8 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Photo container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE5D9]">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-[#121212]/90 text-[#F9F6F0] px-3.5 py-1 text-[10px] font-semibold tracking-[0.18em] uppercase">
                      {exp.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#715B32] font-mono">
                      <span>{exp.duration}</span>
                      <span>·</span>
                      <span>{exp.timing}</span>
                      <span>·</span>
                      <span className="text-[#5A564F]">{exp.idealFor}</span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#121212] group-hover:text-[#715B32] transition-colors leading-tight">
                      {exp.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-light text-[#5A564F] leading-relaxed">
                      {exp.description}
                    </p>

                    {/* What's Included */}
                    <div className="pt-3 border-t border-[#121212]/8 space-y-2">
                      <span className="text-[10px] font-semibold tracking-widest uppercase text-[#715B32] block">
                        Signature Inclusions
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#121212]/80 font-light">
                        {exp.included.map((inc, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#C2A676] shrink-0" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Direct Action Footer */}
                <div className="p-6 sm:p-8 pt-0 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={`https://wa.me/${HOTEL_CONFIG.whatsappNumber}?text=Hello%20Concierge,%20I%20would%20like%20to%20reserve%20the%20${encodeURIComponent(exp.title)}%20experience.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex-1 h-11 bg-[#121212] text-[#F9F6F0] text-xs font-semibold tracking-[0.14em] uppercase flex items-center justify-center gap-2 hover:bg-[#9E7D47] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#C2A676]" />
                    <span>Inquire via WhatsApp</span>
                  </a>

                  <Link
                    to={`/booking?request=experience-${exp.slug}`}
                    className="w-full sm:w-auto h-11 px-5 border border-[#121212] text-[#121212] text-xs font-semibold tracking-[0.14em] uppercase flex items-center justify-center hover:bg-[#121212] hover:text-[#F9F6F0] transition-colors"
                  >
                    Add to Stay
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Itinerary Notice */}
      <section className="py-20 bg-[#121212] text-[#F9F6F0]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C2A676] block">
            Private Commissions
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-normal text-white leading-tight">
            Have a specific journey in mind?
          </h2>
          <p className="text-sm sm:text-base font-light text-white/70 leading-relaxed">
            Our resident concierge can arrange private helicopter transfers to Yala National Park, private diving expeditions to deep wrecks, or bespoke sunset sound baths on secluded beaches.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center h-12 px-8 bg-[#C2A676] text-[#121212] text-xs font-semibold tracking-[0.16em] uppercase hover:bg-white transition-colors"
            >
              Consult With Our Concierge
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
