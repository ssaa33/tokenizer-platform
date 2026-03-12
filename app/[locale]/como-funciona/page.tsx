'use client';

import Header from '../components/Header';

export default function ComoFunciona() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <Header />

      {/* Contenido Principal */}
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Título */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              ¿Cómo Funciona Tokenizer?
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              El proceso completo desde la verificación del activo hasta la recepción de dividendos
            </p>
          </div>

          {/* Timeline del Proceso */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">
              Proceso de Tokenización en 5 Pasos
            </h2>
            
            <div className="relative">
              {/* Línea de conexión */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 hidden md:block"></div>
              
              {/* Paso 1 */}
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2 md:text-right order-2 md:order-1">
                    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                      <h3 className="text-2xl font-bold mb-3 text-blue-400">Paso 1: Verificación Legal</h3>
                      <p className="text-slate-300 mb-4">
                        El dueño del activo presenta documentación legal que prueba su propiedad. 
                        Nuestro equipo legal verifica autenticidad, valor de mercado y cumple con 
                        regulaciones locales e internacionales.
                      </p>
                      <ul className="text-slate-400 space-y-2">
                        <li className="flex items-center gap-2">
                          <span className="text-green-400">✓</span>
                          Título de propiedad verificado
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-400">✓</span>
                          Avalúo profesional independiente
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-400">✓</span>
                          Cumplimiento regulatorio (KYC/AML)
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-2xl font-bold order-1 md:order-2 z-10">
                    1
                  </div>
                  <div className="md:w-1/2 order-3">
                    <div className="text-6xl text-center">📋</div>
                  </div>
                </div>
              </div>

              {/* Paso 2 */}
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2 order-2 md:order-1">
                    <div className="text-6xl text-center">🏗️</div>
                  </div>
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-2xl font-bold order-1 md:order-2 z-10">
                    2
                  </div>
                  <div className="md:w-1/2 md:text-left order-3">
                    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                      <h3 className="text-2xl font-bold mb-3 text-purple-400">Paso 2: Emisión de Tokens</h3>
                      <p className="text-slate-300 mb-4">
                        Creamos un contrato inteligente en la blockchain que representa el activo. 
                        El valor total se divide en tokens según el precio que se quiera establecer 
                        por token.
                      </p>
                      <ul className="text-slate-400 space-y-2">
                        <li className="flex items-center gap-2">
                          <span className="text-green-400">✓</span>
                          Contrato inteligente auditado
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-400">✓</span>
                          Tokens ERC-20 o ERC-721
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-400">✓</span>
                          Registro inmutable en blockchain
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Paso 3 */}
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2 md:text-right order-2 md:order-1">
                    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                      <h3 className="text-2xl font-bold mb-3 text-green-400">Paso 3: Venta Global</h3>
                      <p className="text-slate-300 mb-4">
                        Los tokens se listan en el marketplace de Tokenizer. Inversores de todo 
                        el mundo pueden comprar fracciones del activo desde $100 USD.
                      </p>
                      <ul className="text-slate-400 space-y-2">
                        <li className="flex items-center gap-2">
                          <span className="text-green-400">✓</span>
                          Acceso 24/7 desde cualquier país
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-400">✓</span>
                          Pagos con crypto o fiat
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-400">✓</span>
                          Transacciones instantáneas
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-2xl font-bold order-1 md:order-2 z-10">
                    3
                  </div>
                  <div className="md:w-1/2 order-3">
                    <div className="text-6xl text-center">🌍</div>
                  </div>
                </div>
              </div>

              {/* Paso 4 */}
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2 order-2 md:order-1">
                    <div className="text-6xl text-center">💼</div>
                  </div>
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-2xl font-bold order-1 md:order-2 z-10">
                    4
                  </div>
                  <div className="md:w-1/2 md:text-left order-3">
                    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                      <h3 className="text-2xl font-bold mb-3 text-orange-400">Paso 4: Gestión del Activo</h3>
                      <p className="text-slate-300 mb-4">
                        El activo se gestiona profesionalmente (alquiler, mantenimiento, seguros). 
                        Los ingresos generados se distribuyen automáticamente entre los holders de tokens.
                      </p>
                      <ul className="text-slate-400 space-y-2">
                        <li className="flex items-center gap-2">
                          <span className="text-green-400">✓</span>
                          Gestión profesional incluida
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-400">✓</span>
                          Dividendos automáticos en crypto
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-400">✓</span>
                          Reportes trimestrales transparentes
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Paso 5 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/2 md:text-right order-2 md:order-1">
                    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                      <h3 className="text-2xl font-bold mb-3 text-pink-400">Paso 5: Liquidez Secundaria</h3>
                      <p className="text-slate-300 mb-4">
                        Los inversores pueden vender sus tokens en el mercado secundario en cualquier 
                        momento. Sin esperas de meses como en la inversión tradicional.
                      </p>
                      <ul className="text-slate-400 space-y-2">
                        <li className="flex items-center gap-2">
                          <span className="text-green-400">✓</span>
                          Venta 24/7 sin restricciones
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-400">✓</span>
                          Precio determinado por el mercado
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-green-400">✓</span>
                          Liquidación instantánea
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-2xl font-bold order-1 md:order-2 z-10">
                    5
                  </div>
                  <div className="md:w-1/2 order-3">
                    <div className="text-6xl text-center">💰</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Para Dueños de Activos */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">
              ¿Eres Dueño de un Activo?
            </h2>
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-blue-500/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-blue-400">Beneficios para Vendedores</h3>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">▸</span>
                      <span>Acceso a miles de inversores globales</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">▸</span>
                      <span>Venta parcial (no necesitas vender todo)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">▸</span>
                      <span>Liquidez inmediata vs venta tradicional</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400 mt-1">▸</span>
                      <span>Mantenés el control del activo</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-purple-400">Requisitos</h3>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">▸</span>
                      <span>Valor mínimo: $100,000 USD</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">▸</span>
                      <span>Documentación legal válida</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">▸</span>
                      <span>Avalúo profesional reciente</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">▸</span>
                      <span>KYC/AML completado</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-8">
                <a href="#" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition inline-block">
                  Comenzar Proceso de Tokenización
                </a>
              </div>
            </div>
          </section>

          {/* Para Inversores */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-green-400">
              ¿Eres Inversor?
            </h2>
            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 p-8 rounded-2xl border border-green-500/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-green-400">Beneficios para Inversores</h3>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">▸</span>
                      <span>Invertí desde $100 USD</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">▸</span>
                      <span>Portafolio diversificado globalmente</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">▸</span>
                      <span>Dividendos automáticos en crypto</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">▸</span>
                      <span>Liquidez 24/7 en mercado secundario</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-emerald-400">Cómo Empezar</h3>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-1">▸</span>
                      <span>1. Creá tu wallet (MetaMask)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-1">▸</span>
                      <span>2. Completá tu perfil (KYC)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-1">▸</span>
                      <span>3. Explorá el marketplace</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-1">▸</span>
                      <span>4. Comprá tokens y recibí dividendos</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-8">
                <a href="/guia-metamask" className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg font-semibold text-lg transition inline-block">
                  Guía para Principiantes
                </a>
              </div>
            </div>
          </section>

          {/* Timeline Visual */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-purple-400">
              Timeline Estimado
            </h2>
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">3-5 días</div>
                  <div className="text-slate-400 text-sm">Verificación Legal</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">2-3 días</div>
                  <div className="text-slate-400 text-sm">Emisión de Tokens</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">7-14 días</div>
                  <div className="text-slate-400 text-sm">Venta Primaria</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">Ongoing</div>
                  <div className="text-slate-400 text-sm">Gestión y Dividendos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
                  <div className="text-slate-400 text-sm">Mercado Secundario</div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-blue-500/30">
              <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar?</h2>
              <p className="text-slate-300 mb-6 max-w-xl mx-auto">
                Ahora que entendés cómo funciona Tokenizer, aprendé a configurar tu wallet 
                o explorá los activos disponibles en nuestro mercado.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a href="/guia-metamask" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition">
                  Guía MetaMask
                </a>
                <a href="/" className="bg-slate-700 hover:bg-slate-600 px-8 py-4 rounded-lg font-semibold text-lg transition">
                  Explorar Mercado
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