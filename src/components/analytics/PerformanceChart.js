"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import matches from "@/data/matches";

const getChartData = () => {
  return matches
    .filter((m) => m.status === "Finalizado")
    .sort((a, b) => a.round - b.round)
    .map((m) => ({
      round: `J${m.round}`,
      golesFavor: m.goalsFor,
      golesContra: m.goalsAgainst,
    }));
};

export default function PerformanceChart() {
  const data = getChartData();

  return (
    <div style={{ width: "100%", height: 320 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="round" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="golesFavor"
            stroke="#2fa84f"
            strokeWidth={2}
          />

          <Line
            type="monotone"
            dataKey="golesContra"
            stroke="#ff4d4f"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}