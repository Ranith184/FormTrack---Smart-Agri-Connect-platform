import React from 'react';
import { useTranslation } from 'react-i18next';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Wheat Farmer, Punjab",
      quote: "FormTrack helped me connect with buyers before my harvest, reducing wastage by almost 30%. The weather forecasts also helped me plan my harvesting perfectly.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Rice Farmer, Tamil Nadu",
      quote: "The demand tracking feature showed me that there was a high demand for organic rice in nearby cities. I was able to adjust my farming practices and increase my profits.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4
    },
    {
      name: "Amit Patel",
      role: "Food Processor, Gujarat",
      quote: "As a buyer, FormTrack has revolutionized how we source our raw materials. The pre-booking system ensures we get the freshest produce directly from farmers.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5
    }
  ];
  
  return (
    <section className="py-16 bg-primary-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Success Stories from Our Community
          </h2>
          <p className="text-white/80">
            Hear from farmers and buyers who have transformed their agricultural businesses with FormTrack.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-gray-900 relative">
              {/* Quote mark */}
              <div className="absolute -top-3 -left-3 h-10 w-10 bg-primary-500 rounded-full flex items-center justify-center text-white text-2xl font-serif">
                "
              </div>
              
              <div className="mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`inline-block h-5 w-5 ${
                      i < testimonial.rating ? 'text-warning-400 fill-warning-400' : 'text-gray-300'
                    }`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;