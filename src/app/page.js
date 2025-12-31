import Header from "@/components/Header";
import Banner from "@/components/Banner";
import LogosSection from "@/components/LogosSection";
import PortfolioSection from "@/components/PortfolioSection";
import FeaturedPortfolio from "@/components/FeaturedPortfolio";
import ApproachSection from "@/components/ApproachSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import ExtendedPortfolio from "@/components/ExtendedPortfolio";
import ValuesSection from "@/components/ValuesSection";
import AboutSection from "@/components/AboutSection";
import MoreProjectsSection from "@/components/MoreProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Banner />
        <LogosSection />
        <PortfolioSection />
        <FeaturedPortfolio />
        <ApproachSection />
        <ProcessSection />
        <CTASection />
        <ExtendedPortfolio />
        <ValuesSection />
        <AboutSection />
        <MoreProjectsSection />
        <ServicesSection />
        <Footer />
      </main>
     
    </>
  );
}
