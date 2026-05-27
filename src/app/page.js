import HeroSection from "@/components/home/Hero";
import CategoriesSection from "@/components/home/Categories";
import FeaturedSection from "@/components/home/Featured";
import OfferBanner from "@/components/home/OfferBanner";
import HomeAbout from "@/components/home/About";
import PartnersSection from "@/components/home/Partners";
import PrintingStatsSection from "@/components/home/Stats";
import WhyChooseUs from "@/components/home/WhyChose";

export default function Home() {
  return (
    <div >
      <HeroSection />
      <CategoriesSection />
      <HomeAbout />
      <OfferBanner />
      <FeaturedSection />
      <WhyChooseUs />
      <PrintingStatsSection />
      <PartnersSection />
    </div>
  );
}
