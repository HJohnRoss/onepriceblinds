import { useState } from "react";
import DoubleQuote from "../../assets/emoticons/doubleQuotes-e.png";

const Feedback = () => {
  const [current, setCurrent] = useState(0);
  const totalSlides = 3;

  const handleBack = () => {
    if (current == 0) {
      setCurrent(3);
    } else {
      setCurrent(current - 1);
    }
  }

  const handleFoward = () => {
    if (current == totalSlides) {
      setCurrent(0);
    } else {
      setCurrent(current + 1)
    }
    console.log(current)
  }

  return (
    <section id="Customer Feedback" className="feedback">
      <h2 className="feedback__header">What Our Customers Love About Us!</h2>

      <div className="feedback__carousel" data-carousel>
        {/* changing current slide */}
        <button className="feedback__carousel--btn" data-carousel-btn="prev" onClick={() => handleBack()}>
          <svg className="feedback__carousel--btn--svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* rendering current feedback */}
        <ul className="feedback__carousel--list">
          {
            current == 0 ?
              <Slide text="Great people to work with, answered all my questions before purchasing." name="G. Smith" isActive={true} /> : ""
          }
          {
            current == 1 ?
              <Slide text="Amazing blinds! Very good prices. Great customer service! Would recommend." name="D. Stark" isActive={false} /> : ""
          }
          {
            current == 2 ?
              <Slide text="Great communication, very helpful and coureous. Blinds are exactly as I ordered them." name="M. Bogatin" isActive={false} /> : ""
          }
          {
            current == 3 ?
              <Slide text="This was a replacement for a broken blinds I had. I wanted it to match the other I had. PEFECT. GOOD QUALITY! MADE TO ORDER. THANK YOU." name="R. Pinto" isActive={false} /> : ""
          }
        </ul>

        {/* changing current slide */}
        <button className="feedback__carousel--btn" data-carousel-btn="next" onClick={() => handleFoward()}>
          <svg className="feedback__carousel--btn--svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* showing current slide */}
      <div className="feedback__currentSlide">
        <hr onClick={() => setCurrent(0)} className={`feedback__currentSlide--hr ${current == 0 ? "feedback__currentSlide--hr--active" : ""}`} />
        <hr onClick={() => setCurrent(1)} className={`feedback__currentSlide--hr ${current == 1 ? "feedback__currentSlide--hr--active" : ""}`} />
        <hr onClick={() => setCurrent(2)} className={`feedback__currentSlide--hr ${current == 2 ? "feedback__currentSlide--hr--active" : ""}`} />
        <hr onClick={() => setCurrent(3)} className={`feedback__currentSlide--hr ${current == 3 ? "feedback__currentSlide--hr--active" : ""}`} />
      </div>
    </section>
  )
}

const Slide = ({ text, name }) => {

  return (
    <li className="feedback__carousel--slide">
      <p className="feedback__carousel--slide--text">"{text}"</p>
      <div className="feedback__carousel--slide--container">
        <img className="feedback__carousel--slide--container--img" draggable="false" src={DoubleQuote} alt="Double Quoutes image" />
        <p className="feedback__carousel--slide--container--buyer">
          <p className="feedback__carousel--slide--container--buyer--name">{name}</p>
          Buyer
        </p>
      </div>
    </li>
  )
}

export default Feedback