function AboutPage({ setRoute }) {
  return (
    <div className="page-wrap page-enter">
      <section className="page-hero">
        <div className="bg-num">01</div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="crumbs">NJTS / About Us</div>
          <h1 className="display">About<br/>NJTS.</h1>
          <p className="tagline">
            NJ Team Sports is a premier volleyball league dedicated to athletes aged 11–17 in Central New Jersey — building skills, confidence, and a genuine love for the game.
          </p>
        </div>
      </section>

      <section className="about-mission">
        <div>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: 12, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--sky)', marginBottom: 16 }}>
            — Our Mission
          </div>
          <p className="lede">
            We develop <span className="accent">complete volleyball players</span> — and the confident, accountable young athletes the sport produces along the way.
          </p>
          <p>
            NJ Team Sports is proud to be a premier volleyball league dedicated to athletes aged 11–17 in the heart of Central New Jersey. Our mission goes beyond simply playing the game — we are committed to nurturing well-rounded players by enhancing their technical skills, physical fitness, and teamwork abilities.
          </p>
          <p>
            At NJ Team Sports, we believe that volleyball is not just about competition — it's about building confidence, fostering friendships, and developing a passion for the sport. Our experienced coaches provide personalized training and mentorship, ensuring every athlete reaches their full potential while enjoying a supportive and vibrant community.
          </p>
          <div className="meta">
            <div><div className="l">Location</div><div className="v">Holmdel, NJ</div></div>
            <div><div className="l">Ages Served</div><div className="v">11–17</div></div>
            <div><div className="l">Coaching Exp.</div><div className="v">20+ Yrs</div></div>
            <div><div className="l">Region</div><div className="v">Central NJ</div></div>
          </div>
        </div>

        <div>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: 12, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--sky)', marginBottom: 16 }}>
            — Our Commitment
          </div>
          <div style={{ display: 'grid', gap: 18 }}>
            {[
              ['Welcoming for everyone.', 'Whether you\'re a beginner learning the fundamentals or an experienced player striving to refine your skills, our league offers a welcoming environment for all.'],
              ['Technical excellence.', 'Every session targets real skill improvement — serving, passing, setting, hitting, and defensive positioning with expert coaching guiding each rep.'],
              ['Physical & mental growth.', 'We build athletes from the ground up: conditioning, teamwork, sportsmanship, and the mental resilience that carries well beyond the volleyball court.'],
              ['A lifetime love of the game.', 'Together, we cultivate a love for volleyball that lasts long after the final whistle — friendships, memories, and a passion that players carry for life.'],
            ].map(([t, p], i) => (
              <div key={i} style={{ padding: '20px 22px', background: 'var(--tint)', borderLeft: '4px solid var(--sky)' }}>
                <h4 style={{ fontFamily: 'Anton', fontSize: 22, margin: '0 0 8px', textTransform: 'uppercase', color: 'var(--navy)' }}>{t}</h4>
                <p style={{ margin: 0, fontSize: 14, color: 'var(--muted)' }}>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-teams">
        <div className="section-head">
          <div>
            <div className="label">— What we offer</div>
            <h2 className="display">Programs for<br/>every level.</h2>
          </div>
          <p>Competitive league play, specialized clinics, and skill development for athletes aged 11–17 across Central New Jersey.</p>
        </div>

        <div className="tier-row">
          <div>
            <span className="tier-tag">Competitive</span>
            <h3>League<br/>Play</h3>
            <p className="tier-desc">Structured competitive matches for boys and girls aged 11–17. Real game experience and standings that prepare players for the next level.</p>
          </div>
          <div>
            <div style={{ marginBottom: 14, fontFamily: 'JetBrains Mono', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)' }}>Boys &amp; Girls · All Ages</div>
            <div className="team-cards">
              {[11, 12, 13, 14, 15, 16, 17].map(age => (
                <div className="team-card" key={age}>
                  <div>
                    <div className="age">{age}<sup>U</sup></div>
                    <div className="gender">Boys &amp; Girls</div>
                  </div>
                  <span className="pill">League</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="tier-row regional">
          <div>
            <span className="tier-tag">Development</span>
            <h3>Training<br/>Clinics</h3>
            <p className="tier-desc">Specialized clinics targeting technical skills, physical fitness, and game IQ. Smaller groups mean more personal coaching time for every athlete.</p>
          </div>
          <div>
            <div style={{ display: 'grid', gap: 14 }}>
              {[
                ['Fundamentals Clinic', 'Serving, passing, and court positioning for new and developing players.'],
                ['Position Specialty', 'Setter, libero, and hitter-focused sessions for athletes looking to specialize.'],
                ['Conditioning & Fitness', 'Volleyball-specific athletic training — footwork, agility, and vertical development.'],
                ['Game IQ Workshop', 'Reading the court, rotation systems, and in-match decision making.'],
              ].map(([title, desc], i) => (
                <div key={i} style={{ padding: '18px 20px', background: 'var(--white)', border: '1px solid var(--tint-2)', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ background: 'var(--sky)', color: 'var(--navy)', fontFamily: 'JetBrains Mono', fontSize: 11, padding: '4px 10px', letterSpacing: '0.15em', textTransform: 'uppercase', whiteSpace: 'nowrap', marginTop: 2 }}>0{i + 1}</div>
                  <div>
                    <h4 style={{ fontFamily: 'Anton', fontSize: 20, margin: '0 0 6px', textTransform: 'uppercase', color: 'var(--navy)' }}>{title}</h4>
                    <p style={{ margin: 0, fontSize: 14, color: 'var(--muted)' }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <h2 className="display">Ready to join<br/>the team?</h2>
        <p>Reach out and we'll get back to you with the next steps — league registration, clinic schedules, or just to answer your questions.</p>
        <button className="btn btn-navy" onClick={() => setRoute('contact')}>Contact Us <ArrowRight /></button>
      </section>
    </div>
  );
}

window.AboutPage = AboutPage;
