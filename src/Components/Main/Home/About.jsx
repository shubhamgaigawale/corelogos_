import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className="page-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 py-3">
            <div className="subhead">About Us</div>
            <h2 className="title-section">
              Delivering <span className="fg-primary"> Next Gen </span>Solutions
            </h2>
            <p>
              CoreLogos, a woman-owned small business headquartered in Fairfax,
              Virginia, is your dedicated ally in achieving excellence. With a
              journey spanning 13 years, we began by honing IT skills and
              training professionals in cutting-edge technologies. Today, we are
              your go-to solution architects, transforming concepts into digital
              realities for both government and private sectors.
            </p>
            <p>
              CoreLogos excels in IT systems architecture, platform automation,
              DevSecOps, cloud solutions, and records management. We understand
              that each customer is unique, and that's why we tailor our
              product-centric solutions to meet your specific needs. Choose
              CoreLogos for innovation, expertise, and unwavering commitment to
              your success.
            </p>
            <Link to="/aboutus" className="btn btn-primary mt-4">
              Read More
            </Link>
          </div>
          <div className="col-lg-6 py-3">
            <div className="about-img">
              <img src="../assets/img/20944999.jpg" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
