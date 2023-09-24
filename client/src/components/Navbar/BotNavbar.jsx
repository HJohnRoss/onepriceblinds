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
                <Link to={`/${item.link}`} key={index} className="botNavbar__navigation--item--text--link">{item.name}</Link>
            )
          }
        </div>

        {/* doing tommorow  */}
        <div className="botNavbar__container">
          <Link to="tel:888-492-5463" className="botNavbar__container--phoneBtn">
            <svg className="botNavbar__container--phoneBtn--svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
            </svg> &nbsp; &nbsp; 775-460-0001</Link>
          {/* ================================= ADD LINK TO ================================= */}
          <Link to="" className="botNavbar__container--link">
            <svg className="botNavbar__container--svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </Link>
          {/* ================================= ADD LINK TO ================================= */}
          <Link to="" className="botNavbar__container--link">
            <svg className="botNavbar__container--svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </Link>
        </div>
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
          <div onMouseEnter={() => setIsOpen(true)} className="botNavbar__navigation--item--text--container">
            <p className="botNavbar__navigation--item--text">{item.name}</p> 	&nbsp;
            {/* dropdown SVG */}
            <svg className="botNavbar__navigation--item--svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>

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
      </div >
    </>
  )
}

export default BotNavbar;