import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Agricultural Business?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of farmers and buyers who are reducing waste and increasing profits through direct connections.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signin?role=farmer" className="btn btn-primary px-8 py-3">
              Join as a Farmer
            </Link>
            <Link to="/signin?role=buyer" className="btn bg-secondary-600 hover:bg-secondary-700 text-white px-8 py-3">
              Register as a Buyer
            </Link>
          </div>
          
          <div className="mt-8 text-center">
            <Link to="/demo" className="inline-flex items-center text-primary-600 hover:text-primary-700">
              <span>Watch Demo</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;