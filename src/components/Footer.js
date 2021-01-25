import React, { useRef } from "react";
import { GrNext } from "react-icons/gr";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  InstapaperShareButton,
  InstapaperIcon,
  PinterestShareButton,
  PinterestIcon
} from "react-share";

const Footer = () => {
  const selecteRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !selecteRefs.current.includes(el)) {
      selecteRefs.current.push(el);
    }
  };
  const handleClick = (e) => {
    const TargetClassName = e.target.parentElement.parentElement.className;
    // console.log(e.target.parentElement.parentElement.lastElementChild);
    selecteRefs.current.forEach((element) => {
      if (element.parentElement.className === TargetClassName) {
        if (!element.classList.contains("sub-menu-open")) {
          // selecteRefs.current.forEach((el) => {
          //   el.classList.remove("sub-menu-open");
          // });
          e.target.classList.add("active-icon");
          element.classList.add("sub-menu-open");
        } else {
          e.target.classList.remove("active-icon");
          element.classList.remove("sub-menu-open");
        }
      }
    });
  };
  return (
    <footer className="footer-wraper">
      <div className="footer-container">
        {/* contract menu */}
        <ul className="contract">
          <div className="menu">
            <p>Have a question ?</p>
            <GrNext onClick={handleClick} size="1rem" className="arrow-icon" />
          </div>
          <div className="underline"></div>
          <div ref={addToRefs} className="footer-sub-menu">
            <li>310 695 1223</li>
            <li className="email">SERVICE@JENNIKAYNE.COM</li>
            <li>Mon - Fri 9am–5pm PST</li>
            <li>excluding holidays</li>
          </div>
        </ul>
        {/* service menu */}
        <ul className="service">
          <div className="menu">
            <p>Customer Service </p>
            <GrNext onClick={handleClick} size="1rem" className="arrow-icon" />
          </div>
          <div className="underline"></div>
          <div ref={addToRefs} className="footer-sub-menu">
            <li>Orders & Returns</li>
            <li>Gift Cards</li>
            <li>Shipping</li>
            <li>Size Guide</li>
            <li>DESIGN & STYLING SERVICES</li>
          </div>
        </ul>
        {/* visit menu */}
        <ul className="visit">
          <div className="menu">
            <p>Visit us </p>
            <GrNext onClick={handleClick} size="1rem" className="arrow-icon" />
          </div>
          <div className="underline"></div>
          <div ref={addToRefs} className="footer-sub-menu">
            <li>stores</li>
            <li>Events</li>
          </div>
        </ul>
        {/* company info */}
        <ul className="company">
          <div className="menu">
            <p>Company </p>
            <GrNext
              onClick={handleClick}
              size="1rem"
              className="arrow-icon"
              color="#bbb"
            />
          </div>
          <div className="underline"></div>
          <div ref={addToRefs} className="footer-sub-menu">
            <li>About</li>
            <li>Rewards program</li>
            <li>Rewards Faqs</li>
            <li>Trade Program</li>
            <li>Sustainability</li>
            <li>Diversity</li>
            <li>Accessibility</li>
            <li>Careers</li>
          </div>
        </ul>
        {/* social icon */}
        <div className="social">
          <PinterestShareButton>
            <PinterestIcon size={36} round={true} className="social-icon" />
          </PinterestShareButton>

          <InstapaperShareButton>
            <InstapaperIcon size={36} round={true} className="social-icon" />
          </InstapaperShareButton>

          <FacebookShareButton>
            <FacebookIcon size={36} round={true} className="social-icon" />
          </FacebookShareButton>

          <TwitterShareButton>
            <TwitterIcon size={36} round={true} className="social-icon" />
          </TwitterShareButton>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
