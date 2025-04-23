
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8 text-clinic-500"
          >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
          <span className="text-xl font-bold text-gray-900">HealthCare Clinic</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-clinic-500 font-medium">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-clinic-500 font-medium">About</Link>
          <Link to="/services" className="text-gray-700 hover:text-clinic-500 font-medium">Services</Link>
          <Link to="/doctors" className="text-gray-700 hover:text-clinic-500 font-medium">Doctors</Link>
          <Link to="/contact" className="text-gray-700 hover:text-clinic-500 font-medium">Contact</Link>
          <Button className="bg-clinic-500 hover:bg-clinic-600 text-white">Book Appointment</Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden p-4 bg-white border-t">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-clinic-500 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-clinic-500 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="text-gray-700 hover:text-clinic-500 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/doctors" 
              className="text-gray-700 hover:text-clinic-500 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Doctors
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-clinic-500 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button 
              className="bg-clinic-500 hover:bg-clinic-600 text-white w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Appointment
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
