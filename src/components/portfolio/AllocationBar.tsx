import { Allocation } from '@/types';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';

export const AllocationBar = ({ allocations }: { allocations: Allocation[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".alloc-segment", {
      width: 0, 
      duration: 1.4, 
      ease: "power4.out", 
      stagger: 0.12, 
      delay: 1.2
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="flex h-1.5 w-full bg-bg-void rounded-full overflow-hidden gap-[1px]">
      {allocations.map((alloc) => (
        <div
          key={alloc.id}
          className="alloc-segment h-full"
          style={{ 
            width: `${alloc.value}%`,
            backgroundColor: alloc.color 
          }}
        />
      ))}
    </div>
  );
};
