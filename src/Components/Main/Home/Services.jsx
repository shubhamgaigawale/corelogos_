import React from "react";
import { Link } from "react-router-dom";

export const Services = () => {
  return (
    <div className="page-section">
      <div className="container">
        <div className="text-center">
          <div className="subhead">Our Services</div>
          <h2 className="title-section">Core Capabilities</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div className="text-center">
              <div className="img-fluid mb-4">
                <img src="../assets/img/services/28772962_7461487.svg" alt="" />
              </div>
              <h5>System Architecture</h5>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div className="text-center">
              <div className="img-fluid mb-4">
                <img src="../assets/img/services/25001216_7040861.svg" alt="" />
              </div>
              <h5>Fullstack Development</h5>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div className="text-center">
              <div className="img-fluid mb-4">
                <img src="../assets/img/services/25644111_7036170.svg" alt="" />
              </div>
              <h5>DevSecOps</h5>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div className="text-center">
              <div className="img-fluid mb-4">
                <img
                  src="../assets/img/services/12291385_Wavy_Tsp-04_Single-08.svg"
                  alt=""
                />
              </div>
              <h5>Automation</h5>
            </div>
          </div>
          <Link to="/services">
            Know more of our services
            <span class="mai-chevron-forward text-sm"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};
