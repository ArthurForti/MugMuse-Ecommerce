const header = () => {
    return (
      <header className="navigation">
          <a className="navigation__logo" href="#">
              <img src="../../../src/assets/images/logo-MugMuse.svg" alt="Logo MugMuse" />
              <span>Mug Muse</span>
          </a>
          <ul className="navigation__options">
              <a href="#">
                  <li>Inicio</li>
              </a>
              <a href="#">
                  <li>Mug Menu</li>
              </a>
              <a href="#">
                  <li>Sobre</li>
              </a>
              <a href="#">
                  <li>Reservas</li>
              </a>
              <button>Compre um café</button>
          </ul>
      </header>
    )
  }
  
  export default header