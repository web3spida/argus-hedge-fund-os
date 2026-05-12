import { Agent } from '@/types';
import { LiveDot } from '../shared/LiveDot';

export const AgentPill = ({ agent }: { agent: Agent }) => {
  return (
    <div className="flex items-center gap-3 px-3 py-1.5 border border-border-soft rounded-full bg-bg-elevated/50 backdrop-blur-sm">
      <LiveDot status={agent.status} />
      <div className="flex flex-col">
        <span className="text-[10px] font-mono font-bold leading-none tracking-wider uppercase text-text-primary">
          {agent.name}
        </span>
        <span className="text-[8px] font-mono leading-none tracking-tight text-text-muted">
          {agent.role}
        </span>
      </div>
    </div>
  );
};
