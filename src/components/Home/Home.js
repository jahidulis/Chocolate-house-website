import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import ProductDescription from "../ProductDescription/ProductDescription";

const Home = () => {
  return (
    <div className="container m-auto">
      <ProductDescription></ProductDescription>
      <CustomerReview></CustomerReview>
    </div>
  );
};

export default Home;
