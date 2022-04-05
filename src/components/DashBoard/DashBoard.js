import React from "react";
import useData from "../Hooks/useData";
import MyAreaChart from "../MyAreaChart/MyAreaChart";
import MyBarChart from "../MyBarChart/MyBarChart";
import MyLineChart from "../MyLineChart/MyLineChart";
import MyPieChart from "../MyPieChart/MyPieChart";

const DashBoard = () => {
  const [data, setData] = useData([]);
  console.log(data);
  return (
    <div>
      <div className=" grid lg:grid-cols-2 grid-cols-1 gap-4">
        <MyLineChart data={data}></MyLineChart>
        <MyBarChart data={data}></MyBarChart>
        <MyAreaChart data={data}></MyAreaChart>
        <MyPieChart data={data}></MyPieChart>
      </div>
    </div>
  );
};

export default DashBoard;
