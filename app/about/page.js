export const metadata = {
  title: 'About Cameron O’Brien | 98 Media',
  description: 'The read comes before the spend. Meet Cameron O’Brien, founder of 98 Media.',
};

export default function About() {
  return <main className="about-page">
    <header className="nav shell">
      <a href="/" aria-label="98 Media home"><img className="brand" src="/98-media-header.svg" alt="98 Media" /></a>
      <div className="nav-right"><a href="/" className="nav-link">Home</a><a href="/contact" className="nav-link">Book a Biznus chat ↗</a></div>
    </header>

    <section className="about-hero shell">
      <div className="section-tag">About / Cameron O’Brien</div>
      <h1>The read comes<br/><em>before the spend.</em></h1>
    </section>

    <section className="about-story shell">
      <div className="about-mark">98</div>
      <div className="about-copy">
        <p className="about-lede">I'm Cameron O'Brien. I've managed more than $12.5M in Facebook ad spend, working across strategy, creative, campaigns, funnels, and the follow-up systems that turn attention into revenue.</p>
        <p>I always start with the numbers. COGS, customer value, margins, offer, and follow-up tell us what an ad account can support before a dollar moves. Then the creative goes into market, the response comes back, and the next decision gets sharper.</p>
        <p>Before advertising and technology, I trained in behavioral recognition and pattern reading in high-stakes security work, including identifying IEDs and other terrorist threats alongside canine teams at Canada’s busiest airport, Toronto Pearson. That work taught me that the read comes before the decision: study the system, notice what others miss, and stay calm when the stakes are real.</p>
        <p>I ask a lot of questions before I tell you what to do. I look forward to talking biznus.</p>
        <a className="button" href="/contact">Book a Biznus chat <span>↗</span></a>
      </div>
    </section>

    <section className="about-close"><div className="shell"><div className="section-tag light">How we work</div><h2>Bring us in for the read,<br/><em>the build, or the ongoing system.</em></h2></div></section>
    <footer className="shell"><img src="/98-media-header.svg" alt="98 Media"/><p>Strategy · Creative · Facebook advertising</p><p>© 2026 98 Media</p></footer>
  </main>;
}
