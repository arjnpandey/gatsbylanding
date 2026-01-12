import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Home = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: '#FFFFFF',
    }}>
      <Head>
        <title>Gatsby | Castle Labs</title>
        <meta name="description" content="Universal risk infrastructure built on prediction markets" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap');
      `}</style>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '80px 24px 120px',
      }}>
        <article style={{
          maxWidth: '680px',
          width: '100%',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(12px)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
          {/* Header */}
          <header style={{
            marginBottom: '64px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <span style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.08em',
              color: '#999',
              textTransform: 'uppercase',
            }}>
              Castle Labs
            </span>
            <Link 
              href="/whitepaper"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '13px',
                fontWeight: 500,
                color: '#999',
                textDecoration: 'none',
              }}
            >
              Whitepaper →
            </Link>
          </header>

          {/* Product name */}
          <div style={{ marginBottom: '48px' }}>
            <h1 style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '48px',
              fontWeight: 400,
              color: '#000',
              margin: 0,
              letterSpacing: '-0.04em',
            }}>
              Gatsby
            </h1>
            <p style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '18px',
              color: '#666',
              margin: '12px 0 0 0',
            }}>
              Universal risk infrastructure built on prediction markets
            </p>
          </div>

          {/* Letter */}
          <div style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '17px',
            lineHeight: 1.8,
            color: '#333',
            fontWeight: 400,
          }}>
            {/* The Thesis */}
            <h2 style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#000',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              margin: '0 0 24px 0',
            }}>
              The Thesis
            </h2>

            <p style={{ marginTop: 0 }}>
              Prediction markets will not reach their potential as gambling platforms. 
              They will succeed by doing what markets do best: <em>allocating risk to 
              those most willing to bear it</em>.
            </p>

            <p>
              Today's prediction markets are trapped in a low-liquidity equilibrium, 
              dominated by speculators chasing lottery tickets while economically 
              meaningful events remain illiquid ghost towns. The missing ingredient 
              isn't better marketing or regulation—it's utility-driven flow.
            </p>

            <p>
              Traditional derivatives markets thrive because farmers hedge crops, 
              airlines hedge fuel, and portfolio managers hedge macro risk. These 
              participants rationally accept negative expected value for reduced variance. 
              Prediction markets lack this entirely.
            </p>

            <p style={{
              margin: '48px 0',
              padding: '24px 0',
              borderTop: '1px solid #eee',
              borderBottom: '1px solid #eee',
              color: '#000',
              fontWeight: 500,
            }}>
              We're building the Risk Translation Layer: an AI-driven platform that 
              converts real-world exposure into automated hedges on regulated prediction markets.
            </p>

            {/* The Vision */}
            <h2 style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#000',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              margin: '48px 0 24px 0',
            }}>
              The Vision
            </h2>

            <p>
              <strong>Map portfolios to event risk.</strong> Our system analyzes user 
              portfolios and decomposes them into underlying risk factors—macroeconomic 
              shocks, geopolitical events, climate volatility, regulatory changes—then 
              maps these exposures to live prediction market contracts.
            </p>

            {/* Portfolio Preview - No frame */}
            <div style={{
              margin: '32px 0 48px',
              padding: '24px',
              background: '#fafafa',
              borderRadius: '12px',
              fontFamily: "'IBM Plex Mono', monospace",
            }}>
              {/* Portfolio header */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '11px', color: '#999', letterSpacing: '0.05em', marginBottom: '4px' }}>
                  YOUR PORTFOLIO
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '32px', fontWeight: 500, color: '#000', letterSpacing: '-0.02em' }}>
                    $284,750
                  </span>
                  <span style={{ fontSize: '13px', color: '#22c55e' }}>+$1,247 today</span>
                </div>
              </div>

              {/* Holdings bar */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '11px', color: '#999', letterSpacing: '0.05em', marginBottom: '8px' }}>HOLDINGS</div>
                <div style={{ display: 'flex', height: '32px', borderRadius: '6px', overflow: 'hidden' }}>
                  {[
                    { symbol: 'NVDA', pct: 18.4, color: '#000' },
                    { symbol: 'VTI', pct: 16.0, color: '#333' },
                    { symbol: 'AAPL', pct: 13.4, color: '#555' },
                    { symbol: 'BND', pct: 12.4, color: '#777' },
                    { symbol: 'MSFT', pct: 11.1, color: '#999' },
                    { symbol: 'TSM', pct: 10.0, color: '#aaa' },
                    { symbol: 'GOOGL', pct: 7.8, color: '#bbb' },
                    { symbol: 'CASH', pct: 10.9, color: '#ddd' },
                  ].map((h, i) => (
                    <div key={i} style={{
                      width: `${h.pct}%`,
                      background: h.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '10px',
                      fontWeight: 500,
                      color: h.color === '#ddd' || h.color === '#bbb' || h.color === '#aaa' ? '#333' : '#fff',
                      fontFamily: "'IBM Plex Mono', monospace",
                    }}>
                      {h.pct > 10 ? h.symbol : ''}
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '12px', marginTop: '8px', flexWrap: 'wrap' }}>
                  {[
                    { symbol: 'NVDA', pct: '18.4%' },
                    { symbol: 'VTI', pct: '16.0%' },
                    { symbol: 'AAPL', pct: '13.4%' },
                    { symbol: 'BND', pct: '12.4%' },
                    { symbol: 'MSFT', pct: '11.1%' },
                    { symbol: 'TSM', pct: '10.0%' },
                    { symbol: 'GOOGL', pct: '7.8%' },
                  ].map((h, i) => (
                    <span key={i} style={{ fontSize: '11px', color: '#666' }}>
                      <span style={{ fontWeight: 500, color: '#000' }}>{h.symbol}</span> {h.pct}
                    </span>
                  ))}
                </div>
              </div>

              {/* Risk exposure + Markets split */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
              }}>
                {/* Left: Your exposure */}
                <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ padding: '12px 16px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '11px', color: '#999', letterSpacing: '0.05em' }}>RISK EXPOSURE</span>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '13px', color: '#dc2626', fontWeight: 500 }}>-$103K</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    {[
                      { name: 'Trade Policy', exposure: '-$34K' },
                      { name: 'Geopolitical', exposure: '-$29K' },
                      { name: 'Recession', exposure: '-$22K' },
                      { name: 'Interest Rates', exposure: '-$18K' },
                    ].map((r, i) => (
                      <div key={i} style={{ padding: '10px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: i < 3 ? '1px solid #f5f5f5' : 'none' }}>
                        <span style={{ fontSize: '13px', color: '#000' }}>{r.name}</span>
                        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', color: '#dc2626' }}>{r.exposure}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Available hedges */}
                <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ padding: '12px 16px', borderBottom: '1px solid #eee' }}>
                    <span style={{ fontSize: '11px', color: '#999', letterSpacing: '0.05em' }}>AVAILABLE HEDGES</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    {[
                      { name: 'Tariffs upheld', odds: '28%' },
                      { name: 'Taiwan escalation', odds: '18%' },
                      { name: 'Recession 2026', odds: '25%' },
                      { name: 'Fed holds Q2', odds: '62%' },
                    ].map((m, i) => (
                      <div key={i} style={{ padding: '10px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: i < 3 ? '1px solid #f5f5f5' : 'none' }}>
                        <span style={{ fontSize: '13px', color: '#000' }}>{m.name}</span>
                        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', color: '#000' }}>{m.odds}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hedge CTA */}
              <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{
                  padding: '10px 20px',
                  background: '#000',
                  color: '#fff',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: 500,
                  cursor: 'pointer',
                }}>
                  Hedge your risk →
                </div>
              </div>
            </div>

            <p>
              <strong>Execute optimized hedges.</strong> We construct bundled hedges 
              across relevant contracts and execute automatically. By routing utility-driven 
              hedging flow, we introduce benign order flow that reduces market maker risk—not 
              through altruism, but through orthogonal incentives.
            </p>

            <p>
              As liquidity deepens and spreads tighten, hedging becomes cheaper, reinforcing 
              demand and attracting institutional market makers.
            </p>

            <p>
              <strong>Expand to universal insurance.</strong> Once exposure can be expressed 
              as tradable events, the same architecture extends to any real-world uncertainty: 
              homeowners hedge hurricane risk through contracts on wind speed; manufacturers 
              insure against supply-chain disruptions; households hedge income volatility 
              through labor-market indicators.
            </p>

            {/* Business Preview - No frame */}
            <div style={{
              margin: '32px 0 48px',
              padding: '24px',
              background: '#fafafa',
              borderRadius: '12px',
              fontFamily: "'IBM Plex Mono', monospace",
            }}>
              {/* Business header */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '11px', color: '#999', letterSpacing: '0.05em', marginBottom: '4px' }}>
                  YOUR BUSINESS
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span style={{ fontSize: '24px', fontWeight: 500, color: '#000', letterSpacing: '-0.02em' }}>
                    Meridian Components
                  </span>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '14px', color: '#666' }}>$84M revenue</span>
                </div>
                <div style={{ fontSize: '13px', color: '#999', marginTop: '2px' }}>
                  Electronics Manufacturing · 340 employees
                </div>
              </div>

              {/* Key details - simple pills */}
              <div style={{ 
                display: 'flex', 
                gap: '8px', 
                marginBottom: '24px',
                flexWrap: 'wrap',
              }}>
                {['Asia supply 60%', 'OEM contracts', 'Ocean freight', 'Tariff exposed'].map((tag, i) => (
                  <span key={i} style={{
                    padding: '6px 12px',
                    background: '#fff',
                    border: '1px solid #eee',
                    borderRadius: '4px',
                    fontSize: '12px',
                    color: '#333',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Risk exposure + Markets split */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
              }}>
                {/* Left: Your exposure */}
                <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ padding: '12px 16px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '11px', color: '#999', letterSpacing: '0.05em' }}>YOUR EXPOSURE</span>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '13px', color: '#dc2626', fontWeight: 500 }}>-$66M</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    {[
                      { name: 'Trade & Export', exposure: '-$25M' },
                      { name: 'Supply Chain', exposure: '-$18M' },
                      { name: 'Demand & Macro', exposure: '-$15M' },
                      { name: 'Labor Costs', exposure: '-$8M' },
                    ].map((r, i) => (
                      <div key={i} style={{ padding: '10px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: i < 3 ? '1px solid #f5f5f5' : 'none' }}>
                        <span style={{ fontSize: '13px', color: '#000' }}>{r.name}</span>
                        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', color: '#dc2626' }}>{r.exposure}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Available hedges */}
                <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ padding: '12px 16px', borderBottom: '1px solid #eee' }}>
                    <span style={{ fontSize: '11px', color: '#999', letterSpacing: '0.05em' }}>AVAILABLE HEDGES</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    {[
                      { name: 'Tariffs upheld', odds: '28%' },
                      { name: 'Taiwan disruption', odds: '18%' },
                      { name: 'Recession 2026', odds: '25%' },
                      { name: 'Export controls', odds: '52%' },
                    ].map((m, i) => (
                      <div key={i} style={{ padding: '10px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: i < 3 ? '1px solid #f5f5f5' : 'none' }}>
                        <span style={{ fontSize: '13px', color: '#000' }}>{m.name}</span>
                        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '12px', color: '#000' }}>{m.odds}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hedge CTA */}
              <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{
                  padding: '10px 20px',
                  background: '#000',
                  color: '#fff',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: 500,
                  cursor: 'pointer',
                }}>
                  Get coverage quote →
                </div>
              </div>
            </div>

            <p>
              What emerges is a general-purpose, parametric insurance layer—transparent 
              and market-priced, without underwriting, claims adjustment, or opaque intermediaries.
            </p>

            <p style={{
              margin: '48px 0',
              padding: '24px 0',
              borderTop: '1px solid #eee',
              borderBottom: '1px solid #eee',
              color: '#000',
              fontWeight: 500,
              fontStyle: 'italic',
            }}>
              Prediction markets will not reach broad adoption as venues for speculation; 
              they will do so as the infrastructure for transferring risk.
            </p>

            <p style={{ color: '#999' }}>
              That is the future we are building.
            </p>
          </div>

          {/* Footer */}
          <footer style={{
            marginTop: '80px',
            paddingTop: '24px',
            borderTop: '1px solid #eee',
          }}>
            <a 
              href="mailto:team@castlelabs.co"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '13px',
                color: '#999',
                textDecoration: 'none',
              }}
            >
              team@castlelabs.co
            </a>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default Home;
