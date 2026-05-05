"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

import matches from "@/data/matches";

const chartData = matches
  .filter((match) => match.status === "Finalizado")
  .sort((a, b) => a.round - b.round)
  .map((match) => ({
    round: `J${match.round}`,
    golesFavor: match.goalsFor,
    golesContra: match.goalsAgainst,
  }));

export default function PerformanceChart() {
  return (
    <div className="chart-box">
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={chartData}>
          <CartesianGrid stroke="#2a3342" strokeDasharray="4 4" />
          <XAxis dataKey="round" stroke="#aab4c3" />
          <YAxis stroke="#aab4c3" />
          <Tooltip contentStyle={{
            background: "#151a22",
            border: "1px solid #2a3342",
            borderRadius: "12px",
            color: "#f5f7fa",
          }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="golesFavor"
            name="Goles a favor"
            stroke="#2fa84f"
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 7 }}
          />
          <Line
            type="monotone"
            dataKey="golesContra"
            name="Goles en contra"
            stroke="#c81e2a"
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}