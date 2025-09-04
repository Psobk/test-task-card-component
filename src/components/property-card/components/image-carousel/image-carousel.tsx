import { useState } from "react";
import type React from "react";
import { type ImageCarouselProps } from "./image-carousel.types";

export function ImageCarousel({
  images,
  className = "",
  height = "126px",
  isMobile = false,
}: ImageCarouselProps) {
  const imageArray = Array.isArray(images) ? images : [images];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentImage = imageArray[currentImageIndex];
  const totalImages = imageArray.length;

  const handlePrevious = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentImageIndex < totalImages - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const canGoPrevious = currentImageIndex > 0;
  const canGoNext = currentImageIndex < totalImages - 1;

  return (
    <div
      className={`relative ${className}`}
      style={
        {
          "--carousel-height":
            typeof height === "number" ? `${height}px` : height,
        } as React.CSSProperties
      }
    >
      <img
        src={currentImage}
        alt=""
        className={`w-full object-cover image-height-dynamic ${
          isMobile ? "" : "rounded-xl"
        }`}
      />

      {totalImages > 1 && (
        <>
          <button
            onClick={handlePrevious}
            disabled={!canGoPrevious}
            className={`absolute top-1/2 -translate-y-1/2 h-12 flex items-center justify-center transition-opacity ${
              canGoPrevious ? "" : "cursor-not-allowed"
            }`}
            aria-label="Previous image"
          >
            <img
              src="/arrow.svg"
              alt="Previous"
              width="32"
              height="32"
              className={`transform rotate-180 ${
                canGoPrevious ? "opacity-100" : "opacity-50"
              }`}
            />
          </button>

          <button
            onClick={handleNext}
            disabled={!canGoNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 h-12 flex items-center justify-center transition-opacity ${
              canGoNext ? "" : "cursor-not-allowed"
            }`}
            aria-label="Next image"
          >
            <img
              src="/arrow.svg"
              alt="Next"
              width="32"
              height="32"
              className={`${canGoNext ? "opacity-100" : "opacity-50"}`}
            />
          </button>

          <div className="absolute bottom-6 md:bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            {Array.from({ length: totalImages }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`transition-all duration-200 ${
                  index === currentImageIndex
                    ? "w-6 h-1 bg-white rounded-full"
                    : "w-4 h-1 bg-white opacity-50 rounded-full"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
