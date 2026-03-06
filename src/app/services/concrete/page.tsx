"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroCarouselLogo from "@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo";
import FeatureCardTwentyFour from "@/components/sections/feature/FeatureCardTwentyFour";
import TestimonialCardThirteen from "@/components/sections/testimonial/TestimonialCardThirteen";
import Link from "next/link";

export default function ConcreteServicesPage() {
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

      <div id="hero-concrete" data-section="hero-concrete">
        <HeroCarouselLogo
          logoText="CONCRETE"
          description="Expert concrete services for driveways, patios, slabs, and foundations. Built to withstand Oklahoma weather with professional craftsmanship and affordable pricing."
          buttons={[
            { text: "Call Now: 405-203-5018", href: "tel:405-203-5018" },
            { text: "Get Free Estimate", href: "#contact" },
          ]}
          slides={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/worker-leveling-fresh-floor-with-special-machine_651396-3523.jpg?_wi=3",
              imageAlt: "concrete driveway installation",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-construction-worker-construction-site_1150-10148.jpg?_wi=2",
              imageAlt: "concrete driveway finished",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/full-shot-social-distancing-concept_23-2148740142.jpg?_wi=5",
              imageAlt: "concrete patio construction",
            },
          ]}
          autoplayDelay={5000}
          showDimOverlay={true}
        />
      </div>

      <div id="concrete-services" data-section="concrete-services">
        <FeatureCardTwentyFour
          title="Our Concrete Services"
          description="Professional concrete work designed to last. From driveways to custom projects, we deliver quality surfaces that enhance your property."
          tag="What We Offer"
          features={[
            {
              id: "concrete-driveway",
              title: "Driveways",
              author: "Durable & Beautiful",
              description: "Professional driveway installation and repair. We create smooth, attractive surfaces that add value to your home and withstand heavy use.",
              tags: ["Installation", "Repair", "Resurfacing"],
              imageSrc: "http://img.b2bpic.net/free-photo/worker-leveling-fresh-floor-with-special-machine_651396-3523.jpg?_wi=4",
            },
            {
              id: "concrete-patio",
              title: "Patios & Outdoor Spaces",
              author: "Custom Design",
              description: "Create beautiful outdoor living spaces with professional concrete patios. Custom finishes and designs to match your style and needs.",
              tags: ["Patio Design", "Custom Finishes", "Outdoor Living"],
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-construction-worker-construction-site_1150-10148.jpg?_wi=3",
            },
            {
              id: "concrete-foundations",
              title: "Slabs & Foundations",
              author: "Structural Integrity",
              description: "Expert slab and foundation work for residential and commercial projects. Built with precision for long-lasting durability and stability.",
              tags: ["Slabs", "Foundations", "Professional Grade"],
              imageSrc: "http://img.b2bpic.net/free-photo/full-shot-social-distancing-concept_23-2148740142.jpg?_wi=6",
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "Get Free Estimate", href: "#contact" }]}
        />
      </div>

      <div id="concrete-testimonials" data-section="concrete-testimonials">
        <TestimonialCardThirteen
          title="Concrete Work That Impresses"
          description="Our concrete projects speak for themselves. Read what satisfied customers in Chickasha have to say about our workmanship."
          tag="Customer Reviews"
          testimonials={[
            {
              id: "1",
              name: "James Wilson",
              handle: "@homeowner-ok",
              testimonial: "Our new driveway looks fantastic! The team was professional, clean, and the finish quality exceeded expectations. Great value for the work done.",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1602.jpg?_wi=3",
            },
            {
              id: "2",
              name: "Patricia Brown",
              handle: "@chickasha-resident",
              testimonial: "Jamie's crew built our patio and it's beautiful. The craftsmanship is evident, they cleaned up perfectly, and the pricing was very fair. Highly satisfied!",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/cheerful-positive-young-woman-with-pinkish-hair-sitting-home-against-golden-light-background-having-optimistic-happy-facial-expression-keeping-hands-chin-smiling-broadly-camera_343059-1907.jpg?_wi=2",
            },
            {
              id: "3",
              name: "Robert Lopez",
              handle: "@property-owner",
              testimonial: "Had a concrete repair done and it looks like new. The team was efficient, professional, and stands behind their work. Definitely recommend JR's.",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1613.jpg?_wi=3",
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