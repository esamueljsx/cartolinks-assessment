"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Button } from "../common/button";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { carouselItems } from "@/data";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Scroll to Slide
  const scrollToSlide = (index: number) => {
    if (scrollContainerRef.current) {
      const slideWidth =
        scrollContainerRef.current.scrollWidth / carouselItems.length;
      scrollContainerRef.current.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      });
      setCurrentSlide(index);
    }
  };

  // Next Slide
  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % carouselItems.length;
    scrollToSlide(nextIndex);
  };

  // Previous Slide
  const prevSlide = () => {
    const prevIndex =
      (currentSlide - 1 + carouselItems.length) % carouselItems.length;
    scrollToSlide(prevIndex);
  };

  // Go to Current Slide
  const goToSlide = (index: number) => {
    scrollToSlide(index);
  };

  // Handle Scroll
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const slideWidth =
        scrollContainerRef.current.scrollWidth / carouselItems.length;
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const newIndex = Math.round(scrollLeft / slideWidth);
      if (newIndex !== currentSlide) {
        setCurrentSlide(newIndex);
      }
    }
  };

  return (
    <div className="w-full block mt-24 lg:mt-32">
      <div className="w-full overflow-hidden mb-3">
        <div
          ref={scrollContainerRef}
          className="snap-x snap-mandatory w-full overflow-x-scroll hide-scroll flex"
          onScroll={handleScroll}
        >
          {carouselItems.map((slide, index) => (
            <div
              key={index}
              className="select-none snap-center aspect-video flex-shrink-0 w-full mx-1.5 lg:mx-5.5 relative overflow-hidden rounded-2xl lg:rounded-3xl lg:w-[810px] lg:h-[426px] h-[286px]"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                width={810}
                height={426}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end py-4 px-6 text-white lg:px-8 lg:py-6 bg-gradient-to-t from-black/50 to-black/0">
                <div className="flex flex-col justify-between w-full h-full">
                  <span className="text-xs lg:text-sm font-medium tracking-wide">
                    {slide.badge}
                  </span>

                  <div className="flex justify-between items-end">
                    <div className="max-w-md">
                      <h4 className="text-lg font-medium sm:text-xl md:text-3xl">
                        {slide.title}
                      </h4>
                      <p className="mt-1 text-xs lg:text-sm leading-4 opacity-90">
                        {slide.description}
                      </p>
                    </div>

                    {/* Button */}
                    <Button className="w-fit rounded-full hidden lg:block px-5">
                      {slide.buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="justify-center flex gap-1.5 sm:gap-2 px-3 sm:px-6 lg:px-8 xl:px-0">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`size-2 sm:size-2.5 rounded-full transition-colors cursor-pointer ${
              currentSlide === index
                ? "bg-black dark:bg-white"
                : "bg-black/30 dark:bg-white/30"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide controls */}
      <div className="justify-end flex space-x-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="rounded-full bg-[#f5f5f5] dark:bg-[#202020] p-1.5 sm:p-2 lg:p-3 text-black dark:text-white"
          aria-label="Previous slide"
        >
          <ChevronLeft size={16} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="rounded-full p-1.5 sm:p-2  text-black dark:text-white bg-[#f5f5f5] dark:bg-[#202020]"
          aria-label="Next slide"
        >
          <ChevronRight size={16} />
        </Button>
      </div>
    </div>
  );
}
