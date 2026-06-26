"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  { src: "/images/exterior-gate.png", alt: "Flamingo Airbnb Premium Entrance" },
  { src: "/images/living-room.png", alt: "Luxury Lounge" },
  { src: "/images/bedroom.png", alt: "Cozy Bedroom Retreat" },
  { src: "/images/compound-view.png", alt: "Valley Vistas from Compound" }
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {images.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          className={`object-cover object-center transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          priority={index === 0}
        />
      ))}
    </>
  );
}
