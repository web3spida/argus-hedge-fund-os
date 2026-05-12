import { Activity, BarChart3, Globe, ShieldAlert, Zap, FileText } from 'lucide-react';

export type NavTab = 'intelligence' | 'portfolio' | 'macro' | 'risk' | 'execution' | 'reporting';

const navItems: { icon: any; label: string; id: NavTab }[] = [
  { icon: Activity, label: 'Intelligence', id: 'intelligence' },
  { icon: BarChart3, label: 'Portfolio', id: 'portfolio' },
  { icon: Globe, label: 'Global Macro', id: 'macro' },
  { icon: ShieldAlert, label: 'Risk Monitor', id: 'risk' },
  { icon: Zap, label: 'Execution', id: 'execution' },
  { icon: FileText, label: 'Investor Reports', id: 'reporting' },
];

export const Sidebar = ({ 
  isOpen, 
  onClose, 
  activeTab, 
  onNavigate 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  activeTab: NavTab;
  onNavigate: (tab: NavTab) => void;
}) => {
  return (
    <aside className={`absolute md:relative left-0 top-0 bottom-0 w-[260px] bg-bg-base/95 backdrop-blur-3xl border-r border-white/10 py-8 z-40 md:z-10 transition-transform duration-300 flex flex-col shrink-0 shadow-[4px_0_24px_rgba(0,0,0,0.5)] md:shadow-none ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } md:translate-x-0`}>
      <nav className="flex flex-col gap-2 px-4 flex-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              onNavigate(item.id);
              onClose();
            }}
            style={{
              color: activeTab === item.id ? '#F0A500' : '#E6EDF7',
              opacity: 1,
            }}
            className={`sidebar-item group flex items-center gap-3 px-4 py-3.5 rounded-xl text-xs font-bold tracking-wide opacity-100 transition-all duration-300 ${
              activeTab === item.id 
                ? 'bg-accent/[0.18] text-accent shadow-[inset_0_0_0_1px_rgba(240,165,0,0.35),0_10px_30px_rgba(240,165,0,0.08)]' 
                : 'text-[#B8C2D4] hover:bg-white/[0.07] hover:text-white hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]'
            }`}
          >
            <item.icon
              className="w-4 h-4"
              style={{ color: activeTab === item.id ? '#F0A500' : '#C7D2E3' }}
            />
            <span style={{ color: activeTab === item.id ? '#F0A500' : '#E6EDF7' }}>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="px-6 pb-4">
        <div className="p-4 rounded-xl border border-white/10 bg-bg-void/60 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-md">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-mono uppercase text-[#B8C2D4] text-nowrap">System Health</span>
            <div className="w-1.5 h-1.5 rounded-full bg-green shadow-[0_0_8px_rgba(22,199,132,0.5)] flex-shrink-0 animate-pulse" />
          </div>
          <div className="space-y-2 text-[9px] font-mono text-[#7F8A9D]">
            <div className="flex justify-between items-center">
              <span>LATENCY</span>
              <span className="text-[#DCE5F3]">42ms</span>
            </div>
            <div className="flex justify-between items-center">
              <span>ACCURACY</span>
              <span className="text-[#DCE5F3]">99.82%</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
