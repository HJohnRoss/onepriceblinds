import "react"
import Delivery from "../../assets/emoticons/delivery-e.png"
import SaveMoney from "../../assets/emoticons/saveMoney-e.png"
import Sample from "../../assets/emoticons/sample-e.png"

const HomeBanner = () => {
  return (
    <section id="HomeBanner" className="homeBanner">
      <h2 className="homeBanner__h2">Why Choose Us</h2>

      <div className="homeBanner__container">
        <div className="homeBanner__container--item">
          <img className="homeBanner__container--item--img" src={Delivery} draggable="false" alt="Delivery Emoticon" />
          <p className="homeBanner__container--item--text">
            Superior
            <br />
            Customer Care
          </p>
        </div>

        <div className="homeBanner__container--item">
          <img className="homeBanner__container--item--img" src={SaveMoney} draggable="false" alt="Saving Money Emoticon" />
          <p className="homeBanner__container--item--text">
            Competitive
            <br />
            Pricing
          </p>
        </div>

        <div className="homeBanner__container--item">
          <img className="homeBanner__container--item--img" src={Sample} draggable="false" alt="Sample Emoticon" />
          <p className="homeBanner__container--item--text">
            Always FREE
            <br />
            Sample
            <br />
            before you buy
          </p>
        </div>
      </div>
    </section>
  )
}

export default HomeBanner