'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Header() {
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

        {/* Navegación */}
        <nav className="hidden md:flex gap-6">
          <a href="/marketplace" className="text-slate-300 hover:text-white transition">
            Mercado
          </a>
          <a href="/que-es-tokenizacion" className="text-slate-300 hover:text-white transition">
            Qué es Tokenización
          </a>
          <a href="/como-funciona" className="text-slate-300 hover:text-white transition">
            Cómo Funciona
          </a>
          <a href="/guia-metamask" className="text-slate-300 hover:text-white transition">
            Guía MetaMask
          </a>
        </nav>

        {/* Botón de conexión Web3 REAL */}
        <ConnectButton 
          showBalance={false}
          chainStatus="icon"
          label="Conectar Billetera"
        />
      </div>
    </header>
  );
}