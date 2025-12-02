'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    image: '/images/razorbill/customers.png',
    title: 'RAZORBILL TECHNOLOGIES',
    subtitle: 'Building Intelligent Solutions for a Connected Future'
  },
  {
    image: '/images/razorbill/bookmyspot1.png',
    title: 'BookMySpot',
    subtitle: 'Book Smarter. Manage Faster. Grow Effortlessly.'
  },
  {
    image: '/images/razorbill/razorbill1.png',
    title: 'Focus',
    subtitle: 'Turning Connections into Growth'
  }
];

export function HeroCarousel() {
  return (
    <Swiper
  modules={[Autoplay, EffectFade, Navigation, Pagination]}
  effect="fade"
  navigation
  pagination={{ clickable: true }}
  autoplay={{
    delay: 8000,
    disableOnInteraction: false,
  }}
  loop
  className="w-screen h-[80vh] relative overflow-hidden" // full width and hides edges
>
  {slides.map((slide, index) => (
    <SwiperSlide key={index} className="relative w-full h-full">
      <div className="absolute inset-0">
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          className="object-cover object-center"
          priority={index === 0}
          quality={80}
          sizes="100vw"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Slide content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {slide.title === 'RAZORBILL TECHNOLOGIES' ? (
          <div className="flex flex-col">
            <Link
              href="/"
              className="relative text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-wider text-gray-400 drop-shadow-lg hover:text-gray-500 transition-all duration-300 font-orbitron"
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
            <span className="text-lg sm:text-xl md:text-2xl font-semibold mt-2 tracking-wide text-gray-200">
              TECHNOLOGIES.
            </span>
          </div>
        ) : (
          <>
            <h1 className="font-syne text-2xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-100 to-gray-400">
              {slide.title}
            </h1>
            <p className="text-white text-xl md:text-2xl max-w-2xl font-light">
              {slide.subtitle}
            </p>
          </>
        )}
      </div>
    </SwiperSlide>
  ))}
</Swiper> 
  );
}