import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Left from "./Columns/Left";
import Content from "./Columns/Content";
import Right from "./Columns/Right";
const Homepage = () => {
  return (
    <>
      <Header />
      <div className="container-fluid dashboard">
        <div className="row mt-3">
          <div className="col-md-3">
            <Left />
          </div>
          <div className="col-md-6">
            <Content />
          </div>
          <div className="col-md-3">
            <Right />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
