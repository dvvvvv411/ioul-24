
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NosAvantages from "@/components/NosAvantages";
import NotreExpertise from "@/components/NotreExpertise";
import ZoneLivraison from "@/components/ZoneLivraison";
import ProcessusCommande from "@/components/ProcessusCommande";
import PourquoiFioul24 from "@/components/PourquoiFioul24";
import EngagementQualite from "@/components/EngagementQualite";
import CompanyFooter from "@/components/CompanyFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-orange-50">
      <Header />
      <div className="pt-20">
        <HeroSection />
        <NosAvantages />
        <NotreExpertise />
        <ZoneLivraison />
        <ProcessusCommande />
        <PourquoiFioul24 />
        <EngagementQualite />
        <CompanyFooter />
      </div>
    </div>
  );
};

export default Index;
