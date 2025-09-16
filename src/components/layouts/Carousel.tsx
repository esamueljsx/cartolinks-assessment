"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { carouselItems } from "@/data";
import { Button } from "../common/button";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Scroll to Slide
  const scrollToSlide = useCallback((index: number) => {
    if (scrollContainerRef.current) {
      const slideWidth =
        scrollContainerRef.current.scrollWidth / carouselItems.length;
      scrollContainerRef.current.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      });
      setCurrentSlide(index);
    }
  }, []);

  // Next Slide
  const nextSlide = useCallback(() => {
    const nextIndex = (currentSlide + 1) % carouselItems.length;
    scrollToSlide(nextIndex);
  }, [currentSlide, scrollToSlide]);

  // Previous Slide
  const prevSlide = useCallback(() => {
    const prevIndex =
      (currentSlide - 1 + carouselItems.length) % carouselItems.length;
    scrollToSlide(prevIndex);
  }, [currentSlide, scrollToSlide]);

  // Auto-advance carousel
  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => {
          const nextIndex = (prev + 1) % carouselItems.length;
          scrollToSlide(nextIndex);
          return nextIndex;
        });
      }, 5000); // Changed back to 5 seconds
    };

    startInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [scrollToSlide]);

  // Reset interval when user interacts
  const resetInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => {
          const nextIndex = (prev + 1) % carouselItems.length;
          scrollToSlide(nextIndex);
          return nextIndex;
        });
      }, 5000);
    }, 1000); // Resume after 1 second
  }, [scrollToSlide]);

  // Go to Current Slide
  const goToSlide = useCallback(
    (index: number) => {
      scrollToSlide(index);
      resetInterval();
    },
    [scrollToSlide, resetInterval]
  );

  // Handle manual navigation
  const handlePrevSlide = useCallback(() => {
    prevSlide();
    resetInterval();
  }, [prevSlide, resetInterval]);

  const handleNextSlide = useCallback(() => {
    nextSlide();
    resetInterval();
  }, [nextSlide, resetInterval]);

  // Handle Scroll - debounced to avoid excessive updates
  const handleScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      const slideWidth =
        scrollContainerRef.current.scrollWidth / carouselItems.length;
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const newIndex = Math.round(scrollLeft / slideWidth);
      if (
        newIndex !== currentSlide &&
        newIndex >= 0 &&
        newIndex < carouselItems.length
      ) {
        setCurrentSlide(newIndex);
      }
    }
  }, [currentSlide]);

  return (
    <div className="w-full block mt-20 lg:mt-32 space-y-4">
      <div className="w-full overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="snap-x snap-mandatory w-full overflow-x-scroll hide-scroll flex"
          onScroll={handleScroll}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {carouselItems.map((slide, idx) => (
            <div
              key={slide.id || idx}
              className="select-none snap-center aspect-video flex-shrink-0 w-full mx-1.5 lg:mx-5.5 relative overflow-hidden rounded-2xl lg:rounded-3xl lg:w-[810px] lg:h-[426px] h-[286px]"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                width={810}
                height={426}
                className="w-full h-full object-cover"
                loading={idx === 0 ? "eager" : "lazy"}
                priority={idx === 0}
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end py-4 px-6 text-white lg:px-8 lg:py-6 bg-gradient-to-t from-black/60 to-black/0">
                <div className="flex flex-col justify-between w-full h-full">
                  <span className="text-xs lg:text-sm font-medium tracking-wide">
                    {slide.badge}
                  </span>

                  <div className="flex justify-between items-end">
                    <div className="max-w-md">
                      <h4 className="text-lg font-medium sm:text-xl md:text-3xl leading-tight">
                        {slide.title}
                      </h4>
                      <p className="mt-1 text-xs lg:text-sm leading-4 lg:leading-5 opacity-90">
                        {slide.description}
                      </p>
                    </div>

                    {/* Button */}
                    <Button
                      className="w-fit rounded-full hidden lg:block px-5"
                      onClick={() => console.log(`Clicked ${slide.title}`)}
                    >
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
            type="button"
            key={_.id || index}
            className={`size-2 rounded-full transition-colors cursor-pointer hover:opacity-80 ${
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
      <div className="justify-end flex space-x-2 px-3 sm:px-6 lg:px-8 xl:px-0">
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePrevSlide}
          className="rounded-full bg-[#f5f5f5] dark:bg-[#202020] p-1.5 sm:p-2 lg:p-3 text-black dark:text-white hover:bg-[#e5e5e5] dark:hover:bg-[#303030]"
          aria-label="Previous slide"
        >
          <ChevronLeft size={16} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleNextSlide}
          className="rounded-full p-1.5 sm:p-2 lg:p-3 text-black dark:text-white bg-[#f5f5f5] dark:bg-[#202020] hover:bg-[#e5e5e5] dark:hover:bg-[#303030]"
          aria-label="Next slide"
        >
          <ChevronRight size={16} />
        </Button>
      </div>
    </div>
  );
}
