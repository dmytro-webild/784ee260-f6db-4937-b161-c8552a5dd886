"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroCarouselLogo from "@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo";
import FeatureCardTwentyFour from "@/components/sections/feature/FeatureCardTwentyFour";
import TestimonialCardThirteen from "@/components/sections/testimonial/TestimonialCardThirteen";
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
          button={{ text: "Call Now", href: "tel:405-203-5018" }}
          brandName="JR's Diversified"
        />
      </div>

      <div id="hero-roofing" data-section="hero-roofing">
        <HeroCarouselLogo
          logoText="ROOFING"
          description="Professional roofing installation, repair, and replacement services in Chickasha, Oklahoma. Licensed, bonded, and insured with competitive rates and superior craftsmanship."
          buttons={[
            { text: "Call Now: 405-203-5018", href: "tel:405-203-5018" },
            { text: "Get Free Estimate", href: "#contact" },
          ]}
          slides={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/front-view-carpenter-man-sitting-smiling_23-2148748790.jpg?_wi=2",
              imageAlt: "roofing installation professional contractor",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-working-with-protection-helmet_23-2149343636.jpg?_wi=2",
              imageAlt: "roofing shingles professional installation",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/full-shot-social-distancing-concept_23-2148740142.jpg?_wi=3",
              imageAlt: "roofing work in progress",
            },
          ]}
          autoplayDelay={5000}
          showDimOverlay={true}
        />
      </div>

      <div id="roofing-services" data-section="roofing-services">
        <FeatureCardTwentyFour
          title="Our Roofing Services"
          description="Complete roofing solutions tailored to your needs and budget. From repairs to full replacements, we deliver quality and reliability."
          tag="What We Offer"
          features={[
            {
              id: "roof-repair",
              title: "Roof Repair",
              author: "Quick & Reliable",
              description: "Professional repair services for leaks, damage, and wear. We identify issues early and provide long-lasting solutions to protect your home.",
              tags: ["Leak Repair", "Storm Damage", "Fast Service"],
              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-working-with-protection-helmet_23-2149343636.jpg?_wi=3",
            },
            {
              id: "roof-replacement",
              title: "Roof Replacement",
              author: "Complete Solutions",
              description: "Full roof replacements with modern materials and expert installation. We handle everything from removal to final inspection.",
              tags: ["Full Replacement", "Modern Materials", "Warranty"],
              imageSrc: "http://img.b2bpic.net/free-photo/front-view-carpenter-man-sitting-smiling_23-2148748790.jpg?_wi=3",
            },
            {
              id: "storm-restoration",
              title: "Storm Damage Restoration",
              author: "Emergency Response",
              description: "Fast response to storm damage with professional assessment and restoration. We work with insurance companies for seamless claims.",
              tags: ["Storm Damage", "Insurance Work", "24/7 Response"],
              imageSrc: "http://img.b2bpic.net/free-photo/full-shot-social-distancing-concept_23-2148740142.jpg?_wi=4",
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "Get Free Estimate", href: "#contact" }]}
        />
      </div>

      <div id="roofing-testimonials" data-section="roofing-testimonials">
        <TestimonialCardThirteen
          title="Roofing Work You Can Trust"
          description="Our customers trust us with one of their home's most important features. Here's what they have to say."
          tag="Customer Reviews"
          testimonials={[
            {
              id: "1",
              name: "Tom Anderson",
              handle: "@homeowner-ok",
              testimonial: "Jamie's team handled our roof replacement professionally and on time. The quality of work is exceptional and the price was fair. Highly recommend!",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1602.jpg?_wi=2",
            },
            {
              id: "2",
              name: "Michelle Garcia",
              handle: "@chickasha-property",
              testimonial: "After the storm damaged our roof, JR's responded quickly and professionally. They handled everything, including insurance coordination. Great experience!",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-woman-choosimng-car-car-showroom_1303-26290.jpg?_wi=2",
            },
            {
              id: "3",
              name: "David Schmidt",
              handle: "@local-builder",
              testimonial: "I've referred multiple clients to JR's for roofing work. They're reliable, skilled, and deliver quality results every time. One of the best in the area.",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1613.jpg?_wi=2",
            },
          ]}
          showRating={true}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <footer className="py-12 bg-background border-t border-accent/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-foreground/60 mb-4">
            JR's Diversified Fencing and Construction LLC
          </p>
          <div className="flex justify-center gap-8 mb-6">
            <Link href="/" className="text-foreground/70 hover:text-primary-cta transition">
              Home
            </Link>
            <a href="#" className="text-foreground/70 hover:text-primary-cta transition">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/70 hover:text-primary-cta transition">
              Terms of Service
            </a>
          </div>
          <p className="text-foreground/50 text-sm">
            © 2024 JR's Diversified. All rights reserved.
          </p>
        </div>
      </footer>
    </ThemeProvider>
  );
}