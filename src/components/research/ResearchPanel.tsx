import { narratives } from '@/lib/mock-data';
import { NarrativeCard } from './NarrativeCard';
import { PanelHeader } from '../shared/PanelHeader';

interface ResearchPanelProps {
  selectedId: string;
  onSelect: (id: string) => void;
}

export const ResearchPanel = ({ selectedId, onSelect }: ResearchPanelProps) => {
  return (
    <div className="panel">
      <PanelHeader 
        title="Narrative Intelligence" 
        subtitle="Real-time macro signal discovery" 
      />
      <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-3 scrollbar-hide">
        {narratives.map((n) => (
          <NarrativeCard 
            key={n.id} 
            narrative={n} 
            active={selectedId === n.id} 
            onClick={onSelect}
          />
        ))}
      </div>
    </div>
  );
};
