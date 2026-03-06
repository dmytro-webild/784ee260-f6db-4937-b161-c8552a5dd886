"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroCarouselLogo from "@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo";
import FeatureCardTwentyFour from "@/components/sections/feature/FeatureCardTwentyFour";
import MediaAbout from "@/components/sections/about/MediaAbout";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import Link from "next/link";

export default function FencingServicesPage() {
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

      <div id="fencing-hero" data-section="fencing-hero">
        <HeroCarouselLogo
          logoText="FENCING"
          description="Professional fencing installation and repair services throughout Chickasha and surrounding areas. From new installations to repairs and staining, we deliver durable fences that enhance your property's beauty and security."
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
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZ5ansrGPYT9UMxORCtfZ5K7Gz/uploaded-1772802385672-wg4amu72.jpg?_wi=4",              imageAlt: "Professional fencing installation"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZ5ansrGPYT9UMxORCtfZ5K7Gz/uploaded-1772802385672-d61s3cc7.jpg?_wi=4",              imageAlt: "fence repair and maintenance"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZ5ansrGPYT9UMxORCtfZ5K7Gz/uploaded-1772802385673-y86l68v7.jpg?_wi=4",              imageAlt: "fence staining service"
            },
          ]}
          autoplayDelay={5000}
          showDimOverlay={true}
        />
      </div>

      <div id="fencing-services" data-section="fencing-services">
        <FeatureCardTwentyFour
          title="Our Fencing Services"
          description="We offer a comprehensive range of fencing services designed to meet every need and budget."
          tag="What We Offer"
          features={[
            {
              id: "new-installation",              title: "New Fence Installation",              author: "Professional Design & Build",              description: "We design and install custom fencing solutions including wood privacy fences, vinyl fencing, chain-link fences, and decorative options. Each fence is built to withstand Oklahoma weather and engineered for longevity.",              tags: ["Installation", "Custom Design", "Quality"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZ5ansrGPYT9UMxORCtfZ5K7Gz/uploaded-1772802656018-c9o6by1y.jpg?_wi=2",              imageAlt: "fence installation project"
            },
            {
              id: "repairs",              title: "Fence Repairs",              author: "Fast, Reliable Service",              description: "Damaged fence? We repair broken boards, posts, gates, and hardware. Our team quickly assesses damage and provides cost-effective solutions to restore your fence to like-new condition.",              tags: ["Repair", "Quick Service", "Affordable"],
              imageSrc: "http://img.b2bpic.net/free-photo/full-shot-social-distancing-concept_23-2148740142.jpg?_wi=2",              imageAlt: "fence repair work"
            },
            {
              id: "staining-sealing",              title: "Staining & Sealing",              author: "Protective Finishing",              description: "Extend your fence's life with our professional staining and sealing services. We use high-quality products to protect wood from weathering, UV damage, and rot while enhancing its natural beauty.",              tags: ["Staining", "Sealing", "Protection"],
              imageSrc: "http://img.b2bpic.net/free-photo/worker-leveling-fresh-floor-with-special-machine_651396-3523.jpg?_wi=2",              imageAlt: "fence finishing service"
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

      <div id="fencing-cta" data-section="fencing-cta">
        <ContactCenter
          tag="Ready to Upgrade Your Fence?"
          title="Free Fencing Estimate Today"
          description="Call JR's Diversified to discuss your fencing project. We provide free estimates and expert advice to help you choose the perfect fencing solution for your property."
          tagAnimation="slide-up"
          background={{
            variant: "rotated-rays-animated-grid"
          }}
          useInvertedBackground={false}
          inputPlaceholder="Enter your email"
          buttonText="Get Your Estimate"
          termsText="We respect your privacy. We'll contact you within 24 hours to discuss your fencing project."
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