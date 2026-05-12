import React from 'react';
import { Allocation } from '@/types';

export const AllocationRow: React.FC<{ allocation: Allocation }> = ({ allocation }) => {
  return (
    <div className="data-row flex items-center justify-between py-2.5 border-b border-border-dim last:border-b-0">
      <div className="flex items-center gap-3">
        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: allocation.color }} />
        <span className="text-xs font-mono font-medium text-text-primary tracking-wide">
          {allocation.index}
        </span>
      </div>
      <div className="flex items-center gap-6">
        <div className={`text-[10px] font-mono ${allocation.change >= 0 ? 'text-green' : 'text-red'}`}>
          {allocation.change >= 0 ? '+' : ''}{allocation.change}%
        </div>
        <div className="text-xs font-mono font-bold text-text-primary w-8 text-right">
          {allocation.value}%
        </div>
      </div>
    </div>
  );
};
