import React, { useRef, useState, ReactNode } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import { TopBar } from './TopBar';
import { Sidebar, NavTab } from './Sidebar';

export const DashboardShell = ({ children, activeTab, onNavigate, onHome }: { 
  children: ReactNode;
  activeTab: NavTab;
  onNavigate: (tab: NavTab) => void;
  onHome?: () => void;
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from("#topbar",         { y: -48, opacity: 0, duration: 0.5 })
      .from(".sidebar-item",   { x: -20, opacity: 0, duration: 0.4, stagger: 0.06 }, "-=0.2")
      .fromTo(".panel",
        { opacity: 0, y: 12, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.08, clearProps: "transform,opacity" },
        "-=0.2"
      )
      .fromTo(".data-row, .narrative-card, .stat-block",
        { opacity: 0, y: 6 },
        { opacity: 1, y: 0, duration: 0.35, stagger: 0.04, clearProps: "transform,opacity" },
        "-=0.15"
      )
      .fromTo(".agent-dot",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.3, stagger: 0.05, ease: "back.out(2)", clearProps: "transform,opacity" },
        "-=0.1"
      );

    gsap.to(".bg-glow-1", { x: 30, y: -20, duration: 8, ease: "sine.inOut", yoyo: true, repeat: -1 });
    gsap.to(".bg-glow-2", { x: -20, y: 15, duration: 11, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 2 });
  }, { scope: rootRef });

  return (
    <div ref={rootRef} className="h-screen w-screen overflow-hidden flex flex-col bg-bg-void relative">
      <div className="noise-overlay" />
      
      <div className="ambient-glow bg-glow-1 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-accent/10 top-[-50px] left-[-50px]" />
      <div className="ambient-glow bg-glow-2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-blue/10 top-[20%] right-[-100px]" />

      <TopBar onToggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)} onHome={onHome} />
      
      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar 
          isOpen={isMobileMenuOpen} 
          onClose={() => setIsMobileMenuOpen(false)} 
          activeTab={activeTab}
          onNavigate={onNavigate}
        />
        
        <main className="flex-1 overflow-y-auto z-10 w-full p-4 lg:p-6 lg:pr-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6 min-h-full pb-8">
            {children}
          </div>
        </main>

        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-bg-void/80 backdrop-blur-md z-30 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </div>
  );
};
