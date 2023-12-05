import { FaArrowRightLong } from "react-icons/fa6";
import heroBanner from '@images/hero-banner-1.png';

const Hero = () => {
  return (
    <section className="hero-container">
        <div className="hero-container__content">
            <h2>Sinta essa sensação, <br/>
            Um café para cada momento.</h2>
            <p>Seu dia merece um café, você merece um café, todos nós merecemos um café</p>
            <a href="#">
              <span>Visite o menu</span>
              <FaArrowRightLong id="hero-arrow"/>
            </a>
        </div>
        <div className="hero-container__banner">
        <img src={heroBanner} alt="Hero Banner" />
        </div>
    </section>
  )
}

export default Hero