function HomePage({ setRoute }) {
  return (
    <div className="page-wrap page-enter">
      <section className="home-hero">
        <div className="swoosh"><Swoosh size={900} color="#5BB6E2" /></div>

        <div className="home-hero-content">
          <div className="eyebrow">Est. Holmdel, NJ · Ages 11–17</div>
          <h1 className="display">
            Play <span className="sky">Hard.</span><br/>
            Play <span className="stroke">Smart.</span><br/>
            Play <span className="sky">NJTS.</span>
          </h1>
          <p className="home-hero-sub">
            NJ Team Sports Volleyball is a premier club dedicated to athletes aged 11–17 in Central New Jersey. We develop skills, build confidence, and foster a love for the game in a competitive yet supportive environment.
          </p>
          <div className="home-hero-ctas">
            <button className="btn btn-sky" onClick={() => setRoute('about')}>See Our Programs <ArrowRight /></button>
            <button className="btn btn-ghost-light" onClick={() => setRoute('contact')}>Get In Touch <ArrowRight /></button>
          </div>
        </div>

        <div className="home-hero-visual">
          <div className="logo-card">
            <div className="corner tl" /><div className="corner tr" />
            <div className="corner bl" /><div className="corner br" />
            <img src="assets/njts-logo.png" alt="NJTS Volleyball" />
            <div className="est">— Spike · Set · Serve · New Jersey —</div>
          </div>
        </div>

        <div className="hero-stats">
          <div className="hero-stat"><div className="n">40+</div><div className="l">Years Play Experience</div></div>
          <div className="hero-stat"><div className="n">20+</div><div className="l">Years Coaching</div></div>
          <div className="hero-stat"><div className="n">11–17</div><div className="l">Ages Served</div></div>
          <div className="hero-stat"><div className="n">3</div><div className="l">Expert Coaches</div></div>
        </div>
      </section>

      <div className="ticker">
        <div className="ticker-track">
          <span>Holmdel, New Jersey</span><span className="star">★</span>
          <span>Ages 11–17</span><span className="star">★</span>
          <span>Competitive Training</span><span className="star">★</span>
          <span>Team Building</span><span className="star">★</span>
          <span>Skill Development</span><span className="star">★</span>
          <span>Central New Jersey</span><span className="star">★</span>
          <span>Holmdel, New Jersey</span><span className="star">★</span>
          <span>Ages 11–17</span><span className="star">★</span>
          <span>Competitive Training</span><span className="star">★</span>
          <span>Team Building</span><span className="star">★</span>
          <span>Skill Development</span><span className="star">★</span>
          <span>Central New Jersey</span><span className="star">★</span>
        </div>
      </div>

      <section className="programs">
        <div className="section-head">
          <div>
            <div className="label">— What we offer</div>
            <h2 className="display">Every athlete.<br/>Every level.</h2>
          </div>
          <p>From beginners discovering the fundamentals to experienced players refining their competitive edge — NJTS has a track for you.</p>
        </div>

        <div className="programs-grid">
          <div className="prog-card featured" onClick={() => setRoute('about')}>
            <div>
              <div className="num">01</div>
              <span className="tag">Competitive</span>
              <h3>League Play</h3>
              <p>Structured competitive league play for athletes aged 11–17. Build real match experience, sharpen game IQ, and compete against top Central NJ talent.</p>
            </div>
            <div className="more">Explore programs <ArrowRight /></div>
          </div>

          <div className="prog-card" onClick={() => setRoute('about')}>
            <div>
              <div className="num">02</div>
              <span className="tag">Specialized</span>
              <h3>Training Clinics</h3>
              <p>Focused clinics targeting technical skills, physical fitness, and teamwork. Expert coaching with personalized attention for every player at every level.</p>
            </div>
            <div className="more">See clinics <ArrowRight /></div>
          </div>

          <div className="prog-card" onClick={() => setRoute('about')}>
            <div>
              <div className="num">03</div>
              <span className="tag">All levels</span>
              <h3>Skill Development</h3>
              <p>Whether you're just starting out or pushing to the next level, our coaches provide the mentorship and personalized guidance to help every athlete grow.</p>
            </div>
            <div className="more">Get started <ArrowRight /></div>
          </div>
        </div>
      </section>

      <section className="pillars">
        <div className="section-head">
          <div>
            <div className="label" style={{ color: 'var(--sky)' }}>— The NJTS Way</div>
            <h2 className="display" style={{ color: 'white' }}>More than a club.<br/>A community.</h2>
          </div>
          <p style={{ color: 'rgba(255,255,255,.72)' }}>Four values guide everything we do at NJ Team Sports.</p>
        </div>
        <div className="pillars-grid">
          <div className="pillar">
            <div className="num">01 / FOUR</div>
            <h4>Skill & Growth</h4>
            <p>We enhance technical skills, physical fitness, and volleyball IQ at every session — giving every athlete a clear path to improvement.</p>
          </div>
          <div className="pillar">
            <div className="num">02 / FOUR</div>
            <h4>Confidence Building</h4>
            <p>Volleyball is about more than the score. We build confident, resilient young athletes who carry those lessons far beyond the court.</p>
          </div>
          <div className="pillar">
            <div className="num">03 / FOUR</div>
            <h4>Team & Friendship</h4>
            <p>We foster genuine friendships and community spirit — because the bonds formed through team sports last a lifetime.</p>
          </div>
          <div className="pillar">
            <div className="num">04 / FOUR</div>
            <h4>Expert Coaching</h4>
            <p>Our coaches bring decades of playing and coaching experience and a genuine passion for developing the next generation of NJ volleyball players.</p>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="star-deco l"><Star size={180} color="#5BB6E2" stroke="#0E3D7C" /></div>
        <div className="star-deco r"><Star size={220} color="#0E3D7C" stroke="#0E3D7C" /></div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 760, margin: '0 auto' }}>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: 12, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--navy)', marginBottom: 20 }}>
            — Holmdel, NJ · Open Mon–Sun
          </div>
          <h2 className="display">Your court<br/>is waiting.</h2>
          <p>Tell us about your athlete and we'll get back to you with the next steps for joining NJ Team Sports.</p>
          <button className="btn btn-navy" onClick={() => setRoute('contact')}>Contact Us <ArrowRight /></button>
        </div>
      </section>
    </div>
  );
}

window.HomePage = HomePage;
