'use client';

import Header from '../components/Header';

export default function QueEsTokenizacion() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <Header />

      {/* Contenido Principal */}
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Título */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              ¿Qué es la Tokenización?
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Descubre cómo transformar activos del mundo real en activos digitales
            </p>
          </div>

          {/* Definición Simple */}
          <section className="mb-16">
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Definición Simple</h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-4">
                La <strong>tokenización</strong> es el proceso de convertir derechos sobre un activo real 
                (como una propiedad, una obra de arte o un reloj de lujo) en <strong>tokens digitales</strong> 
                 que pueden comprarse y venderse en una blockchain.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Es como convertir un edificio de $10 millones en 10,000 "acciones digitales" de $1,000 cada una. 
                Cada token representa una pequeña parte del activo real.
              </p>
            </div>
          </section>

          {/* Ejemplo Visual */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-purple-400">Ejemplo del Mundo Real</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Activo Original */}
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center">
                <div className="text-6xl mb-4">🏠</div>
                <h3 className="text-xl font-bold mb-2">Activo Real</h3>
                <p className="text-slate-400">Mansión en Malibú</p>
                <p className="text-2xl font-bold text-blue-400 mt-4">$10,000,000</p>
              </div>

              {/* Flecha */}
              <div className="flex items-center justify-center">
                <div className="text-6xl text-slate-600">→</div>
              </div>

              {/* Tokens */}
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-center">
                <div className="text-6xl mb-4">🪙</div>
                <h3 className="text-xl font-bold mb-2">Tokens Digitales</h3>
                <p className="text-slate-400">10,000 tokens</p>
                <p className="text-2xl font-bold text-purple-400 mt-4">$1,000 c/u</p>
              </div>
            </div>
          </section>

          {/* Beneficios */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-green-400">Beneficios de la Tokenización</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-2 text-blue-400">Accesibilidad</h3>
                <p className="text-slate-300">
                  Invierte en activos de lujo con montos pequeños. No necesitás millones para ser dueño 
                  de una parte de una mansión en Malibú.
                </p>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-2 text-purple-400">Liquidez</h3>
                <p className="text-slate-300">
                  Compra y vende tus tokens en cualquier momento. Sin trámites burocráticos ni 
                  esperas de meses.
                </p>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold mb-2 text-green-400">Seguridad</h3>
                <p className="text-slate-300">
                  La blockchain garantiza que tu propiedad está registrada de forma inmutable 
                  y transparente.
                </p>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold mb-2 text-orange-400">Acceso Global</h3>
                <p className="text-slate-300">
                  Invierte en activos de cualquier parte del mundo sin barreras geográficas 
                  ni restricciones bancarias.
                </p>
              </div>
            </div>
          </section>

          {/* Comparación */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-orange-400">Inversión Tradicional vs Tokenización</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-slate-800/50 rounded-xl border border-slate-700">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="p-4 text-left text-slate-400">Característica</th>
                    <th className="p-4 text-left text-red-400">Tradicional</th>
                    <th className="p-4 text-left text-green-400">Tokenización</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700">
                    <td className="p-4 text-slate-300">Inversión mínima</td>
                    <td className="p-4 text-red-400">$100,000+</td>
                    <td className="p-4 text-green-400">$100+</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="p-4 text-slate-300">Tiempo de transacción</td>
                    <td className="p-4 text-red-400">30-90 días</td>
                    <td className="p-4 text-green-400">Minutos</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="p-4 text-slate-300">Documentación</td>
                    <td className="p-4 text-red-400">Extensa (papel)</td>
                    <td className="p-4 text-green-400">Digital (blockchain)</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="p-4 text-slate-300">Acceso global</td>
                    <td className="p-4 text-red-400">Limitado</td>
                    <td className="p-4 text-green-400">Sin límites</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-slate-300">Intermediarios</td>
                    <td className="p-4 text-red-400">Múltiples (costosos)</td>
                    <td className="p-4 text-green-400">Mínimos (económico)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-blue-500/30">
              <h2 className="text-3xl font-bold mb-4">¿Listo para empezar?</h2>
              <p className="text-slate-300 mb-6 max-w-xl mx-auto">
                Ahora que entendés qué es la tokenización, explorá los activos disponibles 
                en nuestro mercado o aprendé cómo funciona el proceso.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a href="/" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition">
                  Explorar Mercado
                </a>
                <a href="/como-funciona" className="bg-slate-700 hover:bg-slate-600 px-8 py-4 rounded-lg font-semibold text-lg transition">
                  Cómo Funciona
                </a>
              </div>
            </div>
          </section>
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