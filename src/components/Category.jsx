// src/components/Category.jsx
import React, { useState } from "react";
import Widget from "./Widget";
import ChartWidget from "./ChartWidget";
import EmptyWidget from "./EmptyWidget";
import ProgressWidget from "./ProgressWidget";
import AddWidgetModal from "./AddWidgetModal";

const Category = ({ category }) => {
  const [open, setOpen] = useState(false);

  // Force 3-column layout for Registry Scan too
  const gridClass = "grid grid-cols-1 md:grid-cols-3 gap-4";

  return (
    <div className="border p-4 rounded shadow-md bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{category.name}</h2>
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          onClick={() => setOpen(true)}
        >
          + Add Widget
        </button>
      </div>

      {/* Widgets Grid */}
      <div className={gridClass}>
        {category.widgets.map((w) =>
          w.type === "chart" ? (
            <ChartWidget
              key={w.id}
              data={w.data}
              title={w.name}
              categoryId={category.id}
              widgetId={w.id}
            />
          ) : w.type === "empty" ? (
            <EmptyWidget
              key={w.id}
              title={w.name}
              categoryId={category.id}
              widgetId={w.id}
            />
          ) : w.type === "progress" ? (
            <ProgressWidget
              key={w.id}
              title={w.name}
              total={w.total}
              data={w.data}
              categoryId={category.id}
              widgetId={w.id}
            />
          ) : (
            <Widget key={w.id} widget={w} categoryId={category.id} />
          )
        )}
      </div>

      {/* Add Widget Modal */}
      {open && <AddWidgetModal category={category} closeModal={() => setOpen(false)} />}
    </div>
  );
};

export default Category;
