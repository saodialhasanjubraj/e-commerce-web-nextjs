"use client";
import OuterLayoutRouter from "next/dist/client/components/layout-router";
import HeroSection from "./Home/HeroSection";
import ProductsReview from "./Home/ProductsReview";
import TopCards from "./Home/TopCards";
import Slider from "./Home/Slider";

export default function Home() {
  return (
    <div className="flex flex-col max-w-325 w-full mx-auto">
      <HeroSection />
      <ProductsReview />
      <Slider/>
      <TopCards />
    </div>
  );
}
