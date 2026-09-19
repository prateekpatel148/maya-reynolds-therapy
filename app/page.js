import { ArrowRight, Check, ChevronDown, MapPin, ShieldCheck } from "lucide-react";

const expertise = ["Anxiety & Panic", "Trauma", "Burnout", "Perfectionism", "Chronic Stress", "High Internal Pressure"];

const services = [
  {
    number: "01",
    title: "Anxiety & Panic",
    text: "Support for constant worry, overthinking, bodily tension, panic, difficulty sleeping, and feeling on edge.",
  },
  {
    number: "02",
    title: "Trauma & EMDR",
    text: "Care for single-incident and complex, long-standing trauma with an emphasis on safety, stabilization, and regulation.",
  },
  {
    number: "03",
    title: "Burnout & Perfectionism",
    text: "A space to slow down, reconnect with yourself, and develop more sustainable ways of living and working.",
  },
];

const faqs = [
  ["Who do you work with?", "I work with adults, especially high-achieving, thoughtful, and self-aware people who may look functional on the outside while privately feeling anxious, exhausted, overwhelmed, or emotionally on edge."],
  ["What areas do you support?", "My work often focuses on anxiety, panic, trauma, burnout, perfectionism, chronic stress, and high internal pressure."],
  ["Do you offer in-person and telehealth therapy?", "Yes. I offer in-person therapy from my Santa Monica office and secure telehealth sessions for clients located in California."],
  ["What therapy methods do you use?", "I integrate cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques based on the client's needs and goals."],
  ["How do you approach trauma work?", "Trauma work is paced carefully, with an emphasis on safety, stabilization, and regulation. The goal is to help clients feel more grounded in daily life while developing insight and resilience over time."],
];

function Nav() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a href="#top" className="brand" aria-label="Maya Reynolds Clinical Psychologist home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 42 42" role="presentation">
              <path d="M21 37C18 30 18 23 21 5" />
              <path d="M21 29C15 27 10 23 8 17C14 17 19 20 21 25" />
              <path d="M21 29C27 27 32 23 34 17C28 17 23 20 21 25" />
              <path d="M21 20C17 17 15 13 16 8C20 10 22 14 21 20" />
              <path d="M21 20C25 17 27 13 26 8C22 10 20 14 21 20" />
            </svg>
          </span>
          <span className="brand-copy">
            <span className="brand-name">Dr. Maya Reynolds, PsyD</span>
            <span className="brand-subtitle">Licensed Clinical Psychologist</span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#services">Specialties</a>
          <a href="#approach">Approach</a>
          <a href="#office">Our Office</a>
          <a href="#faq">FAQs</a>
        </nav>
        <a className="btn btn-primary nav-cta" href="#contact">Book a Consultation</a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <div className="mobile-menu-panel">
            <a href="#about">About</a>
            <a href="#services">Specialties</a>
            <a href="#approach">Approach</a>
            <a href="#office">Our Office</a>
            <a href="#faq">FAQs</a>
            <a href="#contact">Book a Consultation</a>
          </div>
        </details>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <main id="top">
      <Nav />

      {/* HERO — follows the reference site's editorial split layout while using Maya's profile */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">In-person therapy in Santa Monica &amp; secure telehealth across California</p>
            <h1>Therapy for high-achieving adults navigating anxiety, trauma &amp; burnout.</h1>
            <p className="hero-lead">A warm, grounded space for thoughtful adults who feel overwhelmed on the inside—even when everything looks functional on the outside.</p>
            <a href="#contact" className="btn btn-primary">Schedule a Consultation <ArrowRight size={17} /></a>
          </div>

          <div className="hero-visual" aria-label="Dr. Maya Reynolds and therapy office">
            <div className="hero-photo hero-photo-main">
              <img src="/maya-reynolds.png" alt="Dr. Maya Reynolds" />
            </div>
            <div className="hero-photo hero-photo-small">
              <img src="/office-1.webp" alt="Warm therapy office" />
            </div>
            <div className="hero-note">
              <span>Warm &amp; grounded</span>
              <p>A calm place to slow down, understand what is happening, and move forward with intention.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section id="about" className="intro section">
        <div className="container intro-grid">
          <div>
            <p className="eyebrow">About Dr. Maya Reynolds, PsyD</p>
            <h2>You can look functional on the outside and still feel exhausted inside.</h2>
          </div>
          <div className="body-copy">
            <p>I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.</p>
            <p>Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge. Clients may be navigating constant worry, tension in the body, difficulty sleeping, or a sense that they are always bracing for something to go wrong.</p>
            <p>Together, we work to understand both the emotional and physiological sides of what you are experiencing.</p>
          </div>
        </div>
      </section>

      {/* WHO WE HELP — mirrors the reference site's three-column section */}
      <section className="who-help section section-soft">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">Who I work with</p>
            <h2>Support for adults carrying more than they show.</h2>
          </div>
          <div className="three-grid">
            <article className="help-card">
              <div className="help-image"><img src="/maya-reynolds.png" alt="Portrait of Dr. Maya Reynolds" /></div>
              <div className="help-content"><span>01</span><h3>High-achieving adults</h3><p>For thoughtful, capable adults who are used to holding everything together but feel overwhelmed, tense, or stuck underneath it all.</p></div>
            </article>
            <article className="help-card">
              <div className="help-image office-crop"><img src="/office-1.webp" alt="Comfortable therapy office" /></div>
              <div className="help-content"><span>02</span><h3>Adults navigating anxiety</h3><p>For people living with constant worry, overthinking, emotional pressure, or the feeling that something could go wrong.</p></div>
            </article>
            <article className="help-card">
              <div className="help-image office-crop"><img src="/office-2.webp" alt="Quiet therapy office interior" /></div>
              <div className="help-content"><span>03</span><h3>Adults processing past experiences</h3><p>For adults who want to understand the lingering effects of difficult experiences and feel more settled in the present.</p></div>
            </article>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="expertise section">
        <div className="container expertise-inner">
          <p className="eyebrow">Areas of expertise</p>
          <h2>You deserve a place where your story is heard, valued, and understood.</h2>
          <div className="expertise-list">
            {expertise.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section id="approach" className="approach section section-soft">
        <div className="container split-grid">
          <div className="approach-image"><img src="/office-2.webp" alt="Warm, private therapy office" /></div>
          <div className="approach-copy">
            <p className="eyebrow">How I work</p>
            <h2>Personalized support, without a one-size-fits-all approach.</h2>
            <p className="body-copy">The work begins by making room for your actual experience. We look at both the emotional and physiological sides of what you are going through, with care for the pace and context that feel right for you.</p>
            <div className="feature-list">
              <div><Check /><div><h3>Warm &amp; grounded</h3><p>A calm environment where difficult experiences can be explored without judgment.</p></div></div>
              <div><Check /><div><h3>Whole-person perspective</h3><p>Attention to thoughts, emotions, bodily tension, stress, and the patterns connecting them.</p></div></div>
              <div><Check /><div><h3>Evidence-based &amp; integrative</h3><p>CBT, EMDR, mindfulness-based practices, and body-oriented techniques are integrated thoughtfully around your needs.</p></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALTIES */}
      <section id="services" className="specialties section">
        <div className="container">
          <div className="split-heading">
            <div><p className="eyebrow">My specialties include</p><h2>Care that meets you where you are.</h2></div>
            <p className="body-copy heading-note">Therapy for adults who want to better understand anxiety, trauma, burnout, and the patterns that keep them feeling on edge.</p>
          </div>
          <div className="three-grid specialty-grid">
            {services.map((service) => (
              <article key={service.number} className="specialty-card">
                <span className="number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#contact">Learn more <ArrowRight size={15} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BIO */}
      <section className="bio section-dark">
        <div className="container bio-grid">
          <div className="bio-photo"><img src="/maya-reynolds.png" alt="Dr. Maya Reynolds" /></div>
          <div className="bio-copy">
            <p className="eyebrow eyebrow-light">Meet Dr. Maya Reynolds, PsyD</p>
            <h2>A warm, grounded space for high-achieving adults.</h2>
            <p>I’m a licensed clinical psychologist based in Santa Monica, California. I support adults navigating anxiety, panic, trauma, burnout, perfectionism, and the pressure to keep everything together.</p>
            <p>My approach is warm, collaborative, and grounded. Trauma work is paced carefully with an emphasis on safety, stabilization, and helping clients feel more regulated in daily life—not just during sessions.</p>
            <p>I offer in-person therapy from my Santa Monica office and secure telehealth sessions for clients located in California.</p>
          </div>
        </div>
      </section>

      {/* NEW ASSIGNMENT SECTION */}
      <section id="office" className="office section">
        <div className="container">
          <div className="split-heading office-heading">
            <div><p className="eyebrow">Our Office</p><h2>A quiet, private space designed to feel calm and grounding.</h2><p className="office-note">The Santa Monica office is a comfortable, uncluttered setting with natural light. Clients can also choose secure telehealth sessions when they are located in California.</p></div>
            <div className="office-details"><MapPin size={20} /><p>123th Street 45 W<br />Santa Monica, CA 90401</p></div>
          </div>
          <div className="office-gallery">
            <img src="/office-1.webp" alt="Therapy office seating area" />
            <img src="/office-2.webp" alt="Therapy office interior" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="faq section section-soft">
        <div className="container faq-inner">
          <p className="eyebrow">FAQs</p>
          <h2>Questions you may be carrying.</h2>
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}<ChevronDown size={20} /></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="cta-wrap">
        <div className="container cta">
          <p className="eyebrow">Schedule an appointment</p>
          <h2>You do not have to carry it all alone.</h2>
          <p>If you are ready to explore what therapy could look like, there is space to begin with a thoughtful conversation.</p>
          <a href="mailto:hello@mayareynoldstherapy.com" className="btn btn-primary">Book a Consultation <ArrowRight size={17} /></a>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div><a href="#top" className="brand footer-brand"><span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 42 42"><path d="M21 37C18 30 18 23 21 5" /><path d="M21 29C15 27 10 23 8 17C14 17 19 20 21 25" /><path d="M21 29C27 27 32 23 34 17C28 17 23 20 21 25" /><path d="M21 20C17 17 15 13 16 8C20 10 22 14 21 20" /><path d="M21 20C25 17 27 13 26 8C22 10 20 14 21 20" /></svg></span><span className="brand-copy"><span className="brand-name">Dr. Maya Reynolds, PsyD</span><span className="brand-subtitle">Licensed Clinical Psychologist</span></span></a><p>Dr. Maya Reynolds, PsyD<br />Licensed Clinical Psychologist<br />Santa Monica, California</p></div>
          <div><strong>Navigate</strong><a href="#about">About</a><a href="#services">Specialties</a><a href="#approach">Approach</a><a href="#office">Our Office</a></div>
          <div><strong>Contact</strong><p>123th Street 45 W<br />Santa Monica, CA 90401</p><span className="privacy"><ShieldCheck size={15} /> Private &amp; confidential space</span></div>
        </div>
        <div className="container footer-bottom">© 2026 Dr. Maya Reynolds, PsyD. Fictional therapist created for internship assignment.</div>
      </footer>
    </main>
  );
}
