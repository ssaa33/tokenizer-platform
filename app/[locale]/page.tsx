import Header from './components/Header';
import AssetCard from './components/AssetCard';
import { getTranslations } from 'next-intl/server';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('Home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm mb-6">
            🚀 {t('liveOnEthereum')}
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {t('title')}
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href={`/${locale}/marketplace`}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition"
            >
              {t('exploreMarket')}
            </a>
            <button className="bg-slate-700 hover:bg-slate-600 px-8 py-4 rounded-lg font-semibold text-lg transition">
              {t('startTokenizing')}
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="text-4xl font-bold text-blue-400 mb-2">$124M+</div>
              <div className="text-slate-400">{t('totalValueLocked')}</div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-slate-400">{t('tokenizedAssets')}</div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="text-4xl font-bold text-green-400 mb-2">15k+</div>
              <div className="text-slate-400">{t('activeInvestors')}</div>
            </div>
          </div>

          {/* Activos Destacados */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-10">{t('featuredAssets')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href={`/${locale}/asset/1`} className="block hover:scale-105 transition">
                <AssetCard 
                  image="/images/mansion.jpg"
                  category="Bienes Raíces"
                  title="Mansión Frente al Mar Malibú"
                  value="$12.5M"
                  financed={65}
                  color="blue"
                />
              </a>
              <a href={`/${locale}/asset/2`} className="block hover:scale-105 transition">
                <AssetCard 
                  image="/images/reloj.jpg"
                  category="Coleccionable"
                  title="Patek Philippe Nautilus"
                  value="$145k"
                  financed={92}
                  color="purple"
                />
              </a>
              <a href={`/${locale}/asset/3`} className="block hover:scale-105 transition">
                <AssetCard 
                  image="/images/arte.jpg"
                  category="Arte"
                  title='Banksy - "Love is in the Air"'
                  value="$12.1M"
                  financed={45}
                  color="orange"
                />
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700 mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-slate-400">
          <p>© 2026 Tokenizer - Creado por Sam And33</p>
          <p className="text-sm mt-2">GitHub: @ssaa33</p>
        </div>
      </footer>
    </div>
  );
}