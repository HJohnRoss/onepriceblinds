import { useState } from "react"
import { Link } from "react-router-dom";
import botNavLogo from "../../assets/logos/NewOPB_logo.png"

const BotNavbar = () => {

  // List of all of the directories with all of the categories of products
  const directory = [
    {
      name: "Blinds",
      categories: [
        { name: "Faux Wood Blinds", link: "" },
        { name: "Aluminum Blinds", link: "" },
        { name: "Real Wood Blinds", link: "" },
        { name: "Vertical Blinds", link: "" }
      ]
    },
    {
      name: "Shades",
      categories: [
        { name: "Honeycomb/Cellular", link: "" },
        { name: "Roller Shades", link: "" },
        { name: "Roman Shades", link: "" },
        { name: "Sheer Shades", link: "" },
        { name: "Solar Shades", link: "" },
        { name: "Temp Shades", link: "" },
        { name: "Woven Wood Shades", link: "" },
        { name: "Zebra Shades", link: "" }
      ]
    },
    {
      name: "Motorized",
      categories: [
        { name: "Honeycomb/Cellular", link: "" },
        { name: "Roller Shades", link: "" },
        { name: "Sheer Shades", link: "" },
        { name: "Solar Shades", link: "" },
        { name: "Woven Wood Shades", link: "" },
        { name: "Zebra Shades", link: "" },
      ]
    },
    {
      name: "Repair Items",
      categories: [
        { name: "Blind Repair Parts", link: "" },
      ]
    },
    {
      name: "How To",
      categories: [
        { name: "Measure", link: "" },
        { name: "Install", link: "" },
      ]
    },
    { name: "About Us", link: "" },
    { name: "Contact", link: "" }
  ]
  return (
    <>
      <nav className="botNavbar">
        {/* One Price Blinds Logo (image) */}
        <img className="botNavbar__logo" src={botNavLogo} alt="One Price Blinds Logo" />

        {/* displays all directories */}
        <div className="botNavbar__navigation">
          {
            directory.map((item, index) =>
              // checks if there is a dropdown that we need to create
              index < 5 ?
                <div key={index}>
                  {/* function call that creates dropdown menues per directory */}
                  <CreateCategory item={item} index={index} />
                </div>
                :
                // if there wasnt a dropdown menu needed it creates a link to the page indicated
                // =================================== add to link here =========================================
                <Link to={`/${item.link}`} key={index} className="botNavbar__navigation--item--text">{item.name}</Link>
            )
          }
        </div>

        {/* doing tommorow  */}
        <button>%phoneSvg% 775-460-0001</button>
        <p>%userSvg%</p>
        <p>%bagSvg%</p>
      </nav>
    </>
  )
}

const CreateCategory = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="botNavbar__navigation--item" key={index}>
        {/* makes the dropdown disapear */}
        <div onMouseLeave={() => setIsOpen(false)} className="botNavbar__navigation--item--text--wrapper">
        {/* makes the dropdown appear */}
          <p onMouseOver={() => setIsOpen(true)} className="botNavbar__navigation--item--text">{item.name}</p>

          <ul className={`botNavbar__navigation__dropdown ${isOpen ? "botNavbar__navigation__dropdown--active" : "botNavbar__navigation__dropdown--inactive"}`}>
            {/* shows all items within the dropdown menue */}
            {
              item.categories.map((product, x) =>
              // =================================== add to link here =========================================
                <Link key={x} className="botNavbar__navigation__dropdown--item--link" to={product.link}>
                  <li className="botNavbar__navigation__dropdown--item">
                    {product.name}
                  </li>
                </Link>
              )
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default BotNavbar;