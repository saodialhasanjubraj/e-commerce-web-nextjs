"use client";
import OuterLayoutRouter from "next/dist/client/components/layout-router";
import HeroSection from "./Home/HeroSection";
import ProductsReview from "./Home/ProductsReview";
import TopCards from "./Home/TopCards";
import Slider from "./Home/Slider";
import FaQ from "./Home/FaQ";

export default function Home() {
  const faqs = [
    {
      id: 1,
      question:
        "How long does shipping take and what are the delivery options?",
      answer:
        "We offer several shipping options: Standard Shipping (5-7 business days, $4.99), Express Shipping (2-3 business days, $9.99), and Next-Day Delivery (1 business day, $19.99). Free standard shipping is available on all orders over $50. You'll receive a tracking number via email once your order ships.",
    },
    {
      id: 2,
      question: "What is your return and refund policy?",
      answer:
        "We offer a 30-day hassle-free return policy from the date of delivery. Items must be unused, in original packaging with tags attached. Refunds are processed within 5-7 business days after we receive your return. Shipping costs are non-refundable unless the return is due to our error.",
    },
    {
      id: 3,
      question: "Is my payment information secure?",
      answer:
        "Absolutely. All transactions are encrypted using SSL technology. We never store your complete payment details and accept all major credit cards, PayPal, Apple Pay, and Google Pay. Our website is PCI DSS compliant, meeting the highest security standards.",
    },
  ];

  return (
    <div className="flex flex-col max-w-325 w-full mx-auto">
      <HeroSection />
      <ProductsReview />
      <Slider />
      <TopCards />

      <div className="w-full flex flex-col items-center">
        <h1 className="text-3xl my-5">Most common user Que</h1>
        <div className="py-10 px-4 bg-gray-300 rounded-xl flex flex-col gap-y-4 w-full">
          <FaQ />
          <FaQ />
          <FaQ />
        </div>
      </div>
    </div>
  );
}
