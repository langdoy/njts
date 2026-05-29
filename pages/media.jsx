function MediaPage({ setRoute }) {
  const [filter, setFilter] = React.useState('all');
  const [lightbox, setLightbox] = React.useState(null);
  const [closing, setClosing] = React.useState(false);
  const [tiles, setTiles] = React.useState([]);

  React.useEffect(() => {
    fetch('image_gallery.json')
      .then(r => r.json())
      .then(data => setTiles(data.map((t, i) => ({ ...t, id: 'm' + String(i + 1).padStart(2, '0') }))))
      .catch(() => {});
  }, []);

  React.useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => { if (e.key === 'Escape') closeLightbox(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [lightbox]);

  const openLightbox = (e, src) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const thumbCx = rect.left + rect.width  / 2;
    const thumbCy = rect.top  + rect.height / 2;
    // Clamp so expanded image stays fully inside the viewport
    const maxW = Math.min(720, window.innerWidth  * 0.88);
    const maxH = window.innerHeight * 0.78;
    const x = Math.max(maxW / 2 + 12, Math.min(thumbCx, window.innerWidth  - maxW / 2 - 12));
    const y = Math.max(maxH / 2 + 12, Math.min(thumbCy, window.innerHeight - maxH / 2 - 12));
    setLightbox({ src, x, y });
    setClosing(false);
  };

  const closeLightbox = () => {
    setClosing(true);
    setTimeout(() => { setLightbox(null); setClosing(false); }, 180);
  };

  const filters = [
    { id: 'all',      label: 'All' },
    { id: 'matches',  label: 'Matches' },
    { id: 'practice', label: 'Practice' },
    { id: 'tourneys', label: 'Tournaments' },
    { id: 'teams',    label: 'Team Photos' },
    { id: 'events',   label: 'Events' },
  ];

  const visible = filter === 'all' ? tiles : tiles.filter(t => t.cat === filter);

  // Lightbox is rendered OUTSIDE page-wrap so position:fixed is relative
  // to the true viewport, not to the page-enter transform ancestor.
  return (
    <>
      {lightbox && (
        <div className="lightbox-backdrop" onClick={closeLightbox} />
      )}
      {lightbox && (
        <img
          key={lightbox.src}
          className={`lightbox-img${closing ? ' closing' : ''}`}
          src={lightbox.src}
          alt=""
          style={{ left: lightbox.x, top: lightbox.y }}
          onClick={closeLightbox}
        />
      )}

      <div className="page-wrap page-enter">
        <section className="page-hero tint">
          <div className="bg-num">+</div>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div className="crumbs">NJTS / Media</div>
            <h1 className="display">Media<br/>Gallery.</h1>
            <p className="tagline" style={{ color: 'var(--muted)' }}>
              Match highlights, practice grit, team photos, and everything in between. Click any photo to expand it.
            </p>
          </div>
        </section>

        <section className="media-section">
          <div className="media-filters">
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', marginRight: 8 }}>Filter —</div>
            {filters.map(f => (
              <div key={f.id}
                   className={`filter ${filter === f.id ? 'active' : ''}`}
                   onClick={() => setFilter(f.id)}>
                {f.label}
              </div>
            ))}
            <div style={{ marginLeft: 'auto', fontFamily: 'JetBrains Mono', fontSize: 11, letterSpacing: '0.15em', color: 'var(--muted)' }}>
              {visible.length} ITEMS
            </div>
          </div>

          <div className="media-grid">
            {visible.map(t => (
              <div
                key={t.id}
                className="media-tile"
                onClick={e => openLightbox(e, t.src)}
              >
                <img src={t.src} alt={t.label} />
                <div className="meta">
                  <div className="l">{t.cat}</div>
                  <div className="t">{t.label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-strip">
          <h2 className="display">Want your<br/>shots featured?</h2>
          <p>If you're a photographer or parent with great match shots, send them in. Use <b style={{ color: 'var(--navy)' }}>#NJTeamSports</b> or reach out directly.</p>
          <button className="btn btn-navy" onClick={() => setRoute('contact')}>Submit Photos <ArrowRight /></button>
        </section>
      </div>
    </>
  );
}

window.MediaPage = MediaPage;
