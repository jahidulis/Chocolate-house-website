import { useEffect, useState } from "react";

const useReview = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products, setProducts];
};

export default useReview;
