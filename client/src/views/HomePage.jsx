import "react";
import TopNavbar from "../components/Navbar/TopNavbar";
import BotNavbar from "../components/Navbar/BotNavBar";
import Carousel from "../components/HomePage/Carousel";
import Categories from "../components/HomePage/Categories"

const HomePage = () => {
  return (
    <>
      <TopNavbar />
      <BotNavbar />
      <Carousel />
      <Categories />
    </>
  )
}

export default HomePage;