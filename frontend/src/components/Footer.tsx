"use client";

import { AnimatedSection } from "../components/AnimatedComponents";

export default function Footer() {
  return (
    <AnimatedSection
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <div className="footer-icons">
        <a
          href="https://wa.me/584120187917"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/whatsaap.svg" alt="WhatsApp" className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/abrahan-ramirez-0b10bb368/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/linkeding.svg" alt="LinkedIn" className="w-6 h-6" />
        </a>
        <a
          href="https://github.com/Soyabrahan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/github.svg" alt="GitHub" className="w-6 h-6" />
        </a>
      </div>
      <div className="footer-text">© 2025 Abrahan. All rights reserved.</div>
    </AnimatedSection>
  );
}
