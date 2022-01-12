import React from "react";
import Carousel from "../components/Carousel/Carousel";
import Nav from "../components/Nav/Nav";

function HomePage() {
  return (
    <div className="container home_Page">
      <Nav />
      <Carousel />
    </div>
  );
}

export default HomePage;
