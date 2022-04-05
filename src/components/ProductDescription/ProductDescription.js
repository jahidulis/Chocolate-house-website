import React from "react";

const ProductDescription = () => {
  return (
    <div className="grid grid-cols-3 gap-3 items-center">
      <div className="col-span-2">
        <h1 className="text-xl md:text-4xl font-bold font-serif">
          Your Baby is Precious to Us
        </h1>
        <p className="mt-5 mb-5 font-medium">
          Johnson's Baby Oil with Vitamin E is specially formulated for new born
          babies. Its gentle formula nourishes the skin, making it smooth and
          soft. Johnson's Baby Oil with delicate floral fragrance is clinically
          proven mild and keeps babies smelling fresh and fragrant longer.
        </p>
        <button className="p-4 bg-blue-200 border rounded font-bold font-serif">
          Live Demo
        </button>
      </div>
      <div>
        <img
          src="https://shop.shajgoj.com/wp-content/uploads/2020/07/Johnsons-Baby-Oil-50-ml-570x570.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default ProductDescription;
