import Logo from '../Logo/Logo';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer-container">
        <section className="footer-container__main">
            <Logo/>
            <div className="footer-container__main__social">
                <a href="#">
                    <FaFacebookF />
                </a>
                <a href="#">
                    <FaInstagram /> 
                </a>
                <a href="#">
                    <FaXTwitter />
                </a>
            </div>
        </section>

        <section className="footer-container__opening">
            <h2>Funcionamento</h2>
            <span>Seg-Sex: 08:00 - 20:00 <br/>
            Sab-Dom: 09:00 - 17:00</span>
        </section>

        <section className="footer-container__contact">
            <h2>Contate-nos</h2>
            <address>
                Avenida Torra Escura, 123, Arabica <br/>
                CEP: 12345-678, Cafélândia <br/>
                (12) 3456-7890
            </address>
            <address>
                <a href="mailto:info@mugmuse.com">info@mugmuse.com</a>
            </address>
        </section>

        <section className="footer-container__subscribe">
            <h2>Inscreva-se</h2>
            <input type="email" placeholder="Insira seu e-mail" name="" id="" />
        </section>

    </footer>
  )
}

export default Footer