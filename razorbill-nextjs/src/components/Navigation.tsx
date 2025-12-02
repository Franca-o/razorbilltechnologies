'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface NavigationProps {
  isScrolled: boolean;
  currentPage?: string;
  contactLink?: string;
}

const navItems = [
  { href: '/', label: 'Home', id: 'home' },
  { href: '#bookmyspot', label: 'BookMySpot', id: 'bookmyspot' },
  { href: '#focuscrm', label: 'Focus', id: 'focuscrm' },
  { href: '#solutions', label: 'Coming Soon', id: 'solutions' },
];

export default function Navigation({ isScrolled, currentPage, contactLink = "#footer" }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  
   // Highlight active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const item of navItems) {
        if (item.href.startsWith('#')) {
          const section = document.querySelector(item.href) as HTMLElement;
          if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            // Active section tracking (can be used for future enhancements)
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll behavior
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 rounded-full w-[92%] md:w-[80%] max-w-6xl px-4 md:px-8 ${
        isScrolled
          ? 'backdrop-blur-xl bg-gradient-to-r from-[#1b1c1f]/85 via-[#2b2b3b]/80 to-[#1e293b]/85 shadow-[0_0_25px_rgba(100,180,255,0.35)] border border-gray-500/30'
          : 'backdrop-blur-lg bg-gradient-to-r from-[#1e1e2a]/70 via-[#2a2a3f]/60 to-[#1f2d47]/70 border border-gray-500/20 shadow-[0_0_12px_rgba(100,180,255,0.25)]'
      }`}
    >
      <div className="flex justify-between items-center py-3 md:py-4">
        {/* Left: Logo + Brand */}
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/razorbill-logo.png"
              alt="Razorbill Logo"
              width={50}
              height={50}
              className="rounded-xl shadow-[0_0_15px_rgba(180,220,255,0.4)] bg-white/70 backdrop-blur-md p-1"
            />
          </Link>

          <div className="flex flex-col">
            <Link
              href="/"
              className="relative text-2xl md:text-3xl font-extrabold tracking-wider text-gray-300 drop-shadow-lg hover:text-gray-400 transition-all duration-300 font-orbitron"
            >
              <span className="animate-wave inline-block">R</span>
              <span className="animate-wave inline-block delay-100">A</span>
              <span className="animate-wave inline-block delay-200">Z</span>
              <span className="animate-wave inline-block delay-300">O</span>
              <span className="animate-wave inline-block delay-400">R</span>
              <span className="animate-wave inline-block delay-500">B</span>
              <span className="animate-wave inline-block delay-600">I</span>
              <span className="animate-wave inline-block delay-700">L</span>
              <span className="animate-wave inline-block delay-800">L</span>
            </Link>
            <span className="text-xs md:text-sm bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-gray-100 to-gray-400 font-semibold mt-1 tracking-wide drop-shadow-[0_0_4px_rgba(200,200,200,0.4)]">
              Technologies.
            </span>

          </div>
        </div>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm md:text-base font-bold transition ${
                currentPage === item.href
                  ? 'text-cyan-300'
                  : 'text-gray-100 hover:text-cyan-300'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right: Contact Button */}
        <div className="hidden md:block">
          <Link href={contactLink}>
            <button className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:from-blue-500 hover:to-purple-600 transition">
              CONTACT
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-md text-gray-100 hover:text-cyan-300 transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-gradient-to-b from-[#2a2a3f]/95 via-[#1e1e2a]/90 to-[#1f2d47]/95 rounded-b-2xl border-t border-gray-500/30 shadow-md mt-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMobileMenu}
              className={`text-base font-bold ${
                currentPage === item.href
                  ? 'text-cyan-300'
                  : 'text-gray-100 hover:text-cyan-300'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href={contactLink} onClick={closeMobileMenu}>
            <button className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:from-blue-500 hover:to-purple-600 transition">
              CONTACT
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
