import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en';
import hi from './locales/hi';
import ta from './locales/ta';
import te from './locales/te';
import bn from './locales/bn';

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en,
      hi,
      ta,
      te,
      bn,
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;