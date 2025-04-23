
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  image: string;
}

const Testimonial = ({ quote, name, title, image }: TestimonialProps) => {
  return (
    <div className="text-center px-4 md:px-8">
      <div className="inline-block rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
        <img 
          src={image} 
          alt={name} 
          className="w-24 h-24 object-cover" 
        />
      </div>
      <blockquote className="text-xl italic text-gray-700 mb-4">
        "{quote}"
      </blockquote>
      <div className="font-semibold text-lg">{name}</div>
      <div className="text-clinic-500">{title}</div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "The medical care I received was exceptional. The doctors were attentive, thorough, and genuinely cared about my wellbeing.",
      name: "Jennifer Smith",
      title: "Patient",
      image: "/placeholder.svg"
    },
    {
      quote: "The staff made my children feel comfortable during their appointments. Dr. Chen has a wonderful way with kids!",
      name: "Michael Brown",
      title: "Parent of Patients",
      image: "/placeholder.svg"
    },
    {
      quote: "After my surgery, the follow-up care was outstanding. I'm grateful for the entire team at HealthCare Clinic.",
      name: "David Wilson",
      title: "Surgery Patient",
      image: "/placeholder.svg"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-clinic-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Patients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read about the experiences of our patients and how our care has made a difference in their lives.
          </p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="min-w-full"
                  >
                    <Testimonial 
                      quote={testimonial.quote} 
                      name={testimonial.name} 
                      title={testimonial.title} 
                      image={testimonial.image}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === idx ? "bg-clinic-500" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border-gray-200 hover:bg-gray-50 rounded-full"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border-gray-200 hover:bg-gray-50 rounded-full"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
