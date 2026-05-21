import HeroSection from "@/components/home/Hero";
import CategoriesSection from "@/components/home/Categories";
import FeaturedSection from "@/components/home/Featured";
import OfferBanner from "@/components/home/OfferBanner";
import HomeAbout from "@/components/home/About";
import PartnersSection from "@/components/home/Partners";
import PrintingStatsSection from "@/components/home/Stats";

export default function Home() {
  return (
    <div >
      <HeroSection />
      <HomeAbout />
      <CategoriesSection />
      <OfferBanner />
      <FeaturedSection />
      <PrintingStatsSection />
      <PartnersSection />
    </div>
  );
}
