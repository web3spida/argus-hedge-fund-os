import { useLayoutEffect, useRef } from 'react';
import { motion } from 'motion/react';
import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  FileText,
  Layers3,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';
import { gsap } from '@/lib/gsap';

const agents = [
  {
    name: 'Research Agent',
    role: 'Market intelligence',
    text: 'Ranks SoSoValue news, ETF flows, and market data into investable narratives.',
    icon: Activity,
  },
  {
    name: 'Index Architect',
    role: 'Portfolio construction',
    text: 'Maps narratives into SSI index exposure, custom baskets, and target weights.',
    icon: BarChart3,
  },
  {
    name: 'Risk Agent',
    role: 'Capital protection',
    text: 'Stress-tests concentration, drawdown, correlation drift, and liquidity before execution.',
    icon: ShieldCheck,
  },
  {
    name: 'Execution Agent',
    role: 'SoDEX routing',
    text: 'Converts approved deltas into testnet order intents, fills, and auditable trade logs.',
    icon: Zap,
  },
  {
    name: 'Reporting Agent',
    role: 'Investor narrative',
    text: 'Turns decisions, PnL, and attribution into clean weekly investor reporting.',
    icon: FileText,
  },
];

const workflow = ['SoSoValue data', 'Narrative score', 'SSI allocation', 'Risk gate', 'SoDEX execution', 'Investor report'];

const integrations = [
  ['SoSoValue API', 'Featured news, currency feeds, ETF metrics, and market intelligence.'],
  ['SSI Protocol', 'Index methodology and portfolio exposure layer for thesis-driven baskets.'],
  ['SoDEX / ValueChain', 'Orderbook execution path with testnet REST and WebSocket readiness.'],
  ['AI Agent Layer', 'Reasoning, scoring, validation, order intent, and reporting automation.'],
];

interface LandingPageProps {
  onLaunch: () => void;
  onViewArchitecture: () => void;
}

export const LandingPage = ({ onLaunch, onViewArchitecture }: LandingPageProps) => {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .fromTo('.landing-nav', { opacity: 0, y: -18 }, { opacity: 1, y: 0, duration: 0.55 })
        .fromTo('.hero-kicker', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.45 }, '-=0.2')
        .fromTo('.hero-title-line', { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.62, stagger: 0.08 }, '-=0.1')
        .fromTo('.hero-copy', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.2')
        .fromTo('.hero-actions', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.45 }, '-=0.25')
        .fromTo('.preview-shell', { opacity: 0, y: 30, rotateX: 7 }, { opacity: 1, y: 0, rotateX: 0, duration: 0.8 }, '-=0.45')
        .fromTo('.landing-stat', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.06 }, '-=0.45');

      gsap.to('.data-beam', {
        xPercent: 34,
        opacity: 0.7,
        duration: 5.5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.4,
      });

      gsap.to('.matrix-line', {
        backgroundPosition: '220px 0',
        duration: 11,
        ease: 'none',
        repeat: -1,
      });

      gsap.to('.preview-pulse', {
        opacity: 0.25,
        duration: 1.6,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.18,
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={rootRef} className="min-h-screen overflow-x-hidden bg-[var(--bg-void)] text-[var(--text-primary)]">
      <div className="noise-overlay" />

      <section className="relative min-h-screen overflow-hidden border-b border-white/5">
        <PremiumBackdrop />

        <header className="landing-nav relative z-20 flex items-center justify-between px-5 py-5 md:px-10 lg:px-16">
          <button onClick={onLaunch} className="flex items-center gap-3 text-left">
            <img src="/argus-logo.svg" alt="Argus AI Hedge Fund OS" className="h-12 w-auto max-w-[220px] object-contain shadow-[0_0_30px_rgba(240,165,0,0.12)]" />
          </button>

          <div className="hidden items-center gap-2 md:flex">
            {['SoSoValue', 'SSI', 'SoDEX', 'ValueChain'].map((item) => (
              <span key={item} className="border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-[#B8C2D4] backdrop-blur-md">
                {item}
              </span>
            ))}
          </div>

          <button onClick={onLaunch} className="hidden border border-[var(--accent-border)] bg-[var(--accent-dim)] px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--accent)] transition hover:bg-[rgba(240,165,0,0.18)] sm:block">
            Launch Dashboard
          </button>
        </header>

        <div className="relative z-10 grid min-h-[calc(100vh-84px)] grid-cols-1 gap-10 px-5 pb-12 pt-8 md:px-10 lg:grid-cols-[0.82fr_1.18fr] lg:px-16 lg:pt-12">
          <div className="flex max-w-2xl flex-col justify-center">
            <div className="hero-kicker mb-6 inline-flex w-fit items-center gap-2 border border-white/10 bg-white/[0.05] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#B8C2D4] shadow-[inset_0_1px_rgba(255,255,255,0.08)] backdrop-blur-xl">
              <Sparkles className="h-3.5 w-3.5 text-[var(--accent)]" />
              One manager. Five agents. Infinite markets.
            </div>

            <h1 className="font-display text-5xl font-black leading-[0.96] text-white md:text-7xl lg:text-8xl">
              <span className="hero-title-line block">Argus</span>
              <span className="hero-title-line block text-[var(--accent)]">Fund OS</span>
            </h1>

            <p className="hero-copy mt-6 max-w-xl text-lg leading-8 text-[#B8C2D4] md:text-xl">
              A premium AI command center for on-chain fund operations: SoSoValue intelligence, SSI portfolio construction, risk-gated decisions, SoDEX execution, and investor-grade reporting.
            </p>

            <div className="hero-actions mt-8 flex flex-col gap-3 sm:flex-row">
              <motion.button
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={onLaunch}
                className="inline-flex items-center justify-center gap-2 bg-[var(--accent)] px-5 py-3 font-mono text-[11px] font-black uppercase tracking-wider text-[var(--bg-void)] shadow-[0_16px_42px_rgba(240,165,0,0.22)] transition hover:brightness-110"
              >
                Launch Dashboard
                <ArrowRight className="h-4 w-4" />
              </motion.button>
              <motion.button
                whileHover={{ y: -2, borderColor: 'rgba(240,165,0,0.4)' }}
                whileTap={{ scale: 0.98 }}
                onClick={onViewArchitecture}
                className="inline-flex items-center justify-center gap-2 border border-white/10 bg-white/[0.04] px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md transition hover:text-[var(--accent)]"
              >
                View Architecture
              </motion.button>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 border border-white/10 bg-black/25 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl">
              {[
                ['5', 'specialist agents'],
                ['3', 'SoSoValue layers'],
                ['1', 'fund workflow'],
              ].map(([value, label]) => (
                <div key={label} className="landing-stat border-r border-white/10 p-4 last:border-r-0">
                  <div className="font-display text-3xl font-bold text-white">{value}</div>
                  <div className="mt-1 font-mono text-[9px] uppercase tracking-wider text-[#8E9AAF]">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center [perspective:1400px]">
            <DashboardPreview />
          </div>
        </div>
      </section>

      <section id="architecture" className="relative px-5 py-20 md:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.015),transparent)]" />
        <div className="relative mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">Operating Model</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-5xl">Five specialist agents, one manager.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[#B8C2D4]">
            Every recommendation shows its source, rationale, confidence, risk state, and required approval step before capital moves.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-5">
          {agents.map((agent, index) => (
            <motion.article
              key={agent.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              whileHover={{ y: -6, borderColor: 'rgba(240,165,0,0.38)' }}
              className="agent-card group border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl"
            >
              <agent.icon className="mb-6 h-5 w-5 text-[var(--accent)] transition group-hover:scale-110" />
              <h3 className="font-display text-base font-bold text-white">{agent.name}</h3>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-wider text-[#8E9AAF]">{agent.role}</p>
              <p className="mt-5 text-sm leading-6 text-[#B8C2D4]">{agent.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/5 bg-white/[0.025] px-5 py-20 md:px-10 lg:px-16">
        <div className="mb-8 flex items-center gap-3">
          <Layers3 className="h-5 w-5 text-[var(--accent)]" />
          <h2 className="font-display text-3xl font-bold text-white">Insight to Execution</h2>
        </div>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-6">
          {workflow.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="border border-white/10 bg-[var(--bg-base)] p-5"
            >
              <div className="font-mono text-[10px] text-[var(--accent)]">0{index + 1}</div>
              <div className="mt-4 text-sm font-semibold text-white">{step}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.7fr_1fr]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">Integration Proof</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-5xl">Built for the SoSoValue stack.</h2>
            <p className="mt-5 text-sm leading-7 text-[#B8C2D4]">
              SoSoValue intelligence creates the thesis, SSI shapes exposure, risk validates allocation, and SoDEX handles the execution route.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {integrations.map(([title, text], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.018))] p-5 shadow-[0_18px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl"
              >
                <div className="mb-3 flex items-center gap-2">
                  <LockKeyhole className="h-4 w-4 text-[var(--green)]" />
                  <h3 className="font-mono text-[11px] font-bold uppercase tracking-wider text-white">{title}</h3>
                </div>
                <p className="text-sm leading-6 text-[#B8C2D4]">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

const PremiumBackdrop = () => (
  <div aria-hidden="true" className="pointer-events-none absolute inset-0">
    <div className="absolute inset-0 bg-[linear-gradient(115deg,#05060A_0%,#070B12_44%,#10100B_70%,#05060A_100%)]" />
    <div className="matrix-line absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(240,165,0,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(77,142,255,0.11)_1px,transparent_1px)] [background-size:64px_64px]" />
    <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(240,165,0,0.08)_48%,transparent_56%),linear-gradient(180deg,transparent_0%,rgba(5,6,10,0.7)_88%)]" />
    <div className="data-beam absolute left-[-18%] top-[18%] h-px w-[72%] bg-gradient-to-r from-transparent via-[rgba(240,165,0,0.55)] to-transparent" />
    <div className="data-beam absolute left-[28%] top-[64%] h-px w-[62%] bg-gradient-to-r from-transparent via-[rgba(77,142,255,0.35)] to-transparent" />
    <div className="data-beam absolute left-[-8%] top-[82%] h-px w-[48%] bg-gradient-to-r from-transparent via-[rgba(22,199,132,0.32)] to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[var(--bg-void)] to-transparent" />
  </div>
);

const DashboardPreview = () => {
  return (
    <motion.div
      whileHover={{ rotateX: 0, rotateY: -1.5, y: -4 }}
      transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      className="preview-shell w-full origin-center border border-white/[0.12] bg-[rgba(8,11,18,0.86)] p-3 shadow-[0_34px_130px_rgba(0,0,0,0.64)] backdrop-blur-2xl"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
        <div>
          <div className="font-display text-sm font-black text-[var(--accent)]">ARGUS LIVE DESK</div>
          <div className="font-mono text-[9px] uppercase tracking-wider text-[#8E9AAF]">Risk-cleared testnet workflow</div>
        </div>
        <div className="font-mono text-[10px] text-[var(--green)]">SYSTEM ONLINE</div>
      </div>

      <div className="grid grid-cols-1 gap-3 p-3 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-3">
          {[
            ['BTC ETF inflows accelerate', 'Momentum 88', 'SoSoValue Terminal'],
            ['RWA liquidity rotation', 'Momentum 74', 'SSI mapping ready'],
            ['Stablecoin yield compression', 'Risk watch', 'Guardian flagged'],
          ].map(([title, meta, source]) => (
            <motion.div key={title} whileHover={{ x: 4 }} className="border border-white/10 bg-white/[0.04] p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--accent)]">{meta}</span>
                <span className="preview-pulse h-1.5 w-1.5 rounded-full bg-[var(--green)] shadow-[0_0_12px_rgba(22,199,132,0.75)]" />
              </div>
              <div className="text-sm font-semibold text-white">{title}</div>
              <div className="mt-2 font-mono text-[9px] uppercase tracking-wider text-[#8E9AAF]">{source}</div>
            </motion.div>
          ))}
        </div>

        <div className="border border-[var(--accent-border)] bg-[rgba(240,165,0,0.08)] p-4 shadow-[inset_0_1px_rgba(255,255,255,0.08)]">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <div className="font-display text-lg font-bold text-white">Proposed Allocation</div>
              <div className="font-mono text-[9px] uppercase tracking-wider text-[#8E9AAF]">Awaiting manager approval</div>
            </div>
            <div className="font-mono text-[10px] text-[var(--accent)]">92% CONF</div>
          </div>

          {[
            ['BTC Core', '42%', 'w-[42%]', 'bg-[var(--accent)]'],
            ['RWA Index', '24%', 'w-[24%]', 'bg-[var(--blue)]'],
            ['ETH Beta', '18%', 'w-[18%]', 'bg-[var(--violet)]'],
            ['Cash Reserve', '16%', 'w-[16%]', 'bg-[var(--green)]'],
          ].map(([label, value, width, color]) => (
            <div key={label} className="mb-4">
              <div className="mb-2 flex justify-between font-mono text-[10px] uppercase tracking-wider">
                <span className="text-[#B8C2D4]">{label}</span>
                <span className="text-white">{value}</span>
              </div>
              <div className="h-2 bg-black/35">
                <div className={`h-full ${width} ${color}`} />
              </div>
            </div>
          ))}

          <div className="mt-5 grid grid-cols-3 gap-2">
            {['Risk Gate', 'SoDEX Intent', 'Report Log'].map((label) => (
              <div key={label} className="border border-white/10 bg-black/[0.24] p-3 text-center font-mono text-[9px] uppercase tracking-wider text-[#B8C2D4]">
                <CheckCircle2 className="mx-auto mb-2 h-3.5 w-3.5 text-[var(--green)]" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
