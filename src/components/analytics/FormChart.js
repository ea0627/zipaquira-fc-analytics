"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import matches from "@/data/matches";

const resultPoints = {
  W: 3,
  D: 1,
  L: 0,
};

const chartData = matches
  .filter((match) => match.status === "Finalizado")
  .sort((a, b) => a.round - b.round)
  .map((match) => ({
    round: `J${match.round}`,
    points: resultPoints[match.result],
    result: match.result,
  }));

export default function FormChart() {
  return (
    <div className="chart-box">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid stroke="#2a3342" strokeDasharray="4 4" />
          <XAxis dataKey="round" stroke="#aab4c3" />
          <YAxis domain={[0, 3]} stroke="#aab4c3" />
          <Tooltip contentStyle={{
            background: "#151a22",
            border: "1px solid #2a3342",
            borderRadius: "12px",
            color: "#f5f7fa",
          }} />
          <Bar
            dataKey="points"
            name="Puntos"
            fill="#2fa84f"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}