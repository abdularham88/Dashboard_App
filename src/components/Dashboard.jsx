import React, { useState } from "react";
import useDashboard from "../store/useDashboard";
import Category from "./Category";

const Dashboard = () => {
  const { categories, searchWidgets } = useDashboard();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    searchWidgets(e.target.value);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">CNAPP Dashboard</h1>
      <input
        type="text"
        placeholder="Search widgets..."
        value={search}
        onChange={handleSearch}
        className="border p-2 mb-6 w-full rounded"
      />
      <div className="grid gap-6">
        {categories.map((cat) => (
          <Category key={cat.id} category={cat} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
