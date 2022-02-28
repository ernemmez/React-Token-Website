//import components
import React, { useState, useEffect } from "react";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Free from "./components/Free";
import Home from "./components/Home";
import Like from "./components/Like";
import Navbar from "./components/Navbar";
import Release from "./components/Release";
import ScrollToTop from "./components/ScrollToTop";
import Signup from "./components/Signup";
import SuperRare from "./components/SuperRare";
import scrollreveal from "scrollreveal";
import Video from "./components/Video";
import Token from "./components/token";
//import css
import "./css/vendor/bootstrap.min.css";
import "./css/base/_base.css";
import "./css/components/_card.css";
import "./css/components/_footer.css";
import "./css/components/_navbar.css";
import "./css/components/_scrollToTop.css";
import "./css/sections/_clients.css";
import "./css/sections/_free.css";
import "./css/sections/_home.css";
import "./css/sections/_like.css";
import "./css/sections/_release.css";
import "./css/sections/_signup.css";
import "./css/sections/_superRare.css";
import "./css/style.css";
import "./css/chart.css";
import "./css/responsive.css";
import "./css/safari.css"

function App() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        .home,
        .free,
        .clients,
        .super-rare,
        .releases,
        .like,
        .signup,
        footer
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);
  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";
    const nav = document.getElementsByTagName("nav");
    nav[0].style.transform = "none";
  }, 1500);
  return (
    <div data-theme={theme} className="app-container">
      <div className="page-container">
      <ScrollToTop />
      <Navbar changeTheme={changeTheme} currentTheme={theme} />
      <Video/>
      <Home />
      <Free />
      <Token />
      <Clients />
      <SuperRare />
      <Release />
      <Like />
      <Signup />
      <Footer />
      </div>
    </div>
  );
}

export default App;
