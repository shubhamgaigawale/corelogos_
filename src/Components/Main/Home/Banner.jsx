import React from "react";

const Banner = () => {
  return (
    <div className="page-banner home-banner mb-12">
      <div className="slider-wrapper">
        <div className="owl-carousel hero-carousel">
          <div className="hero-carousel-item">
            <img
              src="../assets/img/team-writes-code-programming-app-website-flat-design.jpg"
              alt=""
            />
            <div className="img-caption">
              {/* <div className="subhead">Delivering Next Gen Solutions</div>
              <h1 className="mb-4">Creative Design</h1> */}
            </div>
          </div>
          {/* <div className="hero-carousel-item">
            <img src="../assets/img/bg_image_2.jpg" alt="" />
            <div className="img-caption">
              <h1 className="mb-4">
                We combine Design, Thinking, and Technical
              </h1>
            </div>
          </div> */}
          {/* <div className="hero-carousel-item">
            <img src="../assets/img/bg_image_3.jpg" alt="" />
            <div className="img-caption">
              <div className="subhead">Easy way to build perfect website</div>
              <h1 className="mb-4">
                Beautify handcrafted templates for your website
              </h1>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
