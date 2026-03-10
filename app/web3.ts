'use client';

import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  mainnet,
  polygon,
  sepolia,
  polygonMumbai,
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Tokenizer',
  projectId: 'YOUR_PROJECT_ID', // Lo configuraremos después con WalletConnect
  chains: [
    mainnet,
    polygon,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia, polygonMumbai] : []),
  ],
  ssr: true,
});