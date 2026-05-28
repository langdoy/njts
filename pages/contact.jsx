function ContactPage({ setRoute }) {
  const [data, setData] = React.useState({
    name: '', email: '', phone: '', reason: '', athleteAge: '', message: ''
  });
  const [errors, setErrors] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);

  const update = (k, v) => setData(d => ({ ...d, [k]: v }));

  const submit = () => {
    const e = {};
    if (!data.name) e.name = 'Required';
    if (!data.email) e.email = 'Required';
    else if (!/.+@.+\..+/.test(data.email)) e.email = 'Invalid email';
    if (!data.reason) e.reason = 'Pick one';
    if (!data.message) e.message = 'Required';
    setErrors(e);
    if (Object.keys(e).length === 0) setSubmitted(true);
  };

  const Chip = ({ value, current, onClick, children }) => (
    <button type="button"
      className={`chip ${current === value ? 'active' : ''}`}
      onClick={() => onClick(value)}>
      {children}
    </button>
  );

  return (
    <div className="page-wrap page-enter">
      <section className="page-hero sky">
        <div className="bg-num">@</div>
        {/* Oval decorations */}
        <div className="hero-oval"   style={{ width: 480, height: 320, top: -80,  right: 120, transform: 'rotate(-18deg)' }} />
        <div className="hero-oval-2" style={{ width: 260, height: 180, top: 60,   right: 40,  transform: 'rotate(8deg)'  }} />
        <div className="hero-oval"   style={{ width: 200, height: 140, bottom: -40, left: -40, transform: 'rotate(12deg)'  }} />
        <div className="hero-oval-2" style={{ width: 320, height: 220, bottom: 30,  right: 300, transform: 'rotate(-6deg)' }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="crumbs">NJTS / Contact</div>
          <h1 className="display">Get in<br/>Touch.</h1>
          <p className="tagline">
            Questions about registration, clinics, or the program? We respond within 48 hours — usually faster. Better yet, come see us in person in Holmdel, NJ.
          </p>
        </div>
      </section>

      <section style={{ background: 'var(--white)' }}>
        <div className="contact-wrap">
          <div className="contact-side">
            <h2>Let's <span className="sky">talk</span> volleyball.</h2>
            <p>Four ways to reach NJ Team Sports. Pick whichever is easiest — we monitor all of them.</p>

            <div className="contact-info">
              <div className="info-card">
                <svg className="icon" viewBox="0 0 32 32" fill="none">
                  <rect x="3" y="6" width="26" height="20" stroke="currentColor" strokeWidth="2" />
                  <path d="M 3 8 L 16 17 L 29 8" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
                <div>
                  <div className="l">Email</div>
                  <div className="v">njteamsports@gmail.com</div>
                </div>
              </div>

              <div className="info-card sky">
                <svg className="icon" viewBox="0 0 32 32" fill="none">
                  <path d="M 16 4 C 10 4, 6 8, 6 14 C 6 20, 16 28, 16 28 C 16 28, 26 20, 26 14 C 26 8, 22 4, 16 4 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="16" cy="14" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
                <div>
                  <div className="l">Address</div>
                  <div className="v">Hillcrest Road, Holmdel, NJ 07733</div>
                </div>
              </div>

              <div className="info-card">
                <svg className="icon" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M 16 8 V 16 L 22 19" stroke="currentColor" strokeWidth="2" />
                </svg>
                <div>
                  <div className="l">Weekday Hours</div>
                  <div className="v">Mon–Fri · 9:00 am – 9:00 pm</div>
                </div>
              </div>

              <div className="info-card sky">
                <svg className="icon" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M 16 8 V 16 L 22 19" stroke="currentColor" strokeWidth="2" />
                </svg>
                <div>
                  <div className="l">Weekend Hours</div>
                  <div className="v">Sat–Sun · 9:00 am – 5:00 pm</div>
                </div>
              </div>
            </div>
          </div>

          {submitted ? (
            <div className="success-card">
              <svg className="check" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="36" fill="none" stroke="#5BB6E2" strokeWidth="3" />
                <path d="M 24 42 L 36 54 L 58 28" fill="none" stroke="#5BB6E2" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 12, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--sky)', marginBottom: 8 }}>
                Message received
              </div>
              <h3>Thanks, {data.name.split(' ')[0]}.</h3>
              <p>We'll be in touch at <b>{data.email}</b> within 48 hours.</p>
              <button className="btn btn-sky" onClick={() => { setSubmitted(false); setData({ name: '', email: '', phone: '', reason: '', athleteAge: '', message: '' }); }}>
                Send Another <ArrowRight />
              </button>
            </div>
          ) : (
            <div className="contact-form-card">
              <h3>Send a Message</h3>

              <div className="form-row">
                <div className="field">
                  <label>Your Name</label>
                  <input value={data.name} onChange={e => update('name', e.target.value)} />
                  {errors.name && <div className="err">{errors.name}</div>}
                </div>
                <div className="field">
                  <label>Phone (optional)</label>
                  <input type="tel" value={data.phone} onChange={e => update('phone', e.target.value)} placeholder="(732) 555-1234" />
                </div>
              </div>

              <div className="form-row single">
                <div className="field">
                  <label>Email</label>
                  <input type="email" value={data.email} onChange={e => update('email', e.target.value)} />
                  {errors.email && <div className="err">{errors.email}</div>}
                </div>
              </div>

              <div className="form-row single">
                <div className="field">
                  <label>I'm reaching out about...</label>
                  <div className="chip-row">
                    <Chip value="league" current={data.reason} onClick={v => update('reason', v)}>League Registration</Chip>
                    <Chip value="clinic" current={data.reason} onClick={v => update('reason', v)}>Clinics</Chip>
                    <Chip value="private" current={data.reason} onClick={v => update('reason', v)}>Private Lessons</Chip>
                    <Chip value="coach-job" current={data.reason} onClick={v => update('reason', v)}>Coaching Job</Chip>
                    <Chip value="other" current={data.reason} onClick={v => update('reason', v)}>Other</Chip>
                  </div>
                  {errors.reason && <div className="err">{errors.reason}</div>}
                </div>
              </div>

              {(data.reason === 'league' || data.reason === 'clinic' || data.reason === 'private') && (
                <div className="form-row single">
                  <div className="field">
                    <label>Athlete Age</label>
                    <select value={data.athleteAge} onChange={e => update('athleteAge', e.target.value)}>
                      <option value="">Select...</option>
                      {[11,12,13,14,15,16,17].map(a => <option key={a} value={a}>{a}</option>)}
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              )}

              <div className="form-row single">
                <div className="field">
                  <label>Message</label>
                  <textarea value={data.message} onChange={e => update('message', e.target.value)} placeholder="Tell us a little about what you're looking for..." />
                  {errors.message && <div className="err">{errors.message}</div>}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 28 }}>
                <button className="btn btn-navy" onClick={submit}>Send Message <ArrowRight /></button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

window.ContactPage = ContactPage;
