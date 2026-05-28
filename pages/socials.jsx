function SocialsPage({ setRoute }) {

  const platforms = [
    {
      id: 'instagram',
      name: 'Instagram',
      handle: '@njtsvolleyballclub',
      followersLabel: 'Follow us',
      url: 'https://www.instagram.com/njtsvolleyballclub/',
      color: '#0E3D7C',
      icon: (
        <svg viewBox="0 0 44 44" fill="none">
          <rect x="4" y="4" width="36" height="36" rx="10" fill="none" stroke="#0E3D7C" strokeWidth="2.5" />
          <circle cx="22" cy="22" r="8" fill="none" stroke="#0E3D7C" strokeWidth="2.5" />
          <circle cx="32" cy="12" r="2" fill="#5BB6E2" />
        </svg>
      ),
    },
    {
      id: 'facebook',
      name: 'Facebook',
      handle: 'NJ Team Sports',
      followersLabel: 'Like our page',
      url: 'https://www.facebook.com/people/NJ-Team-Sports/61550337232974/',
      color: '#0E3D7C',
      icon: (
        <svg viewBox="0 0 44 44" fill="none">
          <rect x="4" y="4" width="36" height="36" rx="6" fill="#0E3D7C" />
          <path d="M 26 20 L 26 16 C 26 14.5, 27 14, 28.5 14 L 31 14 L 31 9 L 27 9 C 23 9, 21 11, 21 15 L 21 20 L 17 20 L 17 25 L 21 25 L 21 36 L 26 36 L 26 25 L 30 25 L 31 20 Z" fill="#FFFFFF" />
        </svg>
      ),
    },
  ];

  return (
    <div className="page-wrap page-enter">
      <section className="page-hero">
        <div className="bg-num">#</div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="crumbs">NJTS / Socials</div>
          <h1 className="display">Follow<br/>NJTS.</h1>
          <p className="tagline">
            Match highlights, practice clips, club news, and behind-the-scenes moments — follow NJ Team Sports on Instagram and Facebook.
          </p>
        </div>
      </section>

      {/* Platform cards */}
      <section className="socials-wrap">
        <div className="section-head">
          <div>
            <div className="label">— Find us here</div>
            <h2 className="display" style={{ fontSize: 'clamp(40px, 5vw, 72px)' }}>Two platforms.<br/>One club.</h2>
          </div>
          <p>Tap a card to visit our page.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, maxWidth: 680 }}>
          {platforms.map(p => (
            <a key={p.id} href={p.url} target="_blank" rel="noopener noreferrer" className="social-card">
              <svg className="visit" width="14" height="14" viewBox="0 0 14 14">
                <path d="M3 11 L 11 3 M 5 3 L 11 3 L 11 9" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
              <div className="platform-icon">{p.icon}</div>
              <div className="handle">{p.name}</div>
              <div className="label">{p.handle}</div>
              <div className="followers">{p.followersLabel}
                <b style={{ fontSize: 16, letterSpacing: '0.04em' }}>↗</b>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Instagram feed */}
      <section className="feed-section">
        <div className="section-head">
          <div>
            <div className="label">— Latest from Instagram</div>
            <h2 className="display" style={{ fontSize: 'clamp(40px, 5vw, 72px)' }}>Fresh from<br/>the feed.</h2>
          </div>
          <div>
            <p>Our latest posts from <a href="https://www.instagram.com/njtsvolleyballclub/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--sky)', fontWeight: 700 }}>@njtsvolleyballclub</a>.</p>
            <a href="https://www.instagram.com/njtsvolleyballclub/" target="_blank" rel="noopener noreferrer"
               className="btn btn-ghost-dark" style={{ marginTop: 16, display: 'inline-flex' }}>
              View Profile <ArrowRight />
            </a>
          </div>
        </div>

        {/*
          ── Instagram feed embed ──────────────────────────────────────────────
          Instagram's API requires OAuth and an approved developer app, so a
          live feed here needs a free widget service. The easiest option is
          Behold (https://behold.so) — free for 1 widget.

          Steps to activate:
            1. Go to https://behold.so and sign up (free)
            2. Connect your @njtsvolleyballclub Instagram account
            3. Copy your Widget ID (looks like: XXXXXXXXXXXXXXXXXXXXXXXX)
            4. Replace PASTE_YOUR_BEHOLD_WIDGET_ID_HERE below with it
            5. Uncomment the two lines below and remove the placeholder box

          <script src="https://w.behold.so/widget.js" type="module"></script>
          <behold-widget feed-id="PASTE_YOUR_BEHOLD_WIDGET_ID_HERE"></behold-widget>
          ─────────────────────────────────────────────────────────────────────
        */}
        <div style={{
          padding: '40px',
          background: 'var(--tint)',
          border: '2px dashed var(--tint-2)',
          textAlign: 'center',
          borderRadius: 0,
        }}>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--sky)', marginBottom: 12 }}>
            — Instagram Feed
          </div>
          <p style={{ fontFamily: 'Anton', fontSize: 22, color: 'var(--navy)', textTransform: 'uppercase', margin: '0 0 12px' }}>
            Live feed coming soon
          </p>
          <p style={{ color: 'var(--muted)', fontSize: 14, maxWidth: 480, margin: '0 auto 20px' }}>
            To display your latest Instagram posts here, connect a free widget via{' '}
            <a href="https://behold.so" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--sky)', fontWeight: 700 }}>Behold.so</a>{' '}
            (free for 1 widget). Instructions are in the source code above this box.
          </p>
          <a href="https://www.instagram.com/njtsvolleyballclub/" target="_blank" rel="noopener noreferrer"
             className="btn btn-sky" style={{ display: 'inline-flex' }}>
            See Posts on Instagram <ArrowRight />
          </a>
        </div>
      </section>

      <section className="cta-strip">
        <h2 className="display">Tag us in your<br/>NJTS moments.</h2>
        <p>Use <b style={{ color: 'var(--navy)' }}>#NJTeamSports</b> and we'll reshare your best shots across our feeds.</p>
        <button className="btn btn-navy" onClick={() => setRoute('contact')}>Get In Touch <ArrowRight /></button>
      </section>
    </div>
  );
}

window.SocialsPage = SocialsPage;
