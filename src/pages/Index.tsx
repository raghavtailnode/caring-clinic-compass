
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ServicesSection from "@/components/home/ServicesSection";
import DoctorsSection from "@/components/home/DoctorsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import AppointmentSection from "@/components/home/AppointmentSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <DoctorsSection />
      <TestimonialsSection />
      <AppointmentSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
