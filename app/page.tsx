import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StoryFromNature from "@/components/StoryFromNature";
import Products from "@/components/Products";
import WhyChoose from "@/components/WhyChoose";
import UsageGallery from "@/components/UsageGallery";
import StoryFull from "@/components/StoryFull";
import OrderProcess from "@/components/OrderProcess";
import DeliveryPolicy from "@/components/DeliveryPolicy";
import FAQ from "@/components/FAQ";
import OrderForm from "@/components/OrderForm";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import { FAQ_ITEMS } from "@/lib/faq";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StoryFromNature />
      <Products />
      <WhyChoose />
      <UsageGallery />
      <StoryFull />
      <OrderProcess />
      <DeliveryPolicy />
      <FAQ />
      <OrderForm />
      <ContactCTA />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}
