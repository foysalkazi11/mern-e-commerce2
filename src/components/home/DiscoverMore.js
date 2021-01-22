import React from "react";
import { Link } from "react-scroll";

const DiscoverMore = () => {
  return (
    <section className="wraper discoverMore-wraper">
      <div className="hero-img">
        <img
          src="https://images.unsplash.com/photo-1556909211-36987daf7b4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
          alt=""
        />
      </div>
      <div className="dis">
        <h1>Discover More</h1>
        <p>
          When we first toured interior designs Joyce Downign Pickens' space, we
          left with enough cretive inspiration to dictate a full on redesign.
          Take the tour and read our tips to get the look in your vary wen home
        </p>
        <button>
          <Link>see the story</Link>
        </button>
      </div>
    </section>
  );
};

export default DiscoverMore;
