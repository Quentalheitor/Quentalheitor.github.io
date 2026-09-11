import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const getInitialLanguage = () => {
    if (typeof window === 'undefined') return 'en';

    const params = new URLSearchParams(window.location.search);
    const paramLang = params.get('lang');
    if (paramLang && ['en', 'pt'].includes(paramLang.toLowerCase())) {
      return paramLang.toLowerCase();
    }

    const saved = localStorage.getItem('pref_lang');
    if (saved && ['en', 'pt'].includes(saved)) {
      return saved;
    }

    return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en';
  };

  const [lang, setLangState] = useState(getInitialLanguage);

  const setLanguage = (newLang) => {
    setLangState(newLang);
    localStorage.setItem('pref_lang', newLang);
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
