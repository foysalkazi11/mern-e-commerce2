import React from "react";

const bestSeller = [
  {
    title: "Gray and white padded chaier",
    price: 50,
    url:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZnVybml0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Brown and white wooden table",
    price: 300,
    url:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8ZnVybml0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Black foor lamp on living room sofa",
    price: 400,
    url:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
];

const BestSeller = () => {
  return (
    <section className="section-bestSeller">
      <h4>Best Seller</h4>
      {/* <div className="underline"></div> */}
      <div className="bestSeller-img-container">
        {bestSeller.map((sell, index) => {
          return (
            <div className="single-img " key={index}>
              <img src={sell.url} alt={sell.title} />
              <div className="img-info">
                <h5>JENNI KAYNE</h5>
                <p>{sell.title}</p>
                <p>${sell.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BestSeller;
