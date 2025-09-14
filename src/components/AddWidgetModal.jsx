// src/components/AddWidgetModal.jsx
import React, { useState } from "react";
import useDashboard from "../store/useDashboard";

const AddWidgetModal = ({ category, closeModal }) => {
  const addWidget = useDashboard((state) => state.addWidget);
  const [name, setName] = useState("");

  if (!category) return null;

  const handleAdd = () => {
    const trimmed = name.trim();
    if (!trimmed) return;

    const id = Date.now(); // simple unique id
    const defaultType = category.defaultType || "text";

    let newWidget = { id, name: trimmed, type: defaultType };

    if (defaultType === "chart") {
      newWidget.data = [
        { name: "Connected", value: 2 },
        { name: "Not Connected", value: 2 },
      ];
    } else if (defaultType === "empty") {
      // empty widgets need no extra payload
    } else if (defaultType === "progress") {
      // reasonable default progress data
      newWidget.total = category.total ?? 100;
      newWidget.data = [
        { label: "Critical", value: 25 },
        { label: "High", value: 30 },
        { label: "Medium", value: 20 },
        { label: "Low", value: 25 },
      ];
    } else {
      newWidget.text = "Random text";
    }

    addWidget(category.id, newWidget);
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">
          Add{" "}
          {category.defaultType === "chart"
            ? "Chart"
            : category.defaultType === "empty"
            ? "Empty"
            : category.defaultType === "progress"
            ? "Progress"
            : "Text"}{" "}
          Widget
        </h2>

        <input
          type="text"
          placeholder="Widget Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mb-3 w-full rounded"
        />

        <div className="flex justify-end space-x-2">
          <button onClick={closeModal} className="px-3 py-1 rounded border">
            Cancel
          </button>
          <button onClick={handleAdd} className="bg-blue-500 text-white px-3 py-1 rounded">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWidgetModal;
