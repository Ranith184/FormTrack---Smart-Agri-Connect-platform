import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShoppingCart, Users, BarChart3, CloudSun, ArrowDownUp, ShieldCheck } from 'lucide-react';

const Features: React.FC = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: <ArrowDownUp className="h-6 w-6 text-primary-600" />,
      title: "Demand & Supply Tracking",
      description: "Real-time insights into agricultural market needs and available produce across regions."
    },
    {
      icon: <ShoppingCart className="h-6 w-6 text-primary-600" />,
      title: "Pre-Harvest Booking",
      description: "Book crops before they're harvested, ensuring freshness and reducing wastage."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-primary-600" />,
      title: "Market Trends",
      description: "Stay updated with price trends, buyer preferences, and regional demand patterns."
    },
    {
      icon: <CloudSun className="h-6 w-6 text-primary-600" />,
      title: "Weather Forecasts",
      description: "Plan harvesting and storage with accurate, localized weather predictions."
    },
    {
      icon: <Users className="h-6 w-6 text-primary-600" />,
      title: "Community Forums",
      description: "Connect with fellow farmers and buyers to share insights and best practices."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary-600" />,
      title: "Verified Profiles",
      description: "Build trust with verified ratings and transparent transaction history."
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            One Platform, Complete Agricultural Connectivity
          </h2>
          <p className="text-gray-600">
            Discover how FormTrack bridges the gap between farmers and buyers with innovative features designed to reduce waste and increase efficiency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-12 w-12 rounded-lg bg-primary-50 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;