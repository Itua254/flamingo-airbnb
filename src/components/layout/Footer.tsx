import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function Footer() {
  const whatsAppUrl = getWhatsAppUrl("/");

  return (
    <footer className="bg-[var(--color-primary)] text-white/80 py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-2xl font-bold text-white mb-4">
              Flamingo <span className="text-[var(--color-accent)]">Airbnb</span>
            </h3>
            <p className="max-w-xs mb-6 text-sm leading-relaxed">
              Experience the ultimate modern boutique hospitality at Flamingo Airbnb, your premier homestay in Baringo County.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/explore" className="hover:text-white transition-colors">Explore Baringo</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Kabarnet, Baringo County</li>
              <li>
                <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  +254 718 952 244
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-xs text-center">
          <p>&copy; {new Date().getFullYear()} Flamingo Airbnb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
