import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./index.css";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Merchants from "./pages/Merchants";
import Analytics from "./pages/Analytics";
import Alerts from "./pages/Alerts";
import Settlements from "./pages/Settlements";
import SystemHealth from "./pages/SystemHealth";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/merchants" element={<Merchants />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/settlements" element={<Settlements />} />
          <Route path="/health" element={<SystemHealth />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
