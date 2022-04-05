import React from "react";

const ProductDescription = () => {
  return (
    <div className="grid grid-cols-3 gap-3 items-center">
      <div className="col-span-2">
        <h1 className="text-xl md:text-4xl font-bold font-serif">
          For your every mood we have the solution
        </h1>
        <p className="mt-5 mb-5 font-medium">
        We provide every kind of chocolate from different taste which will light up your mood no matter how hectic was your day.you can also sends gifts to your loving one with our chocolate varieties and with lots of love to strengthen your bonding. So eat,sleep and shine  with the taste and love of our chocolates.
        </p>
        <button className="p-4 bg-blue-200 border rounded font-bold font-serif">
          Live Demo
        </button>
      </div>
      <div>
        <img
          src="https://m.media-amazon.com/images/I/61pj9OP0IQL._SX522_.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default ProductDescription;
