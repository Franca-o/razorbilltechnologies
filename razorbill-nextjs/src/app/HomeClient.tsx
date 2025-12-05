'use client';

import { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  Instagram, 
  Linkedin,
  Twitter
} from 'lucide-react';

import { HeroCarousel } from '@/components/HeroCarousel';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';

export default function HomeClient() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add CSS animations to the document head
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fadeInLeft {
        from {
          opacity: 0;
          transform: translateX(-30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes fadeInRight {
        from {
          opacity: 0;
          transform: translateX(30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes staggerFadeIn {
        from {
          opacity: 0;
          transform: translateY(20px) scale(0.95);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
      }

      .animate-fade-in-left {
        animation: fadeInLeft 0.8s ease-out forwards;
      }

      .animate-fade-in-right {
        animation: fadeInRight 0.8s ease-out forwards;
      }

      .animate-stagger-fade-in {
        animation: staggerFadeIn 0.6s ease-out forwards;
      }

      .animate-delay-100 {
        animation-delay: 0.1s;
      }

      .animate-delay-200 {
        animation-delay: 0.2s;
      }

      .animate-delay-300 {
        animation-delay: 0.3s;
      }

      .animate-delay-400 {
        animation-delay: 0.4s;
      }

      .animate-delay-500 {
        animation-delay: 0.5s;
      }

      .animate-delay-600 {
        animation-delay: 0.6s;
      }

      .opacity-0 {
        opacity: 0;
      }

      /* Enhanced hover effects */
      .card-hover-effect {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .card-hover-effect:hover {
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(99, 102, 241, 0.1);
        transform: translateY(-8px) scale(1.02);
      }

      .button-hover-glow:hover {
        box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
        transform: translateY(-2px);
      }

      .icon-bounce:hover {
        animation: bounce 0.6s ease-in-out;
      }

      @keyframes bounce {
        0%, 20%, 53%, 80%, 100% {
          transform: translate3d(0,0,0);
        }
        40%, 43% {
          transform: translate3d(0, -8px, 0);
        }
        70% {
          transform: translate3d(0, -4px, 0);
        }
        90% {
          transform: translate3d(0, -2px, 0);
        }
      }

      .text-gradient {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="font-mono min-h-screen bg-gradient-to-br from-[#181c2b] via-[#232b5d] to-[#6a5acd]">
      {/* Navigation */}
      <Navigation isScrolled={isScrolled} currentPage="/" contactLink="#cta" />

      {/* Hero Section */}
        <header className="relative min-h-[70vh] overflow-hidden">
        <HeroCarousel />
       
        <Link 
        href="#solutions"
        className="absolute bottom-8 left-8 z-30 bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-6 md:px-8 py-2 md:py-3 text-sm md:text-base font-bold rounded-full shadow-lg hover:from-blue-500 hover:to-purple-600 transition-all duration-300 button-hover-glow font-orbitron"
      >
        Explore Solutions
      </Link>
      
      </header>
      

      

 {/* Solutions Section */}
<section className="py-16 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-900 relative overflow-hidden" id="solutions">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(200,200,200,0.2)_0%,_transparent_70%)] opacity-50"></div>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
        Solutions We Offer
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        From seamless bookings to powerful POS, dynamic eCommerce, and data driven marketing, we build tools that make your business smarter.
        <p className="text-lg text-gray-700">
          Simplified Enterprise Solutions<br />
          Unlock the full potential of your business with technology.
        </p>
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Appointment Booking */}
      <div className="rounded-2xl shadow-lg transition-all duration-300 p-6 flex flex-col justify-between backdrop-blur-md bg-gradient-to-br from-[#f8f8f8] via-[#dcdcdc] to-[#bfbfbf] border border-gray-300 hover:shadow-[0_0_25px_rgba(160,160,160,0.4)] hover:scale-[1.02]">
        <div>
          <Image src="/images/razorbill2.png" alt="Appointment Booking" width={600} height={400} className="rounded-lg mb-6 object-cover shadow-md" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center">
            <span className="text-gray-900 drop-shadow-sm">Booking Platform</span>
          </h3>
          <p className="text-gray-700 text-sm text-center mb-6">
            Make scheduling simple with smart automation. Manage appointments, events, and reservations effortlessly while delivering a better client experience.
          </p>
        </div>
        <div className="flex justify-center gap-3">
          <Link href="https://razorbillbookmyspot.netlify.app/auth" className="inline-block bg-gradient-to-r from-gray-600 to-gray-800 text-white px-4 py-2 rounded-md text-sm font-semibold shadow-md hover:from-gray-700 hover:to-black transition">
            Sign Up
          </Link>
          <Link href="https://razorbillbookmyspot.netlify.app/" className="inline-block border border-gray-600 text-gray-800 px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-800 hover:text-white transition">
            Learn More
          </Link>
        </div>
      </div>

      {/* POS and Inventory */}
      <div className="rounded-2xl shadow-lg transition-all duration-300 p-6 flex flex-col justify-between backdrop-blur-md bg-gradient-to-br from-[#f8f8f8] via-[#dcdcdc] to-[#bfbfbf] border border-gray-300 hover:shadow-[0_0_25px_rgba(160,160,160,0.4)] hover:scale-[1.02]">
        <div>
          <Image src="/images/razorbill-logo.png" alt="POS and Inventory" width={400} height={200} className="rounded-lg mb-6 object-cover shadow-md" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center">
            <span className="text-gray-900 drop-shadow-sm">POS and Inventory</span>
          </h3>
          <p className="text-gray-700 text-sm text-center mb-6">
            Transform how you sell and manage stock with real-time insights and fast, efficient sales tracking built to power your business.
          </p>
        </div>
        <div className="flex justify-center mt-2">
          <button
            disabled
            className="bg-gradient-to-r from-gray-500 to-gray-700 text-white px-6 py-2 rounded-md text-sm font-semibold cursor-not-allowed shadow-inner opacity-80"
          >
            Coming Soon
          </button>
        </div>
      </div>

      {/* eCommerce Platform */}
      <div className="rounded-2xl shadow-lg transition-all duration-300 p-6 flex flex-col justify-between backdrop-blur-md bg-gradient-to-br from-[#f8f8f8] via-[#dcdcdc] to-[#bfbfbf] border border-gray-300 hover:shadow-[0_0_25px_rgba(160,160,160,0.4)] hover:scale-[1.02]">
        <div>
          <Image src="/images/razorbill-logo.png" alt="eCommerce Platform" width={400} height={200} className="rounded-lg mb-6 object-cover shadow-md" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center">
            <span className="text-gray-900 drop-shadow-sm">eCommerce Platform</span>
          </h3>
          <p className="text-gray-700 text-sm text-center mb-6">
            Create your online store with ease and scale beyond borders. Secure payments and seamless order management all in one place.
          </p>
        </div>
        <div className="flex justify-center mt-2">
          <button
            disabled
            className="bg-gradient-to-r from-gray-500 to-gray-700 text-white px-6 py-2 rounded-md text-sm font-semibold cursor-not-allowed shadow-inner opacity-80"
          >
            Coming Soon
          </button>
        </div>
      </div>

      {/* CRM and Marketing */}
      <div className="rounded-2xl shadow-lg transition-all duration-300 p-6 flex flex-col justify-between backdrop-blur-md bg-gradient-to-br from-[#f8f8f8] via-[#dcdcdc] to-[#bfbfbf] border border-gray-300 hover:shadow-[0_0_25px_rgba(160,160,160,0.4)] hover:scale-[1.02]">
        <div>
          <Image src="images/razorbill/crm-dashboard.png" alt="CRM and Marketing" width={600} height={400} className="rounded-lg mb-6 object-cover shadow-md" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center">
            <span className="text-gray-900 drop-shadow-sm">CRM and Marketing</span>
          </h3>
          <p className="text-gray-700 text-sm text-center mb-6">
            Build stronger relationships and boost engagement with a customer system powered by automation and actionable insights.
          </p>
        </div>
        <div className="flex justify-center gap-3">
          <Link href="https://razorbillbookmyspot.netlify.app/auth" className="inline-block bg-gradient-to-r from-gray-600 to-gray-800 text-white px-4 py-2 rounded-md text-sm font-semibold shadow-md hover:from-gray-700 hover:to-black transition">
            Sign Up
          </Link>
          <Link href="https://razorbillbookmyspot.netlify.app/" className="inline-block border border-gray-600 text-gray-800 px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-800 hover:text-white transition">
            Learn More
          </Link>
        </div>
      </div>

    </div>
  </div>
</section>



      {/* Book My Spot Section */}
     <section className="py-16 relative bg-gradient-to-br from-[#d9d9d9] via-[#c0c0c0] to-[#a6a6a6] text-gray-900 overflow-hidden" id="bookmyspot">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.4)_0%,_transparent_40%)] opacity-40"></div>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(180,180,180,0.4)_0%,_transparent_40%)] opacity-40"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
        BookMySpot
      </h2>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto">
        BookMySpot is your complete scheduling and reservation platform built for modern businesses that thrive on efficiency. 
        It combines appointments, room and table reservations, event bookings, and performance insights into one seamless ecosystem. <br />
        Whether you manage a salon, hotel, restaurant, or event venue, BookMySpot gives you the clarity and control you need to grow while keeping your clients delighted.
      </p>
    </div>

    {/* Appointment Booking */}
    <div className="relative bg-gradient-to-br from-[#f0f0f0]/70 via-[#e6e6e6]/60 to-[#cccccc]/70 backdrop-blur-md border border-gray-400/40 rounded-2xl shadow-lg overflow-hidden mb-10 flex flex-col md:flex-row items-center transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(200,200,200,0.5)]">
      {/* Text Section */}
      <div className="p-8 md:w-1/2">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Appointment Booking:
        </h3>
        <p className="text-gray-700 text-base">
          Simplify how clients book your services with a clean, automated scheduling system.
        </p>
        <h4 className="text-gray-800 text-lg font-semibold mt-6 mb-4">Key Features:</h4>
        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-gray-700 text-base">Real-time availability and instant confirmations.</p>
          </li>
          <li className="flex items-start">
            <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-gray-700 text-base">Service-based booking with flexible time slots.</p>
          </li>
          <li className="flex items-start">
            <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-gray-700 text-base">Client self-service rescheduling and cancellations.</p>
          </li>
          <li className="flex items-start">
            <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-gray-700 text-base">Automated reminders and follow-up notifications</p>
          </li>
        </ul>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 p-6 relative">
        <Image src="/images/razorbill4.png" alt="How We Help" width={600} height={400} className="w-full h-full object-cover opacity-90 transition duration-300 hover:opacity-100 rounded-lg" />
      </div>
    </div>

        {/*  Reservation */}
        <div className="relative bg-gradient-to-br from-[#f0f0f0]/70 via-[#e6e6e6]/60 to-[#cccccc]/70 backdrop-blur-md border border-gray-400/40 rounded-2xl shadow-lg overflow-hidden mb-10 flex flex-col md:flex-row items-center transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(200,200,200,0.5)]">
      {/* Text Section */}
      <div className="p-8 md:w-1/2">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Reservations (Room & Table):
        </h3>
        <p className="text-gray-700 text-base">
          Effortlessly manage room and table bookings with a single, intuitive system that adapts to hotels, restaurants, and venues, giving guests a smooth reservation experience while keeping your operations organized and efficient.
        </p>
            <h4 className="text-gray-800 text-lg font-semibold mt-6 mb-4">Key Features:</h4>
        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
                <p className="text-gray-700 text-base">Interactive room availability view with instant booking.</p>
              </li>
              <li className="flex items-start">
                <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700 text-base">Multi-room and multi-day booking support</p>
              </li>
              <li className="flex items-start">
                <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700 text-base">Table and seat-based reservation layout.</p>
              </li>
              <li className="flex items-start">
                <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700 text-base">Waitlist and walk-in management.</p>
              </li>
              <li className="flex items-start">
                <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700 text-base">Dining slot limits and automatic table assignment.</p>
              </li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 p-6 relative">
            <Image src="/images/razorbill/reservations.png" alt="What We Provide" width={600} height={400} className="w-full h-full object-cover opacity-90 transition duration-300 hover:opacity-100" />
          </div>
        </div>

         {/*  Event Management */}
        <div className="relative bg-gradient-to-br from-[#f0f0f0]/70 via-[#e6e6e6]/60 to-[#cccccc]/70 backdrop-blur-md border border-gray-400/40 rounded-2xl shadow-lg overflow-hidden mb-10 flex flex-col md:flex-row items-center transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(200,200,200,0.5)]">
      {/* Text Section */}
      <div className="p-8 md:w-1/2">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Events & Ticketing:
            </h3>
            <p className="text-gray-700 text-base">
             Turn event management into a simple, data-driven process. From ticket sales to attendee tracking, BookMySpot provides the tools you need to create memorable experiences while keeping logistics smooth and efficient.
            </p>
            <h4 className="text-gray-800 text-lg font-semibold mt-6 mb-4">Key Features:</h4>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-700 text-base">Create and customize events with branding and ticket types.</p>
            </li>
            <li className="flex items-start">
              <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700 text-base">Online ticket sales and secure payment processing</p>
              </li>
              <li className="flex items-start">
                <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700 text-base">Table and seat-based reservation layout.</p>
              </li>
              <li className="flex items-start">
                <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700 text-base">Guest registration with QR code check-in.</p>
              </li>
              <li className="flex items-start">
                <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700 text-base">Real-time attendee tracking and capacity monitoring.</p>
              </li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 p-6 relative">
            <Image src="/images/razorbill/events.png" alt="What We Provide" width={600} height={400} className="w-full h-full object-cover opacity-90 transition duration-300 hover:opacity-100" />
          </div>
        </div>


          {/* Dashboard Section */}
          <div className="relative bg-gradient-to-br from-[#f0f0f0]/70 via-[#e6e6e6]/60 to-[#cccccc]/70 backdrop-blur-md border border-gray-400/40 rounded-2xl shadow-lg overflow-hidden mb-10 flex flex-col md:flex-row items-center transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(200,200,200,0.5)]">
          {/* Text Section */}
          <div className="p-8 md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Dashboard & Reporting:
              </h3>
              <p className="text-gray-700 text-base">Gain a complete view of your performance at a glance.</p>
             <h4 className="text-gray-800 text-lg font-semibold mt-6 mb-4">Key Features:</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base">Centralized dashboard showing all bookings and reservations.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base">Metrics for top services, booking trends, and customer insights</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base">Visual analytics for sales, revenue, and customer activity</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base">Business Intelligence (BI) reporting for deep insights</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base">Reports and performance metrics for management.</p>
                </li>
              </ul>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 p-6 relative">
              <Image src="/images/razorbill/booking-dashboard.png" alt="How We Help" width={600} height={400} className="w-full h-full object-cover opacity-90 transition duration-300 hover:opacity-100" />
            </div>
          </div>

        </div>

      </section>


  
    {/* Focus CRM */}
      <section className="py-16 relative bg-gradient-to-br from-[#d9d9d9] via-[#c0c0c0] to-[#a6a6a6] text-gray-900 overflow-hidden" id="focuscrm">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.4)_0%,_transparent_40%)] opacity-40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(180,180,180,0.4)_0%,_transparent_40%)] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Focus
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Focus is your intelligent CRM and marketing automation platform designed to help you understand your customers, strengthen relationships, and drive growth. <br />
              From managing contacts and deals to running smart campaigns and automating engagement, Focus brings every part of your sales and marketing process into one connected, data-driven workspace.
              
            </p>
          </div>

          {/* Contact & Leads Management */}
           <div className="relative bg-gradient-to-br from-[#f0f0f0]/70 via-[#e6e6e6]/60 to-[#cccccc]/70 backdrop-blur-md border border-gray-400/40 rounded-2xl shadow-lg overflow-hidden mb-10 flex flex-col md:flex-row items-center transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(200,200,200,0.5)]">
        {/* Text Section */}
        <div className="p-8 md:w-1/2">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Contact & Leads Management:
          </h3>
          <p className="text-gray-700 text-base">Organize and grow your network effortlessly with a centralized contact hub.</p>
          <h4 className="text-gray-800 text-lg font-semibold mt-6 mb-4">Key Features:</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700 text-base">Store and manage all customer and lead information in one place.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base">Convert leads into contacts and customers with one click.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base">Smart filters and segmentation for targeted communication.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base">Assign ownership to team members and monitor follow-ups</p>
                </li>
              </ul>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 p-6 relative">
              <Image src="/images/razorbill/contacts.png" alt="How We Help" width={600} height={400} className="w-full h-full object-cover opacity-90 transition duration-300 hover:opacity-100" />
            </div>
          </div>

          {/* Deals & Sales Pipeline*/}
          <div className="relative bg-gradient-to-br from-[#f0f0f0]/70 via-[#e6e6e6]/60 to-[#cccccc]/70 backdrop-blur-md border border-gray-400/40 rounded-2xl shadow-lg overflow-hidden mb-10 flex flex-col md:flex-row items-center transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(200,200,200,0.5)]">
          {/* Text Section */}
          <div className="p-8 md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Deals & Sales Pipeline:
            </h3>
            <p className="text-gray-700 text-base">
              Visualize and optimize your entire sales journey from start to finish.
            </p>
              <h4 className="text-gray-800 text-lg font-semibold mt-6 mb-4">Key Features:</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                  <p className="text-gray-700 text-base">Drag-and-drop pipeline for tracking deals at each stage.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base">Monitor conversion rates and deal progress in real time.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base">Forecast revenue and identify bottlenecks automatically.</p>
                </li>
                 <li className="flex items-start">
                  <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base">Performance analytics for teams and individual sales reps.</p>
                </li>
              </ul>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 p-6 relative">
              <Image src="/images/razorbill/deals.png" alt="What We Provide" width={600} height={400} className="w-full h-full object-cover opacity-90 transition duration-300 hover:opacity-100" />
            </div>
          </div>


          {/* Customer and Company Profiles */}
           <div className="relative bg-gradient-to-br from-[#f0f0f0]/70 via-[#e6e6e6]/60 to-[#cccccc]/70 backdrop-blur-md border border-gray-400/40 rounded-2xl shadow-lg overflow-hidden mb-10 flex flex-col md:flex-row items-center transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(200,200,200,0.5)]">
          {/* Text Section */}
          <div className="p-8 md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Customer & Company Profiles:
              </h3>
              <p className="text-gray-700 text-base">Keep your relationships organized and insightful..</p>
              <h4 className="text-gray-800 text-lg font-semibold mt-6 mb-4">Key Features:</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base">Manage company and customer records with full history.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base">Link related contacts, deals, and communications.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base">Categorize customers by industry, value, or engagement level.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base">Build a complete customer journey view for every profile.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base">Track purchase history, preferences, and satisfaction.</p>
                </li>
              </ul>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 p-6 relative">
              <Image src="/images/razorbill/customers.png" alt="How We Help" width={600} height={400} className="w-full h-full object-cover opacity-90 transition duration-300 hover:opacity-100" />
            </div>
          </div>

          {/* CRM */}
          <div className="relative bg-gradient-to-br from-[#f0f0f0]/70 via-[#e6e6e6]/60 to-[#cccccc]/70 backdrop-blur-md border border-gray-400/40 rounded-2xl shadow-lg overflow-hidden mb-10 flex flex-col md:flex-row items-center transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(200,200,200,0.5)]">
          {/* Text Section */}
          <div className="p-8 md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Customer Relationship Management:
              </h3>
              <p className="text-gray-700 text-base">
               Understand and nurture relationships that drive loyalty and retention.
              </p>
              <h4 className="text-gray-800 text-lg font-semibold mt-6 mb-4">Key Features:</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                  <p className="text-gray-700 text-base">Track customer lifecycle from lead to repeat client.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base">Track interactions across email, SMS, calls, and meetings.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base">Get insights into customer sentiment and engagement trends.</p>
                </li>
              </ul>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 p-6 relative">
              <Image src="/images/razorbill/CRM.png" alt="What We Provide" width={600} height={400} className="w-full h-full object-cover opacity-90 transition duration-300 hover:opacity-100" />
            </div>
            </div>

             {/* Automations */}
           <div className="relative bg-gradient-to-br from-[#f0f0f0]/70 via-[#e6e6e6]/60 to-[#cccccc]/70 backdrop-blur-md border border-gray-400/40 rounded-2xl shadow-lg overflow-hidden mb-10 flex flex-col md:flex-row items-center transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(200,200,200,0.5)]">
          {/* Text Section */}
          <div className="p-8 md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Automations:
            </h3>
            <p className="text-gray-700 text-base">
              Save time and stay consistent with intelligent workflows that run themselves.
            </p>
              <h4 className="text-gray-800 text-lg font-semibold mt-6 mb-4">Key Features:</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                  <p className="text-gray-700 text-base">Create automation rules for emails, reminders, and deal movements.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base">Prebuilt automation templates for sales and marketing funnels.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base">Schedule actions based on time, behavior, or customer status.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base">Visual workflow builder for easy customization.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base">Trigger notifications or assign tasks automatically.</p>
                </li>
              </ul>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 p-6 relative">
              <Image src="/images/razorbill/promotions.png" alt="What We Provide" width={600} height={400} className="w-full h-full object-cover opacity-90 transition duration-300 hover:opacity-100" />
            </div>
          </div>

           {/* Campaigns & Promotions */}
           <div className="relative bg-gradient-to-br from-[#f0f0f0]/70 via-[#e6e6e6]/60 to-[#cccccc]/70 backdrop-blur-md border border-gray-400/40 rounded-2xl shadow-lg overflow-hidden mb-10 flex flex-col md:flex-row items-center transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(200,200,200,0.5)]">
            {/* Text Section */}
            <div className="p-8 md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Campaigns & Promotions:
              </h3>
              <p className="text-gray-700 text-base">
                Run powerful, targeted campaigns that drive engagement and sales.
              </p>
             <h4 className="text-gray-800 text-lg font-semibold mt-6 mb-4">Key Features:</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base">Design and send email and SMS campaigns directly from the dashboard.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base">Manage product promotions, seasonal offers, and discounts.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base">Segment audiences based on purchase behavior and interests.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base">Track performance metrics such as open rates and conversions.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base">Integrate seamlessly with BookMySpot for event promotions.</p>
                </li>
              </ul>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 p-6 relative">
              <Image src="/images/razorbill/campaigns.png" alt="What We Provide" width={600} height={400} className="w-full h-full object-cover opacity-90 transition duration-300 hover:opacity-100" />
            </div>
           </div>

            {/* CRM Dashboard & Analytics*/}
          <div className="relative bg-gradient-to-br from-[#f0f0f0]/70 via-[#e6e6e6]/60 to-[#cccccc]/70 backdrop-blur-md border border-gray-400/40 rounded-2xl shadow-lg overflow-hidden mb-10 flex flex-col md:flex-row items-center transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(200,200,200,0.5)]">
            {/* Text Section */}
            <div className="p-8 md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                CRM Dashboard & Analytics:
              </h3>
              <p className="text-gray-700 text-base">
               Gain actionable insights to make smarter business decisions.
              </p>
              <h4 className="text-gray-800 text-lg font-semibold mt-6 mb-4">Key Features:</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base">Centralized view of sales, marketing, and customer data.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base">Visual charts for deal progress, campaign results, and team performance.</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base">Track rates, customer growth, and revenue trends.</p>
                </li>
                 <li className="flex items-start">
                  <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base">Advanced filters for deep analysis and forecasting.</p>
                </li>
                 <li className="flex items-start">
                  <div className="bg-gray-700 text-white rounded-full flex-shrink-0 p-1 mt-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base">Export reports or schedule automated summaries for management.</p>
                </li>
              </ul>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 p-6 relative">
              <Image src="/images/razorbill/reports.png" alt="What We Provide" width={600} height={400} className="w-full h-full object-cover opacity-90 transition duration-300 hover:opacity-100" />
            </div>
            </div>
           </div>

      </section>


      {/* CTA Section */}
  <section className="py-16 bg-gradient-to-br from-[#f5f5f5]/90 via-[#e0e0e0]/85 to-[#cccccc]/90 backdrop-blur-xl text-gray-900 relative overflow-hidden">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.5)_0%,_transparent_70%)] opacity-40"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
        Empower Your Business for the Future
      </h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto">
        Join forward-thinking entrepreneurs and growing brands that are revolutionizing their workflows with 
        <span className="font-bold text-gray-900"> Razorbill Technologies</span>. <br/>
        Experience seamless automation, smarter customer engagement, and powerful digital tools built to help your business thrive in a connected world.
      </p>
    </div>

    <div className="flex justify-center mt-8">
      <a 
        href="https://razorbillbookmyspot.netlify.app/auth"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-6 md:px-8 py-2 md:py-3 text-sm md:text-base font-bold rounded-full shadow-lg hover:from-blue-500 hover:to-purple-600 transition-all duration-300 button-hover-glow font-orbitron cursor-pointer pointer-events-auto z-10"
      >
        Sign Up Today
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </a>
    </div>
  </div>
</section>

      

      {/* Footer */}
<footer className="bg-gradient-to-br from-[#1a1a1a]/95 via-[#2b2b2b]/90 to-[#3a3a3a]/95 text-gray-300 py-12 border-t border-gray-500/30" id="footer">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

      {/* Brand */}
      <div>
        <Image
          src="/images/razorbill-logo.png"
          alt="Razorbill Logo"
          width={70}
          height={70}
          className="mb-3 rounded-lg shadow-[0_0_20px_rgba(200,200,200,0.4)] bg-white/70 backdrop-blur-md p-1"
        />
        <h3 className="text-2xl font-orbitron font-bold text-gray-200 mb-3">
          <span className="text-gray-400">Razorbill</span> Technologies
        </h3>
        
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="font-bold text-gray-100 mb-4">Quick Links</h4>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li><Link href="#bookmyspot" className="hover:text-cyan-400 transition">BookMySpot</Link></li>
          <li><Link href="#focuscrm" className="hover:text-cyan-400 transition"> Focus </Link></li>

          <li><Link href="https://razorbillbookmyspot.netlify.app/auth" className="hover:text-cyan-400 transition">Sign Up Now</Link></li>
        </ul>
      </div>

      {/* Resources */}
      <div>
        <h4 className="font-bold text-gray-100 mb-4">Resources</h4>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li><Link href="#solutions" className="hover:text-cyan-400 transition">Solutions</Link></li>
          <li><Link href="#footer" className="hover:text-cyan-400 transition">Contact</Link></li>
          <li><Link href="/policies/privacy-policy" className="hover:text-cyan-400 transition">Privacy Policy</Link></li>
          
        </ul>
      </div>

      {/* Contact & Socials */}
      <div>
        <h4 className="font-bold text-gray-100 mb-4">Connect</h4>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li className="flex items-center">
            <Mail className="w-4 h-4 mr-2 text-cyan-400" />
            <a href="mailto:support@executiveaid.org" className="hover:text-cyan-400 transition">
              support@executiveaid.org
            </a>
          </li>
          <li className="flex items-center">
            <Phone className="w-4 h-4 mr-2 text-cyan-400" />
            <a href="tel:+233256108055" className="hover:text-cyan-400 transition">
              +233 256 108 055
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/razorbilltechnologies?igsh=YjkyZG56Zzd5NmEw" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>

    {/* Bottom Line */}
    <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
      <p>© {new Date().getFullYear()} <span className="text-cyan-400 font-semibold">Razorbill Technologies</span>. All rights reserved.</p>
    </div>
  </div>
</footer>
     
    </div>
  );
} 