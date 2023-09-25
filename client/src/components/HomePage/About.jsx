import "react"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__text">
        <h4 className="about__text__h4">
          ABOUT
          <hr className="about__text__h4--line" />
        </h4>

        <h2 className="about__text__h2">One Price Blinds</h2>

        <p className="about__text__description">
          One Price Blinds was founded on the notion that quality custom made blinds do not need to be expensive. Whether you need blinds for your home, office or special project One Price Blinds will make your online shopping experience easy and affordable.
        </p>

        <div className="about__text__container">
          {/* need to add links */}
          <Link to="" className="about__text__container--yellowBtn about__text__container--btn">CALL NOW</Link>
          <Link to="" className="about__text__container--whiteBtn about__text__container--btn">MORE INFO</Link>
        </div>
      </div>
    </section>
  )
}

export default About;