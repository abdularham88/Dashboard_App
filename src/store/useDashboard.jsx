// src/store/useDashboard.js
import { create } from "zustand";

const useDashboard = create((set) => ({
  categories: [
    {
      id: 1,
      name: "CSPM Executive Dashboard",
      defaultType: "chart",
      widgets: [
        {
          id: 1,
          name: "Cloud Accounts",
          type: "chart",
          data: [
            { name: "Connected", value: 2 },
            { name: "Not Connected", value: 2 },
          ],
        },
        {
          id: 2,
          name: "Cloud Account Risk Assessment",
          type: "chart",
          data: [
            { name: "Failed", value: 1689 },
            { name: "Warning", value: 681 },
            { name: "Not Available", value: 36 },
            { name: "Passed", value: 7253 },
          ],
        },
      ],
    },

    {
      id: 2,
      name: "CWPP Dashboard",
      defaultType: "empty",
      widgets: [
        { id: 3, name: "Top 5 Namespace Specific Alerts", type: "empty" },
        { id: 4, name: "Workload Alerts", type: "empty" },
      ],
    },

    {
      id: 3,
      name: "Registry Scan",
      defaultType: "progress",
      widgets: [
        {
          id: 5,
          name: "Image Risk Assessment",
          type: "progress",
          total: 1470,
          data: [
            { label: "Critical", value: 400 },
            { label: "High", value: 350 },
            { label: "Medium", value: 500 },
            { label: "Low", value: 220 },
          ],
        },
        {
          id: 6,
          name: "Image Security Issues",
          type: "progress",
          total: 2,
          data: [
            { label: "Critical", value: 1 },
            { label: "High", value: 0 },
            { label: "Medium", value: 1 },
          ],
        },
      ],
    },
  ],

  addWidget: (categoryId, widget) =>
    set((state) => ({
      categories: state.categories.map((cat) =>
        cat.id === categoryId ? { ...cat, widgets: [...cat.widgets, widget] } : cat
      ),
    })),

  removeWidget: (categoryId, widgetId) =>
    set((state) => ({
      categories: state.categories.map((cat) =>
        cat.id === categoryId
          ? { ...cat, widgets: cat.widgets.filter((w) => w.id !== widgetId) }
          : cat
      ),
    })),
}));

export default useDashboard;
