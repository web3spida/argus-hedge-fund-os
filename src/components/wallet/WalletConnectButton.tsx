import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ChevronDown, CircleAlert, PlugZap, Wallet } from 'lucide-react';

export const WalletConnectButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        mounted,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
      }) => {
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated');

        if (!ready) {
          return (
            <button
              className="inline-flex h-9 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 font-mono text-[10px] font-bold uppercase tracking-wider text-text-muted"
              disabled
            >
              <PlugZap className="h-3.5 w-3.5" />
              Wallet
            </button>
          );
        }

        if (!connected) {
          return (
            <button
              onClick={openConnectModal}
              className="inline-flex h-9 items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-4 font-mono text-[10px] font-bold uppercase tracking-wider text-accent shadow-[0_0_18px_rgba(240,165,0,0.16)] transition hover:border-accent/50 hover:bg-accent/20"
            >
              <Wallet className="h-3.5 w-3.5" />
              Connect Wallet
            </button>
          );
        }

        if (chain.unsupported) {
          return (
            <button
              onClick={openChainModal}
              className="inline-flex h-9 items-center gap-2 rounded-lg border border-red/35 bg-red/10 px-4 font-mono text-[10px] font-bold uppercase tracking-wider text-red transition hover:bg-red/15"
            >
              <CircleAlert className="h-3.5 w-3.5" />
              Wrong Network
            </button>
          );
        }

        return (
          <div className="flex items-center gap-2">
            <button
              onClick={openChainModal}
              className="hidden h-9 items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 font-mono text-[10px] font-bold uppercase tracking-wider text-[#DCE5F3] transition hover:border-accent/30 hover:text-accent md:inline-flex"
            >
              {chain.hasIcon && chain.iconUrl ? (
                <img src={chain.iconUrl} alt={chain.name ?? 'Network'} className="h-4 w-4 rounded-full" />
              ) : (
                <span className="h-2 w-2 rounded-full bg-green shadow-[0_0_10px_rgba(22,199,132,0.7)]" />
              )}
              {chain.name}
              <ChevronDown className="h-3.5 w-3.5 text-text-muted" />
            </button>

            <button
              onClick={openAccountModal}
              className="inline-flex h-9 items-center gap-2 rounded-lg border border-accent/25 bg-accent/10 px-4 font-mono text-[10px] font-bold uppercase tracking-wider text-accent shadow-[0_0_18px_rgba(240,165,0,0.16)] transition hover:border-accent/50 hover:bg-accent/20"
            >
              <Wallet className="h-3.5 w-3.5" />
              <span>{account.displayName}</span>
              {account.displayBalance && (
                <span className="hidden text-[#B8C2D4] sm:inline">{account.displayBalance}</span>
              )}
            </button>
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
