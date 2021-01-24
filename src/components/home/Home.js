import React from "react";
import {
  Hero,
  BestSeller,
  ShopAll,
  CustomeDisign,
  OtherProduct,
  DiscoverMore,
  MailList
} from "../AllComponent";
const Home = () => {
  return (
    <section className="wraper">
      <Hero />
      <BestSeller />
      <ShopAll />
      <CustomeDisign />
      <OtherProduct />
      <DiscoverMore />
      <MailList />
    </section>
  );
};

export default Home;
