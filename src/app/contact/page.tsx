"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Phone } from "lucide-react";

export default function ContactPage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
    { name: "Gallery", id: "gallery" },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="compact"
      sizing="mediumLargeSizeMediumTitles"
      background="floatingGradient"
      cardStyle="soft-shadow"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="glass"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          navItems={navItems}
          button={{ text: "Call Now", href: "tel:405-203-5018" }}
          brandName="JR's Diversified"
        />
      </div>

      <main className="flex flex-col min-h-screen">
        <div id="contact" data-section="contact" className="py-20">
          <ContactCenter
            tag="Ready to Get Started?"
            title="Free Estimate for Your Project"
            description="Contact JR's Diversified today for a free, no-obligation estimate. Call or fill out our form for immediate attention."
            tagIcon={Phone}
            tagAnimation="slide-up"
            background={{
              variant: "rotated-rays-animated-grid"}}
            useInvertedBackground={false}
            inputPlaceholder="Enter your email"
            buttonText="Send Me Options"
            termsText="We respect your privacy. We'll contact you within 24 hours to discuss your project."
            onSubmit={(email) => {
              console.log("Contact form submitted with email:", email);
            }}
          />
        </div>

        <div className="mt-auto">
          <div id="footer" data-section="footer">
            <FooterLogoReveal
              logoText="JR'S DIVERSIFIED"
              leftLink={{
                text: "Privacy Policy",                href: "#"}}
              rightLink={{
                text: "Terms of Service",                href: "#"}}
            />
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}