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
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-md-4">
            <Left />
          </div>
          <div className="col-md-4 bg-danger">
            <Content />
          </div>
          <div className="col-md-4 bg-success">
            <Right />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
