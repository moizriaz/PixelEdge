import Header from "@/components/Header";
import Banner from "@/components/Banner";
import LogosSection from "@/components/LogosSection";
import PortfolioSection from "@/components/PortfolioSection";
import FeaturedPortfolio from "@/components/FeaturedPortfolio";
import ApproachSection from "@/components/ApproachSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <LogosSection />
      <PortfolioSection />
      <FeaturedPortfolio />
      <ApproachSection />
      <ProcessSection />
      <CTASection />
    
    </main>
  );
}
