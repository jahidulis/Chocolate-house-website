import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MyLineChart = ({ data }) => {
  return (
    <div className="m-auto">
      <h2 className="font-serif text-xl text-purple-800">
        Investment VS Revenue
      </h2>
      <LineChart width={500} height={400} data={data}>
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />

        <Line type="monotone" dataKey={"sell"} stroke="red" />
        <Line dataKey={"month"} />
        <XAxis dataKey={"month"} />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default MyLineChart;
