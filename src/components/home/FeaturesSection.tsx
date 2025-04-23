
import { BriefcaseMedical, CalendarCheck, HeartPulse, Users } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-clinic-200">
      <div className="rounded-full bg-clinic-50 w-16 h-16 flex items-center justify-center mb-4 text-clinic-500">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <HeartPulse size={32} />,
      title: "Quality Care",
      description: "Our experienced medical professionals provide personalized, high-quality care focused on your unique needs."
    },
    {
      icon: <BriefcaseMedical size={32} />,
      title: "Modern Facilities",
      description: "State-of-the-art equipment and comfortable facilities ensure you receive the best possible treatment."
    },
    {
      icon: <CalendarCheck size={32} />,
      title: "Easy Scheduling",
      description: "Book appointments easily online or over the phone, with flexible scheduling to fit your busy life."
    },
    {
      icon: <Users size={32} />,
      title: "Specialized Teams",
      description: "Our multi-disciplinary teams of specialists collaborate to deliver comprehensive healthcare solutions."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Clinic</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine expertise, compassion, and state-of-the-art technology to provide exceptional healthcare services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
