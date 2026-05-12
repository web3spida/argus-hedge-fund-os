import React from 'react';
import { PanelHeader } from '../shared/PanelHeader';
import { macroIndices } from '@/lib/mock-data';
import { StatBlock } from '../shared/StatBlock';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

export const GlobalMacroView = () => {
  return (
    <>
      <div className="panel">
        <PanelHeader 
          title="Macro Telemetry" 
          subtitle="cross-asset volatility and flow" 
        />
        <div className="grid grid-cols-2 border-b border-border-dim">
          {macroIndices.map(index => (
            <div key={index.label} className="p-5 border-r border-b border-border-dim last:border-r-0 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">{index.label}</span>
                {index.trend === 'up' && <ArrowUpRight className="w-3 h-3 text-green" />}
                {index.trend === 'down' && <ArrowDownRight className="w-3 h-3 text-red" />}
                {index.trend === 'neutral' && <Minus className="w-3 h-3 text-text-ghost" />}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-display font-bold">{index.value}</span>
                <span className={`text-[10px] font-mono ${index.change >= 0 ? 'text-green' : 'text-red'}`}>
                  {index.change >= 0 ? '+' : ''}{index.change}%
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="p-6 flex flex-col gap-4">
          <h4 className="text-[10px] font-mono font-bold text-text-muted uppercase tracking-widest">Regional Sentinel</h4>
          <div className="space-y-4">
            {['APAC', 'EMEA', 'AMER'].map(region => (
              <div key={region} className="flex flex-col gap-2 p-4 rounded-lg bg-bg-elevated/40 border border-border-dim">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono text-text-primary">{region} Liquidity Index</span>
                  <span className="text-[10px] font-mono text-green">STABLE</span>
                </div>
                <div className="h-1 w-full bg-border-dim rounded-full overflow-hidden">
                  <div className="h-full bg-blue w-2/3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="panel">
        <PanelHeader 
          title="Geopolitical Narrative" 
          subtitle="intelligence layer overrides" 
        />
        <div className="p-6 space-y-6">
          <div className="p-5 rounded-xl border border-red-dim bg-red-dim/20 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-red animate-pulse" />
              <span className="text-[10px] font-mono font-bold text-red uppercase tracking-widest">High Alert: Suez Blockade</span>
            </div>
            <p className="text-xs font-body text-text-primary leading-relaxed">
              Satellite imagery confirms 8-vessel congestion. Crude delivery timelines extended by 14 days. Implied volatility in energy markets expected to spike +12% in the next 4 hours.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] font-mono font-bold text-text-muted uppercase tracking-widest">Central Bank Pulse</h4>
            <div className="grid grid-cols-1 gap-3">
              {[
                { bank: 'FED', sentiment: 'Hawkish', dot: 'red' },
                { bank: 'ECB', sentiment: 'Neutral', dot: 'text-ghost' },
                { bank: 'BOJ', sentiment: 'Dovish', dot: 'green' }
              ].map(item => (
                <div key={item.bank} className="flex items-center justify-between p-4 rounded-lg border border-border-dim bg-bg-elevated/20">
                  <span className="text-sm font-display font-medium">{item.bank}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono text-text-secondary uppercase">{item.sentiment}</span>
                    <div className={`w-1.5 h-1.5 rounded-full bg-${item.dot}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
