import { useEffect, useState } from "react";

const useData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);
  return [data, setData];
};

export default useData;
