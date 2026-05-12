import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import type { Chain } from 'viem';
import { arbitrum, base, mainnet, sepolia } from 'wagmi/chains';

const walletConnectProjectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || 'argus-demo-project-id';

export const valueChain = {
  id: 286623,
  name: 'ValueChain',
  nativeCurrency: {
    decimals: 18,
    name: 'SOSO',
    symbol: 'SOSO',
  },
  rpcUrls: {
    default: {
      http: ['https://mainnet.valuechain.xyz'],
    },
  },
  blockExplorers: {
    default: {
      name: 'ValueScan',
      url: 'https://main-scan.valuechain.xyz',
    },
  },
} as const satisfies Chain;

export const valueChainStaging = {
  id: 138565,
  name: 'ValueChain Staging',
  nativeCurrency: {
    decimals: 18,
    name: 'SOSO',
    symbol: 'SOSO',
  },
  rpcUrls: {
    default: {
      http: ['https://testnet-v1.valuechain.xyz'],
    },
  },
  blockExplorers: {
    default: {
      name: 'SoDEX Testnet Explorer',
      url: 'https://testnet.sodex.com/explorer',
    },
  },
  testnet: true,
} as const satisfies Chain;

export const wagmiConfig = getDefaultConfig({
  appName: 'Argus',
  projectId: walletConnectProjectId,
  chains: [valueChain, valueChainStaging, mainnet, base, arbitrum, sepolia],
  ssr: false,
});
