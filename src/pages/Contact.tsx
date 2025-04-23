
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
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
      subject: "",
      message: ""
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-clinic-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl opacity-90">
              We're here to help! Reach out with any questions, concerns, or to schedule an appointment.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-clinic-100 text-clinic-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Phone size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">Main: (123) 456-7890</p>
              <p className="text-gray-600">Appointments: (123) 456-7891</p>
              <p className="text-gray-600">Emergency: (123) 456-7999</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-clinic-100 text-clinic-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Mail size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@healthcareclinic.com</p>
              <p className="text-gray-600">appointments@healthcareclinic.com</p>
              <p className="text-gray-600">billing@healthcareclinic.com</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-clinic-100 text-clinic-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <MapPin size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-gray-600">
                123 Medical Center Drive<br />
                Healthcare City, HC 12345<br />
                United States
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-clinic-100 text-clinic-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Clock size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Hours</h3>
              <p className="text-gray-600">Monday - Friday: 8AM - 7PM</p>
              <p className="text-gray-600">Saturday: 9AM - 5PM</p>
              <p className="text-gray-600">Sunday: 10AM - 2PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map and Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Map */}
            <div className="lg:w-1/2">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="aspect-video w-full bg-gray-200 rounded flex items-center justify-center">
                  {/* Replace with actual map integration if needed */}
                  <div className="text-center p-8">
                    <MapPin size={48} className="mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-700 font-medium">
                      Interactive Map Would Display Here
                    </p>
                    <p className="text-gray-500 text-sm">
                      123 Medical Center Drive, Healthcare City, HC 12345
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <MessageCircle className="mr-2 text-clinic-500" />
                  Get in Touch
                </h3>
                <p className="text-gray-600 mb-4">
                  We value your feedback and are committed to providing excellent care and service. If you have any questions, concerns, or suggestions, please don't hesitate to contact us.
                </p>
                <p className="text-gray-600">
                  For medical emergencies, please call 911 or go to the nearest emergency room.
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:w-1/2">
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
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
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
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Appointment Inquiry"
                        required
                      />
                    </div>
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

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions about our services and policies.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">How do I schedule an appointment?</h3>
              <p className="text-gray-600">
                You can schedule an appointment by calling our office at (123) 456-7891, using our online booking system, or sending us an email at appointments@healthcareclinic.com.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">What insurance plans do you accept?</h3>
              <p className="text-gray-600">
                We accept most major insurance plans. Please contact our billing department at (123) 456-7892 to verify if we accept your specific insurance plan.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">What should I bring to my first appointment?</h3>
              <p className="text-gray-600">
                Please bring your photo ID, insurance card, a list of current medications, and any relevant medical records or test results. Arriving 15 minutes early to complete paperwork is recommended.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Do you offer telehealth services?</h3>
              <p className="text-gray-600">
                Yes, we offer virtual consultations for many types of appointments. Please call our office to determine if your visit is appropriate for telehealth services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
