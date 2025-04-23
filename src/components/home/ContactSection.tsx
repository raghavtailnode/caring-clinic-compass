
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the form data to your backend
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? Reach out to us and our team will get back to you as soon as possible.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Information */}
          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-clinic-50 p-2 rounded-lg mt-1">
                    <Phone className="h-5 w-5 text-clinic-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600">(123) 456-7890</p>
                    <p className="text-gray-600">Emergency: (123) 456-7999</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-clinic-50 p-2 rounded-lg mt-1">
                    <Mail className="h-5 w-5 text-clinic-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">info@healthcareclinic.com</p>
                    <p className="text-gray-600">appointments@healthcareclinic.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-clinic-50 p-2 rounded-lg mt-1">
                    <MapPin className="h-5 w-5 text-clinic-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Address</h4>
                    <p className="text-gray-600">
                      123 Medical Center Drive<br />
                      Healthcare City, HC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-2">Working Hours</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>Monday - Friday:</div>
                  <div>8:00 AM - 7:00 PM</div>
                  <div>Saturday:</div>
                  <div>9:00 AM - 5:00 PM</div>
                  <div>Sunday:</div>
                  <div>10:00 AM - 2:00 PM</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:w-2/3">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(123) 456-7890"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                
                <Button type="submit" className="bg-clinic-500 hover:bg-clinic-600 text-white">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
