import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Rooms', path: '/rooms' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Experiences', path: '/experiences' },
    { label: 'Location', path: '/location' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#F9F6F0]/95 backdrop-blur-md shadow-xs border-b border-[#121212]/8'
            : 'bg-[#F9F6F0] border-b border-[#121212]/8'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <Link
            to="/"
            className="flex flex-col group whitespace-nowrap shrink-0 text-left"
          >
            <span className="font-display text-xl sm:text-2xl tracking-[0.18em] uppercase font-normal text-[#121212] group-hover:text-[#C2A676] transition-colors">
              Iron Loft
            </span>
            <span className="text-[10px] tracking-[0.28em] uppercase text-[#5A564F] font-medium -mt-1">
              Weligama · Sri Lanka
            </span>
          </Link>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9 text-xs font-medium tracking-[0.14em] uppercase text-[#121212]">
            {navLinks.map((link) => {
              const isActive =
                link.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-1 whitespace-nowrap transition-colors hover:text-[#C2A676] ${
                    isActive ? 'text-[#121212] font-semibold' : 'text-[#5A564F]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C2A676]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action CTA */}
          <div className="flex items-center gap-4 shrink-0">
            <Link
              to="/booking"
              className="hidden sm:inline-flex items-center justify-center h-11 px-6 bg-[#121212] text-[#F9F6F0] text-xs font-semibold tracking-[0.14em] uppercase hover:bg-[#9E7D47] transition-colors duration-200"
            >
              Book Now
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#121212] hover:text-[#C2A676] transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-30 bg-[#121212] text-[#F9F6F0] p-6 flex flex-col justify-between overflow-y-auto lg:hidden">
          <div className="space-y-6 pt-4">
            <div className="text-[11px] tracking-[0.2em] uppercase text-[#C2A676] font-semibold border-b border-white/10 pb-2">
              Navigation
            </div>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive =
                  link.path === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`font-display text-2xl flex items-center justify-between transition-colors ${
                      isActive ? 'text-[#C2A676]' : 'text-[#F9F6F0] hover:text-[#C2A676]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-5 h-5 text-white/30" />
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-8 border-t border-white/10 space-y-4">
            <Link
              to="/booking"
              className="w-full flex items-center justify-center h-12 bg-[#C2A676] text-[#121212] font-semibold text-xs tracking-[0.16em] uppercase hover:bg-white transition-colors"
            >
              Reserve Your Stay
            </Link>

            <a
              href={`https://wa.me/${HOTEL_CONFIG.whatsappNumber}?text=Hello%20Iron%20Loft%20Concierge,%20I%20would%20like%20to%20inquire%20about%20a%20stay.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 h-11 border border-white/20 text-[#F9F6F0] text-xs tracking-[0.14em] uppercase hover:bg-white/10 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#C2A676]" />
              WhatsApp Concierge
            </a>

            <div className="text-[11px] tracking-wider text-white/50 text-center pt-2">
              {HOTEL_CONFIG.coordinates} · Weligama Bay
            </div>
          </div>
        </div>
      )}
    </>
  );
};
