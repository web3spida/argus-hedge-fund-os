import { initialAllocations } from '@/lib/mock-data';
import { StatBlock } from '../shared/StatBlock';
import { AllocationBar } from './AllocationBar';
import { AllocationRow } from './AllocationRow';
import { ArchitectRationale } from './ArchitectRationale';
import { ApprovalPanel } from './ApprovalPanel';
import { PanelHeader } from '../shared/PanelHeader';

export const PortfolioPanel = ({ selectedNarrativeId }: { selectedNarrativeId: string }) => {
  return (
    <div className="panel">
      <PanelHeader 
        title="Portfolio Orchestration" 
        subtitle="Dynamic allocation adjustments" 
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-border-dim">
        <StatBlock label="Net Asset Value" value="142580400" isCurrency sublabel="Current AUM exposure" />
        <StatBlock label="24H Alpha" value="4.25%" sublabel="+12.4 bps sector skew" />
        <StatBlock label="Risk Score" value="72" sublabel="Volatility threshold: 85" />
      </div>

      <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8 scrollbar-hide">
        <section className="flex flex-col gap-4">
          <div className="flex justify-between items-end">
            <h4 className="text-[10px] font-mono font-bold text-text-muted uppercase tracking-widest">Active Weights</h4>
            <span className="text-[10px] font-mono text-accent">DIVERSIFIED</span>
          </div>
          <AllocationBar allocations={initialAllocations} />
          <div className="space-y-1">
            {initialAllocations.map(a => (
              <AllocationRow key={a.id} allocation={a} />
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4 flex-1">
          <h4 className="text-[10px] font-mono font-bold text-text-muted uppercase tracking-widest">Architect Strategy</h4>
          <ArchitectRationale narrativeId={selectedNarrativeId} />
        </section>
      </div>

      <div className="p-6 border-t border-border-dim bg-bg-elevated/40">
        <ApprovalPanel />
      </div>
    </div>
  );
};
