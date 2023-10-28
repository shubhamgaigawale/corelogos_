import logo from "./logo.svg";
import "./App.css";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Home from "./Components/Main/Home/Home";
import { Footer } from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Components/Main/About/AboutUs";
import OurServices from "./Components/Main/Services/OurServices";
import JobOpening from "./Components/Main/Career/JobOpening";
import JobDescription from "./Components/Main/Career/JobDescription";

function App() {
  return (
    <div>
      <HeaderContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/career" element={<JobOpening />} />
        <Route path="/jobDescription" element={<JobDescription />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
