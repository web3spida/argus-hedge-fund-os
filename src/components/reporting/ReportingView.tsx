import React from 'react';
import { PanelHeader } from '../shared/PanelHeader';
import { FileText, Download, TrendingUp, PieChart, Clock } from 'lucide-react';

export const ReportingView = () => {
  return (
    <>
      <div className="panel">
        <PanelHeader 
          title="Investor Relations" 
          subtitle="Performance reporting and attribution" 
        />
        <div className="p-6 space-y-6">
          <div className="flex flex-col gap-4">
            <h4 className="text-[10px] font-mono font-bold text-text-muted uppercase tracking-widest">Active Report Generation</h4>
            <div className="p-5 rounded-xl border border-accent-border/30 bg-accent-dim/20 backdrop-blur-sm flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/20">
                    <FileText className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-display font-bold text-text-primary">Weekly Performance Brief</span>
                    <span className="text-[10px] font-mono text-text-muted uppercase">Period ending May 11, 2026</span>
                  </div>
                </div>
                <button className="flex items-center gap-2 px-3 py-1.5 rounded bg-accent text-bg-void text-[10px] font-mono font-bold hover:bg-accent/90 transition-all uppercase tracking-tighter">
                  <Download className="w-3.5 h-3.5" />
                  Export PDF
                </button>
              </div>
              <div className="h-1.5 w-full bg-bg-void rounded-full overflow-hidden">
                <div className="h-full bg-accent w-full" />
              </div>
              <p className="text-[10px] font-body text-text-muted">
                Report encompasses intelligence insights from SENTINEL, architectural shifts from ARCHITECT, and execution logs from QUICKSET.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3">
            <h4 className="text-[10px] font-mono font-bold text-text-muted uppercase tracking-widest uppercase">Archive</h4>
            {[
              { title: 'Q1 Quarterly Alpha Review', date: 'Mar 31, 2026', size: '2.4MB' },
              { title: 'Monthly Risk Exposure Log', date: 'Apr 30, 2026', size: '1.2MB' },
              { title: 'Narrative Attribution Report', date: 'Apr 15, 2026', size: '0.8MB' },
            ].map((report, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-lg border border-border-dim bg-bg-elevated/20 group hover:border-accent/40 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-text-ghost group-hover:text-accent transition-colors" />
                  <div className="flex flex-col">
                    <span className="text-xs font-mono text-text-primary">{report.title}</span>
                    <span className="text-[9px] font-mono text-text-ghost uppercase">{report.date}</span>
                  </div>
                </div>
                <span className="text-[9px] font-mono text-text-ghost">{report.size}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="panel">
        <PanelHeader 
          title="Narrative Attribution" 
          subtitle="what drove the returns" 
        />
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <h4 className="text-[10px] font-mono font-bold text-text-muted uppercase tracking-widest">Top Return Drivers</h4>
            {[
              { label: 'BTC Supply Shock', value: '+12.4%', icon: TrendingUp, color: 'text-green' },
              { label: 'RWA Momentum Tilt', value: '+4.2%', icon: TrendingUp, color: 'text-green' },
              { label: 'Suez Blockade Vol', value: '+2.1%', icon: Clock, color: 'text-blue' },
            ].map(item => (
              <div key={item.label} className="flex items-center justify-between p-4 rounded-lg bg-bg-elevated/40 border border-border-dim">
                <div className="flex items-center gap-3">
                   <item.icon className={`w-4 h-4 ${item.color}`} />
                   <span className="text-xs font-display font-medium">{item.label}</span>
                </div>
                <span className={`text-xs font-mono font-bold ${item.color}`}>{item.value}</span>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-xl border border-border-dim bg-bg-void/40 flex-1">
             <h4 className="text-[10px] font-mono font-bold text-text-muted uppercase tracking-widest mb-4 uppercase">Automated Commentary</h4>
             <div className="font-body text-xs text-text-secondary leading-relaxed space-y-3">
               <p>
                 Returns were predominantly driven by the swift reallocation from macro-tech into digital commodities following the SENTINEL signal on Q1 supply shocks.
               </p>
               <p>
                 Alpha decay in European financials was mitigated by the ARCHITECT decision to hedge through short indices, resulting in a net contribution of +82bps.
               </p>
               <p>
                 Looking forward, the ORACLE agent indicates a 78% probability of narrative convergence in semi-conductor sovereign pivots, suggesting a maintain-weight stance.
               </p>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};
