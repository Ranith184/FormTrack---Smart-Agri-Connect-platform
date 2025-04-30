import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronDown, Search, Sprout } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <nav className="bg-white shadow-md py-3 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <Link 
            to="/" 
            className="flex items-center space-x-2"
          >
            <Sprout className="h-8 w-8 text-primary-600" />
            <div>
              <h1 className="text-primary-600 font-display font-bold text-xl leading-none">
                {t('app.name')}
              </h1>
              <p className="text-gray-600 text-xs leading-tight">
                {t('app.tagline')}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium ${
                location.pathname === '/' ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/market" 
              className={`text-sm font-medium ${
                location.pathname === '/market' ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              {t('nav.market')}
            </Link>
            <Link 
              to="/weather" 
              className={`text-sm font-medium ${
                location.pathname === '/weather' ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              {t('nav.weather')}
            </Link>
            <Link 
              to="/support" 
              className={`text-sm font-medium ${
                location.pathname === '/support' ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              {t('nav.support')}
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              className="text-gray-600 hover:text-primary-600 focus:outline-none"
              onClick={toggleSearch}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            
            <LanguageSelector />
            
            <Link to="/signin" className="btn btn-primary">
              {t('auth.signin')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button 
              className="text-gray-600 hover:text-primary-600 focus:outline-none"
              onClick={toggleSearch}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            
            <button 
              className="text-gray-600 hover:text-primary-600 focus:outline-none"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="pt-4 pb-2 animate-fade-in">
            <div className="relative">
              <input
                type="text"
                placeholder={t('search.placeholder')}
                className="input pr-10"
              />
              <button className="absolute right-3 top-2.5 text-gray-400 hover:text-primary-600">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 animate-fade-in">
            <div className="flex flex-col space-y-2 pb-3">
              <Link 
                to="/" 
                className={`px-4 py-2 rounded-md ${
                  location.pathname === '/' ? 'bg-primary-50 text-primary-600' : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link 
                to="/market" 
                className={`px-4 py-2 rounded-md ${
                  location.pathname === '/market' ? 'bg-primary-50 text-primary-600' : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.market')}
              </Link>
              <Link 
                to="/weather" 
                className={`px-4 py-2 rounded-md ${
                  location.pathname === '/weather' ? 'bg-primary-50 text-primary-600' : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.weather')}
              </Link>
              <Link 
                to="/support" 
                className={`px-4 py-2 rounded-md ${
                  location.pathname === '/support' ? 'bg-primary-50 text-primary-600' : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.support')}
              </Link>
              
              <div className="pt-2 pb-1">
                <LanguageSelector isMobile={true} />
              </div>
              
              <div className="pt-2">
                <Link 
                  to="/signin"
                  className="btn btn-primary w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('auth.signin')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;