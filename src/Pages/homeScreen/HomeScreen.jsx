import React from "react";
import "./homeScreen.css";
import Navbar from "../../Components/navbar/Navbar";
import Banner from "../../Components/banner/Banner";
import Row from "../../Components/row/Row";
// import data from requests

const HomeScreen = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      {/* <Row title={"Netfliex Originals"} /> */}
    </div>
  );
};

export default HomeScreen;
