interface PanelHeaderProps {
  title: string;
  subtitle?: string;
}

export const PanelHeader = ({ title, subtitle }: PanelHeaderProps) => {
  return (
    <div className="flex flex-col gap-1 px-6 py-4 border-b border-white/5 bg-gradient-to-r from-white/5 to-transparent shadow-[inset_0_1px_rgba(255,255,255,0.02)]">
      <h2 className="text-[12px] font-display font-bold tracking-[0.15em] uppercase text-text-primary text-transparent bg-clip-text bg-gradient-to-r from-white to-text-muted">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[10px] font-mono text-text-secondary uppercase tracking-wider">
          {subtitle}
        </p>
      )}
    </div>
  );
};
