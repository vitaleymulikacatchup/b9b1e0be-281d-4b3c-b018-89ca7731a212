"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MediaGridAbout from '@/components/sections/about/MediaGridAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import ContactText from '@/components/sections/contact/ContactText';
import FooterMedia from '@/components/sections/footer/FooterMedia';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="small"
      sizing="largeSizeExtraLargeSpacing"
      background="noise"
      cardStyle="glass-outline"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="layered"
      headingFontWeight={undefined}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Inventory", id: "inventory" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766149522588-flx5quyr.jpg"
          logoAlt="Luxury Cars Logo"
          brandName="LuxeDrive"
          button={{
            text: "Get Started",
            href: "contact"
          }}
          buttonClassName="px-6 py-2"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboard
          logoText="LuxeDrive"
          description="Experience the finest collection of luxury and performance vehicles. Discover your perfect car from our exclusive inventory of hand-selected premium automobiles."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766149525596-tynxoxil.jpg"
          imageAlt="Premium luxury sports car showcase"
          frameStyle="browser"
          ariaLabel="Hero section showcasing luxury cars"
          containerClassName="w-full"
        />
      </div>

      <div id="inventory" data-section="inventory">
        <ProductCardThree
          title="Featured Vehicles"
          description="Browse our curated selection of premium automobiles. Each vehicle is inspected and certified for quality and performance."
          products={[
            {
              id: "1",
              name: "2023 Porsche 911 Turbo",
              price: "$185,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766149527263-4s4fbf9s.jpg",
              imageAlt: "Black Porsche 911 Turbo sports car"
            },
            {
              id: "2",
              name: "2023 Ferrari F8 Tributo",
              price: "$280,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766149528442-4xvyzqjc.jpg",
              imageAlt: "Red Ferrari F8 Tributo"
            },
            {
              id: "3",
              name: "2024 Mercedes-Benz S-Class",
              price: "$120,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766149530170-be1p8phg.jpg",
              imageAlt: "White Mercedes-Benz S-Class sedan"
            },
            {
              id: "4",
              name: "2023 Lamborghini Revuelto",
              price: "$645,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766149533273-yw74mqw4.jpg",
              imageAlt: "Yellow Lamborghini hybrid supercar"
            },
            {
              id: "5",
              name: "2023 Aston Martin DBX",
              price: "$155,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766149535306-5t1eg94r.jpg",
              imageAlt: "Aston Martin DBX luxury SUV"
            },
            {
              id: "6",
              name: "2023 BMW M5 Competition",
              price: "$105,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766149531725-ncrucktf.jpg",
              imageAlt: "BMW M5 high-performance sedan"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          ariaLabel="Featured vehicles inventory"
        />
      </div>

      <div id="about" data-section="about">
        <MediaGridAbout
          title="Premium Selection Expertise"
          description="At LuxeDrive, we specialize in providing the world's most sought-after luxury and performance vehicles. With over a decade of expertise in high-end automotive sales, we curate each vehicle to meet the highest standards of quality, performance, and exclusivity. Our team is dedicated to helping you find not just a car, but the perfect driving experience."
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766149525596-tynxoxil.jpg",
              imageAlt: "Luxury car collection"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766149527263-4s4fbf9s.jpg",
              imageAlt: "Premium vehicle showcase"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766149528442-4xvyzqjc.jpg",
              imageAlt: "Sports car portfolio"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766149530170-be1p8phg.jpg",
              imageAlt: "Sedan excellence"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766149533273-yw74mqw4.jpg",
              imageAlt: "Supercar expertise"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766149535306-5t1eg94r.jpg",
              imageAlt: "Brand prestige"
            }
          ]}
          imagePosition="right"
          useInvertedBackground="noInvert"
          ariaLabel="About LuxeDrive section"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Our Clients Say"
          description="Join thousands of satisfied customers who have found their dream car with LuxeDrive"
          testimonials={[
            {
              id: "1",
              name: "James Mitchell",
              handle: "@jmitchell_luxury",
              testimonial: "LuxeDrive made the entire process seamless. Found my dream Porsche in days. Exceptional service and transparency throughout.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766149537614-vd4joqmc.jpg",
              imageAlt: "James Mitchell"
            },
            {
              id: "2",
              name: "Sarah Chen",
              handle: "@sarahc_motoring",
              testimonial: "The quality of vehicles and customer care is unmatched. Highly recommend LuxeDrive for anyone seeking premium automobiles.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766149539519-ckchcewo.jpg",
              imageAlt: "Sarah Chen"
            },
            {
              id: "3",
              name: "Michael Rodriguez",
              handle: "@m_rodriguez",
              testimonial: "Professional, knowledgeable team that understands luxury vehicles. Found the perfect car that matches my lifestyle perfectly.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766149541773-y80zdpfs.jpg",
              imageAlt: "Michael Rodriguez"
            },
            {
              id: "4",
              name: "Emma Watson",
              handle: "@emmaw_lifestyle",
              testimonial: "Outstanding experience. The attention to detail and care for customer satisfaction sets LuxeDrive apart from competitors.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766149543806-4c47cap3.jpg",
              imageAlt: "Emma Watson"
            }
          ]}
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          ariaLabel="Customer testimonials and reviews"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to find your perfect luxury vehicle? Contact our expert team today and let us help you discover your next dream car."
          animationType="entrance-slide"
          buttons={[
            {
              text: "Contact Us",
              href: "/contact"
            },
            {
              text: "View Inventory",
              href: "#inventory"
            }
          ]}
          useInvertedBackground="noInvert"
          ariaLabel="Contact section"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1766149545314-6sw5jgm3.jpg"
          imageAlt="Luxury car showroom"
          columns={[
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Our Vehicles", href: "#inventory" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Vehicle Inspection", href: "#" },
                { label: "Trade-In Options", href: "#" },
                { label: "Financing", href: "#" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" }
              ]
            }
          ]}
          logoText="LuxeDrive"
          copyrightText="© 2024 LuxeDrive. All rights reserved."
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}