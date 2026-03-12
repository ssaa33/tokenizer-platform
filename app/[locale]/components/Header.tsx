'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const t = useTranslations('Header');
  const pathname = usePathname();
  const router = useRouter();
  
  // Extraer locale de la URL
  const locale = pathname?.split('/')[1] || 'es';
  
  const locales = [
    { code: 'es', name: 'ES' },
    { code: 'en', name: 'EN' },
    { code: 'pt', name: 'PT' },
  ];

  const changeLocale = (newLocale: string) => {
    const segments = pathname?.split('/') || [];
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <header className="border-b border-slate-700 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-3xl">🧊</span>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Tokenizer
          </h1>
        </div>

        {/* Navegación - ENLACES CON LOCALE */}
        <nav className="hidden md:flex gap-6">
          <a href={`/${locale}/marketplace`} className="text-slate-300 hover:text-white transition">
            {t('marketplace')}
          </a>
          <a href={`/${locale}/que-es-tokenizacion`} className="text-slate-300 hover:text-white transition">
            {t('whatIsTokenization')}
          </a>
          <a href={`/${locale}/como-funciona`} className="text-slate-300 hover:text-white transition">
            {t('howItWorks')}
          </a>
          <a href={`/${locale}/guia-metamask`} className="text-slate-300 hover:text-white transition">
            {t('metamaskGuide')}
          </a>
        </nav>

        {/* Selector de idioma + Connect Button */}
        <div className="flex items-center gap-4">
          <select 
            value={locale}
            onChange={(e) => changeLocale(e.target.value)}
            className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500 transition"
          >
            {locales.map((loc) => (
              <option key={loc.code} value={loc.code}>
                {loc.name}
              </option>
            ))}
          </select>

          <ConnectButton 
            showBalance={false}
            chainStatus="icon"
            label={t('connectWallet')}
          />
        </div>
      </div>
    </header>
  );
}