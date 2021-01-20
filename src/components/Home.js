import React from "react";
import {
  Hero,
  BestSeller,
  ShopAll,
  CustomeDisign,
  OtherProduct,
  DiscoverMore
} from "./AllComponent";
const Home = () => {
  return (
    <section className="wraper">
      <Hero />
      <BestSeller />
      <ShopAll />
      <CustomeDisign />
      <OtherProduct />
      <DiscoverMore />
    </section>
  );
};

export default Home;
