
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-clinic-700 to-clinic-500 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Your Health Is Our Priority
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-lg">
            Experience exceptional healthcare with our team of expert doctors and state-of-the-art facilities. We're committed to your wellbeing.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-white text-clinic-600 hover:bg-clinic-50">
              <Link to="/appointment">Book an Appointment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-clinic-600">
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img 
            src="/placeholder.svg" 
            alt="Doctor with patient" 
            className="rounded-lg shadow-xl"
            style={{ maxHeight: "400px", width: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
