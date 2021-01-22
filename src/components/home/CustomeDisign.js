import React from "react";
const customDesign = [
  {
    title: "Green towels",
    price: 50,
    url:
      "https://images.unsplash.com/photo-1523471826770-c437b4636fe6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dG93ZWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Blue and brown knit textile",
    price: 200,
    url:
      "https://images.unsplash.com/photo-1603197788269-c76bbc23b1de?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8YmF0aCUyMHRvd2VsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "White and bue knit textiale",
    price: 100,
    url:
      "https://images.unsplash.com/photo-1600369672770-985fd30004eb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhdGglMjB0b3dlbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
];

const CustomeDisign = () => {
  return (
    <section className="wraper custom-wraper">
      <div className="intro">
        <p>
          “These are the pieces you’ll love coming home to. Let us help you
          design the space of your dreams.”
        </p>
      </div>
      <div className="hero-img">
        <img
          src="https://images.unsplash.com/photo-1599703678443-4fdafa9e1d0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=711&q=80"
          alt=""
        />
      </div>
      <div className="dis">
        <h2>
          You can never have too many pillows and throws. Made for mixing and
          matching with ease, our handcrafted textiles are what every room
          needs.
        </h2>
      </div>

      <div className="section-bestSeller">
        <h4>A Few Favorites</h4>
        {/* <div className="underline"></div> */}
        <div className="bestSeller-img-container">
          {customDesign.map((custom, index) => {
            return (
              <div className="single-img" key={index}>
                <img src={custom.url} alt={custom.title} />
                <div className="img-info">
                  <h5>JENNI KAYNE</h5>
                  <p>{custom.title}</p>
                  <p>${custom.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CustomeDisign;
