import React from "react";

const shopAll = [
  {
    title: "White wood table",
    price: 50,
    url:
      "https://images.unsplash.com/photo-1499933374294-4584851497cc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fGZ1cm5pdHVyZXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "White cuddle chair and throw pillows",
    price: 300,
    url:
      "https://images.unsplash.com/photo-1519961655809-34fa156820ff?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8c29mYXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Rectangular black wooden table with chairs",
    price: 500,
    url:
      "https://images.unsplash.com/photo-1551216223-37c8d1dbec5c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fGZ1cm5pdHVyZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
];

const ShopAll = () => {
  return (
    <section className="wraper shopall-wraper">
      <h4>SHOP ALL</h4>
      <div className="underline"></div>
      <div className="hero-img">
        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt=""
        />
      </div>
      <div className="section-bestSeller">
        <h4>Get the Look</h4>
        {/* <div className="underline"></div> */}
        <div className="bestSeller-img-container">
          {shopAll.map((product, index) => {
            return (
              <div className="single-img" key={index}>
                <img src={product.url} alt={product.title} />
                <div className="img-info">
                  <h5>JENNI KAYNE</h5>
                  <p>{product.title}</p>
                  <p>${product.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ShopAll;
