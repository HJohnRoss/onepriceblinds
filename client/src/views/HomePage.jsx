import "react";
import TopNavbar from "../components/Navbar/TopNavbar";
import BotNavbar from "../components/Navbar/BotNavBar";
import Carousel from "../components/HomePage/Carousel";
import Categories from "../components/HomePage/Categories"
import About from "../components/HomePage/About"
import HomeBanner from "../components/HomePage/HomeBanner";

const HomePage = () => {
  return (
    <>
      <TopNavbar />
      <BotNavbar />
      <Carousel />
      <Categories />
      <About />
      <HomeBanner />
    </>
  )
}

export default HomePage;