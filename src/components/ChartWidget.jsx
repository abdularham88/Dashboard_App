// src/components/ChartWidget.jsx
import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import useDashboard from "../store/useDashboard";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF4D4F"];

const renderLabel = (payload) => {
  // payload has name & value
  return `${payload.name} (${payload.value})`;
};

const ChartWidget = ({ data = [], title, categoryId, widgetId }) => {
  const removeWidget = useDashboard((s) => s.removeWidget);

  return (
    <div className="border p-3 rounded shadow-sm bg-white relative flex flex-col items-center">
      <button
        className="absolute top-2 right-2 text-red-500 font-bold"
        onClick={() => removeWidget(categoryId, widgetId)}
        aria-label="delete"
      >
        ✕
      </button>

      <h3 className="font-bold mb-3">{title}</h3>

      <PieChart width={250} height={300}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="45%"
          innerRadius={45}
          outerRadius={75}
          paddingAngle={3}
          labelLine={false}
        >
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          verticalAlign="bottom"
          align="center"
          formatter={(value, entry) => renderLabel(entry.payload)}
        />
      </PieChart>
    </div>
  );
};

export default ChartWidget;
