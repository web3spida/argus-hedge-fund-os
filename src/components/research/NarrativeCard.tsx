import React, { useRef } from 'react';
import { Narrative } from '@/types';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';

interface NarrativeCardProps {
  narrative: Narrative;
  active: boolean;
  onClick: (id: string) => void;
}

export const NarrativeCard: React.FC<NarrativeCardProps> = ({ narrative, active, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Initial entrance handled by shell
  }, { scope: cardRef });

  const onMouseEnter = () => gsap.to(cardRef.current, {
    y: -2, 
    duration: 0.2, 
    ease: "power2.out",
    boxShadow: active ? "0 8px 32px rgba(240,165,0,0.15), inset 0 0 0 1px rgba(240,165,0,0.2)" : "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 1px 0 rgba(255,255,255,0.1)"
  });

  const onMouseLeave = () => gsap.to(cardRef.current, {
    y: 0, 
    duration: 0.25, 
    ease: "power2.inOut",
    boxShadow: active ? "0 4px 20px rgba(240,165,0,0.1), inset 0 0 0 1px rgba(240,165,0,0.3)" : "none"
  });

  return (
    <div
      ref={cardRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => onClick(narrative.id)}
      className={`narrative-card group p-5 cursor-pointer rounded-xl transition-all flex flex-col gap-4 ${
        active 
          ? 'border border-accent/40 bg-accent/5 shadow-[0_4px_20px_rgba(240,165,0,0.1),inset_0_0_0_1px_rgba(240,165,0,0.3)] backdrop-blur-md' 
          : 'border border-white/5 bg-black/20 backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)]'
      }`}
    >
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent flex items-center gap-2">
            {narrative.category}
            <span className="w-1 h-1 rounded-full bg-border-bright" />
            <span className="text-text-muted">{narrative.timestamp}</span>
          </span>
          <h3 className="text-sm font-display font-bold text-text-primary group-hover:text-accent transition-colors">
            {narrative.title}
          </h3>
        </div>
        <span className="text-[10px] font-mono text-text-muted bg-white/5 border border-white/5 px-2 py-1 rounded shadow-inner">
          {narrative.sourceCount} SRCS
        </span>
      </div>

      <p className="text-xs font-body text-text-secondary line-clamp-2 leading-relaxed">
        {narrative.description}
      </p>

      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between items-center text-[9px] font-mono font-bold tracking-wider">
          <span className="text-text-muted uppercase">MOMENTUM</span>
          <span className="text-accent glow-text">{narrative.momentum}%</span>
        </div>
        <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden shadow-inner">
          <div 
            className="h-full bg-accent fill-momentum shadow-[0_0_10px_rgba(240,165,0,0.8)]" 
            style={{ width: `${narrative.momentum}%` }}
          />
        </div>
      </div>
    </div>
  );
};
