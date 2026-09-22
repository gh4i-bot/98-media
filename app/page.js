import SiteHeader from './components/SiteHeader';
const BookerLink = ({ children, className = '' }) => (
  <a className={className} href="/contact">{children}</a>
);

export default function Home() {
  return <main>
    <SiteHeader />

    <section className="hero shell" id="top">
      <div className="eyebrow"><span className="dot"/> Strategy · Creative · Campaign systems</div>
      <h1><span className="keep-line hero-line">Creative that converts.</span><br/><em>Numbers that prove it.</em></h1>
      <div className="hero-bottom">
        <p className="lede">Facebook ads built from the economics up. Your COGS, customer value, margins, offer, and follow-up come before the media plan.</p>
        <BookerLink className="button">Book a Biznus chat <span>↗</span></BookerLink>
      </div>
    </section>

    <section className="ticker" aria-label="Experience highlights"><div className="ticker-track">
      {[0,1].map((copy)=><div className="ticker-copy" aria-hidden={copy===1} key={copy}>
        {[0,1,2].map((set)=><span className="ticker-set" key={set}>$12.5M+ MANAGED SPEND <b>✦</b> CREATIVE THAT CONVERTS <b>✦</b> ECONOMICS FIRST <b>✦</b></span>)}
      </div>)}
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
        <article><strong>$12.5M<sup>+</sup></strong><p>in Facebook ad spend managed.</p></article>
      </div>
    </section>

    <section className="work shell">
      <div className="section-tag">03 / Creative in motion</div>
      <div className="work-grid">{[
        {id:'A / 01',className:'case-one',mark:'98',title:'National',subtitle:'Suit Brand',description:'Creative built to turn familiar product benefits into memorable hooks, earn attention, and move more shoppers toward the sale.',line:'Limited stock, unlimited style.'},
        {id:'B / 02',className:'case-two',mark:'∿',title:'Music-Tech',subtitle:'Product',description:'A performance-led montage built to make musicians stop, listen, and understand the product fast.',line:'Stop. Listen. Understand.'}
      ].map(({id,className,mark,title,subtitle,description,line})=><article className={`case ${className}`} key={id}><div className="case-no">{id}</div><div className="case-mark" aria-hidden="true">{mark}</div><div className="case-copy"><h3>{title}<br/><em>{subtitle}</em></h3><p>{description}</p><blockquote>“{line}”</blockquote></div></article>)}</div>
    </section>

    <section className="services shell">
      <div className="section-tag">04 / The seat</div>
      <div className="service-intro"><h2><span className="keep-line">Big-picture thinking.</span><br/><em>Close-up execution.</em></h2><p>Bring 98 Media in for the read, the build, or the ongoing system.</p></div>
      <div className="service-list">
        {[
          ['01','The read','Before money moves, we read the economics: COGS, customer value, margins, offer, follow-up, and what the account is already telling us. You get a clear answer on what paid acquisition can support and where the opportunity sits.'],
          ['02','The build','We turn that read into the campaign: offer, audience, creative, landing path, tracking, and follow-up. Everything is built as one acquisition system, ready to put into market and learn from.'],
          ['03','The ongoing system','We manage the campaigns, study the response, and improve the next iteration. Media, creative, conversion, and ROI stay in one view, with decisions tied to what the numbers actually say.']
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
