import "react"
import { Link } from "react-router-dom"
import MiniBlinds from "../../assets/homePage/categories/MiniBlinds-C.png"
import FauxWood from "../../assets/homePage/categories/FauxWood-C.png"
import Honeycomb from "../../assets/homePage/categories/Honeycomb-C.png"
import WovenWood from "../../assets/homePage/categories/WovenWood-C.png"
import ZebraShade from "../../assets/homePage/categories/ZebraShade-C.png"
import RollerShade from "../../assets/homePage/categories/RollerShade-C.png"
import VerticalBlinds from "../../assets/homePage/categories/VerticalBlinds-C.png"
import MotorizedBlinds from "../../assets/homePage/categories/MotorizedBlinds-C.png"
import RealWoodBlind from "../../assets/homePage/categories/RealWoodBlind-C.png"
import RomanShade from "../../assets/homePage/categories/RomanShade-C.png"
import SheerShade from "../../assets/homePage/categories/SheerShade-C.png"
import SolarShade from "../../assets/homePage/categories/SolarShade-C.png"

const Categories = () => {
  const allCategories = [
    { name: "Mini Blinds", link: "", img: MiniBlinds },
    { name: "Faux Wood Blinds", link: "", img: FauxWood },
    { name: "Honeycomb", link: "", img: Honeycomb },
    { name: "Woven Wood", link: "", img: WovenWood },
    { name: "Zebra Shades", link: "", img: ZebraShade },
    { name: "Roller Shades", link: "", img: RollerShade },
    { name: "Vertical Blinds", link: "", img: VerticalBlinds },
    { name: "Motorized Blinds", link: "", img: MotorizedBlinds },
    { name: "Real Wood Blinds", link: "", img: RealWoodBlind },
    { name: "Roman Shades", link: "", img: RomanShade },
    { name: "Sheer Shades", link: "", img: SheerShade },
    { name: "Solar Shades", link: "", img: SolarShade },
  ]
  return (
    <section id="categories" className="categories">
      <div className="categories__headers">
        <h2 className="categories__headers--h2">Custom Blinds and Shades</h2>
        <h3 className="categories__headers--h3">The Right Price, Everytime.</h3>
      </div>

      <div className="categories__container">
        {
          allCategories.map((category, index) =>
            <Link to={category.link} key={index} className="categories__container--card">
              <img src={category.img} alt="" />
              <span className="categories__container--card--text">{category.name}</span>
            </Link>
          )
        }
      </div>
    </section>
  )
}

export default Categories;