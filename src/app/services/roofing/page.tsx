"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroCarouselLogo from "@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo";
import FeatureCardTwentyFour from "@/components/sections/feature/FeatureCardTwentyFour";
import MediaAbout from "@/components/sections/about/MediaAbout";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import Link from "next/link";

export default function RoofingServicesPage() {
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
          button={{
            text: "Call Now",            href: "tel:405-203-5018"
          }}
          brandName="JR's Diversified"
        />
      </div>

      <div id="roofing-hero" data-section="roofing-hero">
        <HeroCarouselLogo
          logoText="ROOFING"
          description="Professional roofing installation, repairs, and restoration services throughout Chickasha and surrounding areas. From minor repairs to complete roof replacements, we deliver quality workmanship that protects your home."
          buttons={[
            {
              text: "Call Now: 405-203-5018",              href: "tel:405-203-5018"
            },
            {
              text: "Get Your Free Estimate",              href: "#contact"
            },
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZ5ansrGPYT9UMxORCtfZ5K7Gz/uploaded-1772802385672-wg4amu72.jpg?_wi=4",              imageAlt: "Professional roofing installation"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZ5ansrGPYT9UMxORCtfZ5K7Gz/uploaded-1772802385672-d61s3cc7.jpg?_wi=4",              imageAlt: "roof repair and maintenance"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZ5ansrGPYT9UMxORCtfZ5K7Gz/uploaded-1772802385673-y86l68v7.jpg?_wi=4",              imageAlt: "storm damage restoration service"
            },
          ]}
          autoplayDelay={5000}
          showDimOverlay={true}
        />
      </div>

      <div id="roofing-services" data-section="roofing-services">
        <FeatureCardTwentyFour
          title="Our Roofing Services"
          description="We offer a comprehensive range of roofing services designed to protect your investment and keep your home secure."
          tag="What We Offer"
          features={[
            {
              id: "new-installation",              title: "New Roof Installation",              author: "Professional Design & Build",              description: "We design and install durable roofing systems using quality materials that withstand Oklahoma weather. From asphalt shingles to metal roofing, we deliver lasting protection for your property.",              tags: ["Installation", "Custom Design", "Quality"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZ5ansrGPYT9UMxORCtfZ5K7Gz/uploaded-1772802385672-wg4amu72.jpg?_wi=2",              imageAlt: "roof installation project"
            },
            {
              id: "repairs",              title: "Roof Repairs",              author: "Fast, Reliable Service",              description: "Damaged roof? We quickly assess and repair leaks, broken shingles, flashing issues, and structural damage. Our experienced team restores your roof to protective condition rapidly and affordably.",              tags: ["Repair", "Quick Service", "Affordable"],
              imageSrc: "http://img.b2bpic.net/free-photo/full-shot-social-distancing-concept_23-2148740142.jpg?_wi=2",              imageAlt: "roof repair work"
            },
            {
              id: "storm-damage",              title: "Storm Damage Restoration",              author: "Emergency Response",              description: "Storm damage got you down? We provide prompt assessment and restoration services to get your roof back to full protection. We work with insurance companies and handle all details.",              tags: ["Storm Damage", "Insurance Claims", "Emergency"],
              imageSrc: "http://img.b2bpic.net/free-photo/worker-leveling-fresh-floor-with-special-machine_651396-3523.jpg?_wi=2",              imageAlt: "storm damage roof restoration"
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            {
              text: "Schedule Consultation",              href: "#contact"
            },
          ]}
        />
      </div>

      <div id="roofing-cta" data-section="roofing-cta">
        <ContactCenter
          tag="Ready to Protect Your Home?"
          title="Free Roofing Estimate Today"
          description="Call JR's Diversified to discuss your roofing project. We provide free estimates and expert advice to help you choose the perfect roofing solution for your property."
          tagAnimation="slide-up"
          background={{
            variant: "rotated-rays-animated-grid"
          }}
          useInvertedBackground={false}
          inputPlaceholder="Enter your email"
          buttonText="Get Your Estimate"
          termsText="We respect your privacy. We'll contact you within 24 hours to discuss your roofing project."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="JR'S DIVERSIFIED"
          leftLink={{
            text: "Privacy Policy",            href: "#"
          }}
          rightLink={{
            text: "Terms of Service",            href: "#"
          }}
        />
      </div>
    </ThemeProvider>
  );
}