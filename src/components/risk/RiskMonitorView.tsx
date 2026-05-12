import React from 'react';
import { PanelHeader } from '../shared/PanelHeader';
import { riskMetrics } from '@/lib/mock-data';
import { StatBlock } from '../shared/StatBlock';
import { Shield, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const RiskMonitorView = () => {
  return (
    <>
      <div className="panel">
        <PanelHeader 
          title="Risk Telemetry" 
          subtitle="system-wide exposure analysis" 
        />
        <div className="grid grid-cols-1 border-b border-border-dim">
          <div className="p-8 flex flex-col items-center justify-center gap-4 border-b border-border-dim bg-bg-elevated/20">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <div className="absolute inset-0 border-4 border-accent/20 rounded-full" />
              <div className="absolute inset-0 border-4 border-t-accent rounded-full animate-spin-slow" />
              <span className="text-3xl font-display font-black text-accent text-shadow-glow">72</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-xs font-mono font-bold text-text-primary tracking-widest uppercase">Composite risk factor</span>
              <span className="text-[10px] font-mono text-green">NOMINAL</span>
            </div>
          </div>
          <div className="grid grid-cols-3">
            {riskMetrics.map(metric => (
              <div key={metric.label} className="p-5 border-r border-border-dim last:border-r-0">
                <span className="text-[9px] font-mono text-text-muted uppercase tracking-widest">{metric.label}</span>
                <div className="text-lg font-display font-bold mt-1">{metric.value}</div>
                <div className="text-[9px] font-mono text-text-ghost mt-1">BMK: {metric.benchmark}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-6">
          <h4 className="text-[10px] font-mono font-bold text-text-muted uppercase tracking-widest mb-4">Correlation Matrix Heatmap</h4>
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 16 }).map((_, i) => (
              <div 
                key={i} 
                className="aspect-square rounded border border-border-dim transition-colors hover:border-accent" 
                style={{ backgroundColor: `rgba(240, 165, 0, ${Math.random() * 0.4})` }} 
              />
            ))}
          </div>
        </div>
      </div>

      <div className="panel">
        <PanelHeader 
          title="Sector Exposure" 
          subtitle="concentration limits and breaches" 
        />
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            {[
              { label: 'Technology', value: 42, limit: 45 },
              { label: 'Financials', value: 28, limit: 30 },
              { label: 'Commodities', value: 35, limit: 30 },
              { label: 'Real Estate', value: 12, limit: 20 },
            ].map(sector => (
              <div key={sector.label} className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-[10px] font-mono font-bold">
                  <span className="text-text-secondary uppercase">{sector.label}</span>
                  <span className={sector.value > sector.limit ? 'text-red' : 'text-text-muted'}>
                    {sector.value}% / {sector.limit}%
                  </span>
                </div>
                <div className="h-2 w-full bg-border-dim rounded-full overflow-hidden relative">
                  <div 
                    className={`h-full transition-all duration-1000 ${sector.value > sector.limit ? 'bg-red' : 'bg-accent'}`}
                    style={{ width: `${(sector.value / sector.limit) * 100}%` }}
                  />
                  <div className="absolute top-0 right-[100%-100%] border-r border-white/20 h-full w-[2px]" />
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-xl border border-border-dim bg-bg-void/40">
            <h4 className="text-[10px] font-mono font-bold text-text-muted uppercase tracking-widest mb-4">Integrity Logs</h4>
            <div className="space-y-3">
              {[
                { icon: CheckCircle2, text: 'Kernel sandbox validated', color: 'text-green' },
                { icon: CheckCircle2, text: 'Zero-day narrative probe complete', color: 'text-green' },
                { icon: AlertTriangle, text: 'High slippage detected on EM-FX', color: 'text-red' },
              ].map((log, i) => (
                <div key={i} className="flex items-center gap-3 text-[10px] font-mono">
                  <log.icon className={`w-3.4 h-3.4 ${log.color}`} />
                  <span className="text-text-secondary">{log.text}</span>
                  <span className="ml-auto text-text-ghost">0{i+1}m ago</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
