import React from 'react';
import { PanelHeader } from '../shared/PanelHeader';
import { recentTrades } from '@/lib/mock-data';
import { Terminal, Cpu, Zap, Activity } from 'lucide-react';

export const ExecutionView = () => {
  return (
    <>
      <div className="panel">
        <PanelHeader 
          title="SoDEX Order Management" 
          subtitle="high-frequency orchestration layer" 
        />
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="bg-bg-void/60 p-4 border-b border-border-dim overflow-x-auto">
            <div className="flex gap-4 min-w-max">
              {['LADDER', 'VWAP', 'TWAP', 'ICEBERG'].map(algo => (
                <button key={algo} className="px-4 py-2 rounded border border-border-soft text-[10px] font-mono font-bold text-text-muted hover:border-accent hover:text-accent transition-all">
                  {algo}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 font-mono text-[11px]">
            <div className="mb-4 text-text-ghost uppercase text-[10px] tracking-widest border-b border-border-dim pb-2">Active Depth</div>
            <div className="space-y-1">
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className="grid grid-cols-3 gap-4 group cursor-crosshair">
                  <span className="text-red/80">64,284.50</span>
                  <div className="relative h-4 bg-red/5 flex items-center justify-end pr-2 overflow-hidden">
                    <div className="absolute right-0 h-full bg-red/10" style={{ width: `${Math.random() * 100}%` }} />
                    <span className="text-red/60 relative z-10">{Math.random().toFixed(4)}</span>
                  </div>
                  <span className="text-text-ghost text-right">#42.2K</span>
                </div>
              ))}
              <div className="py-2 text-center text-accent/80 border-y border-accent/20 bg-accent/5 font-bold">SPREAD: 0.25 (0.01%)</div>
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className="grid grid-cols-3 gap-4 group cursor-crosshair">
                  <span className="text-green/80">64,283.75</span>
                  <div className="relative h-4 bg-green/5 flex items-center overflow-hidden">
                    <div className="absolute left-0 h-full bg-green/10" style={{ width: `${Math.random() * 100}%` }} />
                    <span className="text-green/60 pl-2 relative z-10">{Math.random().toFixed(4)}</span>
                  </div>
                  <span className="text-text-ghost text-right">#18.4K</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="panel">
        <PanelHeader 
          title="System Latency" 
          subtitle="hardware acceleration status" 
        />
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-border-dim bg-bg-elevated/40 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <Cpu className="w-4 h-4 text-blue" />
                <span className="text-[10px] font-mono text-blue uppercase">FPGA Core</span>
              </div>
              <span className="text-2xl font-display font-bold">0.12ms</span>
              <span className="text-[9px] font-mono text-text-ghost">STABLE (L1-CACHE)</span>
            </div>
            <div className="p-4 rounded-xl border border-border-dim bg-bg-elevated/40 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-[10px] font-mono text-accent uppercase">Bus Speed</span>
              </div>
              <span className="text-2xl font-display font-bold">128Gb/s</span>
              <span className="text-[9px] font-mono text-text-ghost">OPTIMAL (ECC)</span>
            </div>
          </div>

          <div className="flex-1 min-h-[200px]">
             <h4 className="text-[10px] font-mono font-bold text-text-muted uppercase tracking-widest mb-4">Trade Execution Log</h4>
             <div className="space-y-0.5 border border-border-dim rounded-lg overflow-hidden">
               <div className="grid grid-cols-4 px-4 py-2 bg-bg-overlay/50 border-b border-border-dim text-[10px] font-mono text-text-muted uppercase">
                 <span>Symbol</span>
                 <span>Side</span>
                 <span>Price</span>
                 <span className="text-right">Time</span>
               </div>
               <div className="max-h-[300px] overflow-y-auto">
                 {recentTrades.map((trade, i) => (
                   <div key={trade.id} className="grid grid-cols-4 px-4 py-3 border-b border-border-dim last:border-0 hover:bg-bg-overlay/30 transition-colors text-[11px] font-mono">
                     <span className="text-text-primary font-bold">{trade.sym}</span>
                     <span className={trade.side === 'BUY' ? 'text-green' : 'text-red'}>{trade.side}</span>
                     <span className="text-text-secondary">{trade.price}</span>
                     <span className="text-right text-text-ghost">{trade.time}</span>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};
