// src/components/Widget.jsx
import React from "react";
import useDashboard from "../store/useDashboard";

const Widget = ({ widget, categoryId }) => {
  const removeWidget = useDashboard((s) => s.removeWidget);

  return (
    <div className="border p-3 rounded relative shadow-sm bg-gray-100">
      <button
        className="absolute top-2 right-2 text-red-500 font-bold"
        onClick={() => removeWidget(categoryId, widget.id)}
        aria-label="delete"
      >
        ✕
      </button>

      <h3 className="font-bold">{widget.name}</h3>
      <p className="text-sm text-gray-700">{widget.text || "—"}</p>
    </div>
  );
};

export default Widget;
