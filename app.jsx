function App() {
  const [route, _setRoute] = React.useState('home');
  const [wiping, setWiping] = React.useState(false);

  const setRoute = (r) => {
    if (r === route) return;
    setWiping(true);
    setTimeout(() => {
      _setRoute(r);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 420);
    setTimeout(() => setWiping(false), 900);
  };

  React.useEffect(() => {
    const initial = window.location.hash.replace('#', '');
    if (['home', 'about', 'coaches', 'contact', 'media', 'socials'].includes(initial)) {
      _setRoute(initial);
    }
  }, []);
  React.useEffect(() => {
    window.location.hash = route;
  }, [route]);

  return (
    <>
      <Nav route={route} setRoute={setRoute} />
      {route === 'home' && <HomePage setRoute={setRoute} />}
      {route === 'about' && <AboutPage setRoute={setRoute} />}
      {route === 'coaches' && <CoachesPage setRoute={setRoute} />}
      {route === 'contact' && <ContactPage setRoute={setRoute} />}
      {route === 'media' && <MediaPage setRoute={setRoute} />}
      {route === 'socials' && <SocialsPage setRoute={setRoute} />}
      <Footer setRoute={setRoute} />
      <Wipe show={wiping} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
