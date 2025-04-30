import React from 'react';
import { useTranslation } from 'react-i18next';

const HowItWorks: React.FC = () => {
  const { t } = useTranslation();
  
  const steps = [
    {
      number: "01",
      title: "Register by Role",
      description: "Sign up as either a farmer or buyer and complete your profile with relevant details.",
      isForFarmer: true,
      isForBuyer: true
    },
    {
      number: "02",
      title: "List Upcoming Harvests",
      description: "Farmers can add details about their upcoming crops, expected harvest dates, and quantities.",
      isForFarmer: true,
      isForBuyer: false
    },
    {
      number: "03",
      title: "Browse Available Crops",
      description: "Buyers can search for specific crops, filter by region, and view upcoming harvests.",
      isForFarmer: false,
      isForBuyer: true
    },
    {
      number: "04",
      title: "Pre-Book Produce",
      description: "Secure crops before they're harvested to ensure freshness and reduce uncertainty.",
      isForFarmer: false,
      isForBuyer: true
    },
    {
      number: "05",
      title: "Monitor Market Trends",
      description: "Stay informed about pricing trends and demand patterns to make better decisions.",
      isForFarmer: true,
      isForBuyer: true
    },
    {
      number: "06",
      title: "Complete Transactions",
      description: "Coordinate delivery or pickup of produce and finalize transactions securely.",
      isForFarmer: true,
      isForBuyer: true
    }
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How FormTrack Works
          </h2>
          <p className="text-gray-600">
            Our platform makes it easy to connect farmers with buyers, reducing post-harvest losses and creating a more efficient agricultural marketplace.
          </p>
          
          <div className="mt-8 inline-flex rounded-full p-1 bg-gray-100">
            <button className="px-6 py-2 rounded-full bg-primary-600 text-white font-medium">
              For Farmers
            </button>
            <button className="px-6 py-2 rounded-full text-gray-700 font-medium">
              For Buyers
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-5xl font-bold text-primary-100 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
              
              {step.isForFarmer && (
                <span className="absolute top-0 right-0 badge badge-success">
                  Farmer
                </span>
              )}
              
              {step.isForBuyer && (
                <span className={`absolute top-0 ${step.isForFarmer ? 'right-16' : 'right-0'} badge badge-warning`}>
                  Buyer
                </span>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="btn btn-primary inline-flex items-center">
            Start Your Journey
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;