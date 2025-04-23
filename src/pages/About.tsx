
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Award, Clock, HeartPulse } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">About Our Clinic</h1>
              <p className="text-gray-600 text-lg mb-6">
                For over 15 years, HealthCare Clinic has been providing exceptional healthcare services to our community. We take pride in our commitment to excellence, compassionate care, and patient satisfaction.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Our mission is to improve the health and wellbeing of the people we serve by providing access to high-quality healthcare services with compassion, dignity, and respect.
              </p>
              <Button asChild className="bg-clinic-500 hover:bg-clinic-600">
                <Link to="/appointment">Book an Appointment</Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/placeholder.svg" 
                alt="Our clinic building" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and reflect our commitment to providing the highest standard of care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-clinic-50 rounded-lg text-center">
              <div className="w-16 h-16 bg-clinic-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartPulse size={32} />
              </div>
              <h3 className="font-semibold text-xl mb-2">Compassion</h3>
              <p className="text-gray-600">
                We approach every patient with empathy, understanding, and genuine care for their wellbeing.
              </p>
            </div>

            <div className="p-6 bg-clinic-50 rounded-lg text-center">
              <div className="w-16 h-16 bg-clinic-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} />
              </div>
              <h3 className="font-semibold text-xl mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for the highest standards in medical care, constantly improving our services and knowledge.
              </p>
            </div>

            <div className="p-6 bg-clinic-50 rounded-lg text-center">
              <div className="w-16 h-16 bg-clinic-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} />
              </div>
              <h3 className="font-semibold text-xl mb-2">Respect</h3>
              <p className="text-gray-600">
                We honor the dignity of each individual and value diversity in our patients and staff.
              </p>
            </div>

            <div className="p-6 bg-clinic-50 rounded-lg text-center">
              <div className="w-16 h-16 bg-clinic-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={32} />
              </div>
              <h3 className="font-semibold text-xl mb-2">Accessibility</h3>
              <p className="text-gray-600">
                We believe everyone deserves quality healthcare that is timely, affordable, and convenient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold mb-4">Our History</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Founded in 2009 by Dr. Elizabeth Carter, HealthCare Clinic began as a small family practice with a vision to provide personalized healthcare to the community.
                </p>
                <p className="text-gray-600">
                  As our reputation for quality care grew, so did our facility. In 2015, we expanded to our current location, adding specialized departments and state-of-the-art equipment to better serve our patients.
                </p>
                <p className="text-gray-600">
                  Today, we're proud to be one of the region's leading healthcare providers, with a team of over 50 medical professionals across multiple specialties. Despite our growth, we've maintained our founding principle: treating each patient as an individual with unique needs.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/placeholder.svg" 
                  alt="Clinic in early days" 
                  className="rounded-lg shadow-md"
                />
                <img 
                  src="/placeholder.svg" 
                  alt="Clinic expansion" 
                  className="rounded-lg shadow-md"
                />
                <img 
                  src="/placeholder.svg" 
                  alt="Modern equipment" 
                  className="rounded-lg shadow-md"
                />
                <img 
                  src="/placeholder.svg" 
                  alt="Our team" 
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Facilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our State-of-the-Art Facilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've invested in the latest medical technology and comfortable environments to ensure the best possible care and experience for our patients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="/placeholder.svg" 
                alt="Reception area" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Welcoming Reception</h3>
                <p className="text-gray-600">
                  Our comfortable waiting area is designed to help you feel at ease from the moment you arrive.
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="/placeholder.svg" 
                alt="Examination room" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Modern Exam Rooms</h3>
                <p className="text-gray-600">
                  Private and well-equipped examination rooms for your comfort and privacy.
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="/placeholder.svg" 
                alt="Laboratory equipment" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Advanced Diagnostic Lab</h3>
                <p className="text-gray-600">
                  On-site laboratory for quick and accurate test results without unnecessary delays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-clinic-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience Our Quality Care</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            We're committed to your health and wellbeing. Schedule an appointment today and discover the HealthCare Clinic difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-clinic-600 hover:bg-clinic-50">
              <Link to="/appointment">Book an Appointment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-clinic-600">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
