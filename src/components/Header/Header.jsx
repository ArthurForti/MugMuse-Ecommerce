import { useEffect, useState } from "react";
import Logo from "../Logo/Logo";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCloseMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflowy = "scroll";
    } else {
      document.body.style.overflowy = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <header className={`navigation ${isMobileMenuOpen ? "mobile-open" : ""}`}>
      <Logo />
      <button className="mobile-menu-toggle" onClick={handleMobileMenuToggle}>
        ☰
      </button>
      
      <ul className="navigation__options">
        {isMobileMenuOpen && (
          <button className="mobile-close-toggle" onClick={handleCloseMobileMenu}>
            ✕
          </button>
        )}
        <a href="#">
          <li onClick={handleCloseMobileMenu}>Inicio</li>
        </a>
        <a href="#">
          <li onClick={handleCloseMobileMenu}>Mug Menu</li>
        </a>
        <a href="#">
          <li onClick={handleCloseMobileMenu}>Sobre</li>
        </a>
        <a href="#reservas">
          <li onClick={handleCloseMobileMenu}>Reservas</li>
        </a>
        <button onClick={handleCloseMobileMenu}>Compre um café</button>
      </ul>
    </header>
  );
};

export default Header;
