'use client';

import Header from '../components/Header';

export default function GuiaMetamask() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <Header />

      {/* Contenido Principal */}
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Título */}
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-600/20 text-orange-400 px-4 py-2 rounded-full text-sm mb-6">
              🦊 Guía para Principiantes
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Cómo Configurar MetaMask
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Tutorial paso a paso para crear tu primera wallet y conectar con Tokenizer
            </p>
          </div>

          {/* Alerta de Seguridad */}
          <section className="mb-16">
            <div className="bg-red-600/20 border border-red-500/50 p-6 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="text-4xl">⚠️</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-red-400">Importante: Seguridad Primero</h3>
                  <p className="text-slate-300">
                    Tu <strong>frase semilla (seed phrase)</strong> es la clave para acceder a tus fondos. 
                    <strong> NUNCA la compartas con nadie</strong>, ni siquiera con el soporte de Tokenizer. 
                    Guárdala en un lugar seguro y offline.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ¿Qué es MetaMask? */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-orange-400">
              ¿Qué es MetaMask?
            </h2>
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg text-slate-300 leading-relaxed mb-4">
                    <strong>MetaMask</strong> es una billetera digital (wallet) que te permite interactuar 
                    con la blockchain de Ethereum y otras redes compatibles.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed mb-4">
                    Es como tu <strong>cuenta bancaria personal</strong> para el mundo de las criptomonedas 
                    y los activos tokenizados. Con MetaMask puedes:
                  </p>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-center gap-3">
                      <span className="text-orange-400 text-xl">✓</span>
                      <span>Almacenar tus tokens de forma segura</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-orange-400 text-xl">✓</span>
                      <span>Conectarte a aplicaciones como Tokenizer</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-orange-400 text-xl">✓</span>
                      <span>Enviar y recibir criptomonedas</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-orange-400 text-xl">✓</span>
                      <span>Recibir dividendos de tus inversiones</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="text-9xl">🦊</div>
                </div>
              </div>
            </div>
          </section>

          {/* Paso a Paso */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">
              Instalación Paso a Paso
            </h2>

            {/* Paso 1 */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <h3 className="text-2xl font-bold text-blue-400">Descargar MetaMask</h3>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 ml-16">
                <p className="text-slate-300 mb-4">
                  Visita el sitio oficial de MetaMask y descarga la extensión para tu navegador:
                </p>
                <div className="bg-slate-900 p-4 rounded-lg font-mono text-sm text-green-400">
                  https://metamask.io/download/
                </div>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-700 p-4 rounded-lg text-center">
                    <div className="text-3xl mb-2">🌐</div>
                    <div className="font-bold">Chrome</div>
                    <div className="text-sm text-slate-400">Recomendado</div>
                  </div>
                  <div className="bg-slate-700 p-4 rounded-lg text-center">
                    <div className="text-3xl mb-2">🔷</div>
                    <div className="font-bold">Edge</div>
                    <div className="text-sm text-slate-400">Compatible</div>
                  </div>
                  <div className="bg-slate-700 p-4 rounded-lg text-center">
                    <div className="text-3xl mb-2">🦊</div>
                    <div className="font-bold">Firefox</div>
                    <div className="text-sm text-slate-400">Compatible</div>
                  </div>
                </div>
                <p className="text-red-400 text-sm mt-4">
                  ⚠️ <strong>Importante:</strong> Solo descargues desde el sitio oficial. Hay extensiones 
                  falsas que roban fondos.
                </p>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <h3 className="text-2xl font-bold text-purple-400">Crear Nueva Wallet</h3>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 ml-16">
                <p className="text-slate-300 mb-4">
                  Una vez instalada la extensión, haz clic en el ícono de MetaMask en tu navegador 
                  y selecciona <strong>"Crear una nueva billetera"</strong>.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-300">
                    <span className="text-purple-400 font-bold">2.1</span>
                    <span>Crea una contraseña segura (mínimo 8 caracteres)</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <span className="text-purple-400 font-bold">2.2</span>
                    <span>Acepta los términos y condiciones</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <span className="text-purple-400 font-bold">2.3</span>
                    <span>Selecciona "No, gracias" para compartir datos de uso (opcional)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <h3 className="text-2xl font-bold text-green-400">Guardar Frase Semilla</h3>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 ml-16">
                <p className="text-slate-300 mb-4">
                  MetaMask te mostrará <strong>12 palabras secretas</strong>. Esta es tu frase semilla 
                  (seed phrase). Es LA ÚNICA forma de recuperar tu wallet si perdés acceso.
                </p>
                <div className="bg-red-600/20 border border-red-500/50 p-4 rounded-lg mb-4">
                  <p className="text-red-400 font-bold mb-2">⚠️ REGLAS DE ORO:</p>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-center gap-2">
                      <span className="text-red-400">✗</span>
                      <span>NUNCA la guardes en tu computadora o celular</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-400">✗</span>
                      <span>NUNCA la compartas con nadie (ni soporte técnico)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-400">✗</span>
                      <span>NUNCA la guardes en la nube o email</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      <span>ESCRIBILA EN PAPEL y guardala en lugar seguro</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      <span>Considerala una caja de seguridad o lugar seguro</span>
                    </li>
                  </ul>
                </div>
                <p className="text-slate-300">
                  Después de anotarla, MetaMask te pedirá que confirmes las palabras en orden 
                  para verificar que las guardaste correctamente.
                </p>
              </div>
            </div>

            {/* Paso 4 */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-xl font-bold">
                  4
                </div>
                <h3 className="text-2xl font-bold text-orange-400">Conectar a Tokenizer</h3>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 ml-16">
                <p className="text-slate-300 mb-4">
                  Una vez creada tu wallet, vuelve a Tokenizer y haz clic en 
                  <strong> "Conectar Billetera"</strong> en el Header.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-slate-700 p-4 rounded-lg">
                    <div className="text-3xl">1️⃣</div>
                    <div className="text-slate-300">Haz clic en "Conectar Billetera" en Tokenizer</div>
                  </div>
                  <div className="flex items-center gap-4 bg-slate-700 p-4 rounded-lg">
                    <div className="text-3xl">2️⃣</div>
                    <div className="text-slate-300">Selecciona "MetaMask" en las opciones</div>
                  </div>
                  <div className="flex items-center gap-4 bg-slate-700 p-4 rounded-lg">
                    <div className="text-3xl">3️⃣</div>
                    <div className="text-slate-300">Aprueba la conexión en la ventana de MetaMask</div>
                  </div>
                  <div className="flex items-center gap-4 bg-slate-700 p-4 rounded-lg">
                    <div className="text-3xl">4️⃣</div>
                    <div className="text-slate-300">¡Listo! Tu dirección aparecerá en el Header</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Paso 5 */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-xl font-bold">
                  5
                </div>
                <h3 className="text-2xl font-bold text-pink-400">Agregar Funds (Opcional)</h3>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 ml-16">
                <p className="text-slate-300 mb-4">
                  Para invertir en Tokenizer, necesitas tener criptomonedas en tu wallet. 
                  Las opciones más comunes son:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <div className="font-bold text-blue-400 mb-2">💵 ETH</div>
                    <div className="text-sm text-slate-400">Ethereum (Red principal)</div>
                  </div>
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <div className="font-bold text-green-400 mb-2">💚 USDC</div>
                    <div className="text-sm text-slate-400">Stablecoin (valor estable)</div>
                  </div>
                  <div className="bg-slate-700 p-4 rounded-lg">
                    <div className="font-bold text-purple-400 mb-2">💜 MATIC</div>
                    <div className="text-sm text-slate-400">Polygon (bajas comisiones)</div>
                  </div>
                </div>
                <p className="text-slate-400 text-sm mt-4">
                  Puedes comprar crypto en exchanges como Binance, Coinbase o Kraken, y luego 
                  transferirla a tu dirección de MetaMask.
                </p>
              </div>
            </div>
          </section>

          {/* Consejos de Seguridad */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-red-400">
              Consejos de Seguridad Adicionales
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="text-4xl mb-4">🔐</div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">Usa Hardware Wallet</h3>
                <p className="text-slate-300">
                  Para cantidades grandes, considera conectar tu MetaMask a una Ledger o Trezor. 
                  Es la forma más segura de almacenar crypto.
                </p>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="text-4xl mb-4"></div>
                <h3 className="text-xl font-bold mb-3 text-red-400">Cuidado con Phishing</h3>
                <p className="text-slate-300">
                  Nunca hagas clic en enlaces sospechosos. Tokenizer NUNCA te pedirá tu frase 
                  semilla por email o mensaje.
                </p>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="text-4xl mb-4">💻</div>
                <h3 className="text-xl font-bold mb-3 text-green-400">Usá Dispositivo Seguro</h3>
                <p className="text-slate-300">
                  Evita usar computadoras públicas o WiFi abierto para transacciones importantes. 
                  Usa siempre tu dispositivo personal.
                </p>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold mb-3 text-purple-400">MetaMask Móvil</h3>
                <p className="text-slate-300">
                  También puedes instalar MetaMask en tu celular (iOS/Android) para mayor 
                  comodidad y seguridad biométrica.
                </p>
              </div>
            </div>
          </section>

          {/* Preguntas Frecuentes */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-purple-400">
              Preguntas Frecuentes
            </h2>
            <div className="space-y-4">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <h3 className="text-lg font-bold mb-2 text-blue-400">¿MetaMask es gratuito?</h3>
                <p className="text-slate-300">
                  Sí, la extensión es completamente gratuita. Solo pagas las comisiones de la 
                  blockchain (gas fees) cuando haces transacciones.
                </p>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <h3 className="text-lg font-bold mb-2 text-purple-400">¿Puedo tener múltiples wallets?</h3>
                <p className="text-slate-300">
                  Sí, MetaMask te permite crear y gestionar múltiples cuentas desde la misma extensión. 
                  Cada una tendrá su propia dirección y frase semilla.
                </p>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <h3 className="text-lg font-bold mb-2 text-green-400">¿Qué pasa si olvido mi contraseña?</h3>
                <p className="text-slate-300">
                  Puedes restablecerla usando tu frase semilla de 12 palabras. Por eso es CRUCIAL 
                  guardarla en un lugar seguro. Sin ella, no hay forma de recuperar tu wallet.
                </p>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <h3 className="text-lg font-bold mb-2 text-orange-400">¿Tokenizer puede ver mis fondos?</h3>
                <p className="text-slate-300">
                  No. Tokenizer solo puede ver la dirección pública de tu wallet (como un número 
                  de cuenta bancaria). Solo tu tienes acceso a tus fondos con tu contraseña y frase semilla.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 p-8 rounded-2xl border border-orange-500/30">
              <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar?</h2>
              <p className="text-slate-300 mb-6 max-w-xl mx-auto">
                Ahora que tienes tu wallet configurada, explora los activos disponibles 
                en Tokenizer y comienza a invertir en el futuro.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a href="/" className="bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-lg font-semibold text-lg transition">
                  Explorar Mercado
                </a>
                <a href="/que-es-tokenizacion" className="bg-slate-700 hover:bg-slate-600 px-8 py-4 rounded-lg font-semibold text-lg transition">
                  Aprender Más
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