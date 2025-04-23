
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 mr-2 text-clinic-300"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              HealthCare Clinic
            </h3>
            <p className="text-gray-300 mb-4">
              Providing quality healthcare services for over 15 years, focusing on patient wellbeing and excellence in medical care.
            </p>
            <div className="flex items-center mb-2">
              <Phone className="h-5 w-5 mr-2 text-clinic-300" />
              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center mb-2">
              <Mail className="h-5 w-5 mr-2 text-clinic-300" />
              <span>contact@healthcareclinic.com</span>
            </div>
            <div className="flex items-start mb-2">
              <MapPin className="h-5 w-5 mr-2 mt-1 text-clinic-300" />
              <span>123 Medical Center Drive<br />Healthcare City, HC 12345</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-clinic-300">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-clinic-300">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-clinic-300">Our Services</Link></li>
              <li><Link to="/doctors" className="text-gray-300 hover:text-clinic-300">Our Doctors</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-clinic-300">Contact Us</Link></li>
              <li><Link to="/appointment" className="text-gray-300 hover:text-clinic-300">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/general-medicine" className="text-gray-300 hover:text-clinic-300">General Medicine</Link></li>
              <li><Link to="/services/cardiology" className="text-gray-300 hover:text-clinic-300">Cardiology</Link></li>
              <li><Link to="/services/pediatrics" className="text-gray-300 hover:text-clinic-300">Pediatrics</Link></li>
              <li><Link to="/services/orthopedics" className="text-gray-300 hover:text-clinic-300">Orthopedics</Link></li>
              <li><Link to="/services/dermatology" className="text-gray-300 hover:text-clinic-300">Dermatology</Link></li>
              <li><Link to="/services/neurology" className="text-gray-300 hover:text-clinic-300">Neurology</Link></li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Working Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-clinic-300" />
                <span className="font-medium">Opening Hours</span>
              </div>
              <div className="flex justify-between pl-7 text-gray-300">
                <span>Monday - Friday:</span>
                <span>8:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between pl-7 text-gray-300">
                <span>Saturday:</span>
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between pl-7 text-gray-300">
                <span>Sunday:</span>
                <span>10:00 AM - 2:00 PM</span>
              </div>
              <div className="mt-4 pl-7">
                <p className="text-clinic-300 font-medium">Emergency Services Available 24/7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} HealthCare Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
