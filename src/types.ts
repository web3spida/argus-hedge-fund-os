export type AgentStatus = 'idle' | 'analyzing' | 'executing' | 'warning';

export interface Agent {
  id: string;
  name: string;
  role: string;
  status: AgentStatus;
}

export interface Narrative {
  id: string;
  title: string;
  category: string;
  timestamp: string;
  momentum: number; // 0-100
  sentiment: 'positive' | 'negative' | 'neutral';
  sourceCount: number;
  description: string;
}

export interface Allocation {
  id: string;
  index: string;
  value: number; // 0-100
  change: number;
  color: string;
}

export interface PortfolioStats {
  nav: number;
  dailyPnL: number;
  riskScore: number;
}
