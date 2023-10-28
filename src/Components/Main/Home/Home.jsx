import React from "react";
import Banner from "./Banner";
import { About } from "./About";
import { Services } from "./Services";
import Client from "./Client";
import { Qualities } from "./Qualities";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Qualities />

      <Client />
    </div>
  );
};

export default Home;
