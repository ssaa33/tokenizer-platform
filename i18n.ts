import {getRequestConfig} from 'next-intl/server';
import es from './messages/es.json';
import en from './messages/en.json';
import pt from './messages/pt.json';

const messages = {
  es,
  en,
  pt
};

export default getRequestConfig(async ({locale}) => {
  // Asegurarnos de que locale tenga un valor
  const validLocale = locale && messages[locale as keyof typeof messages] 
    ? locale 
    : 'es';
    
  return {
    locale: validLocale,
    messages: messages[validLocale as keyof typeof messages]
  };
});