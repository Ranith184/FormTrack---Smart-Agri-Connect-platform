import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Sprout, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <Sprout className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold text-white">{t('app.name')}</span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              Smart agricultural platform connecting farmers directly with buyers to reduce post-harvest losses and improve market linkage.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h5 className="text-white font-medium mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-400 text-sm">Home</Link>
              </li>
              <li>
                <Link to="/market" className="text-gray-400 hover:text-primary-400 text-sm">Market Trends</Link>
              </li>
              <li>
                <Link to="/weather" className="text-gray-400 hover:text-primary-400 text-sm">Weather</Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-400 hover:text-primary-400 text-sm">Support</Link>
              </li>
            </ul>
          </div>
          
          {/* For Farmers */}
          <div>
            <h5 className="text-white font-medium mb-4">For Farmers</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/signin?role=farmer" className="text-gray-400 hover:text-primary-400 text-sm">Farmer Login</Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-primary-400 text-sm">Resources</Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-400 hover:text-primary-400 text-sm">Community</Link>
              </li>
              <li>
                <Link to="/crop-health" className="text-gray-400 hover:text-primary-400 text-sm">Crop Health</Link>
              </li>
            </ul>
          </div>
          
          {/* For Buyers */}
          <div>
            <h5 className="text-white font-medium mb-4">For Buyers</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/signin?role=buyer" className="text-gray-400 hover:text-primary-400 text-sm">Buyer Login</Link>
              </li>
              <li>
                <Link to="/farmers" className="text-gray-400 hover:text-primary-400 text-sm">Find Farmers</Link>
              </li>
              <li>
                <Link to="/pre-booking" className="text-gray-400 hover:text-primary-400 text-sm">Pre-Booking</Link>
              </li>
              <li>
                <Link to="/buyer-guide" className="text-gray-400 hover:text-primary-400 text-sm">Buyer's Guide</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} FormTrack. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link to="/privacy" className="text-gray-500 hover:text-primary-400 text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-primary-400 text-sm">Terms of Service</Link>
            <Link to="/contact" className="text-gray-500 hover:text-primary-400 text-sm">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;