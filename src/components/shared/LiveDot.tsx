import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';

export const LiveDot = ({ status = 'idle' }: { status?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(".pulse-ring", {
      scale: 2.5,
      opacity: 0,
      duration: 1.6,
      ease: "power2.out",
      repeat: -1
    });
  }, { scope: containerRef });

  const getColor = () => {
    switch (status) {
      case 'executing': return 'var(--green)';
      case 'analyzing': return 'var(--blue)';
      case 'warning': return 'var(--red)';
      default: return 'var(--accent)';
    }
  };

  return (
    <div ref={containerRef} className="relative flex items-center justify-center w-3 h-3 agent-dot">
      <div 
        className="pulse-ring absolute w-full h-full rounded-full" 
        style={{ backgroundColor: getColor() }}
      />
      <div 
        className="relative w-1.5 h-1.5 rounded-full z-10" 
        style={{ backgroundColor: getColor() }}
      />
    </div>
  );
};
