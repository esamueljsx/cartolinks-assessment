"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "../common/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { carouselItems } from "@/data";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative  w-full flex flex-col gap-4 mt-20">
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {carouselItems.map((slide, index) => (
            <div
              key={slide.id}
              className="relative w-full flex-shrink-0 overflow-hidden rounded-2xl shadow-lg"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                width={1000}
                height={1000}
                className="h-[300px] w-full rounded-2xl object-cover sm:h-[400px] md:h-[450px]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end px-4 py-4 text-white sm:px-8 sm:py-6 bg-black/5">
                {/* Title in the middle */}

                {/* Description + button at bottom */}
                <div className="flex flex-col justify-end space-y-2 sm:space-y-3">
                  {slide.title && (
                    <h4 className="text-base font-semibold sm:text-lg md:text-2xl">
                      {slide.title}
                    </h4>
                  )}
                  <div className="flex w-full justify-between">
                    <p className="max-w-[14rem] text-xs text-gray-200 sm:max-w-[20rem] sm:text-sm md:text-base">
                      {slide.description}
                    </p>
                    <button className="w-fit rounded-full bg-white px-3 py-1 text-xs font-semibold text-black transition-colors hover:bg-gray-200 sm:px-4 sm:py-2 sm:text-sm md:px-6 md:text-base">
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="justify-center flex gap-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
              currentSlide === index ? "bg-white" : "bg-white/30"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Prev/Next controls */}
      <div className="justify-end flex space-x-3">
        <Button
          size="icon"
          onClick={prevSlide}
          className="rounded-full bg-gray-200 p-2 text-gray-700 hover:bg-gray-300 sm:p-3"
        >
          <ArrowLeft size={20} />
        </Button>
        <Button
          size="icon"
          onClick={nextSlide}
          className="rounded-full bg-gray-200 p-2 text-gray-700 hover:bg-gray-300 sm:p-3"
        >
          <ArrowRight size={20} />
        </Button>
      </div>
    </div>
  );
}
