
import { Button } from "@/components/ui/button";
import { Calendar, Clock, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

const AppointmentSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-clinic-500 to-clinic-600 rounded-2xl overflow-hidden shadow-xl">
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="lg:w-1/2 order-2 lg:order-1">
              <img 
                src="/placeholder.svg" 
                alt="Doctor consulting with patient" 
                className="w-full h-full object-cover" 
              />
            </div>
            
            {/* Content Section */}
            <div className="lg:w-1/2 p-8 md:p-12 text-white order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Schedule Your Appointment Today</h2>
              <p className="text-lg opacity-90 mb-8">
                Whether it's a routine check-up or a specific concern, our medical team is ready to provide you with the care you need. Booking an appointment is quick and easy.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="bg-white bg-opacity-20 p-2 rounded-full mr-4">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Online Booking</h3>
                    <p className="opacity-90">Schedule your visit through our secure online portal</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-white bg-opacity-20 p-2 rounded-full mr-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Flexible Hours</h3>
                    <p className="opacity-90">Evening and weekend appointments available</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-white bg-opacity-20 p-2 rounded-full mr-4">
                    <PhoneCall className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone Support</h3>
                    <p className="opacity-90">Call us at (123) 456-7890 to book directly</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-clinic-600 hover:bg-clinic-50">
                  <Link to="/appointment">Book Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-clinic-600">
                  <a href="tel:+11234567890">Call Us</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
