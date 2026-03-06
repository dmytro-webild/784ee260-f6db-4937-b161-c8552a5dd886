"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroCarouselLogo from "@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo";
import FeatureCardTwentyFour from "@/components/sections/feature/FeatureCardTwentyFour";
import MediaAbout from "@/components/sections/about/MediaAbout";
import TestimonialCardThirteen from "@/components/sections/testimonial/TestimonialCardThirteen";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import Link from "next/link";

export default function HomePage() {
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

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="JR'S"
          description="Professional Fencing, Roofing & Construction Services in Chickasha, Oklahoma. Affordable, high-quality work with free estimates."
          buttons={[
            {
              text: "Call Now: 405-203-5018",              href: "tel:405-203-5018"
            },
            {
              text: "Get Free Estimate",              href: "#contact"
            },
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZ5ansrGPYT9UMxORCtfZ5K7Gz/uploaded-1772802385672-wg4amu72.jpg?_wi=1",              imageAlt: "Professional fencing installation"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZ5ansrGPYT9UMxORCtfZ5K7Gz/uploaded-1772802385672-d61s3cc7.jpg?_wi=1",              imageAlt: "Quality roofing installation"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZ5ansrGPYT9UMxORCtfZ5K7Gz/uploaded-1772802385673-y86l68v7.jpg?_wi=1",              imageAlt: "Concrete driveway project"
            },
          ]}
          autoplayDelay={5000}
          showDimOverlay={true}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwentyFour
          title="Our Services"
          description="We offer a complete range of construction and home improvement services to meet all your needs."
          tag="What We Do"
          features={[
            {
              id: "fencing",              title: "Fencing Services",              author: "Specialized Installation & Repair",              description: "Professional fence installation, repairs, and staining. We work with wood, chain link, and custom solutions designed to last.",              tags: ["Installation", "Repair", "Staining"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZ5ansrGPYT9UMxORCtfZ5K7Gz/uploaded-1772802656018-c9o6by1y.jpg?_wi=1",              imageAlt: "modern fence installation outdoor"
            },
            {
              id: "roofing",              title: "Roofing Services",              author: "JR's Roofing LLC - New Division",              description: "Complete roofing solutions including repairs, replacements, and storm damage restoration. Competitive rates and superior craftsmanship.",              tags: ["Repair", "Replacement", "Storm Damage"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZ5ansrGPYT9UMxORCtfZ5K7Gz/uploaded-1772803139295-ifyrebqb.jpg?_wi=1",              imageAlt: "roofing shingles professional installation"
            },
            {
              id: "concrete",              title: "Concrete Work",              author: "Durable & Professional",              description: "Expert concrete services for driveways, patios, slabs, and foundations. Built to withstand Oklahoma weather.",              tags: ["Driveways", "Patios", "Slabs"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZ5ansrGPYT9UMxORCtfZ5K7Gz/uploaded-1772803392398-pjen0ty3.jpg",              imageAlt: "concrete driveway finished"
            },
            {
              id: "painting",              title: "Painting Services",              author: "Interior & Exterior",              description: "Professional painting services for both interior and exterior projects. Clean, high-quality finishes that protect and beautify.",              tags: ["Interior", "Exterior", "Professional"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AZ5ansrGPYT9UMxORCtfZ5K7Gz/uploaded-1772804500000-painting-services.jpg",              imageAlt: "professional house painting interior and exterior"
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            {
              text: "Get Free Estimate",              href: "#contact"
            },
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="A Local Family Business Built on Hard Work"
          description="Jamie Resendez was born and raised in Chickasha, Oklahoma and founded JR's Diversified Fencing and Construction LLC with a commitment to quality, honesty, and affordable service. Working alongside his sons, the company represents a true family business dedicated to serving the local community. Every project is completed with pride, craftsmanship, and attention to detail. Veteran hands on deck."
          tag="About Us"
          imageSrc="http://img.b2bpic.net/free-photo/full-shot-people-book-club_23-2150059022.jpg"
          imageAlt="JR's Diversified team at work"
          useInvertedBackground={true}
          buttons={[
            {
              text: "Learn Our Story",              href: "#why-us"
            },
          ]}
        />
      </div>

      <div id="why-us" data-section="why-us">
        <FeatureCardTwentyFour
          title="Why Choose JR's Diversified?"
          description="We're built on principles that matter to local homeowners and businesses."
          tag="Our Commitment"
          features={[
            {
              id: "free-estimates",              title: "Free Estimates",              author: "No Hidden Costs",              description: "We provide detailed, honest estimates with no surprises. You'll know exactly what to expect before work begins.",              tags: ["Transparent", "Fair Pricing"],
              imageSrc: "http://img.b2bpic.net/free-photo/business-people-discussing-meeting_23-2147923299.jpg",              imageAlt: "business estimate discussion consultation"
            },
            {
              id: "licensed-bonded",              title: "Licensed, Bonded & Insured",              author: "Peace of Mind",              description: "Full licensing, bonding, and insurance protection for every project. Your investment is protected.",              tags: ["Licensed", "Protected"],
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-man-suit-holding-contract_23-2148230735.jpg",              imageAlt: "business license certificate professional"
            },
            {
              id: "veteran-work-ethic",              title: "Veteran Work Ethic",              author: "Dedication to Excellence",              description: "We bring the same dedication, discipline, and commitment to quality that defines veteran service. Hard work, integrity, and attention to detail in every job.",              tags: ["Professional", "Reliable"],
              imageSrc: "http://img.b2bpic.net/free-photo/native-american-man-dessert_23-2149312999.jpg",              imageAlt: "military veteran construction worker"
            },
            {
              id: "family-owned",              title: "Family-Owned Business",              author: "Local Roots, Local Pride",              description: "Locally owned and operated by the Resendez family. We're invested in our community and take pride in every project.",              tags: ["Local", "Community"],
              imageSrc: "http://img.b2bpic.net/free-photo/group-happy-mature-friends-having-fun-while-surfing-net-computer-home_637285-2712.jpg",              imageAlt: "family business local community"
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="What Our Customers Say"
          description="Real feedback from local homeowners and businesses who trust JR's Diversified with their projects."
          tag="Testimonials"
          testimonials={[
            {
              id: "1",              name: "Robert Martinez",              handle: "@chickasha-resident",              testimonial: "Jamie did an excellent job on our fence installation. Professional, affordable, and the work quality is outstanding. Highly recommend!",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1602.jpg?_wi=1",              imageAlt: "satisfied male customer portrait"
            },
            {
              id: "2",              name: "Sarah Johnson",              handle: "@local-business-owner",              testimonial: "The roofing work was completed on time and within budget. Jamie's team is reliable and stands behind their work. Great local business!",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-woman-choosimng-car-car-showroom_1303-26290.jpg?_wi=1",              imageAlt: "satisfied female business owner"
            },
            {
              id: "3",              name: "Michael Chen",              handle: "@homeowner-ok",              testimonial: "Fantastic concrete work on our driveway. The team was professional, cleaned up after themselves, and the finish looks amazing. Will definitely use again.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1613.jpg?_wi=1",              imageAlt: "satisfied male customer portrait"
            },
            {
              id: "4",              name: "Jennifer Davis",              handle: "@chickasha-family",              testimonial: "We appreciated the free estimate and honest pricing. No surprises, just quality work. Jamie's sons are professional and skilled. Highly satisfied!",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/cheerful-positive-young-woman-with-pinkish-hair-sitting-home-against-golden-light-background-having-optimistic-happy-facial-expression-keeping-hands-chin-smiling-broadly-camera_343059-1907.jpg?_wi=1",              imageAlt: "satisfied female customer portrait"
            },
            {
              id: "5",              name: "David Wilson",              handle: "@local-builder",              testimonial: "I've referred several clients to JR's Diversified. They consistently deliver quality craftsmanship and excellent customer service. A true local gem.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-men-wearing-helmet_23-2148921379.jpg",              imageAlt: "professional male portrait builder"
            },
            {
              id: "6",              name: "Emily Rodriguez",              handle: "@satisfied-customer",              testimonial: "From the initial consultation to project completion, everything was professional and thorough. The team takes pride in their work. Excellent experience!",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-hispanic-woman-with-short-hair-wearing-summer-dress-smiling-happy-positive-thumb-up-doing-excellent-approval-sign_839833-13161.jpg",              imageAlt: "satisfied customer woman portrait"
            },
          ]}
          showRating={true}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted Throughout Chickasha & Surrounding Communities"
          description="JR's Diversified has built a reputation for quality work and honest service across Oklahoma."
          tag="Service Area"
          textboxLayout="default"
          useInvertedBackground={false}
          names={[
            "Chickasha, OK",            "Ninnekah",            "Washita County",            "Grady County",            "Stephens County",            "Jefferson County",            "Comanche County",            "Caddo County"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Ready to Get Started?"
          title="Free Estimate for Your Project"
          description="Contact JR's Diversified today for a free, no-obligation estimate. Call or fill out our form for immediate attention."
          tagAnimation="slide-up"
          background={{
            variant: "rotated-rays-animated-grid"
          }}
          useInvertedBackground={false}
          inputPlaceholder="Enter your email"
          buttonText="Send Me Options"
          termsText="We respect your privacy. We'll contact you within 24 hours to discuss your project."
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