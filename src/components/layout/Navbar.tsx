"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import WeatherWidget from "./WeatherWidget";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Explore Baringo", href: "/explore" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const whatsAppUrl = getWhatsAppUrl(pathname);

  return (
    <header className="glass-nav sticky top-0 z-50 transition-premium">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:py-5 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 group">
            <span className="sr-only">Flamingo Airbnb</span>
            <div className="font-serif text-2xl font-bold tracking-tight text-[var(--color-primary)] transition-colors duration-300 group-hover:text-[var(--color-primary-light)]">
              Flamingo <span className="text-[var(--color-accent)] font-medium">Airbnb</span>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[var(--color-primary)]"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 tracking-wide transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--color-accent)] after:transition-all after:duration-300 hover:after:w-full ${
                pathname === item.href
                  ? "text-[var(--color-primary)] after:w-full"
                  : "text-[var(--color-text)] hover:text-[var(--color-primary)]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-6">
          <WeatherWidget />
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--color-primary)] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[var(--color-accent)] hover:scale-105 hover:shadow-md transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
          >
            Book Now
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50 bg-[var(--color-primary)]/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#FAF8F5] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 shadow-2xl">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Flamingo Airbnb</span>
                <div className="font-serif text-2xl font-bold tracking-tight text-[var(--color-primary)]">
                  Flamingo <span className="text-[var(--color-accent)] font-medium">Airbnb</span>
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-[var(--color-primary)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-8 flow-root">
              <div className="-my-6 divide-y divide-[var(--color-border)]">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`-mx-3 block rounded-lg px-3 py-3 text-base font-semibold leading-7 transition-colors ${
                        pathname === item.href
                          ? "bg-[var(--color-border)]/20 text-[var(--color-primary)]"
                          : "text-[var(--color-text)] hover:bg-[var(--color-border)]/10 hover:text-[var(--color-primary)]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="-mx-3 block rounded-full bg-[var(--color-primary)] text-center px-4 py-3 text-base font-semibold text-white shadow-md hover:bg-[var(--color-accent)] transition-all duration-300"
                  >
                    Book Now via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
