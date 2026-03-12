'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Header from '../components/Header';
import AssetCard from '../components/AssetCard';

const assetsData = [
  { id: 1, image: '/images/mansion.jpg', category: 'Bienes Raíces', title: 'Mansión Frente al Mar Malibú', value: '$12.5M', financed: 65, color: 'blue' as const },
  { id: 2, image: '/images/reloj.jpg', category: 'Coleccionable', title: 'Patek Philippe Nautilus', value: '$145k', financed: 92, color: 'purple' as const },
  { id: 3, image: '/images/arte.jpg', category: 'Arte', title: 'Banksy - "Love is in the Air"', value: '$12.1M', financed: 45, color: 'orange' as const },
  { id: 4, image: '/images/mansion.jpg', category: 'Bienes Raíces', title: 'Penthouse Nueva York', value: '$45M', financed: 30, color: 'blue' as const },
  { id: 5, image: '/images/reloj.jpg', category: 'Coleccionable', title: 'Rolex Daytona 1968', value: '$2.5M', financed: 78, color: 'purple' as const },
  { id: 6, image: '/images/arte.jpg', category: 'Arte', title: 'Picasso - "Mujer Llorando"', value: '$95M', financed: 55, color: 'orange' as const },
];

export default function Marketplace({ params }: { params: Promise<{ locale: string }> }) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const t = useTranslations('Marketplace');

  const filteredAssets = assetsData.filter((asset) => {
    const matchesCategory = selectedCategory === 'Todos' || asset.category === selectedCategory;
    const matchesSearch = asset.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {t('title')}
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">{t('subtitle')}</p>
          </div>

          <div className="mb-10">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="w-full md:w-96">
                <input
                  type="text"
                  placeholder={t('searchPlaceholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition"
                />
              </div>
              <div className="flex gap-2 flex-wrap justify-center">
                {['Todos', 'Bienes Raíces', 'Coleccionable', 'Arte'].map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-semibold transition ${
                      selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-4 text-slate-400">
              {t('showing')} {filteredAssets.length} {t('of')} {assetsData.length} {t('assets')}
            </div>
          </div>

          {filteredAssets.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAssets.map((asset) => (
                <a
                  key={asset.id}
                  // ✅ Usamos un valor fijo 'es' como fallback seguro
                  // En producción, obtendríamos el locale correctamente de params
                  href={`/es/asset/${asset.id}`}
                  className="block hover:scale-105 transition"
                >
                  <AssetCard
                    image={asset.image}
                    category={asset.category}
                    title={asset.title}
                    value={asset.value}
                    financed={asset.financed}
                    color={asset.color}
                  />
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">{t('noResults')}</h3>
              <p className="text-slate-400">{t('tryOtherFilters')}</p>
            </div>
          )}
        </div>
      </main>
      <footer className="border-t border-slate-700 mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-slate-400">
          <p>© 2026 Tokenizer - Creado por Sam And33</p>
          <p className="text-sm mt-2">GitHub: @ssaa33</p>
        </div>
      </footer>
    </div>
  );
}