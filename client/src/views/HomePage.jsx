import "react";
import TopNavbar from "../components/Navbar/TopNavbar";
import BotNavbar from "../components/Navbar/BotNavbar";
import Carousel from "../components/HomePage/Carousel";
import Categories from "../components/HomePage/Categories"
import About from "../components/HomePage/About"
import HomeBanner from "../components/HomePage/HomeBanner";
import Feedback from "../components/HomePage/Feedback";
import Contact from "../components/HomePage/Contact";

const HomePage = () => {
  return (
    <>
      <TopNavbar />
      <BotNavbar />
      <Carousel />
      <Categories />
      <About />
      <HomeBanner />
      <Feedback />
      <Contact />
    </>
  )
}

export default HomePage;