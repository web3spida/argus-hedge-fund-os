import { narratives } from '@/lib/mock-data';
import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';

export const ArchitectRationale = ({ narrativeId }: { narrativeId: string }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const narrative = narratives.find(n => n.id === narrativeId);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".architect-content", { opacity: 0, y: 4, duration: 0.15 })
      .to(".architect-content", { opacity: 1, y: 0, duration: 0.25 });
  }, [narrativeId]);

  return (
    <div ref={contentRef} className="architect-content p-5 rounded-xl border border-accent-border/30 bg-accent-dim/40 relative overflow-hidden backdrop-blur-sm min-h-[140px]">
      <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
          <span className="text-[10px] font-mono font-extrabold text-accent uppercase tracking-widest">Architect Analysis</span>
        </div>
        <p className="text-xs font-body text-text-primary leading-relaxed">
          Informed by <span className="text-accent underline decoration-accent/30 underline-offset-2">SSI Protocol index data</span> and the {narrative?.title} narrative, we recommend a +3.4% tilt towards ARGUS-X to capture early-stage liquidity inflows. Risk parity models suggest offsetting this by reducing CASH-RES slightly.
        </p>
        <div className="flex gap-4 mt-2">
          <div className="flex flex-col">
            <span className="text-[9px] font-mono text-text-muted uppercase">Confidence</span>
            <span className="text-[11px] font-mono text-accent">HIGH (92%)</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] font-mono text-text-muted uppercase">Latency Risk</span>
            <span className="text-[11px] font-mono text-green">MINIMAL</span>
          </div>
        </div>
      </div>
    </div>
  );
};
