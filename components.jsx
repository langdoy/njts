// NJTS Volleyball — shared components
const { useState, useEffect, useRef } = React;

// ---------- Clean NJTS mark for nav/footer ----------
// A simplified star + volleyball composition derived from the brand DNA
function NJTSMark({ size = 42, mono = false }) {
  const sky = mono ? "#FFFFFF" : "#5BB6E2";
  const navy = mono ? "#FFFFFF" : "#0E3D7C";
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" aria-hidden>
      {/* Star background */}
      <path d="M30 4 L36 22 L55 22 L40 33 L46 52 L30 41 L14 52 L20 33 L5 22 L24 22 Z"
            fill={sky} stroke={navy} strokeWidth="1.5" strokeLinejoin="round" />
      {/* Volleyball overlapping center */}
      <circle cx="30" cy="32" r="11" fill="#FFFFFF" stroke={navy} strokeWidth="1.5" />
      <g stroke={navy} strokeWidth="1.2" fill="none" strokeLinecap="round">
        <path d="M30 21 C 26 26, 26 38, 30 43" />
        <path d="M30 21 C 34 26, 34 38, 30 43" />
        <path d="M20 28 C 24 30, 36 30, 40 28" opacity="0.7" />
        <path d="M20 36 C 24 34, 36 34, 40 36" opacity="0.7" />
      </g>
    </svg>
  );
}

// ---------- Simple star ----------
function Star({ size = 40, color = "#5BB6E2", stroke = "#0E3D7C" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      <path d="M30 4 L36 22 L55 22 L40 33 L46 52 L30 41 L14 52 L20 33 L5 22 L24 22 Z"
            fill={color} stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

// ---------- Arrow ----------
function ArrowRight({ size = 14 }) {
  return (
    <svg className="arrow" width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M1 7 H 13 M 8 2 L 13 7 L 8 12" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
}

// ---------- Volleyball static ----------
function VolleyballStatic({ size = 240, color = "#5BB6E2", stroke = "#0E3D7C" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      <circle cx="100" cy="100" r="92" fill={color} stroke={stroke} strokeWidth="3" />
      <g clipPath="url(#vbStaticClip)" stroke={stroke} strokeWidth="2.4" fill="none" strokeLinecap="round">
        <g>
          <path d="M 100 8 C 70 50, 70 150, 100 192" />
          <path d="M 100 8 C 130 50, 130 150, 100 192" />
        </g>
        <g transform="rotate(60 100 100)">
          <path d="M 100 8 C 70 50, 70 150, 100 192" />
          <path d="M 100 8 C 130 50, 130 150, 100 192" />
        </g>
        <g transform="rotate(120 100 100)">
          <path d="M 100 8 C 70 50, 70 150, 100 192" />
          <path d="M 100 8 C 130 50, 130 150, 100 192" />
        </g>
      </g>
      <defs>
        <clipPath id="vbStaticClip"><circle cx="100" cy="100" r="92" /></clipPath>
      </defs>
    </svg>
  );
}

// ---------- Decorative swoosh (logo motif simplified) ----------
function Swoosh({ size = 600, color = "#5BB6E2" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 400 400" fill="none">
      <path d="M 40 200 C 80 60, 320 60, 360 200 C 380 280, 280 360, 200 360 C 120 360, 40 280, 40 200 Z"
            fill="none" stroke={color} strokeWidth="2" />
      <path d="M 80 220 C 130 100, 280 100, 320 220" fill="none" stroke={color} strokeWidth="3" />
      <path d="M 80 220 L 84 226 L 90 230" fill="none" stroke={color} strokeWidth="3" />
    </svg>
  );
}

// ---------- Nav ----------
function Nav({ route, setRoute }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Page hero background dictates nav color when at top
  const lightBg = route === 'home' ? false : routeHasLightHero(route);

  const items = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'coaches', label: 'Coaches' },
    { id: 'media', label: 'Media' },
    { id: 'socials', label: 'Socials' },
  ];

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''} ${lightBg && !scrolled ? 'light-bg' : ''}`}>
      <div className="nav-brand" onClick={() => { setRoute('home'); setOpen(false); }}>
        <NJTSMark size={42} />
        <div className="wordmark">
          <span className="t1">NJTS Volleyball</span>
          <span className="t2">New Jersey Team Sports</span>
        </div>
      </div>

      <div className={`nav-links ${open ? 'open' : ''}`}>
        {items.map(it => (
          <button key={it.id}
            className={route === it.id ? 'active' : ''}
            onClick={() => { setRoute(it.id); setOpen(false); }}>
            {it.label}
          </button>
        ))}
        <button className="nav-cta" onClick={() => { setRoute('contact'); setOpen(false); }}>
          Contact <ArrowRight />
        </button>
      </div>

      <button className="nav-burger" onClick={() => setOpen(o => !o)} aria-label="Menu">
        <span /><span /><span />
      </button>
    </nav>
  );
}

function routeHasLightHero(route) {
  return route === 'media'; // media page uses light hero
}

// ---------- Footer ----------
function Footer({ setRoute }) {
  return (
    <footer className="foot">
      <div className="foot-grid">
        <div>
          <div className="foot-brand">
            <NJTSMark size={48} />
            <div>
              <div className="wm">NJTS Volleyball</div>
              <div className="wm-sub">New Jersey Team Sports</div>
            </div>
          </div>
          <p style={{ marginTop: 20, maxWidth: 320, fontSize: 14, color: 'rgba(255,255,255,.72)' }}>
            Central New Jersey's premier volleyball club — developing skilled, confident, and passionate athletes aged 11–17 in a supportive competitive environment.
          </p>
        </div>
        <div>
          <h5>Site</h5>
          <ul>
            <li><a onClick={() => setRoute('home')}>Home</a></li>
            <li><a onClick={() => setRoute('about')}>About Us</a></li>
            <li><a onClick={() => setRoute('coaches')}>Meet the Coaches</a></li>
            <li><a onClick={() => setRoute('media')}>Media</a></li>
            <li><a onClick={() => setRoute('socials')}>Socials</a></li>
            <li><a onClick={() => setRoute('contact')}>Contact</a></li>
          </ul>
        </div>
        <div>
          <h5>Contact</h5>
          <ul>
            <li>Hillcrest Road</li>
            <li>Holmdel, NJ 07733</li>
            <li><a href="mailto:njteamsports@gmail.com">njteamsports@gmail.com</a></li>
            <li>Mon–Fri 9am–9pm</li>
            <li>Sat–Sun 9am–5pm</li>
          </ul>
        </div>
        <div>
          <h5>Follow</h5>
          <ul>
            <li><a onClick={() => setRoute('socials')}>Instagram</a></li>
            <li><a onClick={() => setRoute('socials')}>TikTok</a></li>
            <li><a onClick={() => setRoute('socials')}>YouTube</a></li>
            <li><a onClick={() => setRoute('socials')}>Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="foot-bottom">
        <div>© 2026 NJ Team Sports · Holmdel, New Jersey</div>
        <div>njteamsports@gmail.com</div>
      </div>
    </footer>
  );
}

// ---------- Page transition wipe ----------
function Wipe({ show }) {
  return (
    <div className={`wipe ${show ? 'show' : ''}`}>
      <div className="wipe-panel" />
      <div className="wipe-panel" />
      <div className="wipe-panel" />
      <div className="wipe-panel" />
    </div>
  );
}

Object.assign(window, { NJTSMark, Star, ArrowRight, VolleyballStatic, Swoosh, Nav, Footer, Wipe });
