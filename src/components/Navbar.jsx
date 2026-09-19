function Navbar() {
  return (
    <header className="navbar">
      <a href="/" className="navbar__logo" aria-label="Roast Lab home">
        <span className="navbar__logo-main">ROAST LAB</span>
        <span className="navbar__logo-meta">COFFEE RESEARCH</span>
      </a>

      <nav className="navbar__links" aria-label="Primary navigation">
        <a href="#lab">LAB</a>
        <a href="#collection">COLLECTION</a>
        <a href="#process">PROCESS</a>
      </nav>

      <a href="#lab" className="navbar__cta">
        ENTER THE LAB <span aria-hidden="true">→</span>
      </a>
    </header>
  );
}

export default Navbar;