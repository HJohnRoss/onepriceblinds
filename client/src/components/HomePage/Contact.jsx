import "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact__info">
        <h2 className="contact__info--h2">CONTACT <hr /></h2>
        <h3 className="contact__info--h3">Get In Touch With Us</h3>
        <p className="contact__info--text">Call or Message Us Anytime!</p>

        <Link to="tel:775-460-0001" className="">
          <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
          </svg>
          &nbsp;
          775-460-0001
        </Link>

        <Link to="mailto:info@onepriceblinds.com" className="">
          <svg className="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          &nbsp;
          info@onepriceblinds.com
        </Link>

        <p className="">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          &nbsp;
          <div>
            <p>2475 West Cheyenne #140 </p>
            <p>Las Vegas, NV 89032</p>
          </div>
        </p>
      </div>

      <form className="contact__form">
        
      </form>
    </section>
  )
}

export default Contact;