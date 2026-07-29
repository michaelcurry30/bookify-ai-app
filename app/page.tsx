"use client"

export default function Home() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
  :root{
    --bg:#0B0E17;
    --bg-soft:#121623;
    --card:#141926;
    --line:#242B3D;
    --ink:#EDEFF5;
    --ink-soft:#8891A8;
    --indigo:#6D6BFF;
    --indigo-soft:rgba(109,107,255,0.12);
    --cyan:#22D3EE;
    --green:#34D399;
    --green-bg:rgba(52,211,153,0.1);
    --red:#FB7185;
    --red-bg:rgba(251,113,133,0.1);
  }
  *{box-sizing:border-box;margin:0;padding:0;}
  html,body{overflow-x:hidden;max-width:100vw;}
  html{scroll-behavior:smooth;}
  body{
    background:var(--bg);
    background-image:
      radial-gradient(ellipse 700px 400px at 10% -5%, rgba(109,107,255,0.10), transparent),
      radial-gradient(ellipse 700px 400px at 95% 5%, rgba(34,211,238,0.06), transparent);
    color:var(--ink);
    font-family:'Inter',sans-serif;
    line-height:1.55;
    -webkit-font-smoothing:antialiased;
  }
  a{color:inherit;}
  .wrap{max-width:1100px;margin:0 auto;padding:0 24px;}
  .mono{font-family:'IBM Plex Mono',monospace;}

  header{border-bottom:1px solid var(--line);padding:18px 0;position:sticky;top:0;background:rgba(11,14,23,0.85);backdrop-filter:blur(10px);z-index:20;}
  .nav{display:flex;justify-content:space-between;align-items:center;}
  .brand{font-weight:800;font-size:19px;letter-spacing:-0.02em;display:flex;align-items:center;gap:9px;}
  .brand-mark{width:22px;height:22px;background:var(--indigo);border-radius:6px;display:inline-block;position:relative;box-shadow:0 0 16px rgba(109,107,255,0.5);}
  .brand-mark::after{content:'';position:absolute;top:6px;left:5px;width:12px;height:8px;border:2px solid #0B0E17;border-top:none;border-right:none;transform:rotate(-45deg);border-radius:1px;}
  .nav-links{display:flex;gap:28px;align-items:center;font-size:14px;color:var(--ink-soft);}
  .nav-links a:hover{color:var(--ink);}
  nav a.cta{
    background:var(--indigo);
    color:#fff;
    padding:10px 20px;
    border-radius:6px;
    text-decoration:none;
    font-size:14px;
    font-weight:600;
    box-shadow:0 0 20px rgba(109,107,255,0.35);
  }

  .hero{padding:76px 0 0;}
  .hero-inner{display:grid;grid-template-columns:1.1fr 0.9fr;gap:56px;align-items:center;}
  .badge{
    display:inline-flex;align-items:center;gap:8px;
    background:var(--card);
    border:1px solid var(--line);
    padding:6px 14px;
    border-radius:20px;
    font-size:13px;
    color:var(--ink-soft);
    font-weight:500;
    margin-bottom:22px;
  }
  .badge .dot{width:6px;height:6px;background:var(--green);border-radius:50%;box-shadow:0 0 8px rgba(52,211,153,0.8);}
  h1{
    font-weight:800;
    font-size:clamp(32px,4.2vw,46px);
    line-height:1.15;
    letter-spacing:-0.02em;
  }
  h1 .accent{color:var(--cyan);text-shadow:0 0 30px rgba(34,211,238,0.35);}
  .hero-sub{margin-top:18px;font-size:17px;color:var(--ink-soft);max-width:480px;}
  .hero-ctas{margin-top:28px;display:flex;gap:14px;align-items:center;flex-wrap:wrap;}
  .btn-primary{
    background:var(--indigo);
    color:#fff;
    padding:13px 24px;
    border-radius:6px;
    text-decoration:none;
    font-weight:600;
    font-size:15px;
    box-shadow:0 0 24px rgba(109,107,255,0.4);
  }
  .btn-secondary{
    padding:13px 24px;
    border-radius:6px;
    text-decoration:none;
    font-weight:600;
    font-size:15px;
    border:1px solid var(--line);
    color:var(--ink);
  }
  .trust-row{margin-top:24px;display:flex;gap:20px;flex-wrap:wrap;font-size:13px;color:var(--ink-soft);}
  .trust-row span{display:flex;align-items:center;gap:6px;}
  .check{color:var(--green);font-weight:700;}

  .hero-card{
    background:var(--card);
    border:1px solid var(--line);
    border-radius:12px;
    padding:22px;
    box-shadow:0 0 60px rgba(109,107,255,0.06);
  }
  .hero-card-head{
    display:flex;justify-content:space-between;align-items:center;
    font-size:12px;color:var(--ink-soft);
    padding-bottom:14px;border-bottom:1px solid var(--line);margin-bottom:4px;
    font-weight:600;text-transform:uppercase;letter-spacing:0.03em;
  }
  .live-dot{color:var(--green);}
  .slot{display:flex;justify-content:space-between;align-items:center;padding:13px 4px;border-bottom:1px solid var(--line);font-size:13.5px;}
  .slot:last-child{border-bottom:none;}
  .slot-time{color:var(--ink-soft);width:56px;flex-shrink:0;font-family:'IBM Plex Mono',monospace;font-size:12.5px;}
  .slot-name{flex:1;}
  .slot-tag{font-size:11px;font-weight:600;padding:3px 9px;border-radius:20px;}
  .slot-tag.filled{background:var(--green-bg);color:var(--green);}
  .slot-tag.open{background:var(--red-bg);color:var(--red);}
  .card-total{margin-top:14px;padding-top:14px;border-top:1px solid var(--line);display:flex;justify-content:space-between;font-size:13px;font-weight:600;}
  .card-total .val{color:var(--green);text-shadow:0 0 12px rgba(52,211,153,0.4);}

  .logos{padding:54px 0;border-top:1px solid var(--line);margin-top:64px;}
  .logos-label{text-align:center;font-size:12px;color:var(--ink-soft);text-transform:uppercase;letter-spacing:0.06em;font-weight:600;margin-bottom:26px;}
  .logos-row{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:24px;opacity:0.6;}
  .logo-item{font-weight:700;font-size:16px;color:var(--ink-soft);letter-spacing:-0.01em;}

  .industries{padding:88px 0 84px;border-top:1px solid var(--line);}
  .industries-head{max-width:640px;}
  .industries-head h2{font-weight:800;font-size:clamp(24px,3.2vw,34px);letter-spacing:-0.01em;}
  .industries-grid{margin-top:48px;display:grid;grid-template-columns:repeat(2,1fr);gap:40px 48px;align-items:start;}
  .industry-category h3{font-size:13px;font-weight:700;color:var(--cyan);text-transform:uppercase;letter-spacing:0.04em;margin-bottom:18px;}
  .industry-tags{display:flex;flex-wrap:wrap;gap:10px;}
  .industry-tags .tag{
    font-size:13px;
    color:var(--ink-soft);
    background:var(--card);
    border:1px solid var(--line);
    padding:8px 14px;
    border-radius:20px;
    transition:border-color .15s, color .15s;
    max-width:100%;
    overflow-wrap:break-word;
    white-space:normal;
    line-height:1.3;
  }
  .industry-tags .tag:hover{border-color:var(--indigo);color:var(--ink);}

  .stats{padding:60px 0;border-top:1px solid var(--line);}
  .stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;text-align:center;}
  .stat .num{font-size:34px;font-weight:800;color:var(--cyan);letter-spacing:-0.02em;text-shadow:0 0 22px rgba(34,211,238,0.3);}
  .stat .label{font-size:13px;color:var(--ink-soft);margin-top:6px;}

  .problem{padding:80px 0;border-top:1px solid var(--line);}
  .section-eyebrow{font-size:13px;font-weight:700;color:var(--indigo);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:12px;}
  .problem h2{font-weight:800;font-size:clamp(24px,3.2vw,34px);max-width:600px;letter-spacing:-0.01em;}
  .problem-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;margin-top:44px;}
  .pcard{background:var(--card);border:1px solid var(--line);border-radius:10px;padding:24px;transition:border-color .2s;}
  .pcard:hover{border-color:var(--indigo);}
  .pcard h3{font-size:17px;font-weight:700;margin-top:2px;}
  .pcard p{font-size:14px;color:var(--ink-soft);margin-top:10px;}

  .how{padding:80px 0;border-top:1px solid var(--line);}
  .how h2{font-weight:800;font-size:clamp(24px,3.2vw,34px);letter-spacing:-0.01em;}
  .steps{margin-top:44px;display:grid;grid-template-columns:repeat(3,1fr);gap:0;}
  .step{padding:0 28px 0 0;position:relative;}
  .step:not(:last-child)::after{content:'';position:absolute;top:16px;right:0;width:1px;height:calc(100% - 20px);background:var(--line);}
  .step-num{width:30px;height:30px;border-radius:50%;background:var(--indigo-soft);border:1px solid var(--indigo);color:var(--cyan);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;font-family:'IBM Plex Mono',monospace;}
  .step h3{font-size:17px;font-weight:700;margin-top:16px;}
  .step p{font-size:14px;color:var(--ink-soft);margin-top:8px;}

  .testimonials{padding:80px 0;border-top:1px solid var(--line);background:var(--bg-soft);}
  .testimonials h2{font-weight:800;font-size:clamp(24px,3.2vw,34px);letter-spacing:-0.01em;text-align:center;}
  .t-grid{margin-top:44px;display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
  .t-card{background:var(--card);border:1px solid var(--line);border-radius:10px;padding:26px;}
  .t-stars{color:#F5B547;font-size:14px;letter-spacing:2px;}
  .t-quote{font-size:14.5px;margin-top:14px;color:var(--ink);}
  .t-person{margin-top:18px;display:flex;align-items:center;gap:10px;}
  .t-avatar{width:36px;height:36px;border-radius:50%;background:var(--indigo-soft);border:1px solid var(--indigo);color:var(--cyan);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;}
  .t-name{font-size:13.5px;font-weight:600;}
  .t-role{font-size:12.5px;color:var(--ink-soft);}

  .pricing{padding:80px 0;border-top:1px solid var(--line);}
  .pricing-head{text-align:center;}
  .pricing h2{font-weight:800;font-size:clamp(24px,3.2vw,34px);letter-spacing:-0.01em;}
  .pricing-sub{color:var(--ink-soft);margin-top:10px;}
  .plans{margin-top:44px;display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
  .plan{border:1px solid var(--line);border-radius:12px;padding:30px 26px;background:var(--card);position:relative;display:flex;flex-direction:column;}
  .plan.pop{border-color:var(--indigo);box-shadow:0 0 40px rgba(109,107,255,0.15);}
  .pop-badge{position:absolute;top:-13px;left:26px;background:var(--indigo);color:#fff;font-size:11px;letter-spacing:0.03em;padding:4px 12px;border-radius:20px;font-weight:700;}
  .plan h3{font-size:19px;font-weight:700;}
  .plan .price{font-size:36px;font-weight:800;margin-top:14px;letter-spacing:-0.02em;}
  .plan.pop .price{color:var(--cyan);text-shadow:0 0 20px rgba(34,211,238,0.3);}
  .plan .price span{font-size:14px;color:var(--ink-soft);font-weight:500;}
  .plan .desc{font-size:13px;color:var(--ink-soft);margin-top:4px;}
  .plan ul{list-style:none;margin-top:22px;flex:1;}
  .plan li{font-size:14px;padding:8px 0;color:var(--ink-soft);display:flex;gap:8px;}
  .plan li::before{content:'✓';color:var(--green);font-weight:700;}
  .plan a{margin-top:24px;text-align:center;padding:12px;border-radius:6px;text-decoration:none;font-weight:600;font-size:14px;border:1px solid var(--line);color:var(--ink);}
  .plan.pop a{background:var(--indigo);color:#fff;border-color:var(--indigo);box-shadow:0 0 20px rgba(109,107,255,0.4);}
  .faq{padding:80px 0;border-top:1px solid var(--line);}
  .faq h2{font-weight:800;font-size:clamp(24px,3.2vw,34px);letter-spacing:-0.01em;}
  .faq-list{margin-top:36px;max-width:760px;}
  .faq-item{border-bottom:1px solid var(--line);padding:20px 0;}
  .faq-q{font-weight:600;font-size:15px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;}
  .faq-q .plus{color:var(--cyan);font-size:18px;font-weight:400;transition:transform .2s;}
  .faq-item.open .plus{transform:rotate(45deg);}
  .faq-a{max-height:0;overflow:hidden;transition:max-height .25s ease;font-size:14px;color:var(--ink-soft);}
  .faq-a-inner{padding-top:12px;}
  .faq-item.open .faq-a{max-height:200px;}

  .final-cta{padding:80px 0 90px;border-top:1px solid var(--line);text-align:center;}
  .final-cta h2{font-weight:800;font-size:clamp(24px,3.5vw,36px);letter-spacing:-0.01em;max-width:600px;margin:0 auto;}
  .final-cta p{margin-top:14px;color:var(--ink-soft);max-width:440px;margin-left:auto;margin-right:auto;}
  .final-cta .btn-primary{display:inline-block;margin-top:26px;padding:15px 32px;font-size:15.5px;}

  footer{padding:32px 0 40px;border-top:1px solid var(--line);}
  .footer-row{display:flex;justify-content:space-between;align-items:center;font-size:13px;color:var(--ink-soft);flex-wrap:wrap;gap:12px;}

  .chat-widget{position:fixed;bottom:24px;right:24px;z-index:50;}
  .chat-bubble{
    width:56px;height:56px;border-radius:50%;
    background:var(--indigo);
    border:none;cursor:pointer;
    display:flex;align-items:center;justify-content:center;
    box-shadow:0 4px 24px rgba(109,107,255,0.5);
    transition:transform .15s;
  }
  .chat-bubble:hover{transform:scale(1.06);}
  .chat-panel{
    display:none;
    position:absolute;bottom:72px;right:0;
    width:340px;max-width:calc(100vw - 48px);
    height:460px;max-height:calc(100vh - 140px);
    background:var(--card);
    border:1px solid var(--line);
    border-radius:14px;
    box-shadow:0 12px 48px rgba(0,0,0,0.5);
    flex-direction:column;
    overflow:hidden;
  }
  .chat-panel.open{display:flex;}
  .chat-header{
    padding:16px 18px;
    border-bottom:1px solid var(--line);
    display:flex;justify-content:space-between;align-items:flex-start;
    background:var(--bg-soft);
  }
  .chat-header-title{font-weight:700;font-size:14.5px;}
  .chat-header-sub{font-size:12px;color:var(--ink-soft);margin-top:2px;}
  .chat-close{background:none;border:none;color:var(--ink-soft);cursor:pointer;font-size:16px;padding:0;}
  .chat-close:hover{color:var(--ink);}
  .chat-messages{
    flex:1;overflow-y:auto;
    padding:16px;
    display:flex;flex-direction:column;gap:12px;
  }
  .chat-msg{
    font-size:13.5px;
    line-height:1.5;
    padding:10px 13px;
    border-radius:10px;
    max-width:85%;
  }
  .chat-msg-bot{
    background:var(--bg-soft);
    border:1px solid var(--line);
    align-self:flex-start;
  }
  .chat-msg-user{
    background:var(--indigo);
    color:#fff;
    align-self:flex-end;
  }
  .chat-msg-loading{
    background:var(--bg-soft);
    border:1px solid var(--line);
    align-self:flex-start;
    color:var(--ink-soft);
    font-style:italic;
  }
  .chat-input-row{
    display:flex;gap:8px;
    padding:12px;
    border-top:1px solid var(--line);
  }
  .chat-input-row input{
    flex:1;
    background:var(--bg-soft);
    border:1px solid var(--line);
    border-radius:8px;
    padding:10px 12px;
    color:var(--ink);
    font-size:13.5px;
    outline:none;
  }
  .chat-input-row input:focus{border-color:var(--indigo);}
  .chat-input-row button{
    background:var(--indigo);
    border:none;
    border-radius:8px;
    width:40px;
    display:flex;align-items:center;justify-content:center;
    cursor:pointer;
    flex-shrink:0;
  }
  @media(max-width:480px){
    .chat-widget{bottom:16px;right:16px;}
    .chat-panel{width:calc(100vw - 32px);right:-8px;}
  }

  @media(max-width:640px){
    .final-cta{padding:60px 0 70px;}
    .final-cta h2 br{display:none;}
    footer{text-align:center;}
    .footer-row{flex-direction:column;gap:8px;}
  }

  @media(max-width:860px){
    .hero-inner{grid-template-columns:1fr;}
    .problem-grid,.steps,.plans,.t-grid,.stats-grid,.industries-grid{grid-template-columns:1fr;}
    .industries-grid{gap:28px 0;}
    .step:not(:last-child)::after{display:none;}
    .step{padding-bottom:24px;}
    .logos-row{justify-content:center;}
    .logo-item{font-size:14px;}
  }

  @media(max-width:640px){
    .nav-links a:not(.cta){display:none;}
    .nav-links{gap:0;}
    nav a.cta{padding:9px 16px;font-size:13.5px;}
    .brand{font-size:17px;}
  }
` }} />
      <div dangerouslySetInnerHTML={{ __html: `

<header>
  <div class="wrap nav">
    <div class="brand"><span class="brand-mark"></span>Bookify AI</div>
    <div class="nav-links">
      <a href="#how">How it works</a>
      <a href="#pricing">Pricing</a>
      <a href="#faq">FAQ</a>
      <a class="cta" href="#pricing">Start free trial</a>
    </div>
  </div>
</header>

<section class="hero">
  <div class="wrap hero-inner">
    <div>
      <div class="badge"><span class="dot"></span>Built for beauty, medical &amp; health businesses</div>
      <h1>Stop losing revenue to <span class="accent">no-shows</span> and last-minute cancellations.</h1>
      <p class="hero-sub">Bookify AI sends smart reminders before appointments and automatically fills any slot that opens up — built for salons, spas, and medical clinics where every empty slot is money walking out the door.</p>
      <div class="hero-ctas">
        <a class="btn-primary" href="#pricing">Start 14-day free trial</a>
      </div>
      <div class="trust-row">
        <span><span class="check">✓</span>14-day free trial</span>
        <span><span class="check">✓</span>Cancel anytime</span>
        <span><span class="check">✓</span>Setup in one afternoon</span>
      </div>
    </div>
    <div class="hero-card">
      <div class="hero-card-head"><span>Today's schedule</span><span class="live-dot">● Live</span></div>
      <div class="slot"><span class="slot-time">9:00</span><span class="slot-name">J. Alvarez — Color + Cut</span><span class="slot-tag filled">Filled</span></div>
      <div class="slot"><span class="slot-time">10:15</span><span class="slot-name">Cancelled 40 min ago</span><span class="slot-tag open">Open</span></div>
      <div class="slot"><span class="slot-time">10:15</span><span class="slot-name">Refilled — T. Osei (waitlist)</span><span class="slot-tag filled">Filled</span></div>
      <div class="slot"><span class="slot-time">11:30</span><span class="slot-name">R. Patel — Full Service</span><span class="slot-tag filled">Filled</span></div>
      <div class="slot"><span class="slot-time">1:00</span><span class="slot-name">Refilled — S. Grant (waitlist)</span><span class="slot-tag filled">Filled</span></div>
      <div class="card-total"><span>Revenue recovered today</span><span class="val">$150</span></div>
    </div>
  </div>
</section>

<section class="industries">
  <div class="wrap">
    <div class="industries-head">
      <div class="section-eyebrow">Who it's for</div>
      <h2>Built for any business where a missed appointment costs real money.</h2>
    </div>
    <div class="industries-grid">
      <div class="industry-category">
        <h3>Beauty &amp; Grooming</h3>
        <div class="industry-tags">
          <span class="tag">Med Spas</span>
          <span class="tag">Braiding Salons</span>
          <span class="tag">Full-Service Salons</span>
          <span class="tag">Barbershops</span>
          <span class="tag">Nail Salons</span>
          <span class="tag">Laser Hair Removal</span>
          <span class="tag">Tattoo &amp; Piercing</span>
        </div>
      </div>
      <div class="industry-category">
        <h3>Medical &amp; Health</h3>
        <div class="industry-tags">
          <span class="tag">Chiropractic</span>
          <span class="tag">Physical Therapy</span>
          <span class="tag">Dermatology</span>
          <span class="tag">Dental</span>
          <span class="tag">General Medical</span>
          <span class="tag">Optometry</span>
          <span class="tag">Veterinary</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="stats">
  <div class="wrap stats-grid">
    <div class="stat"><div class="num">$2.1M+</div><div class="label">Revenue recovered for customers</div></div>
    <div class="stat"><div class="num">31%</div><div class="label">Average drop in no-show rate</div></div>
    <div class="stat"><div class="num">340+</div><div class="label">Businesses on Bookify AI</div></div>
    <div class="stat"><div class="num">4.8/5</div><div class="label">Average customer rating</div></div>
  </div>
</section>

<section class="problem">
  <div class="wrap">
    <div class="section-eyebrow">The problem</div>
    <h2>No-shows don't just cost the appointment. They cost the whole slot.</h2>
    <div class="problem-grid">
      <div class="pcard">
        <h3>It adds up fast</h3>
        <p>A business losing just 3 appointments a week at a $65 average ticket is losing over $10,000 a year — and for higher-ticket services, that number climbs even faster.</p>
      </div>
      <div class="pcard">
        <h3>Reminders alone aren't enough</h3>
        <p>Generic calendar reminders reduce no-shows a little. They do nothing to refill a chair, a table, or a booked slot once someone cancels last minute.</p>
      </div>
      <div class="pcard">
        <h3>Your staff feel it directly</h3>
        <p>Whether you're paid on commission, per session, or per client, an empty slot isn't just the owner's loss — it's real income lost. Nobody has time to manually work a waitlist between appointments.</p>
      </div>
    </div>
  </div>
</section>

<section class="how" id="how">
  <div class="wrap">
    <div class="section-eyebrow">How it works</div>
    <h2>Set it up once. It runs every week after that.</h2>
    <div class="steps">
      <div class="step">
        <div class="step-num">01</div>
        <h3>Connect your calendar</h3>
        <p>Sync the booking system you already use. No new app for your staff or clients to learn.</p>
      </div>
      <div class="step">
        <div class="step-num">02</div>
        <h3>Reminders go out automatically</h3>
        <p>Timed SMS and email reminders, with an optional deposit or cancellation fee for high-risk bookings.</p>
      </div>
      <div class="step">
        <div class="step-num">03</div>
        <h3>Cancellations auto-fill</h3>
        <p>The moment a slot opens, your waitlist gets texted in order. First to reply keeps the spot.</p>
      </div>
    </div>
  </div>
</section>

<section class="testimonials">
  <div class="wrap">
    <h2>What businesses are saying</h2>
    <div class="t-grid">
      <div class="t-card">
        <div class="t-stars">★★★★★</div>
        <p class="t-quote">We used to just eat the cost of a cancellation. Now the waitlist fills the chair before the front desk even notices it opened up.</p>
        <div class="t-person">
          <div class="t-avatar">MK</div>
          <div><div class="t-name">M. Kowalski</div><div class="t-role">Salon owner (2 locations)</div></div>
        </div>
      </div>
      <div class="t-card">
        <div class="t-stars">★★★★★</div>
        <p class="t-quote">Setup took less than an hour. It plugged straight into the calendar we were already using, which is what sold me.</p>
        <div class="t-person">
          <div class="t-avatar">DR</div>
          <div><div class="t-name">D. Reyes</div><div class="t-role">Dental practice manager</div></div>
        </div>
      </div>
      <div class="t-card">
        <div class="t-stars">★★★★★</div>
        <p class="t-quote">I'm 1-on-1 all day — a no-show is a session I don't get paid for. This is the first tool that's actually helped with that.</p>
        <div class="t-person">
          <div class="t-avatar">JT</div>
          <div><div class="t-name">J. Torres</div><div class="t-role">Personal trainer</div></div>
        </div>
      </div>
    </div>
    <div class="t-grid" style="margin-top:24px;">
      <div class="t-card">
        <div class="t-stars">★★★★★</div>
        <p class="t-quote">Our sessions run $150+, so a no-show used to really sting. The waitlist text usually fills the slot within minutes.</p>
        <div class="t-person">
          <div class="t-avatar">AL</div>
          <div><div class="t-name">A. Lin</div><div class="t-role">Owner, chiropractic clinic</div></div>
        </div>
      </div>
      <div class="t-card">
        <div class="t-stars">★★★★★</div>
        <p class="t-quote">We already take deposits for consults, so this fit right into how we already work — just automated.</p>
        <div class="t-person">
          <div class="t-avatar">RC</div>
          <div><div class="t-name">R. Chen</div><div class="t-role">Owner, tattoo studio</div></div>
        </div>
      </div>
      <div class="t-card">
        <div class="t-stars">★★★★★</div>
        <p class="t-quote">Missed appointments used to just be dead time on the schedule. Now they barely register — the waitlist handles it before I even see the gap.</p>
        <div class="t-person">
          <div class="t-avatar">SP</div>
          <div><div class="t-name">S. Park</div><div class="t-role">Veterinary clinic owner</div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="pricing" id="pricing">
  <div class="wrap">
    <div class="pricing-head">
      <div class="section-eyebrow">Pricing</div>
      <h2>Pricing that pays for itself the first week</h2>
      <p class="pricing-sub">Every plan includes a 14-day free trial. Your card won't be charged until the trial ends, and you can cancel anytime before then.</p>
    </div>
    <div class="plans">
      <div class="plan">
        <h3>Starter</h3>
        <div class="price">$39<span>/mo</span></div>
        <div class="desc">For a single location getting started</div>
        <ul>
          <li>1 location</li>
          <li>Up to 300 appointments/mo</li>
          <li>SMS + email reminders</li>
          <li>Basic waitlist auto-fill</li>
        </ul>
        <a href="#" class="checkout-btn" data-plan="starter">Start free trial</a>
      </div>
      <div class="plan pop">
        <div class="pop-badge">MOST POPULAR</div>
        <h3>Growth</h3>
        <div class="price">$89<span>/mo</span></div>
        <div class="desc">For locations with real no-show volume</div>
        <ul>
          <li>1 location</li>
          <li>Up to 1,000 appointments/mo</li>
          <li>SMS + email reminders</li>
          <li>Priority waitlist auto-fill</li>
          <li>Deposit & no-show fee collection</li>
          <li>Email support</li>
        </ul>
        <a href="#" class="checkout-btn" data-plan="growth">Start free trial</a>
      </div>
      <div class="plan">
        <h3>Premium</h3>
        <div class="price">$129<span>/mo</span></div>
        <div class="desc">For chains and franchises</div>
        <ul>
          <li>Up to 5 locations</li>
          <li>Unlimited appointments</li>
          <li>Everything in Growth</li>
          <li>Location-level reporting</li>
        </ul>
        <a href="#" class="checkout-btn" data-plan="premium">Start free trial</a>
      </div>
    </div>
  </div>
</section>

<section class="faq" id="faq">
  <div class="wrap">
    <div class="section-eyebrow">FAQ</div>
    <h2>Common questions</h2>
    <div class="faq-list">
      <div class="faq-item">
        <div class="faq-q">Is my client data secure? <span class="plus">+</span></div>
        <div class="faq-a"><div class="faq-a-inner">Yes. All data is encrypted in transit and at rest, and we never sell or share client contact information with third parties.</div></div>
      </div>
      <div class="faq-item">
        <div class="faq-q">Do I need to change my booking system? <span class="plus">+</span></div>
        <div class="faq-a"><div class="faq-a-inner">No. Bookify AI connects to the calendar or booking tool you already use — there's nothing new for your staff or clients to learn.</div></div>
      </div>
      <div class="faq-item">
        <div class="faq-q">What if my clients don't want text reminders? <span class="plus">+</span></div>
        <div class="faq-a"><div class="faq-a-inner">Every message includes a one-tap opt-out, and you control which reminder channels are enabled by default.</div></div>
      </div>
      <div class="faq-item">
        <div class="faq-q">Can I cancel anytime? <span class="plus">+</span></div>
        <div class="faq-a"><div class="faq-a-inner">Yes, every plan is month-to-month with no long-term contract. Cancel anytime from your account settings.</div></div>
      </div>
      <div class="faq-item">
        <div class="faq-q">Will I be charged during the free trial? <span class="plus">+</span></div>
        <div class="faq-a"><div class="faq-a-inner">No. Your card is required to start the trial, but you won't be charged until the 14 days are up. Cancel anytime before then and you won't be billed at all.</div></div>
      </div>
    </div>
  </div>
</section>

<section class="final-cta">
  <div class="wrap">
    <h2>See how many appointments you're losing — before you commit to anything.</h2>
    <p>Start your free trial and get your first week of recovered revenue tracked automatically.</p>
    <a class="btn-primary" href="#pricing">Start 14-day free trial</a>
  </div>
</section>

<footer>
  <div class="wrap footer-row">
    <div>© 2026 Bookify AI. All rights reserved.</div>
    <div>Terms · Privacy · Contact</div>
  </div>
</footer>

<div class="chat-widget">
  <button class="chat-bubble" id="chatBubble" aria-label="Open support chat">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M4 4h16v12H7l-3 3V4z" stroke="white" stroke-width="2" stroke-linejoin="round"/></svg>
  </button>
  <div class="chat-panel" id="chatPanel">
    <div class="chat-header">
      <div>
        <div class="chat-header-title">Bookify AI Support</div>
        <div class="chat-header-sub">Ask a question, get an instant answer</div>
      </div>
      <button class="chat-close" id="chatClose" aria-label="Close chat">✕</button>
    </div>
    <div class="chat-messages" id="chatMessages">
      <div class="chat-msg chat-msg-bot">Hi! I'm the Bookify AI support assistant. Ask me anything about pricing, how the waitlist works, or how to get set up.</div>
    </div>
    <div class="chat-input-row">
      <input type="text" id="chatInput" placeholder="Type a question..." />
      <button id="chatSend" aria-label="Send message">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 12h16M14 6l6 6-6 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
    </div>
  </div>
</div>

` }} />
      <script dangerouslySetInnerHTML={{ __html: `
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-q').addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if(!wasOpen) item.classList.add('open');
    });
  });

  document.querySelectorAll('.checkout-btn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const plan = btn.dataset.plan;
      const originalText = btn.textContent;
      btn.textContent = 'Loading...';
      try {
        const res = await fetch('/api/checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ plan })
        });
        const data = await res.json();
        if (data.url) {
          window.location.href = data.url;
        } else {
          alert('Something went wrong starting checkout. Please try again.');
          btn.textContent = originalText;
        }
      } catch (err) {
        alert('Something went wrong starting checkout. Please try again.');
        btn.textContent = originalText;
      }
    });
  });

  const chatBubble = document.getElementById('chatBubble');
  const chatPanel = document.getElementById('chatPanel');
  const chatClose = document.getElementById('chatClose');
  const chatMessages = document.getElementById('chatMessages');
  const chatInput = document.getElementById('chatInput');
  const chatSend = document.getElementById('chatSend');
  let chatHistory = [];

  chatBubble.addEventListener('click', () => {
    chatPanel.classList.toggle('open');
    if (chatPanel.classList.contains('open')) chatInput.focus();
  });
  chatClose.addEventListener('click', () => chatPanel.classList.remove('open'));

  function addMessage(text, cls) {
    const div = document.createElement('div');
    div.className = 'chat-msg ' + cls;
    div.textContent = text;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return div;
  }

  async function sendChatMessage() {
    const text = chatInput.value.trim();
    if (!text) return;
    chatInput.value = '';
    addMessage(text, 'chat-msg-user');
    const loadingEl = addMessage('Thinking...', 'chat-msg-loading');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history: chatHistory })
      });
      const data = await res.json();
      loadingEl.remove();
      addMessage(data.reply, 'chat-msg-bot');
      chatHistory.push({ role: 'user', content: text });
      chatHistory.push({ role: 'assistant', content: data.reply });
    } catch (err) {
      loadingEl.remove();
      addMessage('Sorry, something went wrong. Please try again.', 'chat-msg-bot');
    }
  }

  chatSend.addEventListener('click', sendChatMessage);
  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendChatMessage();
  });
` }} />
    </>
  )
}
