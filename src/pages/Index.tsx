
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import CompanyFooter from "@/components/CompanyFooter";
import RealtimeNotifications from "@/components/RealtimeNotifications";
import StickyOrderButton from "@/components/StickyOrderButton";

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen bg-white relative">
      <Header />
      <HeroSection />
      <AdvantagesSection />
      <TrustSection />
      <CompanyFooter />
      <RealtimeNotifications />
      <StickyOrderButton />
    </div>
  );
};

export default Index;
