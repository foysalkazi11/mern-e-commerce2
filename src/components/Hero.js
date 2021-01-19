import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="section-hero">
      <div className="card">
        <h1>Home Starts Here</h1>
        <p>
          This year, we're bringing it home. Set the foundation for your space
          with the timeless touch fo Jenni Kayne Home
        </p>
        <button>
          <Link>GET THE LOOK</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
