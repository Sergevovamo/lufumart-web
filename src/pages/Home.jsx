import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Flashsales from "../components/Flashsales";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Sellers from "../components/Sellers";
import TopSelling from "../components/TopSelling";
import Recent from "../components/Recent";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Flashsales />
      <Products/>
      <Sellers />
      <TopSelling />
      <Recent />
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
