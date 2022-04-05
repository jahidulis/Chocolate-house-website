import React from "react";
import { Pie, PieChart } from "recharts";

const MyPieChart = ({ data }) => {
  return (
    <div className="m-auto">
      <h2 className="font-serif text-xl text-purple-800">
        Investment VS Revenue
      </h2>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="investment"
          cx="50%"
          cy="50%"
          outerRadius={70}
          fill="#8884d8"
        />
        <Pie
          data={data}
          dataKey="revenue"
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={120}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </div>
  );
};

export default MyPieChart;
