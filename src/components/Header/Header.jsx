import Logo from "../Logo/Logo"

const header = () => {
    return (
      <header className="navigation">
            <Logo />
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
              <a href="#reservas">
                  <li>Reservas</li>
              </a>
              <button>Compre um café</button>
          </ul>
      </header>
    )
  }
  
  export default header