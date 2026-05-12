import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import { Check, Loader2 } from 'lucide-react';

export const ApprovalPanel = () => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  useGSAP(() => {
    if (status === 'idle') {
      gsap.to(btnRef.current, {
        boxShadow: "0 0 0 4px rgba(240,165,0,0.08)",
        duration: 1.8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });
    } else {
      gsap.killTweensOf(btnRef.current);
    }
  }, [status]);

  const handleApprove = () => {
    const tl = gsap.timeline();
    tl.to(btnRef.current, { scale: 0.97, duration: 0.1 })
      .to(btnRef.current, { scale: 1, duration: 0.2, ease: "back.out(3)" })
      .call(() => setStatus('loading'))
      .to(".btn-label", { opacity: 0, y: -6, duration: 0.15 })
      .from(".btn-loading", { opacity: 0, y: 6, duration: 0.2 });

    setTimeout(() => {
      setStatus('success');
      gsap.fromTo(".btn-success", 
        { opacity: 0, scale: 0.5 }, 
        { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(2)" }
      );
    }, 2000);
  };

  return (
    <div className="flex flex-col gap-4">
      <button
        ref={btnRef}
        onClick={handleApprove}
        disabled={status !== 'idle'}
        className={`relative h-11 w-full rounded border flex items-center justify-center transition-all overflow-hidden ${
          status === 'success' 
            ? 'bg-green/10 border-green text-green' 
            : 'border-accent-border text-accent hover:bg-accent-dim'
        }`}
      >
        {status === 'idle' && (
          <span className="btn-label text-[11px] font-mono font-bold tracking-widest uppercase">
            Execute Optimization Sequence
          </span>
        )}
        
        {status === 'loading' && (
          <div className="btn-loading flex items-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase">Syncing Blocks...</span>
          </div>
        )}

        {status === 'success' && (
          <div className="btn-success flex items-center gap-2">
            <Check className="w-4 h-4" />
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase">Execution Confirmed</span>
          </div>
        )}
      </button>

      <div className="flex justify-between items-center text-[9px] font-mono text-text-ghost uppercase">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-border-bright" />
          <span>Multisig: 2 of 3 signed</span>
        </div>
        <span>Gas Estimate: 42 gwei</span>
      </div>
    </div>
  );
};
