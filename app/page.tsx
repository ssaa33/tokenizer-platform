export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl"></span>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Tokenizer
            </h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-slate-300 hover:text-white transition">Mercado</a>
            <a href="#" className="text-slate-300 hover:text-white transition">Cómo Funciona</a>
            <a href="#" className="text-slate-300 hover:text-white transition">Para Vendedores</a>
          </nav>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold transition">
            Conectar Billetera
          </button>
        </div>
      </header>

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
        </div>

        {/* Featured Assets */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-10">Activos Destacados</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Asset 1 */}
            <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-6xl">🏠</span>
              </div>
              <div className="p-4">
                <div className="text-sm text-blue-400 mb-2">Bienes Raíces</div>
                <h4 className="text-xl font-bold mb-2">Mansión Frente al Mar Malibú</h4>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-slate-400">Valor Activo</span>
                  <span className="font-bold">$12.5M</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '65%'}}></div>
                </div>
                <div className="text-sm text-slate-400 mb-4">Financiado 65%</div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-semibold transition">
                  Invertir Ahora
                </button>
              </div>
            </div>

            {/* Asset 2 */}
            <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500 transition">
              <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <span className="text-6xl">⌚</span>
              </div>
              <div className="p-4">
                <div className="text-sm text-purple-400 mb-2">Coleccionable</div>
                <h4 className="text-xl font-bold mb-2">Patek Philippe Nautilus</h4>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-slate-400">Valor Activo</span>
                  <span className="font-bold">$145k</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{width: '92%'}}></div>
                </div>
                <div className="text-sm text-slate-400 mb-4">Financiado 92%</div>
                <button className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded-lg font-semibold transition">
                  Invertir Ahora
                </button>
              </div>
            </div>

            {/* Asset 3 */}
            <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-orange-500 transition">
              <div className="h-48 bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center">
                <span className="text-6xl">🎨</span>
              </div>
              <div className="p-4">
                <div className="text-sm text-orange-400 mb-2">Arte</div>
                <h4 className="text-xl font-bold mb-2">Banksy - "Love is in the Air"</h4>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-slate-400">Valor Activo</span>
                  <span className="font-bold">$12.1M</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{width: '45%'}}></div>
                </div>
                <div className="text-sm text-slate-400 mb-4">Financiado 45%</div>
                <button className="w-full bg-orange-600 hover:bg-orange-700 py-2 rounded-lg font-semibold transition">
                  Invertir Ahora
                </button>
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