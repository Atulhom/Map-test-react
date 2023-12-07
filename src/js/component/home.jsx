import React from "react";
import Header from "./header";
import Navbar from "./navbar";
import Sort from "./sort";
import Cards from "./cards";

//create your first component
const Home = () => {
  return (
    <div className="text-center">
      <Header />
      <Navbar />
      <Sort />
      <p className="text-end fs-6 fw-bold mt-3 me-5">
        Learn about our challenge types ⭐
      </p>
      <Cards />
    </div>
  );
};

export default Home;
