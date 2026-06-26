import Image from "next/image";

import { getWhatsAppUrl } from "@/lib/whatsapp";
import { MapPin, Wifi, Car, Tv, Coffee, Shield, Compass, Sparkles } from "lucide-react";
import BookingWidget from "@/components/booking/BookingWidget";
import FaqAccordion from "@/components/home/FaqAccordion";
import ImageCarousel from "@/components/home/ImageCarousel";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  const whatsAppUrl = getWhatsAppUrl("/");

  return (
    <div className="bg-[var(--color-background)] overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] w-full flex items-center pt-24 pb-32">
        <ImageCarousel />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20 z-10" />
        
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center h-full">
          <div className="max-w-2xl text-left mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent)]/20 border border-[var(--color-accent)]/30 text-[var(--color-accent)] mb-6 animate-fade-in">
              <Sparkles className="h-4 w-4" />
              <span className="text-xs font-semibold tracking-wider uppercase">Boutique Homestay</span>
            </div>
            
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              A Premium Haven <br />
              <span className="text-[var(--color-accent)] font-medium">in Kabarnet</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed mb-8">
              Experience the perfect blend of modern comfort, tranquility, and warm Baringo hospitality in a secured private gated compound.
            </p>
          </div>
          
          <BookingWidget />
        </div>
      </section>

      {/* Property Highlights */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <span className="text-[var(--color-accent)] font-semibold tracking-widest text-xs uppercase block mb-3">Welcome to Luxury</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[var(--color-primary)] mb-6">
            Your Private Gateway to Baringo
          </h2>
          <div className="w-20 h-1 bg-[var(--color-accent)] mx-auto mb-6 rounded-full" />
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto font-light leading-relaxed">
            Nestled in the lush hills of Kabarnet, Flamingo Airbnb provides a peaceful sanctuary designed with modern premium details and ultimate guest comfort in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-3xl border border-[var(--color-border)] flex flex-col items-center text-center premium-shadow-hover transition-premium">
            <div className="p-4 rounded-full bg-[var(--color-background-alt)] text-[var(--color-primary)] mb-8">
              <MapPin className="h-8 w-8 text-[var(--color-accent)]" />
            </div>
            <h3 className="text-xl font-bold text-[var(--color-primary)] mb-4 font-serif">Prime Location</h3>
            <p className="text-[var(--color-text-muted)] leading-relaxed font-light">
              Situated in the heart of Kabarnet, offering fresh mountain air, beautiful scenic vistas, and seamless access to the region&apos;s wonders.
            </p>
          </div>
          
          <div className="bg-white p-10 rounded-3xl border border-[var(--color-border)] flex flex-col items-center text-center premium-shadow-hover transition-premium">
            <div className="p-4 rounded-full bg-[var(--color-background-alt)] text-[var(--color-primary)] mb-8">
              <Shield className="h-8 w-8 text-[var(--color-accent)]" />
            </div>
            <h3 className="text-xl font-bold text-[var(--color-primary)] mb-4 font-serif">Secure & Serene</h3>
            <p className="text-[var(--color-text-muted)] leading-relaxed font-light">
              Rest easy in a fully enclosed property with 24/7 security, lush green gardens, and total privacy for you and your family.
            </p>
          </div>
          
          <div className="bg-white p-10 rounded-3xl border border-[var(--color-border)] flex flex-col items-center text-center premium-shadow-hover transition-premium">
            <div className="p-4 rounded-full bg-[var(--color-background-alt)] text-[var(--color-primary)] mb-8">
              <Compass className="h-8 w-8 text-[var(--color-accent)]" />
            </div>
            <h3 className="text-xl font-bold text-[var(--color-primary)] mb-4 font-serif">Modern Elegance</h3>
            <p className="text-[var(--color-text-muted)] leading-relaxed font-light">
              Carefully chosen interior decor, high-end furnishing, soft mood lighting, and high-speed amenities to complement your lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Showcase / Amenities Section */}
      <section className="py-24 bg-[var(--color-primary)] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#FAF8F5_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--color-accent)] font-semibold tracking-widest text-xs uppercase block mb-3">Designed For Convenience</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Everything You Need <br /><span className="text-[var(--color-accent)] font-medium">For A Premium Stay</span>
              </h2>
              <p className="text-white/80 text-lg mb-10 font-light leading-relaxed">
                Whether you are here for a business retreat, family weekend, or exploring Lake Bogoria&apos;s flamingos, we have curated every amenity to make you feel right at home.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-white/10 text-[var(--color-accent)]">
                    <Wifi className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">High-Speed WiFi</h4>
                    <p className="text-white/60 text-xs font-light">Seamless streaming & work</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-white/10 text-[var(--color-accent)]">
                    <Car className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Secure Gated Parking</h4>
                    <p className="text-white/60 text-xs font-light">Ample space on compound</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-white/10 text-[var(--color-accent)]">
                    <Tv className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Smart Entertainment</h4>
                    <p className="text-white/60 text-xs font-light">Netflix, YouTube & premium channels</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-white/10 text-[var(--color-accent)]">
                    <Coffee className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Equipped Chef Kitchen</h4>
                    <p className="text-white/60 text-xs font-light">Cook your favorite meals</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/images/living-room.png"
                alt="Flamingo Airbnb Luxury Living Area"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/30 backdrop-blur-md rounded-2xl border border-white/10">
                <span className="text-xs text-[var(--color-accent)] font-semibold tracking-widest uppercase">Lounge Details</span>
                <h3 className="text-white font-serif font-semibold text-xl mt-1">Plush interior with warm emerald gold accents</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[var(--color-accent)] font-semibold tracking-widest text-xs uppercase block mb-3">Guest Information</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[var(--color-primary)] mb-6">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-[var(--color-accent)] mx-auto rounded-full" />
        </div>
        <FaqAccordion />
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[var(--color-background-alt)] border-t border-[var(--color-border)]">
        <div className="text-center px-4 sm:px-6 lg:px-8 mb-4">
          <span className="text-[var(--color-accent)] font-semibold tracking-widest text-xs uppercase block mb-3">Guest Experiences</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-primary)]">
            What Our Guests Say
          </h2>
        </div>
        <Testimonials />
      </section>

      {/* Call to Action */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="bg-[var(--color-background-alt)] rounded-3xl p-12 md:p-20 border border-[var(--color-border)] relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--color-primary)]/10 rounded-full blur-3xl" />
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-6">
            Ready to Experience Baringo?
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] mb-10 max-w-xl mx-auto font-light leading-relaxed">
            Plan your stay at Flamingo Airbnb. Book directly with us on WhatsApp for real-time calendar updates, tailored inquiries, and the best local recommendations.
          </p>
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-10 py-5 text-lg font-bold text-white shadow-xl hover:bg-[#20bd5a] hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            <span>Book via WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
}
