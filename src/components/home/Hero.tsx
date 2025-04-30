import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative bg-gradient-to-b from-primary-600 to-primary-800 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {t('app.tagline')}
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-lg">
              Connect farmers directly with buyers, reduce post-harvest losses, and create a more efficient agricultural marketplace with real-time insights.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Link 
                to="/signin" 
                className="btn bg-white text-primary-700 hover:bg-gray-100 focus:ring-white"
              >
                {t('cta.getStarted')}
              </Link>
              <Link 
                to="/about" 
                className="btn bg-transparent text-white border border-white/30 hover:bg-white/10 focus:ring-white/30 flex items-center"
              >
                {t('cta.learnMore')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-bold">25%</p>
                <p className="text-white/70 text-sm">Reduction in post-harvest losses</p>
              </div>
              <div>
                <p className="text-3xl font-bold">10K+</p>
                <p className="text-white/70 text-sm">Farmers connected</p>
              </div>
              <div>
                <p className="text-3xl font-bold">500+</p>
                <p className="text-white/70 text-sm">Buyers on platform</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl animate-grow">
              <img 
                src="https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Farmers working in the field" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary-600">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-900 font-medium text-sm">Secure Pre-Booking</p>
                  <p className="text-gray-500 text-xs">Guarantee your produce before harvest</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;