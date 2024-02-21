import React from "react";
import { Footer } from "../components";

import aboutLazy from "../images/aboutLazy.png";
import gamingKeyboardImage from "../images/gamingKeyboardImage.png";
import gamingChairImage from "../images/gamingChairImage.png";
import gamingPlaystationImage from "../images/gamingPlaystationImage.png";
import gamingHardwareImage from "../images/gamingHardwareImage.png";
import { lazy } from "react";

const AboutPage = () => {
  return (
    <>
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <div className="info-container">
          <div>
            <p className="lead  para">
              Welcome to LazzyPlay! At LazzyPlay, we are passionate about
              gaming. Our mission is to provide gamers with the ultimate
              destination for all their gaming needs. Whether you're a casual
              player or a hardcore enthusiast, we've got you covered.
            </p>
          </div>
          <div>
            <img src={aboutLazy} height={400} width={400} />
          </div>
        </div>

        <h2 className="text-center py-4">Our Most Poppular Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src={gamingKeyboardImage}
                alt="Gaming Keyboard"
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">
                  HyperStrike Keyboards
                </h5>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src={gamingChairImage}
                alt="gamingChairImage"
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">PosturePro Chairs</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src={gamingPlaystationImage}
                alt="gamingPlaystationImage"
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">
                  Ultimate PlayStations
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src={gamingHardwareImage}
                alt="gamingHardwareImage"
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Hardware Accessories</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
