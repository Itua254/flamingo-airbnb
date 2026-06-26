"use client";

import { useState } from "react";
import Image from "next/image";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { X, ZoomIn, Sparkles } from "lucide-react";

const categories = ["All", "Interior", "Exterior"];

const images = [
  { src: "/images/exterior-gate.png", category: "Exterior", alt: "Elegant custom-gated entrance to Flamingo Airbnb compound" },
  { src: "/images/building-front.png", category: "Exterior", alt: "Boutique property front exterior showcasing the modern architecture" },
  { src: "/images/compound-view.png", category: "Exterior", alt: "Panoramic green valley vistas surrounding the property compound" },
  { src: "/images/living-room.png", category: "Interior", alt: "Luxury living room styled with comfortable sofa and warm gold-emerald accents" },
  { src: "/images/bedroom.png", category: "Interior", alt: "Cozy bedroom retreat with luxury white linens and premium green wall finishing" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);
  const whatsAppUrl = getWhatsAppUrl("/gallery");

  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="bg-[var(--color-background)] min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[var(--color-accent)] font-semibold tracking-widest text-xs uppercase block mb-3">Visual Tour</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-6">
            Our Gallery
          </h1>
          <div className="w-16 h-1 bg-[var(--color-accent)] mx-auto mb-6 rounded-full" />
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto mb-12 font-light">
            Take a visual walkthrough of Flamingo Airbnb. Explore the elegant interiors, secured gate entrance, and beautiful highland surroundings.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[var(--color-primary)] text-white shadow-md scale-105"
                    : "bg-white text-[var(--color-text-muted)] hover:bg-[var(--color-background-alt)] border border-[var(--color-border)]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedImage(image)}
              className="group relative h-80 rounded-3xl overflow-hidden bg-[var(--color-background-alt)] border border-[var(--color-border)] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/80 via-[var(--color-primary)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />
              
              <div className="absolute top-4 right-4 p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="h-4 w-4" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-[var(--color-accent)] text-xs font-semibold uppercase tracking-widest">{image.category}</span>
                <p className="text-sm font-light leading-relaxed mt-1 text-white/90">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-6 backdrop-blur-md transition-all duration-300">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
              aria-label="Close Lightbox"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="relative w-full max-w-5xl h-[75vh] flex flex-col justify-center">
              <div className="relative w-full h-[85%] rounded-2xl overflow-hidden">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              <div className="mt-6 text-center text-white max-w-2xl mx-auto px-4">
                <span className="text-[var(--color-accent)] font-semibold text-xs tracking-wider uppercase">{selectedImage.category}</span>
                <p className="text-base font-light text-white/80 mt-2 leading-relaxed">{selectedImage.alt}</p>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-28 text-center bg-white border border-[var(--color-border)] rounded-3xl p-10 md:p-14 max-w-3xl mx-auto shadow-sm">
          <div className="inline-flex p-3 rounded-2xl bg-[var(--color-background-alt)] text-[var(--color-accent)] mb-4">
            <Sparkles className="h-5 w-5" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-[var(--color-primary)] mb-4">Like What You See?</h2>
          <p className="text-[var(--color-text-muted)] font-light max-w-md mx-auto mb-8 text-sm">
            Experience these cozy rooms and beautiful gardens in person. Send a quick inquiry to reserve your desired dates.
          </p>
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-[var(--color-accent)] hover:scale-105 transition-all duration-300"
          >
            Check Availability
          </a>
        </div>
      </div>
    </div>
  );
}
