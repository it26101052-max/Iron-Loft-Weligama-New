import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Maximize2, Users, BedDouble } from 'lucide-react';
import { Room } from '../data/hotelData';

interface RoomCardProps {
  room: Room;
  featured?: boolean;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room, featured = false }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="group bg-[#F3EFE6] border border-[#121212]/8 flex flex-col justify-between transition-all duration-300 hover:border-[#121212]/20">
      <div>
        {/* Aspect-ratio locked image container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE5D9]">
          {!imageError ? (
            <img
              src={room.images[0]}
              alt={room.name}
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-[#EAE5D9] text-[#121212] p-6 text-center">
              <span className="font-display text-2xl font-normal">{room.name}</span>
              <span className="text-xs tracking-widest uppercase text-[#5A564F] mt-2">
                Ocean Sanctuary · Weligama
              </span>
            </div>
          )}

          {/* Top category label */}
          <div className="absolute top-4 left-4 bg-[#121212]/90 text-[#F9F6F0] px-3 py-1 text-[10px] font-semibold tracking-[0.18em] uppercase">
            {room.area.split('/')[0].trim()}
          </div>

          {/* Price overlay */}
          <div className="absolute bottom-4 right-4 bg-[#1A1A1A]/95 text-[#F9F6F0] px-3.5 py-1.5 border border-[#C2A676]/30">
            <span className="text-sm font-semibold tracking-wide font-mono">${room.pricePerNight}</span>
            <span className="text-[10px] text-white/70 tracking-wider ml-1 uppercase">/ Night</span>
          </div>
        </div>

        {/* Content section */}
        <div className="p-6 sm:p-8 space-y-4">
          <div className="space-y-1">
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#715B32] block">
              {room.subtitle}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-normal tracking-tight text-[#121212] group-hover:text-[#715B32] transition-colors">
              <Link to={`/rooms/${room.slug}`}>{room.name}</Link>
            </h3>
          </div>

          <p className="text-xs sm:text-sm font-light text-[#5A564F] line-clamp-2 leading-relaxed">
            {room.description}
          </p>

          {/* Unboxed Metadata with separators per constitution */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#5A564F] pt-2 border-t border-[#121212]/8">
            <span className="flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5 text-[#715B32]" />
              <span>{room.area}</span>
            </span>
            <span aria-hidden="true" className="text-[#121212]/30">·</span>
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#715B32]" />
              <span>{room.guests}</span>
            </span>
            <span aria-hidden="true" className="text-[#121212]/30">·</span>
            <span className="flex items-center gap-1.5">
              <BedDouble className="w-3.5 h-3.5 text-[#715B32]" />
              <span className="truncate max-w-[130px]">{room.bed.split('+')[0]}</span>
            </span>
          </div>

          {/* Highlights checklist */}
          <div className="pt-2 space-y-1.5">
            {room.features.slice(0, 3).map((feat, i) => (
              <div key={i} className="flex items-center gap-2 text-[11px] text-[#121212]/80">
                <span className="w-1.5 h-1.5 bg-[#C2A676] shrink-0" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action buttons footer */}
      <div className="p-6 sm:p-8 pt-0 grid grid-cols-2 gap-3">
        <Link
          to={`/rooms/${room.slug}`}
          className="h-11 border border-[#121212] text-[#121212] text-xs font-semibold tracking-[0.14em] uppercase flex items-center justify-center hover:bg-[#121212] hover:text-[#F9F6F0] transition-colors"
        >
          View Details
        </Link>
        <Link
          to={`/booking?room=${room.slug}`}
          className="h-11 bg-[#121212] text-[#F9F6F0] text-xs font-semibold tracking-[0.14em] uppercase flex items-center justify-center gap-1 hover:bg-[#9E7D47] transition-colors"
        >
          <span>Book Suite</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
};
