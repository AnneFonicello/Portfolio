function NavBar() {
  return (
    <nav id="navbar">
        <a href="#" className="nav-logo">Anne <span>Fonicello</span></a>
        <div className="nav-links" id="navLinks">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#contact" className="nav-cta">Contact</a>
        </div>
    </nav>
  );
}
export default NavBar;