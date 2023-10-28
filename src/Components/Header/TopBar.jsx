import React from "react";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className="d-inline-block">
              <span className="mai-mail fg-primary" />{" "}
              <a href="mailto:contact@mail.com">contact@mail.com</a>
            </div>
            <div className="d-inline-block ml-2">
              <span className="mai-call fg-primary" />{" "}
              <a href="tel:+0011223495">+0011223495</a>
            </div>
          </div>
          {/* <div className="col-md-4 text-right d-none d-md-block">
            <div className="social-mini-button">
              <a href="#">
                <span className="mai-logo-facebook-f" />
              </a>
              <a href="#">
                <span className="mai-logo-twitter" />
              </a>
              <a href="#">
                <span className="mai-logo-youtube" />
              </a>
              <a href="#">
                <span className="mai-logo-linkedin" />
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
