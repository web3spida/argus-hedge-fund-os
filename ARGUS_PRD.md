# ARGUS — The AI Hedge Fund OS
### *One Manager. Five Agents. Infinite Markets.*

---

## Executive Summary

**Argus** is a multi-agent, AI-powered hedge fund operating system built on the SoSoValue ecosystem. It gives a single person the full operational stack of an institutional fund manager — research, index construction, risk monitoring, trade execution, and investor reporting — all in one coherent, autonomous workflow.

The name comes from Argus Panoptes, the all-seeing giant of Greek mythology. Like its namesake, Argus keeps eyes on everything simultaneously: news flow, index performance, portfolio risk, order execution, and reporting — so the manager never has to choose what to watch.

**Tagline:** *One Manager. Five Agents. Infinite Markets.*

---

## Problem

Running even a small crypto fund today requires juggling five separate contexts:
1. Monitoring financial news and macro narratives
2. Constructing and rebalancing index positions
3. Tracking real-time risk and drawdown exposure
4. Executing trades across liquidity venues
5. Generating coherent performance narratives for stakeholders

No single person can do this well simultaneously. Existing tools solve one slice. Argus solves the entire stack.

---

## Solution

Argus is an orchestrated system of five specialized AI agents, each owning one operational layer of a hedge fund. They run autonomously but share a unified state — one manager sees everything in one interface.

---

## The Five Agents

### 1. 🔍 Research Agent — *"The Analyst"*
**Role:** Continuous market intelligence

- Ingests SoSoValue Terminal news and financial data in real time
- Classifies events by narrative type: macro shift, sector rotation, regulatory signal, liquidity event, sentiment reversal
- Scores each narrative by momentum, source credibility, and cross-asset confirmation
- Surfaces the top 3–5 actionable themes daily, with structured rationale
- Output: Daily Research Brief (structured JSON + human-readable summary)

**SoSoValue API hooks:** Terminal news feed, market data endpoints

---

### 2. 📐 Index Architect — *"The Structurer"*
**Role:** Theme-to-portfolio translation

- Takes Research Agent output (active narratives) as input
- Maps each narrative to relevant SSI indexes or custom asset baskets
- Weights positions using correlation data, narrative momentum score, and user-defined risk appetite
- Generates a proposed portfolio with allocation percentages and thesis for each position
- Supports manual override — manager can adjust weights before committing
- Output: Proposed Portfolio Object (structured, diff-able, versioned)

**SoSoValue API hooks:** SSI Protocol index data, asset price feeds

---

### 3. 🛡️ Risk Agent — *"The Guardian"*
**Role:** Continuous portfolio health monitoring

- Monitors live portfolio exposure across dimensions: concentration, drawdown, correlation drift, liquidity risk
- Runs scenario stress tests: "What if BTC drops 30%?", "What if stablecoin yields collapse?"
- Issues risk alerts with severity levels (INFO / WARNING / CRITICAL)
- Suggests hedges or position adjustments, routed to the Execution Agent on approval
- Output: Real-time Risk Dashboard + Daily Risk Report

**SoSoValue API hooks:** Market price feeds, index volatility data

---

### 4. ⚡ Execution Agent — *"The Trader"*
**Role:** Autonomous order management

- Receives portfolio targets from Index Architect or hedge instructions from Risk Agent
- Computes required trades (delta from current positions)
- Places, monitors, and adjusts orders on SoDEX
- Handles partial fills, slippage management, and order retry logic
- Maintains a complete execution log with timestamps and fill prices
- Output: Trade Ledger + Execution Summary

**SoSoValue API hooks:** SoDEX API (order placement, order status, market depth)

---

### 5. 📋 Reporting Agent — *"The Narrator"*
**Role:** Investor-grade performance communication

- Aggregates data from all four agents weekly (or on-demand)
- Generates structured performance reports: PnL, Sharpe, max drawdown, best/worst positions, narrative attribution
- Produces human-readable commentary on what drove returns and what the fund's current thesis is
- Exports investor-ready PDF reports (branded, structured)
- Output: Weekly Investor Report (PDF + JSON)

**SoSoValue API hooks:** All prior endpoints for aggregated data

---

## Architecture

```
┌─────────────────────────────────────────────────────┐
│                    ARGUS DASHBOARD                   │
│         (Next.js · Real-time WebSocket updates)      │
└─────────────────────┬───────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────┐
│                 ORCHESTRATOR SERVICE                  │
│         (Node.js · Agent scheduler · State store)    │
└──┬────────┬──────────┬──────────┬────────────┬──────┘
   │        │          │          │            │
   ▼        ▼          ▼          ▼            ▼
Research  Index      Risk      Execution   Reporting
Agent    Architect   Agent      Agent       Agent
(Claude  (Claude    (Claude    (Claude     (Claude
 API)     API)       API)       API)        API)
   │        │          │          │            │
   └────────┴──────────┴──────────┴────────────┘
                      │
         ┌────────────▼────────────┐
         │     Shared State DB      │
         │  (PostgreSQL + Redis)    │
         └────────────┬────────────┘
                      │
         ┌────────────▼────────────┐
         │    External APIs         │
         │  SoSoValue Terminal      │
         │  SSI Protocol            │
         │  SoDEX API               │
         └─────────────────────────┘
```

### Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 14, TailwindCSS, Recharts, WebSockets |
| Backend / Orchestrator | Node.js (Fastify), BullMQ job queue |
| AI Agents | Claude API (claude-sonnet-4) — one per agent role |
| Database | PostgreSQL (persistent state), Redis (agent memory + pub/sub) |
| Execution | SoDEX REST API |
| Data | SoSoValue Terminal API, SSI Protocol API |
| Reporting | Puppeteer (PDF generation) |
| Auth | JWT + wallet signature |
| Deployment | Docker Compose (Wave 1–2), Kubernetes (Wave 3) |

---

## User Flow

```
Manager opens Argus dashboard
        │
        ▼
Research Agent surfaces today's top 3 themes
(e.g., "RWA narrative accelerating", "BTC dominance topping")
        │
        ▼
Index Architect proposes portfolio allocation
(e.g., 40% RWA index, 30% BTC, 20% cash, 10% hedge)
        │
        ▼
Manager reviews, adjusts weights, clicks "Approve"
        │
        ▼
Risk Agent validates proposed portfolio against
risk limits → issues green light or warning
        │
        ▼
Execution Agent computes required trades,
places orders on SoDEX
        │
        ▼
Reporting Agent logs everything, updates
weekly narrative, available for export
```

---

## Differentiators

| Feature | Argus | Typical Hackathon Submission |
|---|---|---|
| Full fund ops stack | ✅ 5 agents, end-to-end | ❌ Single signal or dashboard |
| Narrative-driven portfolio construction | ✅ Themes → weights | ❌ Price signals → trades |
| Investor-grade reporting | ✅ PDF reports, performance attribution | ❌ Raw charts |
| Risk-first architecture | ✅ Risk Agent gates all execution | ❌ No risk layer |
| Uses all 3 SoSoValue components | ✅ Terminal + SSI + SoDEX | ❌ Usually 1–2 |
| Manager framing (not retail) | ✅ Fund OS mental model | ❌ "Bot for traders" |

---

## Wave-by-Wave Roadmap

### Wave 1 (May 1–12) — Concept + Core Flow
**Scope:**
- [x] Product concept and PRD finalized
- [ ] Research Agent: live integration with SoSoValue Terminal API, narrative classification, Daily Brief output
- [ ] Index Architect: basic theme-to-index mapping using SSI data, portfolio proposal generation
- [ ] Dashboard prototype: Research Brief panel + Portfolio Proposal panel with approval UI
- [ ] GitHub repo with README and setup instructions
- [ ] Demo video walkthrough

**Deliverable:** Research → Portfolio Construction pipeline, working end-to-end

---

### Wave 2 (May 18–29) — Risk + Execution
**Scope:**
- [ ] Risk Agent: portfolio stress testing, exposure monitoring, alert system
- [ ] Execution Agent: SoDEX API integration, order placement, trade ledger
- [ ] Full pipeline: Research → Portfolio → Risk validation → Execution
- [ ] Real-time dashboard updates (WebSocket)
- [ ] Testnet SoDEX trades demonstrated

---

### Wave 3 (Jun 4–15) — Reporting + Polish
**Scope:**
- [ ] Reporting Agent: PDF export, weekly investor brief, performance attribution
- [ ] Complete UX polish: onboarding flow, risk limit configuration, portfolio versioning
- [ ] Mainnet SoDEX integration (if whitelisted)
- [ ] Full demo video with all 5 agents running live

---

## Target Users

**Primary:** Solo crypto fund managers, independent traders managing external capital, crypto-native portfolio managers at small funds

**Secondary:** DeFi power users wanting systematic index exposure; DAO treasuries wanting autonomous portfolio management

---

## Judging Criteria Alignment

| Criteria | Weight | Argus Approach |
|---|---|---|
| User Value & Practical Impact | 30% | Replaces 5 separate tools; clear user = solo fund manager |
| Functionality & Working Demo | 25% | End-to-end Research → Portfolio flow live in Wave 1 |
| Logic, Workflow & Product Design | 20% | 5-agent orchestration with clear data contracts between agents |
| Data / API Integration | 15% | All 3 SoSoValue components used with clear integration rationale |
| UX & Clarity | 10% | Single unified dashboard; manager mental model throughout |

---

## Team

**Builder:** Emmanuel — Founder, Qynara Technologies  
**Contact:** [emmanuel@qynara.com]  
**GitHub:** [repo link]

---

*Argus. Because a fund manager with a hundred eyes misses nothing.*
