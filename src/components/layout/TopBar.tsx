import { useLiveClock } from '@/hooks/useLiveClock';
import { AgentStatusBar } from '../agents/AgentStatusBar';
import { Menu } from 'lucide-react';
import { WalletConnectButton } from '../wallet/WalletConnectButton';

export const TopBar = ({ onToggleMenu, onHome }: { onToggleMenu: () => void; onHome?: () => void }) => {
  const { format } = useLiveClock();

  return (
    <div id="topbar" className="h-14 w-full z-50 flex items-center justify-between px-4 md:px-6 bg-bg-base/60 backdrop-blur-3xl border-b border-white/5 flex-shrink-0 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <div className="flex items-center gap-4 md:gap-8">
        <button 
          onClick={onToggleMenu}
          className="md:hidden p-1 text-text-muted hover:text-accent"
        >
          <Menu className="w-5 h-5" />
        </button>

        <button onClick={onHome} className="flex items-center gap-2 text-left">
          <img src="/favicon.svg" alt="Argus logo" className="h-7 w-7" />
          <span className="text-[16px] md:text-[20px] font-display font-black tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-glow glow-text">ARGUS</span>
          <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[8px] font-mono font-bold bg-accent/10 text-accent border border-accent/20">v1</span>
        </button>
        
        <div className="hidden lg:block h-6 w-[1px] bg-white/5" />
        
        <div className="hidden sm:block">
          <AgentStatusBar />
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <span className="font-mono text-[10px] md:text-[11px] text-text-secondary tracking-widest uppercase">
          {format()}
        </span>
        <WalletConnectButton />
      </div>
    </div>
  );
};
