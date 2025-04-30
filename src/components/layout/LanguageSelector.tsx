import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown, Check } from 'lucide-react';

interface LanguageSelectorProps {
  isMobile?: boolean;
}

interface Language {
  code: string;
  name: string;
  nativeName: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
];

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ isMobile = false }) => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];
  
  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-1 rounded-md transition-colors ${
          isMobile 
            ? 'w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 justify-between' 
            : 'px-2 py-1 text-gray-700 hover:bg-gray-100'
        }`}
        aria-label={t('language.select')}
      >
        <div className="flex items-center space-x-2">
          <Globe className="h-4 w-4" />
          <span className="text-sm font-medium">
            {isMobile ? currentLanguage.nativeName : currentLanguage.code.toUpperCase()}
          </span>
        </div>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className={`absolute z-50 mt-1 bg-white rounded-md shadow-lg py-1 ${
          isMobile ? 'w-full' : 'w-48 right-0'
        }`}>
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`flex items-center w-full px-4 py-2 text-sm text-left ${
                i18n.language === language.code 
                  ? 'text-primary-600 bg-primary-50' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="flex-1">
                <span className="font-medium">{language.nativeName}</span>
                <span className="text-xs text-gray-500 ml-1">({language.name})</span>
              </span>
              {i18n.language === language.code && <Check className="h-4 w-4" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;