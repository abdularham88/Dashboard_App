# CNAPP Dashboard (React + Zustand + Tailwind + Recharts)

This project is a **Frontend Assignment** built using **React, Vite, Zustand, TailwindCSS, and Recharts**.  
It is a dynamic dashboard where users can add, remove, and manage different types of widgets such as:

- 📊 Doughnut Charts (for cloud account status, risk assessment, etc.)
- 📦 Empty Widgets (placeholders with "No Graph Data Available")
- 📈 Progress Widgets (for vulnerabilities and image security issues)
- 📝 Text Widgets (simple informational widgets)

---

## 🚀 Features

✅ **Dynamic Categories** — CSPM Executive Dashboard, CWPP Dashboard, Registry Scan  
✅ **Add / Remove Widgets** — Add widgets dynamically to each category  
✅ **Widget Types** — Chart, Empty, Progress, and Text  
✅ **Doughnut Chart Support** using [Recharts](https://recharts.org/)  
✅ **State Management** with [Zustand](https://zustand-demo.pmnd.rs/)  
✅ **Responsive UI** with [TailwindCSS](https://tailwindcss.com/)  
✅ **Deployable on GitHub Pages**  

---

## 📂 Project Structure

src/
├─ components/
│ ├─ Dashboard.jsx
│ ├─ Category.jsx
│ ├─ Widget.jsx
│ ├─ ChartWidget.jsx
│ ├─ ProgressWidget.jsx
│ ├─ EmptyWidget.jsx
│ └─ AddWidgetModal.jsx
│
├─ store/
│ └─ useDashboard.js
│
├─ App.jsx
└─ main.jsx


---

## ⚙️ Installation & Running Locally

1. Clone this repo:
   ```bash
   git clone https://github.com/YOUR-USERNAME/dashboard-app.git
   cd dashboard-app

## Install Dependencies

npm install

## Start Development server

npm run dev

## Open App on Browser

http://localhost:5173/

