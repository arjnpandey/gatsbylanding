import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Whitepaper = () => {
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
        <title>Whitepaper | Castle Labs</title>
        <meta name="description" content="Turning Prediction Markets Into Universal Risk Infrastructure" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Mono:wght@400&display=swap" rel="stylesheet" />
      </Head>

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
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.08em',
              color: '#999',
              textTransform: 'uppercase',
            }}>
              Castle Labs
            </span>
            <Link 
              href="/"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '13px',
                fontWeight: 500,
                color: '#999',
                textDecoration: 'none',
              }}
            >
              ← Back
            </Link>
          </header>

          {/* Title */}
          <div style={{ marginBottom: '48px' }}>
            <h1 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '36px',
              fontWeight: 400,
              color: '#000',
              margin: 0,
              letterSpacing: '-0.03em',
              lineHeight: 1.2,
            }}>
              Turning Prediction Markets Into Universal Risk Infrastructure
            </h1>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '15px',
              color: '#999',
              margin: '16px 0 0 0',
            }}>
              Castle Labs · Confidential
            </p>
          </div>

          {/* Content */}
          <div style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '17px',
            lineHeight: 1.8,
            color: '#333',
            fontWeight: 400,
          }}>
            {/* Section 1 */}
            <h2 style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#000',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              margin: '0 0 24px 0',
            }}>
              1. Our Thesis & Mission
            </h2>
            <p style={{ marginTop: 0 }}>
              Prediction markets are powerful information-aggregation mechanisms, capable of 
              synthesizing dispersed beliefs about uncertain future events into continuously 
              updated and accurate probabilities. Despite their promise, prediction markets 
              have not yet matured into core financial infrastructure. Their failure to do so 
              reflects not a theoretical limitation but a structural one.
            </p>
            <p>
              Today, prediction markets are dominated by speculative and entertainment-driven 
              activity. Liquidity is concentrated in sports, while economically consequential 
              events such as inflation surprises, regulatory interventions, climate shocks, and 
              geopolitical escalations remain fragmented and illiquid. As a result, prediction 
              markets lack the stable, utility-driven order flow that underpins mature markets 
              in financial products and derivatives.
            </p>
            <p>
              Prediction markets will reach their full potential only when they are understood
              primarily as instruments of risk transfer rather than speculation.
            </p>
            <p>
              Hence, we are constructing a Risk Translation Layer: an AI-driven platform that
              converts real-world financial exposure into automated, bundled hedges executed on
              regulated prediction markets. By abstracting away the notion of betting and instead
              delivering insurance-like protection, the platform introduces the benign, repeatable
              flow necessary to catalyze liquidity, attract institutional market makers, and embed
              prediction markets into global wealth management.
            </p>
            <p>
              Once risk can be expressed, priced, and transferred in this way, the same framework 
              extends beyond financial portfolios to real-world exposures. Event-based contracts 
              can provide protection against climate shocks, supply-chain disruptions, or income 
              volatility, delivering insurance-like outcomes through transparent, market-priced 
              structures rather than opaque, intermediary-driven products.
            </p>
            <p>
              Prediction markets will not reach broad adoption as gambling platforms; they will 
              do so as the universal mechanism for transferring risk. That is the future we are building.
            </p>

            {/* Section 2 */}
            <h2 style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#000',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              margin: '56px 0 24px 0',
            }}>
              2. Our Team
            </h2>
            <p>
              <strong>Lucas Cavalieri</strong>: Lucas studied Mathematics at Stanford, where he 
              focused on graduate level coursework in machine learning and optimization. He has 
              experience as an engineer at Microsoft and a trader at top quant firms, including 
              Susquehanna, Jane Street, and D.E. Shaw. He has also represented the U.S. national rugby team.
            </p>
            <p>
              <strong>Bruno Felix Castillo</strong>: Bruno graduated from Stanford with degrees in 
              Physics and Mathematics, focusing on probability and statistical mechanics. He previously 
              worked as a quant trader at Flow Traders and participated in competitive programs at 
              Jane Street. He also has experience at a startup spun out of Stanford's Plasma Physics Lab.
            </p>
            <p>
              <strong>Alexander Michael</strong>: Alex is a Computer Science major at Stanford, where 
              he focuses on reinforcement learning and financial applications. During gap years, he 
              founded an alternative data company whose products are used by hedge funds and Apple 
              supply-chain partners. He later spun out a hedge fund that trades on the same proprietary 
              datasets, generating over $5M in revenue.
            </p>
            <p>
              <strong>Arjun Pandey</strong>: Arjun studied Computer Science at Stanford, focusing on 
              optimization, cryptography, and artificial intelligence, while conducting research on 
              hardware accelerators. He has experience in venture capital and engineering at early-stage 
              startups, and most recently, was a forward deployed engineer at Palantir's financial 
              services arm. He also founded his own sports-tech company, ScoutMe.
            </p>

            {/* Section 3 */}
            <h2 style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#000',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              margin: '56px 0 24px 0',
            }}>
              3. The Market Problem
            </h2>
            <p>
              Currently, the liquidity problem in prediction markets follows a chicken-and-egg dynamic: 
              low volume discourages market makers; wide spreads and shallow books discourage traders; 
              and the resulting equilibrium is a long tail of ghost-town markets where meaningful size 
              cannot be traded. In order to solve this, we can learn from traditional financial markets.
            </p>
            <p>
              The efficiency of financial markets arises not from universal profit maximization but from
              heterogeneity in participant utility functions. Many economically significant trades are
              made not to exploit mispricing but to reduce variance and control tail risk.
            </p>
            <p>
              Farmers hedge crop prices to stabilize income, airlines hedge fuel costs to manage
              operating risk, and portfolio managers hedge macroeconomic exposure in order to
              concentrate capital on idiosyncratic alpha. In each case, participants rationally
              accept negative expected value in exchange for higher overall utility.
            </p>
            <p>
              Prediction markets lack this category of participants. Trading activity is dominated by 
              actors who seek "lottery ticket" bets or information asymmetry, resulting in fragile 
              liquidity, wide spreads, and adverse selection against market makers. This equilibrium 
              persists not because prediction markets are unsuitable for hedging, but because they lack 
              the interface required to translate exposure into hedgeable events.
            </p>
            <p>
              The dominance of prediction markets in sports suggests that these exchanges can scale when 
              the user experience is smooth and the purpose is intuitively valuable. The missing wedge is 
              a product that makes economically meaningful contracts feel as legible and actionable as 
              sports. We do this by tying them directly to something users already care about: the 
              distribution of outcomes for their wealth.
            </p>
            <p>
              Our mission is to institutionalize risk hedging through prediction markets by constructing 
              this missing interface. By doing so, prediction markets can evolve from venues for gamblers 
              into markets for insurance, structured risk transfer, and portfolio protection, thereby 
              aligning them with the economic role played by derivatives and insurance in traditional finance.
            </p>

            {/* Section 4 */}
            <h2 style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#000',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              margin: '56px 0 24px 0',
            }}>
              4. The Risk Translation Layer
            </h2>
            <p>
              The proposed platform enables users to hedge by linking three domains: asset holdings,
              underlying sources of risk, and event-based contracts. Users begin by connecting their
              brokerage accounts, after which the system identifies the exogenous drivers of portfolio
              outcomes—macroeconomic, geopolitical, regulatory, technological, and environmental events.
            </p>
            <p>
              These exposures are then mapped to live prediction market contracts whose outcomes exert
              measurable, causal effects on portfolio returns. In this way, portfolio risk is reframed
              not as an abstract statistical property, but as a set of concrete, tradable event exposures.
            </p>
            <p>
              An optimization engine then constructs a bundled hedge across relevant contracts, calibrated
              to the user's exposure profile and constrained by liquidity, pricing, and cost considerations.
              Execution and monitoring are automated, allowing hedges to adjust dynamically as market
              conditions evolve, events resolve, and correlations shift.
            </p>
            <p>
              The resulting market structure supports both risk-averse participants seeking protection
              and risk-seeking participants willing to sell that protection, thereby reproducing the
              two-sided structure that underlies efficient financial markets. That is, those seeking
              more upside potential at the expense of higher variance can simply short the hedging
              instrument.
            </p>
            <p>
              This enables us to enter the prediction market space through two angles: risk-conscious
              investors and thrill-seeking gamblers. We enable both sides to be more informed about
              their risks, thus promoting better decision-making and, ultimately, more efficient markets.
            </p>

            {/* Section 5 */}
            <h2 style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#000',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              margin: '56px 0 24px 0',
            }}>
              5. From Wealth Management to Universal Insurance
            </h2>
            <p>
              Portfolio hedging represents an initial distribution wedge rather than the ultimate scope
              of the Risk Translation Layer. Once exposure can be expressed in terms of exogenous events
              and transferred through event-based contracts, the same architecture extends naturally
              beyond financial portfolios to real-world sources of uncertainty.
            </p>
            <p>
              A homeowner in Florida can hedge hurricane risk through contracts that settle on measured
              wind speeds or storm intensity. A manufacturer can insure against supply-chain disruptions
              by protecting against port closures, shipping delays, or commodity price shocks. A household
              can hedge income risk through labor-market and macroeconomic indicators tied to layoffs,
              unemployment, or policy outcomes.
            </p>
            <p>
              In each case, protection is delivered through transparent, market-priced contracts that
              settle on objective events—without underwriting, claims adjustment, or opaque intermediaries.
              What emerges is not a collection of niche hedges, but a general-purpose, parametric insurance
              layer built on prediction markets.
            </p>
            <p>
              The same mechanisms that translate portfolios into hedges—risk identification, contract
              discovery, optimization, and execution—also translate real-world exposures into insurable
              risks. The underlying machinery remains unchanged; only the domain of risk to which it is
              applied expands, allowing users to insure against the specific uncertainties that shape
              their lives and livelihoods.
            </p>

            {/* Section 6 */}
            <h2 style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#000',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              margin: '56px 0 24px 0',
            }}>
              6. Liquidity and Market Structure
            </h2>
            <p>
              The proposed platform functions as a distribution engine rather than an exchange. By routing
              utility-driven hedging flow into prediction markets, it introduces benign order flow that
              reduces market maker risk—not because hedgers are altruists, but because their incentives
              are orthogonal to those dominating prediction markets today.
            </p>
            <p>
              As liquidity deepens and spreads tighten, hedging becomes cheaper and more effective,
              reinforcing demand and completing a positive feedback loop. In this manner, the platform
              aligns the incentives of hedgers, speculators, market makers, and venues, establishing a
              reliable base of benign volume that can start the liquidity flywheel.
            </p>

            {/* Section 7 */}
            <h2 style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#000',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              margin: '56px 0 24px 0',
            }}>
              7. Positioning for Future Structures
            </h2>
            <p>
              While avoiding becoming an exchange, we maintain a catalytic role in their future: we collect 
              data on which exposure categories generate demand and feed a contract roadmap back to venues. 
              In effect, we reveal latent demand for new markets and insurance products, allowing exchanges 
              to list these contracts and capture the resulting volume. We effectively become a demand oracle 
              for contract creation.
            </p>

            {/* Section 8 */}
            <h2 style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#000',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              margin: '56px 0 24px 0',
            }}>
              8. Conclusion
            </h2>
            <p>
              Prediction markets will not reach their potential by competing with sportsbooks or novelty 
              wagering. They will succeed by performing the function markets have historically served best: 
              allocating risk to those most willing to bear it. By institutionalizing risk hedging through 
              a dedicated translation layer, prediction markets can evolve from speculative curiosities 
              into foundational infrastructure for global risk management.
            </p>
          </div>

          {/* Footer */}
          <footer style={{
            marginTop: '80px',
            paddingTop: '24px',
            borderTop: '1px solid #eee',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <a 
              href="mailto:team@castlelabs.co"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '13px',
                color: '#999',
                textDecoration: 'none',
              }}
            >
              team@castlelabs.co
            </a>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '13px',
              color: '#999',
            }}>
              Confidential
            </span>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default Whitepaper;
