import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../data/hotelData';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#121212]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 select-none"
    >
      {/* Top Bar with counter & close button */}
      <div className="flex items-center justify-between text-[#F9F6F0] border-b border-white/10 pb-4">
        <div>
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C2A676]">
            {currentItem.category}
          </span>
          <h4 className="font-display text-lg sm:text-xl font-normal text-white">
            {currentItem.title}
          </h4>
        </div>

        <div className="flex items-center gap-6">
          <span className="font-mono text-xs text-white/50 tracking-widest">
            {currentIndex + 1} / {items.length}
          </span>
          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Image Viewport with Nav Arrows */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        {/* Previous Button */}
        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-4 z-10 p-3 bg-[#1A1A1A]/80 border border-white/10 text-white hover:bg-[#C2A676] hover:text-[#121212] transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* The Image */}
        <div className="max-w-6xl max-h-[75vh] w-full flex items-center justify-center">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            referrerPolicy="no-referrer"
            className="max-h-[75vh] max-w-full object-contain border border-white/10 shadow-2xl transition-opacity duration-300"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-2 sm:right-4 z-10 p-3 bg-[#1A1A1A]/80 border border-white/10 text-white hover:bg-[#C2A676] hover:text-[#121212] transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Caption Footer */}
      <div className="text-center text-xs text-white/70 font-light border-t border-white/10 pt-4 max-w-2xl mx-auto">
        <p>{currentItem.caption}</p>
      </div>
    </div>
  );
};
