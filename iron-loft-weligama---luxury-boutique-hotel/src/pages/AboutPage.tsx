import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Shield, Leaf, Hammer, Eye } from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelData';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#121212]">
      {/* Header Banner */}
      <section className="relative py-24 sm:py-32 bg-[#121212] text-[#F9F6F0] overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/src/assets/images/hero_weligama_iron_loft_1793974561163.jpg"
            alt="Iron Loft Architecture"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#C2A676]">
            <span>About The Architecture</span>
            <span aria-hidden="true">·</span>
            <span>Weligama, Sri Lanka</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white max-w-4xl leading-tight">
            An architectural manifesto of stillness and raw substance.
          </h1>
          <p className="text-base sm:text-lg font-light text-white/70 max-w-2xl leading-relaxed">
            Iron Loft Weligama is an intimate coastal enclave built on the conviction that genuine luxury resides in quietude, honest geological materials, and spatial generosity.
          </p>
        </div>
      </section>

      {/* Chapter 1: The Design Genesis */}
      <section className="py-24 sm:py-32 border-b border-[#121212]/8">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#715B32] block">
                01. The Architectural Vision
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-normal tracking-tight text-[#121212] leading-tight">
                Tropical brutalism in dialogue with oceanic wind.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-[#5A564F] text-base sm:text-lg font-light leading-relaxed">
              <p>
                Sri Lanka's architectural lineage has long been celebrated for opening structures to nature—pioneered by legendary masters like Geoffrey Bawa. Iron Loft Weligama pushes this lineage into a contemporary brutalist idiom: casting structural concrete with raw timber board textures and framing ocean vistas with blackened steel casements.
              </p>
              <p>
                Rather than fighting the coastal salt air and equatorial humidity, our structure was designed to patina gracefully over decades. The raw steel oxidizes into deep umber tones, while the alabaster lime plaster breathes naturally, keeping interior volumes cool without excessive reliance on mechanical air conditioning.
              </p>
              <div className="p-6 bg-[#F3EFE6] border border-[#121212]/8 space-y-2">
                <span className="text-[11px] font-semibold tracking-widest uppercase text-[#715B32] block">
                  Design Tenet
                </span>
                <p className="text-sm italic font-display text-[#121212]">
                  "We did not seek to decorate the cliffside; we sought to carve a monolithic instrument through which the ocean and wind could compose their daily song."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Interlude: Materials & Tactility */}
      <section className="py-24 sm:py-32 bg-[#F3EFE6] border-b border-[#121212]/8">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 space-y-16">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#715B32] block">
              02. Materiality & Craft
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-normal tracking-tight text-[#121212]">
              Honest materials sourced from the island.
            </h2>
            <p className="text-sm sm:text-base font-light text-[#5A564F] leading-relaxed">
              Every surface at Iron Loft was touched by local artisan stonemasons, blacksmiths, and carpenters from the Southern Province.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#F9F6F0] p-8 border border-[#121212]/8 space-y-4">
              <div className="w-10 h-10 flex items-center justify-center bg-[#121212] text-[#C2A676]">
                <Hammer className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl font-normal text-[#121212]">
                Blackened Structural Iron
              </h3>
              <p className="text-xs sm:text-sm font-light text-[#5A564F] leading-relaxed">
                Fabricated on-site by third-generation Weligama iron artisans. Sealed with natural beeswax and linseed oils to create a velvety matte charcoal finish that ages gracefully.
              </p>
            </div>

            <div className="bg-[#F9F6F0] p-8 border border-[#121212]/8 space-y-4">
              <div className="w-10 h-10 flex items-center justify-center bg-[#121212] text-[#C2A676]">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl font-normal text-[#121212]">
                Volcanic Basalt Stone
              </h3>
              <p className="text-xs sm:text-sm font-light text-[#5A564F] leading-relaxed">
                Hand-split volcanic boulders forming our subterranean wellness pavilions and pool basins, providing cooling thermal mass and deep grounding energy.
              </p>
            </div>

            <div className="bg-[#F9F6F0] p-8 border border-[#121212]/8 space-y-4">
              <div className="w-10 h-10 flex items-center justify-center bg-[#121212] text-[#C2A676]">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl font-normal text-[#121212]">
                Alabaster Mineral Plaster
              </h3>
              <p className="text-xs sm:text-sm font-light text-[#5A564F] leading-relaxed">
                Formulated using traditional lime, crushed seashells, and fine river sand. Hand-burnished to a matte, tactile luster that softly diffuses bright tropical sunlight.
              </p>
            </div>

            <div className="bg-[#F9F6F0] p-8 border border-[#121212]/8 space-y-4">
              <div className="w-10 h-10 flex items-center justify-center bg-[#121212] text-[#C2A676]">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl font-normal text-[#121212]">
                Reclaimed Ceylon Teak
              </h3>
              <p className="text-xs sm:text-sm font-light text-[#5A564F] leading-relaxed">
                Salvaged from historic colonial railway sleepers and regional plantation estates. Dense, naturally oily, and impervious to ocean humidity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: Sustainability & Ecology */}
      <section className="py-24 sm:py-32 border-b border-[#121212]/8">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#715B32] block">
                03. Environmental Stewardship
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-normal tracking-tight text-[#121212] leading-tight">
                Designed to tread lightly upon the coast.
              </h2>
              <p className="text-sm sm:text-base font-light text-[#5A564F] leading-relaxed">
                Operating a boutique enclave in Southern Sri Lanka brings deep responsibility to protect our ocean waters and surrounding biodiversity.
              </p>
              <ul className="space-y-4 text-xs sm:text-sm text-[#121212] font-light">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#C2A676] mt-1.5 shrink-0" />
                  <span><strong>Zero Single-Use Plastics:</strong> Drinking water is filtered and bottled on-site in reusable borosilicate glass flagons. All guest amenities are biodegradable.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#C2A676] mt-1.5 shrink-0" />
                  <span><strong>Passive Solar & Wind Architecture:</strong> Deep architectural overhangs eliminate direct solar thermal gain while cross-ventilation flushes heat naturally.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-[#C2A676] mt-1.5 shrink-0" />
                  <span><strong>Greywater Recycling & Native Gardens:</strong> All greywater is biologically filtered via reed bed filters to irrigate our endemic frangipani and fern gardens.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] overflow-hidden bg-stone-300 border border-[#121212]/8">
                <img
                  src="/src/assets/images/suite_ocean_loft_1793974562664.jpg"
                  alt="Cross-ventilated architectural loft"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] overflow-hidden bg-stone-300 border border-[#121212]/8 mt-8">
                <img
                  src="/src/assets/images/wellness_pool_sanctuary_1793974563896.jpg"
                  alt="Secluded volcanic stone pool"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 4: Unhurried Hospitality */}
      <section className="py-24 sm:py-32 bg-[#121212] text-[#F9F6F0]">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#C2A676] block">
              04. The Hospitality Creed
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-normal tracking-tight text-white leading-tight">
              Four suites. Uncompromising personal attention.
            </h2>
            <p className="text-sm sm:text-base font-light text-white/70 leading-relaxed">
              Because we accommodate at most eight to ten guests at any moment, your stay is defined entirely by your desires. No crowded breakfast buffets, no strict itineraries, and no intrusive interruptions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-white/10">
            <div className="space-y-3">
              <h4 className="font-display text-xl text-white">24-Hour Villa Concierge</h4>
              <p className="text-xs text-white/60 font-light leading-relaxed">
                From pre-booking your surf coaching to securing private access to tea estates, your concierge is reachable seamlessly via direct WhatsApp or discreet in-person presence.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-display text-xl text-white">Anytime Dining</h4>
              <p className="text-xs text-white/60 font-light leading-relaxed">
                Breakfast is served whenever you wake, whether that is after a 6:00 AM dawn surf session or midday on your shaded terrace.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-display text-xl text-white">Absolute Privacy</h4>
              <p className="text-xs text-white/60 font-light leading-relaxed">
                Suites are positioned with dedicated acoustic buffers and discreet private entry pathways to ensure complete sanctuary for creative contemplation.
              </p>
            </div>
          </div>

          <div className="pt-8">
            <Link
              to="/rooms"
              className="inline-flex items-center justify-center h-12 px-8 bg-[#C2A676] text-[#121212] text-xs font-semibold tracking-[0.16em] uppercase hover:bg-white transition-colors"
            >
              Explore The Four Residences
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
