"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Calendar, Users } from "lucide-react";

export default function BookingWidget() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const pathname = usePathname();

  const handleBook = () => {
    const url = getWhatsAppUrl(pathname, { checkIn, checkOut, guests });
    window.open(url, "_blank");
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl border border-white/40 p-4 md:p-6 rounded-3xl premium-shadow w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-end">
      <div className="w-full md:flex-1">
        <label className="block text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-2 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-[var(--color-accent)]" /> Check-In
        </label>
        <input 
          type="date" 
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="w-full bg-[var(--color-background-alt)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-[var(--color-primary)] font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition-all"
        />
      </div>
      <div className="w-full md:flex-1">
        <label className="block text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-2 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-[var(--color-accent)]" /> Check-Out
        </label>
        <input 
          type="date" 
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="w-full bg-[var(--color-background-alt)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-[var(--color-primary)] font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition-all"
        />
      </div>
      <div className="w-full md:w-32">
        <label className="block text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-wider mb-2 flex items-center gap-2">
          <Users className="w-4 h-4 text-[var(--color-accent)]" /> Guests
        </label>
        <select 
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="w-full bg-[var(--color-background-alt)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-[var(--color-primary)] font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition-all appearance-none cursor-pointer"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
            <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
          ))}
        </select>
      </div>
      <button 
        onClick={handleBook}
        className="w-full md:w-auto mt-4 md:mt-0 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap"
      >
        Book on WhatsApp
      </button>
    </div>
  );
}
