import Script from 'next/script';

export const metadata = {
  title: 'Book a Biznus Chat | 98 Media',
  description: 'Quick phone call to see if there is a vibe with your biznus.',
};

export default function Contact() {
  return <main className="contact-page">
    <header className="nav shell">
      <a href="/" aria-label="98 Media home"><img className="brand" src="/98-media-header.svg" alt="98 Media" /></a>
      <div className="nav-right"><span>Facebook advertising</span><a className="nav-link" href="/">Back home ↗</a></div>
    </header>

    <section className="contact-hero shell">
      <div className="section-tag">Let’s talk biznus</div>
      <h1>See if there’s<br/><em>a vibe.</em></h1>
      <p>Quick phone call to see if there is a vibe with your biznus.</p>
    </section>

    <section className="calendar-wrap shell" aria-label="Book a Biznus chat">
      <div className="cal-inline" data-cal-link="ninetyeightmedia/biznus-chat" data-cal-config='{"layout":"month_view","theme":"light"}' />
    </section>

    <footer className="shell"><img src="/98-media-header.svg" alt="98 Media"/><p>Strategy · Creative · Facebook advertising</p><p>© 2026 98 Media</p></footer>

    <Script id="cal-embed" strategy="afterInteractive">{`(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init"); Cal("init", "biznus-chat", {origin:"https://app.cal.com"}); Cal.ns["biznus-chat"]("inline", {elementOrSelector:".cal-inline", config:{"layout":"month_view","theme":"light"}, calLink:"ninetyeightmedia/biznus-chat"}); Cal.ns["biznus-chat"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});`}</Script>
  </main>;
}
