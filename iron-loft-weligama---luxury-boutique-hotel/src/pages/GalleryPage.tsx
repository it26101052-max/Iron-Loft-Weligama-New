import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/hotelData';
import { Lightbox } from '../components/Lightbox';
import { Maximize2, SlidersHorizontal } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const categories = [
    { id: 'all', label: 'All Photographs' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'suites', label: 'Suites & Lofts' },
    { id: 'wellness', label: 'Wellness & Pools' },
    { id: 'culinary', label: 'Gastronomy' },
    { id: 'weligama', label: 'Weligama Coast' },
  ];

  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#121212]">
      {/* Header Banner */}
      <section className="relative py-24 sm:py-32 bg-[#121212] text-[#F9F6F0] overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-25">
          <img
            src="/src/assets/images/hero_weligama_iron_loft_1793974561163.jpg"
            alt="Iron Loft Weligama Gallery"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#C2A676]">
            <span>Visual Archive</span>
            <span aria-hidden="true">·</span>
            <span>Weligama, Sri Lanka</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white max-w-4xl leading-tight">
            The spatial poetry of stone, iron, and light.
          </h1>
          <p className="text-base sm:text-lg font-light text-white/70 max-w-2xl leading-relaxed">
            A curated photographic essay documenting the architecture, private residences, and coastal moods of Iron Loft Weligama.
          </p>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 space-y-12">
          {/* Category Filter Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#121212]/8 pb-6">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-[#715B32]" />
              <span className="text-xs font-semibold tracking-[0.16em] uppercase text-[#121212]">
                Curated Perspectives ({filteredItems.length} Photographs)
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-semibold tracking-[0.12em] uppercase transition-colors cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-[#121212] text-[#F9F6F0]'
                      : 'bg-[#EAE5D9] text-[#121212] hover:bg-[#121212]/10'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Architectural Masonry/Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(index)}
                className="group relative bg-[#EAE5D9] border border-[#121212]/8 overflow-hidden cursor-pointer aspect-[16/11]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Hover overlay with title and expand button */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/90 via-[#121212]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-[#F9F6F0]">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C2A676] block mb-1">
                        {item.category}
                      </span>
                      <h4 className="font-display text-xl font-normal text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs text-white/70 font-light mt-1 line-clamp-1">
                        {item.caption}
                      </p>
                    </div>

                    <div className="p-2.5 bg-[#121212] text-[#C2A676] border border-white/20 shrink-0">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() =>
          setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
        }
        onNext={() =>
          setLightboxIndex((prev) => (prev + 1) % filteredItems.length)
        }
      />
    </div>
  );
};
