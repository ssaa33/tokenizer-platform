import Header from './components/Header';
import AssetCard from './components/AssetCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm mb-6">
            🚀 En vivo en Ethereum Mainnet
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Tokeniza y Vende{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Activos Reales
            </span>{" "}
            al Mundo
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            La plataforma más simple, segura y económica para transformar objetos del mundo real 
            en activos digitales. Accede a un mercado global sin barreras.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition">
              Explorar Mercado
            </button>
            <button className="bg-slate-700 hover:bg-slate-600 px-8 py-4 rounded-lg font-semibold text-lg transition">
              Empezar a Tokenizar
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="text-4xl font-bold text-blue-400 mb-2">$124M+</div>
              <div className="text-slate-400">Valor Total Bloqueado</div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-slate-400">Activos Tokenizados</div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="text-4xl font-bold text-green-400 mb-2">15k+</div>
              <div className="text-slate-400">Inversores Activos</div>
            </div>
          </div>

          {/* Activos Destacados */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-10">Activos Destacados</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AssetCard 
                icon="🏠"
                category="Bienes Raíces"
                title="Mansión Frente al Mar Malibú"
                value="$12.5M"
                financed={65}
                color="blue"
              />
              <AssetCard 
                icon="⌚"
                category="Coleccionable"
                title="Patek Philippe Nautilus"
                value="$145k"
                financed={92}
                color="purple"
              />
              <AssetCard 
                icon="🎨"
                category="Arte"
                title='Banksy - "Love is in the Air"'
                value="$12.1M"
                financed={45}
                color="orange"
              />
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