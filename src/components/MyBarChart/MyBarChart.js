import React from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const MyBarChart = ({ data }) => {
  console.log(data);
  return (
    <div className="m-auto">
      <h2 className="font-serif text-xl text-purple-800">
        Investment VS Revenue
      </h2>
      <BarChart data={data} width={500} height={380}>
        <Bar dataKey={"investment"} stackId="a" fill="#82ca9d" />
        <Bar dataKey={"revenue"} stackId="a" fill="#8884d8" />

        <XAxis dataKey={"month"} />
        <YAxis />
        <Tooltip />
      </BarChart>
    </div>
  );
};

export default MyBarChart;
