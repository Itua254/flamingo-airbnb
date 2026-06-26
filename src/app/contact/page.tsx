import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Phone, MapPin, Clock, Sparkles } from "lucide-react";

export const metadata = {
  title: "Contact Us & Directions | Flamingo Airbnb",
  description: "Get in touch with Flamingo Airbnb. Find our location in Kabarnet, Baringo County, and book your stay directly via WhatsApp.",
};

export default function ContactPage() {
  const whatsAppUrl = getWhatsAppUrl("/contact");

  return (
    <div className="bg-[var(--color-background)] min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[var(--color-accent)] font-semibold tracking-widest text-xs uppercase block mb-3">Reach Out</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-6">
            Contact & Directions
          </h1>
          <div className="w-16 h-1 bg-[var(--color-accent)] mx-auto mb-6 rounded-full" />
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto font-light">
            We are here to help you plan a seamless visit. Get in touch with us for booking updates, transport support, or local tourist advice.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-5 p-6 rounded-3xl bg-white border border-[var(--color-border)] premium-shadow-hover transition-premium">
                  <div className="p-3 bg-[var(--color-background-alt)] rounded-2xl text-[var(--color-accent)] shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-gray-900 text-lg mb-1">WhatsApp & Call</h3>
                    <p className="text-xs text-[var(--color-text-muted)] mb-3">Quickest response for booking inquiries.</p>
                    <a 
                      href={whatsAppUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[var(--color-primary)] font-semibold text-lg hover:text-[var(--color-accent)] transition-colors"
                    >
                      +254 718 952 244
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-6 rounded-3xl bg-white border border-[var(--color-border)] premium-shadow-hover transition-premium">
                  <div className="p-3 bg-[var(--color-background-alt)] rounded-2xl text-[var(--color-accent)] shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-gray-900 text-lg mb-1">Location</h3>
                    <p className="text-sm text-[var(--color-text-muted)] font-light leading-relaxed">
                      Kabarnet Town,<br />
                      Baringo County, Kenya
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 p-6 rounded-3xl bg-white border border-[var(--color-border)] premium-shadow-hover transition-premium">
                  <div className="p-3 bg-[var(--color-background-alt)] rounded-2xl text-[var(--color-accent)] shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-gray-900 text-lg mb-1">Check-in / Check-out</h3>
                    <p className="text-sm text-[var(--color-text-muted)] font-light leading-relaxed">
                      Check-in: 2:00 PM onwards<br />
                      Check-out: 10:00 AM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-primary)] p-8 md:p-10 rounded-3xl text-white text-center shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-accent)]/10 rounded-full blur-2xl" />
              <div className="inline-flex p-3 rounded-2xl bg-white/10 text-[var(--color-accent)] mb-4">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="font-serif font-bold text-2xl mb-3">Ready to Book?</h3>
              <p className="text-white/80 font-light text-sm mb-8 max-w-xs mx-auto">Skip the wait and reserve your desired stay dates instantly by chatting with our host.</p>
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-[#25D366] px-8 py-4 text-base font-bold text-white shadow-lg hover:bg-[#20bd5a] hover:scale-102 transition-all duration-300"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Map and Directions */}
          <div className="lg:col-span-7 space-y-8 flex flex-col">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--color-primary)]">
              Directions & Map
            </h2>
            <div className="bg-white p-8 rounded-3xl border border-[var(--color-border)] shadow-sm">
              <h3 className="font-serif font-bold text-gray-900 mb-3">Finding the Property</h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed font-light mb-6">
                Flamingo Airbnb is situated in a private, gated compound in Kabarnet town. For guest safety and privacy, the exact address and entry details are shared directly with booked guests. Click the button below or contact us via WhatsApp for live location sharing.
              </p>
              <a 
                href="https://maps.app.goo.gl/pB9bXP9v3qyLMwWVA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl bg-[var(--color-primary)] px-6 py-3 text-sm font-bold text-white hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all duration-300"
              >
                <MapPin className="h-4 w-4" />
                Open in Google Maps
              </a>
            </div>
            
            <div className="flex-1 w-full rounded-3xl overflow-hidden shadow-lg border border-[var(--color-border)] min-h-[420px] relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15957.514434289456!2d35.7335!3d0.4938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178051a804a9afc1%3A0x6e2a2c7a52e1b1d1!2sKabarnet!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of Kabarnet, Baringo"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
