import React from 'react'
import HeroSection from "../components/HeroSection";
import DesktopFeature from "../components/FeatureSectionDesktop";
import ForWhomSection from "../components/ForWhomSection";
import CallToActionSection from "../components/CallToActionSection";
import TestimonialSection from "../components/TestimonialSection";
import Footer from "../components/Footer";
import FAQSection from "../components/FaqSection";
import SwipeFeaturesSection from "../components/SwipeFeatureSection";
import LogoSwipper from "../components/LogoSwipper";
import MobileAppSection from "../components/MobileAppFeatureSection";
import Business from "../components/BusinessGrowthSection";
import WhyUsSection from "../components/NewFeatureSection";
import SuccessSection from "../components/successSection";
import PageLoader from "../components/pageLoader";
import DemoForm from "../components/DemoForm";
import ContactForm from "../components/ContactForm";
import PerformanceSection from "../components/PerformanceSection";


export const Home = ({onOpenContactForm}) => {
  return (
    <div>
    <HeroSection />
     <div className="relative z-10 pt-20 md:pt-28 lg:pt-32">
  <LogoSwipper />
</div>
      <Business />
      <DesktopFeature />
      <SwipeFeaturesSection />
      <MobileAppSection />
      <WhyUsSection />
      <PerformanceSection/>
      <ForWhomSection />
      <TestimonialSection />
      <SuccessSection />
      <CallToActionSection/>
      <FAQSection onOpenContactForm={onOpenContactForm} />
          </div>
  )
}
