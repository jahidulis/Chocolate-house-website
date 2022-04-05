import React from "react";
import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Review = ({ item }) => {
  const { product, productName, review, rating, reviewerPic, name } = item;
  return (
    <div className="grid md:grid-cols-6 shadow shadow-slate-500 p-4 m-10">
      <img className=" col-span-1 m-auto w-40" src={product} alt="" />
      <div className="flex flex-col justify-center col-span-4 text-left">
        <p className="font-serif font-bold text-purple-800">{productName}</p>
        <p className="py-3 font-sans">{review}</p>
        <p>
          <Rating
            className="mr-3"
            initialRating={Number(rating)}
            emptySymbol={<FontAwesomeIcon icon={faStar} />}
            fullSymbol={
              <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
            }
            readonly
          ></Rating>{" "}
          <span className="font-bold">{rating}</span>
        </p>
      </div>
      <div className="review flex flex-col justify-center items-center">
        <img className="w-20 m-auto rounded-full" src={reviewerPic} alt="" />
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Review;
