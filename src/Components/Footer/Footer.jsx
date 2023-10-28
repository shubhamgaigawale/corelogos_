import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer class="page-footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 py-3">
            <h3>
              Core<span class="fg-warning">Legos</span>
            </h3>
            In Progress
          </div>
          <div class="col-lg-3 py-3">
            <h5>Contact Information</h5>
            <p>Fairfax, Virginia, USA</p>
            <p>Email: example@email.com</p>
            <p>Phone: +00 00000000</p>
          </div>
          <div class="col-lg-3 py-3">
            <h5>Company</h5>
            <ul class="footer-menu">
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/career">Career</Link>
              </li>
            </ul>
          </div>
        </div>

        <hr />

        <div class="row mt-4">
          <div class="col-md-6">
            <p>© Corelegos</p>
          </div>
          {/* <div class="col-md-6 text-right">
            <div class="sosmed-button">
              <a href="#">
                <span class="mai-logo-facebook-f"></span>
              </a>
              <a href="#">
                <span class="mai-logo-twitter"></span>
              </a>
              <a href="#">
                <span class="mai-logo-youtube"></span>
              </a>
              <a href="#">
                <span class="mai-logo-linkedin"></span>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};
