import { agents } from '@/lib/mock-data';
import { AgentPill } from './AgentPill';

export const AgentStatusBar = () => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide max-w-[200px] sm:max-w-none">
      {agents.map((agent) => (
        <div key={agent.id} className="flex-shrink-0">
          <AgentPill agent={agent} />
        </div>
      ))}
    </div>
  );
};
