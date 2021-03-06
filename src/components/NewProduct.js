import React, { useEffect } from "react";
import { useProduct } from "../productContext/ProductState";
import { FirstLoading } from "../config/loading";
import { Image } from "cloudinary-react";

const NewProduct = () => {
  const { isLoading, allProduct, getAllProduct } = useProduct();

  useEffect(() => {
    getAllProduct();
    //eslint-disable-next-line
  }, []);
  if (isLoading) {
    return <FirstLoading loading={isLoading} size={100} />;
  }
  return (
    <section className="wraper shopall-wraper newProduct-wraper">
      <div className="underline"></div>
      <div className="hero-img">
        <img
          src="https://images.unsplash.com/photo-1540518614846-7eded433c457?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1478&q=80"
          alt=""
        />
      </div>
      <div className="section-bestSeller">
        <h4>NEW ARRIVEL</h4>
        {/* <div className="underline"></div> */}
        <div className="bestSeller-img-container">
          {allProduct.map((product) => {
            return (
              <div className="single-img" key={product._id}>
                <Image
                  cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}
                  publicId={product.image.filename}
                  width="400"
                  height="300"
                  crop="fill"
                  quality="80"
                />
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

export default NewProduct;
