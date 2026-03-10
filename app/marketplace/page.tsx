'use client';

import { useState } from 'react';
import Header from '../components/Header';
import AssetCard from '../components/AssetCard';

// Datos de ejemplo (más adelante vendrán de la blockchain)
const assetsData = [
  {
    id: 1,
    image: '/images/mansion.jpg',
    category: 'Bienes Raíces',
    title: 'Mansión Frente al Mar Malibú',
    value: '$12.5M',
    financed: 65,
    color: 'blue' as const,
  },
  {
    id: 2,
    image: '/images/reloj.jpg',
    category: 'Coleccionable',
    title: 'Patek Philippe Nautilus',
    value: '$145k',
    financed: 92,
    color: 'purple' as const,
  },
  {
    id: 3,
    image: '/images/arte.jpg',
    category: 'Arte',
    title: 'Banksy - "Love is in the Air"',
    value: '$12.1M',
    financed: 45,
    color: 'orange' as const,
  },
  {
    id: 4,
    image: '/images/mansion.jpg',
    category: 'Bienes Raíces',
    title: 'Penthouse Nueva York',
    value: '$45M',
    financed: 30,
    color: 'blue' as const,
  },
  {
    id: 5,
    image: '/images/reloj.jpg',
    category: 'Coleccionable',
    title: 'Rolex Daytona 1968',
    value: '$2.5M',
    financed: 78,
    color: 'purple' as const,
  },
  {
    id: 6,
    image: '/images/arte.jpg',
    category: 'Arte',
    title: 'Picasso - "Mujer Llorando"',
    value: '$95M',
    financed: 55,
    color: 'orange' as const,
  },
];

const categories = ['Todos', 'Bienes Raíces', 'Coleccionable', 'Arte'];

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  // Filtrar activos
  const filteredAssets = assetsData.filter((asset) => {
    const matchesCategory = selectedCategory === 'Todos' || asset.category === selectedCategory;
    const matchesSearch = asset.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <Header />

      {/* Contenido Principal */}
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Título */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Marketplace
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Explorá todos los activos tokenizados disponibles para inversión
            </p>
          </div>

          {/* Barra de búsqueda y filtros */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              {/* Buscador */}
              <div className="w-full md:w-96">
                <input
                  type="text"
                  placeholder="Buscar activos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition"
                />
              </div>

              {/* Filtros de categoría */}
              <div className="flex gap-2 flex-wrap justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-semibold transition ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Resultados */}
            <div className="mt-4 text-slate-400">
              Mostrando {filteredAssets.length} de {assetsData.length} activos
            </div>
          </div>

          {/* Grid de activos */}
          {filteredAssets.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAssets.map((asset) => (
  <a 
    key={asset.id}
    href={`/asset/${asset.id}`}
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
              <h3 className="text-2xl font-bold mb-2">No se encontraron activos</h3>
              <p className="text-slate-400">
                Probá con otros filtros o términos de búsqueda
              </p>
            </div>
          )}
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