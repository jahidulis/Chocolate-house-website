import React from "react";
import useReview from "../Hooks/useReview";
import Review from "../Review/Review";

const AllReview = () => {
  const [products, setProducts] = useReview();
  return (
    <div>
      {products.map((item) => (
        <Review item={item} key={item.product}></Review>
      ))}
    </div>
  );
};

export default AllReview;
