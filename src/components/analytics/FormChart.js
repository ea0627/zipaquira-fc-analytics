"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import matches from "@/data/matches";

const resultPoints = {
  W: 3,
  D: 1,
  L: 0,
};

const getFormData = () =>
  matches
    .filter((match) => match.status === "Finalizado")
    .sort((a, b) => a.round - b.round)
    .map((match) => ({
      round: `J${match.round}`,
      points: resultPoints[match.result],
      result: match.result,
    }));

export default function FormChart() {
  const data = getFormData();

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="round" />
          <YAxis domain={[0, 3]} />
          <Tooltip />
          <Bar dataKey="points" fill="#2fa84f" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}