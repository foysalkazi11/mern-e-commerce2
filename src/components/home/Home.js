import React from "react";
import {
  Hero,
  BestSeller,
  ShopAll,
  CustomeDisign,
  OtherProduct,
  DiscoverMore,
  MailList,
  Footer
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
      <Footer />
    </section>
  );
};

export default Home;
