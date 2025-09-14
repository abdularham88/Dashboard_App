// src/components/ProgressWidget.jsx
import React from "react";
import useDashboard from "../store/useDashboard";

const COLORS = ["#FF4D4F", "#FF7A45", "#FFBB28", "#00C49F"];

const ProgressWidget = ({ title, total = 100, data = [], categoryId, widgetId }) => {
  const removeWidget = useDashboard((s) => s.removeWidget);

  const safeTotal = total || data.reduce((acc, d) => acc + (d.value || 0), 0) || 1;

  return (
    <div className="border p-3 rounded shadow-sm bg-white relative">
      <button
        className="absolute top-2 right-2 text-red-500 font-bold"
        onClick={() => removeWidget(categoryId, widgetId)}
        aria-label="delete"
      >
        ✕
      </button>

      <h3 className="font-bold mb-2">{title}</h3>
      <p className="mb-2 text-sm text-gray-600">{safeTotal} Total</p>

      <div className="space-y-3">
        {data.map((item, idx) => {
          const pct = Math.round(((item.value || 0) / safeTotal) * 100);
          return (
            <div key={idx}>
              <div className="flex justify-between text-sm mb-1">
                <span>{item.label}</span>
                <span>{item.value}</span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded">
                <div
                  className="h-3 rounded"
                  style={{ width: `${pct}%`, backgroundColor: COLORS[idx % COLORS.length] }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressWidget;
