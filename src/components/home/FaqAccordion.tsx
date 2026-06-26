"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What are the check-in and check-out times?",
    answer: "Check-in is from 2:00 PM onwards, and check-out is by 10:00 AM. If you need special arrangements, please let us know via WhatsApp and we will do our best to accommodate."
  },
  {
    question: "Is the compound secure?",
    answer: "Yes, Flamingo Airbnb is located in a fully private, gated compound. We have a 24/7 security guard on-site, a secure perimeter wall, and private lockable entry for your complete peace of mind."
  },
  {
    question: "Do you offer catering or private chef services?",
    answer: "The property features a fully equipped modern kitchen for self-catering. We can also connect you with excellent local private chefs who can prepare customized meals during your stay if arranged in advance."
  },
  {
    question: "Is there high-speed WiFi?",
    answer: "Absolutely. We provide complimentary, reliable high-speed WiFi throughout the property, perfect for streaming, video calls, or remote work."
  },
  {
    question: "Can you help with local transport and tours?",
    answer: "Yes! We are happy to arrange trusted local drivers for airport transfers or guided tours to nearby attractions like Lake Bogoria and Lake Baringo."
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 space-y-4">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className="bg-white border border-[var(--color-border)] rounded-2xl overflow-hidden transition-all duration-300 premium-shadow-hover"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
          >
            <span className="font-serif font-bold text-lg text-[var(--color-primary)] pr-4">
              {faq.question}
            </span>
            <ChevronDown 
              className={`w-5 h-5 text-[var(--color-accent)] flex-shrink-0 transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : "rotate-0"
              }`} 
            />
          </button>
          
          <div 
            className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
              openIndex === index ? "max-h-48 pb-5 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-[var(--color-text-muted)] font-light leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
