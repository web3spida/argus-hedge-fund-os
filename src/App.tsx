import { useState, useLayoutEffect, useRef, useEffect } from 'react';
import { ResearchPanel } from './components/research/ResearchPanel';
import { PortfolioPanel } from './components/portfolio/PortfolioPanel';
import { DashboardShell } from './components/layout/DashboardShell';
import { GlobalMacroView } from './components/macro/GlobalMacroView';
import { RiskMonitorView } from './components/risk/RiskMonitorView';
import { ExecutionView } from './components/execution/ExecutionView';
import { ReportingView } from './components/reporting/ReportingView';
import { LandingPage } from './pages/LandingPage';
import { narratives } from './lib/mock-data';
import { NavTab } from './components/layout/Sidebar';
import { gsap } from './lib/gsap';

export default function App() {
  const [route, setRoute] = useState(() => window.location.pathname);
  const [activeTab, setActiveTab] = useState<NavTab>('intelligence');
  const [selectedNarrativeId, setSelectedNarrativeId] = useState(narratives[0].id);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePopState = () => setRoute(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setRoute(path);
    window.scrollTo({ top: 0 });
  };

  useLayoutEffect(() => {
    if (!route.startsWith('/dashboard')) return;
    if (!contentRef.current) return;
    gsap.fromTo(contentRef.current, 
      { opacity: 0, y: 10 }, 
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
    );
  }, [activeTab, route]);

  const renderContent = () => {
    switch (activeTab) {
      case 'intelligence':
      case 'portfolio':
        return (
          <>
            <ResearchPanel 
              selectedId={selectedNarrativeId} 
              onSelect={setSelectedNarrativeId} 
            />
            <PortfolioPanel 
              selectedNarrativeId={selectedNarrativeId} 
            />
          </>
        );
      case 'macro':
        return <GlobalMacroView />;
      case 'risk':
        return <RiskMonitorView />;
      case 'execution':
        return <ExecutionView />;
      case 'reporting':
        return <ReportingView />;
      default:
        return null;
    }
  };

  if (!route.startsWith('/dashboard')) {
    return (
      <LandingPage
        onLaunch={() => navigate('/dashboard')}
        onViewArchitecture={() => document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' })}
      />
    );
  }

  return (
    <DashboardShell activeTab={activeTab} onNavigate={setActiveTab} onHome={() => navigate('/')}>
      <div ref={contentRef} className="contents">
        {renderContent()}
      </div>
    </DashboardShell>
  );
}
