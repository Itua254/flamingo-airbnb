import Image from "next/image";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { CheckCircle2, Heart, Shield, Star, Compass } from "lucide-react";

export const metadata = {
  title: "Our Story & Mission | Flamingo Airbnb",
  description: "Learn about the story, mission, and benefits of staying at Flamingo Airbnb in Kabarnet, Baringo County.",
};

export default function AboutPage() {
  const whatsAppUrl = getWhatsAppUrl("/about");

  return (
    <div className="bg-[var(--color-background)]">
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[450px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/90 via-[var(--color-primary)]/75 to-[var(--color-primary)]/50 z-10" />
        <Image
          src="/images/building-front.png"
          alt="Flamingo Airbnb Boutique Facade"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <span className="text-[var(--color-accent)] font-semibold tracking-widest text-xs uppercase block mb-3">Est. 2024</span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Our Story & Mission
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
            Bringing premium boutique homestay experiences to the majestic highlands of Kabarnet, Baringo County.
          </p>
        </div>
      </section>

      {/* Story & Mission Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[var(--color-accent)] font-semibold tracking-widest text-xs uppercase block mb-3">Comfort & Serenity</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-6">
              A Luxurious Sanctuary
            </h2>
            <div className="w-16 h-1 bg-[var(--color-accent)] mb-8 rounded-full" />
            
            <div className="space-y-6 text-[var(--color-text-muted)] font-light leading-relaxed">
              <p>
                Flamingo Airbnb was born from a vision: to provide a sanctuary of luxury for travelers visiting Kabarnet. We recognized the need for premium accommodation that offers the privacy and space of a home with the styling of a high-end boutique hotel.
              </p>
              <p>
                Strategically located in Baringo County, our property is named after the iconic pink flamingos of the Rift Valley lakes, representing grace and vibrant local ecosystems. We have meticulously designed every corner to reflect modern comfort, featuring soft emerald-green backdrops, gold accents, and cozy furnishings.
              </p>
              
              <div className="bg-white p-8 rounded-2xl border border-[var(--color-border)] shadow-sm mt-8 premium-shadow-hover transition-premium">
                <h3 className="font-serif font-bold text-xl text-[var(--color-primary)] mb-3 flex items-center gap-3">
                  <Heart className="text-[var(--color-accent)] h-6 w-6" />
                  Our Mission
                </h3>
                <p className="text-[var(--color-text-muted)] font-light m-0">
                  To deliver exceptional, personalized hospitality that lets our guests explore Baringo in absolute comfort, style, and complete peace of mind.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative h-[650px] rounded-3xl overflow-hidden shadow-2xl group">
            <Image
              src="/images/bedroom.png"
              alt="Flamingo Airbnb Cozy Bedroom"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/30 backdrop-blur-md rounded-2xl border border-white/10">
              <span className="text-xs text-[var(--color-accent)] font-semibold tracking-widest uppercase">Bedroom Details</span>
              <h3 className="text-white font-serif font-semibold text-xl mt-1">Cozy bedroom with fine linen and plush green walls</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--color-accent)] font-semibold tracking-widest text-xs uppercase block mb-3">Our Standards</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">
              Why Stay With Us
            </h2>
            <div className="w-16 h-1 bg-[var(--color-accent)] mx-auto mb-6 rounded-full" />
            <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto font-light">
              We go above and beyond to ensure your stay is memorable, private, and completely hassle-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-3xl bg-[var(--color-background)] hover:bg-[var(--color-background-alt)] border border-[var(--color-border)] premium-shadow-hover transition-premium">
              <Star className="h-10 w-10 text-[var(--color-accent)] mb-6" />
              <h3 className="text-lg font-bold text-[var(--color-primary)] mb-3 font-serif">Premium Quality</h3>
              <p className="text-[var(--color-text-muted)] text-sm font-light leading-relaxed">From luxurious Egyptian cotton bedding to high-end gold-accented furnishing, everything is selected for premium comfort.</p>
            </div>
            
            <div className="p-8 rounded-3xl bg-[var(--color-background)] hover:bg-[var(--color-background-alt)] border border-[var(--color-border)] premium-shadow-hover transition-premium">
              <Shield className="h-10 w-10 text-[var(--color-accent)] mb-6" />
              <h3 className="text-lg font-bold text-[var(--color-primary)] mb-3 font-serif">Total Security</h3>
              <p className="text-[var(--color-text-muted)] text-sm font-light leading-relaxed">Relax with a completely gated compound, 24/7 security guard, private lockable entry, and secure on-site parking.</p>
            </div>
            
            <div className="p-8 rounded-3xl bg-[var(--color-background)] hover:bg-[var(--color-background-alt)] border border-[var(--color-border)] premium-shadow-hover transition-premium">
              <CheckCircle2 className="h-10 w-10 text-[var(--color-accent)] mb-6" />
              <h3 className="text-lg font-bold text-[var(--color-primary)] mb-3 font-serif">Perfect Cleanliness</h3>
              <p className="text-[var(--color-text-muted)] text-sm font-light leading-relaxed">Rigorous hygiene protocols ensure a flawless, sanitised, and sparkling environment awaits you on arrival.</p>
            </div>
            
            <div className="p-8 rounded-3xl bg-[var(--color-background)] hover:bg-[var(--color-background-alt)] border border-[var(--color-border)] premium-shadow-hover transition-premium">
              <Compass className="h-10 w-10 text-[var(--color-accent)] mb-6" />
              <h3 className="text-lg font-bold text-[var(--color-primary)] mb-3 font-serif">Local Assistance</h3>
              <p className="text-[var(--color-text-muted)] text-sm font-light leading-relaxed">Our friendly host is always on call to share insider tips, coordinate transport, and guide your Bogoria excursions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-6">
          Ready to experience comfort in Kabarnet?
        </h2>
        <a
          href={whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-[var(--color-accent)] hover:scale-105 transition-all duration-300"
        >
          Book Your Stay
        </a>
      </section>
    </div>
  );
}
