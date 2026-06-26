import Image from "next/image";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Map, Camera, Compass, Sun, MapPin, Sparkles } from "lucide-react";
import ExploreMap from "@/components/explore/ExploreMap";

export const metadata = {
  title: "Explore Baringo & Kabarnet | Flamingo Airbnb",
  description: "Discover the beauty of Baringo County. Learn about local attractions, travel information, and destination highlights near Flamingo Airbnb.",
};

const attractions = [
  {
    name: "Lake Bogoria National Reserve",
    description: "Famous for its hot springs, geysers, and thousands of gorgeous pink flamingos. A spectacular day trip for nature lovers and birdwatchers.",
    icon: <Camera className="h-6 w-6 text-[var(--color-accent)]" />
  },
  {
    name: "Lake Baringo",
    description: "A peaceful freshwater lake known for its rich birdlife, hippos, crocodiles, and scenic boat trips exploring the volcanic islands.",
    icon: <Map className="h-6 w-6 text-[var(--color-accent)]" />
  },
  {
    name: "Tugen Hills",
    description: "Lush, high-altitude forest ridges surrounding Kabarnet, offering fresh breezes, hiking trails, and breathtaking Rift Valley vistas.",
    icon: <Compass className="h-6 w-6 text-[var(--color-accent)]" />
  },
  {
    name: "Kerio Valley Viewpoint",
    description: "A short drive from the property, providing dramatic views down the massive escarpment and the winding Chebloch Gorge below.",
    icon: <Sun className="h-6 w-6 text-[var(--color-accent)]" />
  }
];

export default function ExplorePage() {
  const whatsAppUrl = getWhatsAppUrl("/explore");

  return (
    <div className="bg-[var(--color-background)] py-16">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-16">
        <span className="text-[var(--color-accent)] font-semibold tracking-widest text-xs uppercase block mb-3">Adventure Awaits</span>
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-[var(--color-primary)] mb-6 tracking-tight">
          Explore <span className="text-[var(--color-accent)] font-medium">Baringo</span>
        </h1>
        <div className="w-16 h-1 bg-[var(--color-accent)] mx-auto mb-6 rounded-full" />
        <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Discover the wonders of the Great Rift Valley. From hot springs to cool mountain heights, Kabarnet is the ultimate gateway to Baringo&apos;s natural beauty.
        </p>
        
        <div className="relative h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl group">
          <Image
            src="/images/compound-view.png"
            alt="Baringo Valley Views from Flamingo Airbnb"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-102"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10" />
          
          <div className="absolute bottom-8 left-8 right-8 text-left z-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <div className="flex items-center gap-2 text-[var(--color-accent)] mb-2">
                <MapPin className="h-4 w-4" />
                <span className="text-xs font-semibold tracking-wider uppercase">From The Compound</span>
              </div>
              <h2 className="text-white font-serif font-bold text-3xl">The Majestic Valley Vistas</h2>
              <p className="text-white/80 text-sm font-light mt-1 max-w-md">Enjoy fresh air and views of the rolling green hills right from the Flamingo Airbnb compound.</p>
            </div>
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-primary)] shadow-lg hover:bg-[var(--color-accent-hover)] transition-colors"
            >
              Plan A Guided Excursion
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[var(--color-accent)] font-semibold tracking-widest text-xs uppercase block mb-3">Interactive Guide</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">
            Baringo From Above
          </h2>
          <div className="w-16 h-1 bg-[var(--color-accent)] mx-auto rounded-full" />
        </div>
        <ExploreMap />
      </section>

      {/* Attractions Grid */}
      <section className="py-20 bg-white border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--color-accent)] font-semibold tracking-widest text-xs uppercase block mb-3">Nearby Destinations</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4">
              Local Wonders to Experience
            </h2>
            <div className="w-16 h-1 bg-[var(--color-accent)] mx-auto mb-6 rounded-full" />
            <p className="text-lg text-[var(--color-text-muted)] max-w-xl mx-auto font-light">
              Your stay puts you in a prime position to set out and explore these iconic tourist hotspots.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {attractions.map((attraction, index) => (
              <div key={index} className="flex gap-6 p-8 rounded-3xl bg-[var(--color-background)] border border-[var(--color-border)] premium-shadow-hover transition-premium">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-[var(--color-border)] flex items-center justify-center shadow-sm">
                    {attraction.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[var(--color-primary)] mb-3">{attraction.name}</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-sm font-light">{attraction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Information */}
      <section className="py-24 bg-[var(--color-primary)] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#FAF8F5_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--color-accent)] font-semibold tracking-widest text-xs uppercase block mb-3">Good to Know</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Essential Travel <br /><span className="text-[var(--color-accent)] font-medium">Information</span>
              </h2>
              
              <div className="space-y-8 text-white/80 font-light">
                <div className="border-l-2 border-[var(--color-accent)] pl-6">
                  <h3 className="text-lg font-bold text-white mb-2 font-serif">Getting to Kabarnet</h3>
                  <p className="text-sm">Kabarnet is reached via modern, paved winding roads offering gorgeous sights. It is a scenic 5-hour drive from Nairobi via Nakuru and Marigat town.</p>
                </div>
                <div className="border-l-2 border-[var(--color-accent)] pl-6">
                  <h3 className="text-lg font-bold text-white mb-2 font-serif">Best Timing</h3>
                  <p className="text-sm">While Baringo is sunny year-round, dry seasons (January to March and July to October) offer peak clarity for wildlife viewing, hiking, and boat safaris.</p>
                </div>
                <div className="border-l-2 border-[var(--color-accent)] pl-6">
                  <h3 className="text-lg font-bold text-white mb-2 font-serif">Climate Details</h3>
                  <p className="text-sm">Highlands around Kabarnet enjoy cool, refreshing evenings, making a cozy contrast to the warmer climate down in the Rift Valley floor.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 p-10 md:p-14 rounded-3xl border border-white/10 backdrop-blur-md text-center">
               <div className="inline-flex p-3 rounded-2xl bg-white/10 text-[var(--color-accent)] mb-6">
                 <Sparkles className="h-6 w-6" />
               </div>
               <h3 className="text-2xl font-serif font-bold mb-4">Want a Custom Tour?</h3>
               <p className="mb-8 text-white/80 font-light leading-relaxed">
                 We know every hidden local trail and peak. Let us know what you want to experience and we can recommend verified local guides or private drivers.
               </p>
               <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-[var(--color-accent)] px-8 py-4 text-base font-bold text-[var(--color-primary)] shadow-lg hover:bg-[var(--color-accent-hover)] hover:scale-105 transition-all duration-300 w-full"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
