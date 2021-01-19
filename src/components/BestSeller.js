import React from "react";

const BestSeller = () => {
  return (
    <section className="section-bestSeller">
      <h4>Best Seller</h4>
      <div className="underline"></div>
      <div className="bestSeller-img-container">
        <div className="single-img">
          <img
            src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZnVybml0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div className="img-info">
            <h5>JENNI KAYNE</h5>
            <p>Gray and white padded chaier</p>
            <p>$50</p>
          </div>
        </div>
        <div className="single-img">
          <img
            src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8ZnVybml0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div className="img-info">
            <h5>JENNI KAYNE</h5>
            <p>Brown and white wooden table beside sofa chair</p>
            <p>$300</p>
          </div>
        </div>
        <div className="single-img">
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div className="img-info">
            <h5>JENNI KAYNE</h5>
            <p>Black foor lamp on living room sof</p>
            <p>$400</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
