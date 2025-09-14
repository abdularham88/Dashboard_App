// src/components/EmptyWidget.jsx
import React from "react";
import useDashboard from "../store/useDashboard";

const EmptyWidget = ({ title, categoryId, widgetId }) => {
  const removeWidget = useDashboard((s) => s.removeWidget);

  return (
    <div className="border p-3 rounded shadow-sm bg-gray-50 relative flex flex-col items-center justify-center h-48">
      <button
        className="absolute top-2 right-2 text-red-500 font-bold"
        onClick={() => removeWidget(categoryId, widgetId)}
        aria-label="delete"
      >
        ✕
      </button>

      <h3 className="font-bold mb-2">{title}</h3>

      <div className="text-gray-400 flex flex-col items-center">
        <svg className="w-10 h-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth="2" d="M4 4v16h16M4 12h16M12 4v16" />
        </svg>
        <p>No Graph data available!</p>
      </div>
    </div>
  );
};

export default EmptyWidget;
