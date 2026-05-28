function CoachesPage({ setRoute }) {
  const coaches = [
    {
      id: 'debbie',
      name: 'Debbie Mattos',
      role: 'Founder & Director, Head Coach',
      creds: '40 Years Playing · 20 Years Coaching',
      bio: 'Debbie Mattos founded NJ Team Sports after decades in the volleyball world. With approximately 40 years of playing experience and 20 years coaching various teams, her deep passion for the sport led her to build the club she always envisioned — one that inspires young athletes to develop their skills, confidence, and teamwork.',
      years: '20+',
      team: 'Founder',
      photo: 'images/coaches/debbie.webp',
    },
    {
      id: 'taylor',
      name: 'Taylor DeWan',
      role: 'Head Coach',
      creds: 'Rutgers University · 10 Years Competitive Play',
      bio: 'Taylor DeWan brings ten years of competitive play, including experience on national teams, to NJ Team Sports. She played a key role in establishing the Matawan Aberdeen Regional High School volleyball program and brings strong leadership and a genuine dedication to developing young players in her community.',
      years: '3+',
      team: 'Head Coach',
      photo: 'images/coaches/taylor.webp',
    },
    {
      id: 'sophia',
      name: 'Sophia Chatzopoulos',
      role: 'Head Coach',
      creds: 'Kean University · Indoor & Beach Volleyball',
      bio: 'Sophia Chatzopoulos is a student-athlete at Kean University who understands the importance of being a team player on and off the court. With years of indoor and beach volleyball experience, she brings energy and heart to coaching youth players — helping them build friendships and memories that last a lifetime through team sports.',
      years: '2+',
      team: 'Head Coach',
      photo: 'images/coaches/sophia.webp',
    },
  ];

  return (
    <div className="page-wrap page-enter">
      <section className="page-hero">
        <div className="bg-num">3</div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="crumbs">NJTS / Meet the Coaches</div>
          <h1 className="display">Meet the<br/>Coaches.</h1>
          <p className="tagline">
            Three dedicated coaches with decades of combined playing and coaching experience. Every NJTS athlete gets expert guidance, personal attention, and a coach who genuinely cares.
          </p>
        </div>
      </section>

      <section className="coaches-grid">
        <div className="section-head">
          <div>
            <div className="label">— The staff</div>
            <h2 className="display">Experience.<br/>Passion. Results.</h2>
          </div>
          <p>Our coaches bring real competitive backgrounds and a shared mission: to help every athlete reach their potential.</p>
        </div>

        <div className="coach-row">
          {coaches.map(c => (
            <div key={c.id} className="coach-card">
              <div className="coach-info">
                <div className="coach-info-top">
                  <div className="coach-photo">
                    <img src={c.photo} alt={c.name} />
                  </div>
                  <div>
                    <div className="role">{c.role}</div>
                    <h3>{c.name}</h3>
                    <div className="creds">{c.creds}</div>
                  </div>
                </div>
                <p className="bio">{c.bio}</p>
                <div className="stats">
                  <div className="s">Years Coaching<b>{c.years}</b></div>
                  <div className="s">Title<b style={{ fontSize: 14 }}>{c.team}</b></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-strip">
        <h2 className="display">Want to coach<br/>with us?</h2>
        <p>NJ Team Sports is always looking for passionate coaches who love the game and want to make a difference for young athletes in Central NJ.</p>
        <button className="btn btn-navy" onClick={() => setRoute('contact')}>Get In Touch <ArrowRight /></button>
      </section>
    </div>
  );
}

window.CoachesPage = CoachesPage;
