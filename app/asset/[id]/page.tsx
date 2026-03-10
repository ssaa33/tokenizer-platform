'use client';

import { useParams, useRouter } from 'next/navigation';
import Header from '../../components/Header';

// Datos de ejemplo (más adelante vendrán de la blockchain)
const assetsData = [
  {
    id: 1,
    image: '/images/mansion.jpg',
    category: 'Bienes Raíces',
    title: 'Mansión Frente al Mar Malibú',
    value: '$12.5M',
    financed: 65,
    color: 'blue',
    description: 'Espectacular mansión frente al océano en Malibú, California. 5 habitaciones, 7 baños, piscina infinita, acceso privado a la playa. Diseño moderno con vistas panorámicas al Pacífico.',
    location: 'Malibú, California, USA',
    yearBuilt: 2019,
    squareMeters: 850,
    expectedReturn: '8-12% anual',
    investmentPeriod: '5 años',
    minimumInvestment: '$1,000',
  },
  {
    id: 2,
    image: '/images/reloj.jpg',
    category: 'Coleccionable',
    title: 'Patek Philippe Nautilus',
    value: '$145k',
    financed: 92,
    color: 'purple',
    description: 'Reloj de lujo Patek Philippe Nautilus Ref. 5711/1A. Acero inoxidable, esfera azul, movimiento automático. Edición limitada, excelente estado de conservación.',
    location: 'Ginebra, Suiza',
    yearBuilt: 2021,
    squareMeters: 'N/A',
    expectedReturn: '5-8% anual',
    investmentPeriod: '3 años',
    minimumInvestment: '$500',
  },
  {
    id: 3,
    image: '/images/arte.jpg',
    category: 'Arte',
    title: 'Banksy - "Love is in the Air"',
    value: '$12.1M',
    financed: 45,
    color: 'orange',
    description: 'Obra icónica de Banksy creada en 2003. Serigrafía en papel, edición limitada. Una de las obras más reconocidas del artista callejero británico.',
    location: 'Londres, Reino Unido',
    yearBuilt: 2003,
    squareMeters: 'N/A',
    expectedReturn: '10-15% anual',
    investmentPeriod: '7 años',
    minimumInvestment: '$2,000',
  },
  {
    id: 4,
    image: '/images/mansion.jpg',
    category: 'Bienes Raíces',
    title: 'Penthouse Nueva York',
    value: '$45M',
    financed: 30,
    color: 'blue',
    description: 'Penthouse de lujo en Manhattan, Nueva York. Vistas panorámicas de Central Park. 6 habitaciones, 8 baños, terraza privada de 500m².',
    location: 'Manhattan, Nueva York, USA',
    yearBuilt: 2020,
    squareMeters: 1200,
    expectedReturn: '6-10% anual',
    investmentPeriod: '10 años',
    minimumInvestment: '$5,000',
  },
  {
    id: 5,
    image: '/images/reloj.jpg',
    category: 'Coleccionable',
    title: 'Rolex Daytona 1968',
    value: '$2.5M',
    financed: 78,
    color: 'purple',
    description: 'Rolex Cosmograph Daytona de 1968, referencia 6239. Esfera Paul Newman, acero inoxidable. Pieza de colección extremadamente rara.',
    location: 'Tokio, Japón',
    yearBuilt: 1968,
    squareMeters: 'N/A',
    expectedReturn: '7-12% anual',
    investmentPeriod: '5 años',
    minimumInvestment: '$1,500',
  },
  {
    id: 6,
    image: '/images/arte.jpg',
    category: 'Arte',
    title: 'Picasso - "Mujer Llorando"',
    value: '$95M',
    financed: 55,
    color: 'orange',
    description: 'Obra maestra de Pablo Picasso pintada en 1937. Óleo sobre lienzo, parte de la serie inspirada en Dora Maar. Período surrealista del artista.',
    location: 'París, Francia',
    yearBuilt: 1937,
    squareMeters: 'N/A',
    expectedReturn: '8-14% anual',
    investmentPeriod: '10 años',
    minimumInvestment: '$10,000',
  },
];

export default function AssetDetail() {
  const params = useParams();
  const router = useRouter();
  const assetId = parseInt(params.id as string);
  
  const asset = assetsData.find(a => a.id === assetId);

  if (!asset) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <Header />
        <main className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Activo no encontrado</h1>
            <button 
              onClick={() => router.push('/marketplace')}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
            >
              Volver al Marketplace
            </button>
          </div>
        </main>
      </div>
    );
  }

  const colorClasses = {
    blue: {
      bg: 'from-blue-600 to-blue-800',
      button: 'bg-blue-600 hover:bg-blue-700',
      text: 'text-blue-400',
      border: 'border-blue-500',
    },
    purple: {
      bg: 'from-purple-600 to-pink-600',
      button: 'bg-purple-600 hover:bg-purple-700',
      text: 'text-purple-400',
      border: 'border-purple-500',
    },
    orange: {
      bg: 'from-orange-600 to-red-600',
      button: 'bg-orange-600 hover:bg-orange-700',
      text: 'text-orange-400',
      border: 'border-orange-500',
    },
  };

  const colors = colorClasses[asset.color as keyof typeof colorClasses];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <Header />

      {/* Contenido Principal */}
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Botón Volver */}
          <button 
            onClick={() => router.push('/marketplace')}
            className="mb-8 text-slate-400 hover:text-white transition flex items-center gap-2"
          >
            ← Volver al Marketplace
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Imagen del Activo */}
            <div>
              <div className={`h-96 rounded-2xl overflow-hidden bg-gradient-to-br ${colors.bg}`}>
                <img 
                  src={asset.image} 
                  alt={asset.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Barra de Progreso */}
              <div className="mt-8 bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-slate-400">Progreso de Financiación</span>
                  <span className={`font-bold ${colors.text}`}>{asset.financed}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-4 mb-2">
                  <div 
                    className={`h-4 rounded-full bg-gradient-to-r ${colors.bg}`} 
                    style={{width: `${asset.financed}%`}}
                  ></div>
                </div>
                <div className="text-sm text-slate-400">
                  Falta {100 - asset.financed}% para completar
                </div>
              </div>
            </div>

            {/* Información del Activo */}
            <div>
              <div className={`inline-block px-4 py-2 rounded-full text-sm mb-4 bg-slate-800 ${colors.text}`}>
                {asset.category}
              </div>
              
              <h1 className="text-4xl font-bold mb-4">{asset.title}</h1>
              
              <div className="flex items-center gap-2 text-slate-400 mb-6">
                <span>📍</span>
                <span>{asset.location}</span>
              </div>

              <div className="text-5xl font-bold mb-8">{asset.value}</div>

              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                {asset.description}
              </p>

              {/* Detalles */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                  <div className="text-slate-400 text-sm mb-1">Año</div>
                  <div className="font-bold">{asset.yearBuilt}</div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                  <div className="text-slate-400 text-sm mb-1">Retorno Esperado</div>
                  <div className={`font-bold ${colors.text}`}>{asset.expectedReturn}</div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                  <div className="text-slate-400 text-sm mb-1">Período</div>
                  <div className="font-bold">{asset.investmentPeriod}</div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                  <div className="text-slate-400 text-sm mb-1">Inversión Mínima</div>
                  <div className={`font-bold ${colors.text}`}>{asset.minimumInvestment}</div>
                </div>
              </div>

              {/* Botón de Invertir */}
              <button className={`w-full ${colors.button} py-4 rounded-xl font-bold text-lg transition mb-4`}>
                Invertir Ahora
              </button>

              <p className="text-sm text-slate-400 text-center">
                Conectá tu wallet para comenzar la inversión
              </p>
            </div>
          </div>

          {/* Sección de Inversión */}
          <div className="mt-20 bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
            <h2 className="text-3xl font-bold mb-6 text-center">¿Por qué invertir en este activo?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="font-bold mb-2">Alto Potencial</h3>
                <p className="text-slate-400">Retornos superiores al mercado tradicional</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="font-bold mb-2">Seguridad</h3>
                <p className="text-slate-400">Activo verificado y respaldado legalmente</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="font-bold mb-2">Liquidez</h3>
                <p className="text-slate-400">Vendé tus tokens cuando quieras</p>
              </div>
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