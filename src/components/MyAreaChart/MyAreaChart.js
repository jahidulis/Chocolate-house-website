import React from "react";
import { Area, AreaChart, Tooltip, XAxis, YAxis } from "recharts";

const MyAreaChart = ({ data }) => {
  return (
    <div className="m-auto">
      <h2 className="font-serif text-xl text-purple-800">
        Investment VS Revenue
      </h2>
      <AreaChart data={data} width={500} height={380}>
        <Area
          type={"monotone"}
          dataKey={"investment"}
          stackId="a"
          fill="#82ca9d"
        />
        <Area
          type={"monotone"}
          dataKey={"revenue"}
          stackId="a"
          fill="#8884d8"
        />

        <XAxis dataKey={"month"} />
        <YAxis />
        <Tooltip />
      </AreaChart>
    </div>
  );
};

export default MyAreaChart;
