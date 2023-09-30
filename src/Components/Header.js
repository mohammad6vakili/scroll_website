import classes from "./Header.module.css";
import logo from "../Assets/Group.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = useState(false);
  const scrollToThis = (e) => {
    if (document.getElementById(e.target.href.split("#")[1]))
      document
        .getElementById(e.target.href.split("#")[1])
        .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      style={{
        animation: !props.hideFirst && "unset",
        opacity: !props.hideFirst && 1,
      }}
      className={`${classes.header} ${props.visible && classes.visible}`}
    >
      <a href="#features" className={classes.logo}>
        <img src={logo} alt="Logo" />
      </a>
      <button
        className={classes.menuButton}
        onClick={() => setNavOpen((prev) => !prev)}
      >
        menu
      </button>
      <nav className={`${classes.navMobile} ${!navOpen && classes.navHidden}`}>
        <p href="/#home" onClick={scrollToThis} className={classes.navLink}>
          Home
        </p>
        <p href="#testimonials" onClick={scrollToThis}>
          Market Place
        </p>
        <p href="#features" onClick={scrollToThis}>
          Feature
        </p>
        <p href="#login" onClick={scrollToThis}>
          Login
        </p>
        <p href="/contact-us" onClick={() => navigate("/contact-us")}>
          Contact Us
        </p>
      </nav>
      <nav className={classes.navigation}>
        <a href="/#home" onClick={scrollToThis}>
          Home
        </a>
        <a href="#testimonials" onClick={scrollToThis}>
          Market Place
        </a>
        <a href="#features" onClick={scrollToThis}>
          Feature
        </a>
        {/* <a href="#login" onClick={scrollToThis}>
          Login
        </a> */}
        <a href="/contact-us" onClick={() => navigate("/contact-us")}>
          Contact Us
        </a>
      </nav>
      <div className={classes.actions}>
        <a href="#login" className={classes.purple}>
          Login
        </a>
        <button className={classes.purple}>Download Flibbo</button>
      </div>
    </header>
  );
};

export default Header;
