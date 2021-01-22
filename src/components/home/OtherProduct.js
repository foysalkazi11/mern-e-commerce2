import React from "react";
import { Link } from "react-scroll";
const otherProduct = [
  {
    url:
      "https://images.unsplash.com/photo-1543420629-5350879dd4cd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzd8fHNsaXBwZXJzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    info: "shop slippers"
  },
  {
    url:
      "https://images.unsplash.com/photo-1487015307662-6ce6210680f1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8ZnVybml0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    info: "shop furniture"
  }
];

const OtherProduct = () => {
  return (
    <section className="wraper otherProduct-wraper">
      <div className="otherProduct-container">
        {otherProduct.map((product, index) => {
          return (
            <div className="single-product" key={index}>
              <img src={product.url} alt={product.info} />
              <button>
                <Link>{product.info}</Link>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OtherProduct;
