import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Jan delivered an exceptional website that exceeded our expectations. Professional, responsive, and technically excellent.",
      name: "Michael Chen",
      title: "CEO, TechStart",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      alt: "Professional business executive testimonial headshot"
    },
    {
      quote: "Outstanding work on our e-commerce platform. Jan's attention to detail and technical expertise made the difference.",
      name: "Sarah Johnson", 
      title: "Founder, Online Retail",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b372?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      alt: "Professional businesswoman testimonial headshot"
    },
    {
      quote: "Fast, reliable, and professional. Jan delivered our project on time with excellent communication throughout.",
      name: "David Rodriguez",
      title: "CTO, FinTech Solutions",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
      alt: "Professional businessman testimonial headshot"
    }
  ];

  return (
    <section className="py-24 bg-slate-50" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Client Testimonials
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            What clients say about working with me on their web development projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6" aria-label="5 star rating">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-slate-600 mb-6 italic text-lg leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.alt}
                    className="w-14 h-14 rounded-full mr-4 object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-base">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600 mt-1">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
