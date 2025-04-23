
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, BriefcaseMedical, Thermometer, Bed, Calendar, Syringe, Clock, Ambulance } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon, title, description, features }: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
      <div className="text-clinic-500 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-5 h-5 text-clinic-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <Button asChild className="w-full bg-clinic-500 hover:bg-clinic-600">
        <Link to={`/appointment?service=${title}`}>Book This Service</Link>
      </Button>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Heart size={36} />,
      title: "Cardiology",
      description: "Comprehensive care for heart conditions with advanced diagnostic and treatment options.",
      features: [
        "Heart disease diagnosis and treatment",
        "Cholesterol management",
        "Blood pressure monitoring",
        "ECG and stress tests",
        "Heart attack prevention"
      ]
    },
    {
      icon: <BriefcaseMedical size={36} />,
      title: "Primary Care",
      description: "Your first point of contact for all health concerns, from check-ups to chronic disease management.",
      features: [
        "Regular check-ups and screenings",
        "Preventive healthcare",
        "Chronic disease management",
        "Health education and counseling",
        "Immunizations and vaccinations"
      ]
    },
    {
      icon: <Thermometer size={36} />,
      title: "Pediatrics",
      description: "Specialized healthcare for children of all ages in a comfortable, child-friendly environment.",
      features: [
        "Well-child visits and check-ups",
        "Growth and development monitoring",
        "Childhood vaccinations",
        "Treatment of illnesses and injuries",
        "Behavioral and mental health support"
      ]
    },
    {
      icon: <Bed size={36} />,
      title: "Orthopedics",
      description: "Expert care for bone and joint issues, from sports injuries to arthritis management.",
      features: [
        "Fracture treatment and management",
        "Joint pain diagnosis and treatment",
        "Sports injury rehabilitation",
        "Arthritis management",
        "Physical therapy services"
      ]
    },
    {
      icon: <Calendar size={36} />,
      title: "Dermatology",
      description: "Diagnosis and treatment for a wide range of skin conditions by certified dermatologists.",
      features: [
        "Acne and rosacea treatment",
        "Skin cancer screening",
        "Eczema and psoriasis management",
        "Mole evaluation",
        "Cosmetic dermatology services"
      ]
    },
    {
      icon: <Syringe size={36} />,
      title: "Immunizations",
      description: "Protection against preventable diseases with recommended vaccines for all age groups.",
      features: [
        "Adult and childhood vaccinations",
        "Flu shots",
        "Travel vaccines",
        "HPV and hepatitis vaccines",
        "Vaccine education and consultation"
      ]
    },
    {
      icon: <Clock size={36} />,
      title: "Laboratory Services",
      description: "On-site comprehensive testing for quick and accurate diagnostic results.",
      features: [
        "Blood tests and analysis",
        "Urine and stool sample testing",
        "Allergy and sensitivity testing",
        "Cholesterol and glucose screening",
        "Rapid strep and flu testing"
      ]
    },
    {
      icon: <Ambulance size={36} />,
      title: "Urgent Care",
      description: "Immediate medical attention for non-life-threatening conditions without an appointment.",
      features: [
        "Minor injury treatment",
        "Fever and infection care",
        "Cuts requiring stitches",
        "Sprains and minor fractures",
        "Extended evening and weekend hours"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-clinic-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-xl opacity-90 mb-8">
              We offer a comprehensive range of healthcare services to address all your medical needs. Our team of experienced professionals is dedicated to providing high-quality care.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                icon={service.icon} 
                title={service.title} 
                description={service.description} 
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
              <p className="text-gray-600">
                Beyond our core medical services, we also offer specialized programs to support your overall health and wellness.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-clinic-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Preventive Health Programs</h3>
                <p className="text-gray-600 mb-4">
                  Our preventive health programs focus on helping you maintain wellness and avoid illness through regular screenings, lifestyle guidance, and early intervention strategies.
                </p>
              </div>

              <div className="bg-clinic-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Chronic Disease Management</h3>
                <p className="text-gray-600 mb-4">
                  For patients managing long-term conditions like diabetes, hypertension, or asthma, we provide ongoing support, monitoring, and treatment plans tailored to your specific needs.
                </p>
              </div>

              <div className="bg-clinic-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Mental Health Services</h3>
                <p className="text-gray-600 mb-4">
                  We recognize the importance of mental health as a part of overall wellness and offer counseling, therapy, and psychiatric services in a supportive environment.
                </p>
              </div>

              <div className="bg-clinic-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Telemedicine Consultations</h3>
                <p className="text-gray-600 mb-4">
                  For your convenience, many of our services are available through secure video consultations, allowing you to receive care from the comfort of your home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Schedule Your Visit?</h2>
            <p className="text-lg opacity-90 mb-8">
              Our team is ready to provide the care you need. Schedule an appointment today or contact us with any questions about our services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-clinic-500 hover:bg-clinic-600">
                <Link to="/appointment">Book an Appointment</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
