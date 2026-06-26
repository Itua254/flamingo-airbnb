"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

const locations = [
  {
    id: "baringo",
    name: "Lake Baringo",
    distance: "25 km away",
    desc: "Famous for boat rides and spotting hippos, crocodiles, and over 470 species of birds.",
    top: "15%",
    left: "70%"
  },
  {
    id: "bogoria",
    name: "Lake Bogoria",
    distance: "40 km away",
    desc: "Home to spectacular hot springs and massive flocks of pink flamingos.",
    top: "70%",
    left: "75%"
  },
  {
    id: "kabarnet",
    name: "Flamingo Airbnb",
    distance: "You are here",
    desc: "Your premium sanctuary perched in the scenic Tugen Hills.",
    top: "45%",
    left: "40%"
  },
  {
    id: "tugen",
    name: "Tugen Hills",
    distance: "Surrounding",
    desc: "Breathtaking valleys and hiking trails perfect for nature lovers.",
    top: "40%",
    left: "20%"
  }
];

export default function ExploreMap() {
  const [activeLocation, setActiveLocation] = useState(locations[2]);

  return (
    <div className="w-full flex flex-col lg:flex-row gap-8 bg-white p-4 md:p-6 rounded-3xl border border-[var(--color-border)] shadow-sm">
      {/* Interactive Graphic */}
      <div className="relative w-full lg:w-3/5 aspect-video md:aspect-[4/3] bg-[#f4f7f6] rounded-2xl overflow-hidden border border-[#e2e8e6] flex items-center justify-center">
        {/* Decorative Map Elements */}
        <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q20,30 40,60 T100,40 L100,100 L0,100 Z" fill="#e2e8e6" />
          <path d="M60,0 Q80,20 70,50 T100,80 L100,0 Z" fill="#e2e8e6" />
          {/* Faux Roads */}
          <path d="M40,45 Q50,40 70,15" fill="none" stroke="#d1dbd8" strokeWidth="0.5" strokeDasharray="2,1" />
          <path d="M40,45 Q60,60 75,70" fill="none" stroke="#d1dbd8" strokeWidth="0.5" strokeDasharray="2,1" />
        </svg>

        {locations.map((loc) => (
          <div 
            key={loc.id}
            className="absolute group flex flex-col items-center -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
            style={{ top: loc.top, left: loc.left }}
            onMouseEnter={() => setActiveLocation(loc)}
            onClick={() => setActiveLocation(loc)}
          >
            <div className={`relative p-2 rounded-full transition-all duration-300 ${
              activeLocation.id === loc.id 
                ? "bg-[var(--color-accent)] text-white scale-125 shadow-lg" 
                : "bg-white text-[var(--color-primary)] hover:bg-[var(--color-accent)] hover:text-white"
            }`}>
              <MapPin className="h-5 w-5" />
              {activeLocation.id === loc.id && (
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--color-primary)] border-2 border-white"></span>
                </span>
              )}
            </div>
            <span className={`mt-2 font-semibold text-xs md:text-sm whitespace-nowrap px-2 py-1 rounded-md backdrop-blur-md transition-all duration-300 ${
              activeLocation.id === loc.id 
                ? "bg-[var(--color-primary)] text-white opacity-100" 
                : "bg-white/80 text-[var(--color-primary)] opacity-0 group-hover:opacity-100"
            }`}>
              {loc.name}
            </span>
          </div>
        ))}
      </div>

      {/* Info Panel */}
      <div className="w-full lg:w-2/5 flex flex-col justify-center p-2 lg:p-6">
        <span className="text-[var(--color-accent)] font-semibold tracking-widest text-xs uppercase block mb-2">Location Details</span>
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-4 transition-all">
          {activeLocation.name}
        </h3>
        <span className="inline-block self-start px-3 py-1 bg-[var(--color-background-alt)] text-[var(--color-text-muted)] rounded-lg text-sm font-semibold mb-6">
          {activeLocation.distance}
        </span>
        <p className="text-[var(--color-text-muted)] leading-relaxed font-light text-base md:text-lg">
          {activeLocation.desc}
        </p>
        
        <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
          <p className="text-xs text-[var(--color-text-muted)] font-medium">
            Tap the map pins to explore the surrounding Baringo attractions. Flamingo Airbnb serves as the perfect central hub for your adventures.
          </p>
        </div>
      </div>
    </div>
  );
}
