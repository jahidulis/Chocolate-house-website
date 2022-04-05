import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import useReview from "../Hooks/useReview";
import Review from "../Review/Review";

const CustomerReview = () => {
  const [products, setProducts] = useReview();
  const navigate = useNavigate();
  console.log(products);
  return (
    <div className="flex flex-col">
      <h1 className="md:text-3xl text-xl font-serif mb-10">
        Customer Review <p>(3)</p>
      </h1>
      <div className="w-100 ">
        {products.slice(0, 3).map((item) => (
          <Review item={item} key={item.product}></Review>
        ))}
      </div>

      <button
        onClick={() => navigate("./review")}
        className="flex items-center w-52 justify-between m-auto pr-4 pl-4 py-1 mt-8 mb-8 bg-blue-500 border rounded font-bold font-serif"
      >
        <p>Customer Review</p>{" "}
        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default CustomerReview;
