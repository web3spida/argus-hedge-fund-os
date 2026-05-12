# Argus

**The AI Hedge Fund OS for on-chain markets.**

Argus is a multi-agent finance dashboard built for the SoSoValue Buildathon. It helps a solo crypto fund manager move from market intelligence to portfolio construction, risk validation, SoDEX execution planning, and investor reporting inside one command center.

## Core Idea

One manager coordinates five specialist agents:

- **Research Agent**: turns SoSoValue market intelligence into ranked narratives.
- **Index Architect**: maps narratives into SSI index exposure and target allocation.
- **Risk Agent**: validates drawdown, concentration, correlation, and liquidity risk.
- **Execution Agent**: prepares SoDEX order intent and execution logs.
- **Reporting Agent**: generates investor-ready performance commentary and attribution.

## Tech Stack

- React 19
- Vite
- TypeScript
- Tailwind CSS v4
- GSAP
- Motion
- RainbowKit, wagmi, viem

## Local Setup

```bash
npm install
npm run dev
```

The app runs at:

```text
http://localhost:3000
```

## Environment

Create `.env.local` for local-only secrets:

```env
VITE_WALLETCONNECT_PROJECT_ID=your_walletconnect_project_id
```

For Netlify, add the same value under:

```text
Site configuration -> Environment variables
```

Required Netlify variable:

```text
VITE_WALLETCONNECT_PROJECT_ID
```

Optional public metadata variables:

```text
VITE_APP_NAME
VITE_APP_ENV
```

Do not add private SoSoValue, SoDEX, Gemini, or wallet signing secrets as `VITE_` variables. Anything prefixed with `VITE_` is bundled into the frontend and visible to users.

## Useful Commands

```bash
npm run lint
npm run build
```

## Netlify Deployment

This repo includes `netlify.toml` with the correct Vite deployment settings:

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `22`
- SPA fallback: all routes redirect to `index.html`
- Static asset cache headers
- Basic browser security headers

Recommended Netlify setup:

1. Connect the GitHub repository to Netlify.
2. Use the default settings from `netlify.toml`.
3. Add `VITE_WALLETCONNECT_PROJECT_ID` in Netlify environment variables.
4. Deploy.

## Documentation

- Product PRD: [`ARGUS_PRD.md`](./ARGUS_PRD.md)
- System architecture: [`SYSTEM_ARCHITECTURE_PLAN.md`](./SYSTEM_ARCHITECTURE_PLAN.md)

## Buildathon Integration Plan

Argus is designed around:

- SoSoValue API for market intelligence, news, ETF metrics, and narrative inputs.
- SSI Protocol / SoSoValue indexes for portfolio exposure.
- SoDEX / ValueChain for orderbook execution workflows.
- AI agents for classification, allocation reasoning, risk review, and reporting.
