'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideItem {
  id: number;
  image: string;
  alt: string;
}

const carouselSlides: SlideItem[] = [
  {
    id: 1,
    image: '/images/image1.jpg',
    alt: 'Original Art Decor for Modern Living',
  },
  {
    id: 2,
    image: '/images/image2.jpg',
    alt: 'Artisanal Minimalist Ceramics and Vases',
  },
  {
    id: 3,
    image: '/images/image3.jpg',
    alt: 'Artisanal Minimalist Ceramics and Vases',
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  // Automated 5-second slide looping logic matching prototype script timing
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-xl shadow-xl group bg-surface-container">
        {/* Slide Display Images */}
        <div className="relative w-full h-full">
          {carouselSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover select-none pointer-events-none"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>

        {/* Navigation Control: Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" strokeWidth={2} />
        </button>

        {/* Navigation Control: Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" strokeWidth={2} />
        </button>

        {/* Carousel Visual Indicator Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer focus:outline-none ${
                index === currentSlide ? 'w-10 bg-white' : 'w-6 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
