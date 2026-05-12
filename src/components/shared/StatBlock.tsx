import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';

interface StatBlockProps {
  label: string;
  value: string | number;
  sublabel?: string;
  isCurrency?: boolean;
}

export const StatBlock = ({ label, value, sublabel, isCurrency }: StatBlockProps) => {
  const countRef = useRef<HTMLSpanElement>(null);
  const numericValue = typeof value === 'string' ? parseFloat(value.replace(/[^0-9.-]/g, '')) : value;
  const isPercentage = typeof value === 'string' && value.includes('%');

  const formatValue = (nextValue: number) => {
    if (isCurrency) {
      if (Math.abs(nextValue) >= 1_000_000) {
        return `$${(nextValue / 1_000_000).toFixed(1)}M`;
      }
      return `$${nextValue.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
    }

    if (isPercentage) {
      return `${nextValue.toFixed(2)}%`;
    }

    return nextValue.toFixed(0);
  };

  useGSAP(() => {
    if (!countRef.current) return;
    const obj = { val: 0 };
    gsap.to(obj, {
      val: numericValue,
      duration: 1.5,
      ease: "power2.out",
      delay: 1.3,
      onUpdate: () => {
        if (countRef.current) {
          countRef.current.textContent = formatValue(obj.val);
        }
      }
    });
  }, [numericValue, isCurrency, isPercentage]);

  return (
    <div className="stat-block flex flex-col gap-1 p-3 md:p-4 border-r border-border-dim last:border-r-0">
      <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-text-muted whitespace-nowrap">
        {label}
      </span>
      <div className="flex min-w-0 items-baseline">
        <span ref={countRef} className="min-w-0 text-lg md:text-xl xl:text-2xl font-display font-extrabold tracking-normal whitespace-nowrap">
          0
        </span>
      </div>
      {sublabel && (
        <span className="text-[10px] md:text-[11px] font-body text-text-ghost line-clamp-1">
          {sublabel}
        </span>
      )}
    </div>
  );
};
