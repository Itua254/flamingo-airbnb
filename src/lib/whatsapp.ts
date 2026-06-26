const WHATSAPP_NUMBER = "254718952244";

interface WhatsAppOptions {
  checkIn?: string;
  checkOut?: string;
  guests?: string;
}

export function getWhatsAppUrl(pathname: string, options?: WhatsAppOptions): string {
  let intro = "I would like to inquire about availability.";
  
  // Dynamic context based on pathname
  if (pathname === "/explore") {
    intro = "I was looking at the Baringo attractions and would like to inquire about availability.";
  } else if (pathname === "/gallery") {
    intro = "I was looking at your photo gallery and would like to inquire about availability.";
  }

  const checkInText = options?.checkIn || "";
  const checkOutText = options?.checkOut || "";
  const guestsText = options?.guests || "";

  const customMessage = `Hello Flamingo Airbnb,\n\n${intro}\n\nCheck-In: ${checkInText}\nCheck-Out: ${checkOutText}\nGuests: ${guestsText}\n\nThank you.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(customMessage)}`;
}
