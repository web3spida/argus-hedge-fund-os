import { Agent, Narrative, Allocation } from '../types';

export const agents: Agent[] = [
  { id: '1', name: 'SENTINEL', role: 'Global Macro Scout', status: 'analyzing' },
  { id: '2', name: 'ARCHITECT', role: 'Portfolio Optimizer', status: 'idle' },
  { id: '3', name: 'QUICKSET', role: 'Execution Engine', status: 'executing' },
  { id: '4', name: 'VALKYRIE', role: 'Risk Scrutiny', status: 'idle' },
  { id: '5', name: 'ORACLE', role: 'Narrative Linker', status: 'warning' },
];

export const narratives: Narrative[] = [
  {
    id: 'n1',
    title: 'Post-Halving BTC Supply Shock',
    category: 'CRYPTO',
    timestamp: '2m ago',
    momentum: 88,
    sentiment: 'positive',
    sourceCount: 142,
    description: 'Ingesting SoSoValue Terminal data: Exchange inflows hit 4-year lows as institutional accumulation accelerates ahead of Q3 liquidity injection.'
  },
  {
    id: 'n2',
    title: 'Semiconductor Cold War Escalation',
    category: 'TECH',
    timestamp: '14m ago',
    momentum: 64,
    sentiment: 'negative',
    sourceCount: 89,
    description: 'SoSoValue News signal: New export restrictions on EUV lithography tools signal deeper structural decoupling in high-end compute.'
  },
  {
    id: 'n3',
    title: 'EU Energy Sovereign Pivot',
    category: 'ENERGY',
    timestamp: '45m ago',
    momentum: 42,
    sentiment: 'neutral',
    sourceCount: 56,
    description: 'Bilateral gas agreements between North Africa and Southern Europe stabilize medium-term forward curves.'
  },
  {
    id: 'n4',
    title: 'USD De-dollarization Ghosting',
    category: 'MACRO',
    timestamp: '1h ago',
    momentum: 21,
    sentiment: 'negative',
    sourceCount: 204,
    description: 'BRICS expansion discussions focus on local currency settlement systems, reducing Treasury demand floors.'
  }
];

export const initialAllocations: Allocation[] = [
  { id: 'a1', index: 'ARGUS-X', value: 35, change: 1.2, color: 'var(--data-1)' },
  { id: 'a2', index: 'GLOBAL-TECH', value: 25, change: -0.4, color: 'var(--data-2)' },
  { id: 'a3', index: 'MACRO-ALPHA', value: 20, change: 0.8, color: 'var(--data-3)' },
  { id: 'a4', index: 'EM-CREDIT', value: 15, change: -2.1, color: 'var(--data-4)' },
  { id: 'a5', index: 'CASH-RES', value: 5, change: 0.0, color: 'var(--data-5)' },
];

export const macroIndices = [
  { label: 'DXY', value: '104.28', change: -0.15, trend: 'neutral' },
  { label: 'US10Y', value: '4.32%', change: 0.04, trend: 'up' },
  { label: 'GOLD', value: '2384.50', change: 1.22, trend: 'up' },
  { label: 'BRENT', value: '82.44', change: -0.84, trend: 'down' },
];

export const riskMetrics = [
  { label: 'Sharpe Ratio', value: '2.84', benchmark: '1.42' },
  { label: 'Max Drawdown', value: '4.2%', benchmark: '12.8%' },
  { label: 'VAR (95%)', value: '$2.4M', benchmark: '$8.2M' },
];

export const recentTrades = [
  { id: 't1', sym: 'BTC/USD', side: 'BUY', size: '12.4', price: '64,284', time: '14:24:02' },
  { id: 't2', sym: 'NVDA', side: 'SELL', size: '450', price: '882.14', time: '14:22:15' },
  { id: 't3', sym: 'EUR/USD', side: 'BUY', size: '2.5M', price: '1.0842', time: '14:18:54' },
];
