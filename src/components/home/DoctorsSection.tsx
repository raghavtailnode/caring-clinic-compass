
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface DoctorCardProps {
  image: string;
  name: string;
  specialty: string;
  description: string;
  link: string;
}

const DoctorCard = ({ image, name, specialty, description, link }: DoctorCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-64 object-cover object-center"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-clinic-500 font-medium mb-3">{specialty}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button asChild variant="outline" className="w-full text-clinic-500 border-clinic-500 hover:bg-clinic-500 hover:text-white">
          <Link to={link}>View Profile</Link>
        </Button>
      </div>
    </div>
  );
};

const DoctorsSection = () => {
  const doctors = [
    {
      image: "/placeholder.svg",
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      description: "Board-certified cardiologist with 15 years of experience in treating heart conditions.",
      link: "/doctors/sarah-johnson"
    },
    {
      image: "/placeholder.svg",
      name: "Dr. Robert Chen",
      specialty: "Pediatrician",
      description: "Specialized in child healthcare with a gentle approach that kids and parents trust.",
      link: "/doctors/robert-chen"
    },
    {
      image: "/placeholder.svg",
      name: "Dr. Emily Rodriguez",
      specialty: "Orthopedic Surgeon",
      description: "Expert in joint replacements and sports medicine with advanced surgical techniques.",
      link: "/doctors/emily-rodriguez"
    },
    {
      image: "/placeholder.svg",
      name: "Dr. Michael Wilson",
      specialty: "Dermatologist",
      description: "Focused on skin health and treatment of both common and complex dermatological conditions.",
      link: "/doctors/michael-wilson"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Doctors</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of experienced healthcare professionals is dedicated to providing you with the highest quality of care.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <DoctorCard 
              key={index} 
              image={doctor.image} 
              name={doctor.name} 
              specialty={doctor.specialty} 
              description={doctor.description} 
              link={doctor.link}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-clinic-500 hover:bg-clinic-600">
            <Link to="/doctors">View All Doctors</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
