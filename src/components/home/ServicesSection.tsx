
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, BriefcaseMedical, Thermometer, Bed, Calendar, Syringe } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon, title, description, link }: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow transition-all duration-300 hover:shadow-md group">
      <div className="text-clinic-500 mb-4 group-hover:text-clinic-600 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button asChild variant="outline" className="text-clinic-500 border-clinic-500 hover:bg-clinic-500 hover:text-white">
        <Link to={link}>Learn More</Link>
      </Button>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Heart size={36} />,
      title: "Cardiology",
      description: "Comprehensive care for heart conditions with advanced diagnostic and treatment options.",
      link: "/services/cardiology"
    },
    {
      icon: <BriefcaseMedical size={36} />,
      title: "Primary Care",
      description: "Your first point of contact for all health concerns, from check-ups to chronic disease management.",
      link: "/services/primary-care"
    },
    {
      icon: <Thermometer size={36} />,
      title: "Pediatrics",
      description: "Specialized healthcare for children of all ages in a comfortable, child-friendly environment.",
      link: "/services/pediatrics"
    },
    {
      icon: <Bed size={36} />,
      title: "Orthopedics",
      description: "Expert care for bone and joint issues, from sports injuries to arthritis management.",
      link: "/services/orthopedics"
    },
    {
      icon: <Calendar size={36} />,
      title: "Dermatology",
      description: "Diagnosis and treatment for a wide range of skin conditions by certified dermatologists.",
      link: "/services/dermatology"
    },
    {
      icon: <Syringe size={36} />,
      title: "Immunizations",
      description: "Protection against preventable diseases with recommended vaccines for all age groups.",
      link: "/services/immunizations"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of medical services to meet all your healthcare needs under one roof.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
              link={service.link}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-clinic-500 hover:bg-clinic-600">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
