import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en.json';
import arTranslations from './locales/ar.json';

const initI18n = async () => {
  await i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: enTranslations
        },
        ar: {
          translation: arTranslations
        }
      },
      lng: localStorage.getItem('language') || 'en',
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false
      },
      react: {
        useSuspense: false
      },
      debug: true
    });
};

initI18n().catch(console.error);

export default i18n; 