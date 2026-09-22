const BookerLink = ({ children, className = '' }) => (
  <a className={className} href="/contact">{children}</a>
);

export default function Home() {
  return <main>
    <header className="nav shell">
      <a href="#top" aria-label="98 Media home"><img className="brand" src="/98-media-header.svg" alt="98 Media" /></a>
      <div className="nav-right"><span>Facebook advertising</span><BookerLink className="nav-link">Book a Biznus chat ↗</BookerLink></div>
    </header>

    <section className="hero shell" id="top">
      <div className="eyebrow"><span className="dot"/> Strategy · Creative · Campaign systems</div>
      <h1><span className="keep-line hero-line">Creative that converts.</span><br/><em>Numbers that prove it.</em></h1>
      <div className="hero-bottom">
        <p className="lede">Facebook ads built from the economics up. Your COGS, customer value, margins, offer, and follow-up come before the media plan.</p>
        <BookerLink className="button">Book a Biznus chat <span>↗</span></BookerLink>
      </div>
    </section>

    <section className="ticker" aria-label="Experience highlights"><div className="ticker-track">
      {[0,1].map((copy)=><span className="ticker-copy" aria-hidden={copy===1} key={copy}>$12.5M+ MANAGED SPEND <b>✦</b> CREATIVE THAT CONVERTS <b>✦</b> ECONOMICS FIRST <b>✦</b></span>)}
    </div></section>

    <section className="thesis shell">
      <div className="section-tag">01 / The point of view</div>
      <div className="thesis-copy">
        <h2>Media buying is not separate from <em>the message.</em></h2>
        <p>The ad, the offer, and the economics are one system. We put creative into market, read the response, and make the next iteration sharper.</p>
      </div>
    </section>

    <section className="proof shell">
      <div className="section-tag light">02 / The receipts</div>
      <div className="stats">
        <article><strong>$12.5M<sup>+</sup></strong><p>in Facebook ad spend managed - and counting.</p></article>
      </div>
    </section>

    <section className="work shell">
      <div className="section-tag">03 / Creative in motion</div>
      <div className="work-grid">
        <article className="case case-one"><div className="case-no">A / 01</div><div className="case-copy"><h3>National<br/><em>Suit Brand</em></h3><p>Creative built to turn familiar product benefits into memorable hooks, earn attention, and move more shoppers toward the sale.</p><blockquote>“Limited stock,<br/>unlimited style.”</blockquote></div><div className="figure suit">98</div></article>
        <article className="case case-two"><div className="case-no">B / 02</div><div className="wave" aria-hidden="true">∿∿∿∿</div><div className="case-copy"><h3>Music-Tech<br/><em>Product</em></h3><p>A performance-led montage built to make musicians stop, listen, and understand the product fast.</p></div></article>
      </div>
    </section>

    <section className="services shell">
      <div className="section-tag">04 / The seat</div>
      <div className="service-intro"><h2><span className="keep-line">Big-picture thinking.</span><br/><em>Close-up execution.</em></h2><p>Bring 98 Media in for the read, the build, or the ongoing system.</p></div>
      <div className="service-list">
        {[
          ['01','Economics & opportunity','A clear read on what your margins, customer value, offer, and acquisition process can support.'],
          ['02','Strategy & campaign systems','Audience, offer, funnel, follow-up, measurement, and the campaign structure tying it together.'],
          ['03','Creative that earns attention','Concepts, copy, design, video, testing, and iteration shaped by what the market says back.'],
          ['04','Management & optimization','Hands-on campaign management, ROI tracking, conversion analysis, and better next moves.']
        ].map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}
      </div>
    </section>

    <section className="closing">
      <div className="shell close-inner">
        <img src="/98-media-square.svg" alt="" />
        <div><div className="section-tag light">The next move</div><h2>There’s a real opportunity in your numbers.<br/><em>Let’s find it.</em></h2></div>
        <BookerLink className="button inverse">Book a Biznus chat <span>↗</span></BookerLink>
      </div>
    </section>

    <footer className="shell"><img src="/98-media-header.svg" alt="98 Media"/><p>Strategy · Creative · Facebook advertising</p><p>© 2026 98 Media</p></footer>
  </main>
}
