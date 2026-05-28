function MediaPage({ setRoute }) {
  const [filter, setFilter] = React.useState('all');
  const [lightbox, setLightbox] = React.useState(null);
  const [closing, setClosing] = React.useState(false);

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

  const tiles = [
    { id: 'm01', src: 'images/gallery/img1.jpg',   label: 'NJTS in Action',      cat: 'matches'  },
    { id: 'm02', src: 'images/gallery/img2.jpg',   label: 'Team Play',           cat: 'matches'  },
    { id: 'm03', src: 'images/gallery/img3.jpg',   label: 'On the Court',        cat: 'practice' },
    { id: 'm04', src: 'images/gallery/img4.jpg',   label: 'Game Day',            cat: 'matches'  },
    { id: 'm05', src: 'images/gallery/img5.jpg',   label: 'Team Huddle',         cat: 'teams'    },
    { id: 'm06', src: 'images/gallery/img6.jpg',   label: 'Practice Session',    cat: 'practice' },
    { id: 'm07', src: 'images/gallery/img7.webp',  label: 'Match Highlights',    cat: 'matches'  },
    { id: 'm08', src: 'images/gallery/img8.webp',  label: 'Tournament Action',   cat: 'tourneys' },
    { id: 'm09', src: 'images/gallery/img9.webp',  label: 'Drill Work',          cat: 'practice' },
    { id: 'm10', src: 'images/gallery/img10.webp', label: 'Team Photo',          cat: 'teams'    },
    { id: 'm11', src: 'images/gallery/img11.webp', label: 'Competitive Play',    cat: 'matches'  },
    { id: 'm12', src: 'images/gallery/img12.webp', label: 'Tournament Day',      cat: 'tourneys' },
    { id: 'm13', src: 'images/gallery/img13.webp', label: 'Athletes at Work',    cat: 'practice' },
    { id: 'm14', src: 'images/gallery/img14.webp', label: 'Big Tournament',      cat: 'tourneys' },
    { id: 'm15', src: 'images/gallery/img15.webp', label: 'Serving Drills',      cat: 'practice' },
    { id: 'm16', src: 'images/gallery/img16.webp', label: 'Squad Goals',         cat: 'teams'    },
    { id: 'm17', src: 'images/gallery/img17.webp', label: 'Event Day',           cat: 'events'   },
    { id: 'm18', src: 'images/gallery/img18.webp', label: 'Block & Spike',       cat: 'matches'  },
    { id: 'm19', src: 'images/gallery/img19.webp', label: 'Conditioning',        cat: 'practice' },
    { id: 'm20', src: 'images/gallery/img20.webp', label: 'Team Celebration',    cat: 'events'   },
    { id: 'm21', src: 'images/gallery/img21.webp', label: 'Match Day',           cat: 'matches'  },
    { id: 'm22', src: 'images/gallery/img22.webp', label: 'Group Photo',         cat: 'teams'    },
    { id: 'm23', src: 'images/gallery/img23.webp', label: 'Tournament Finals',   cat: 'tourneys' },
    { id: 'm24', src: 'images/gallery/img24.webp', label: 'End of Season',       cat: 'events'   },
    { id: 'm25', src: 'images/gallery/img25.webp', label: 'NJTS Family',         cat: 'teams'    },
  ];

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
