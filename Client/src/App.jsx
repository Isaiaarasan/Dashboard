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

import Approvals from "./pages/Approvals";
import Tickets from "./pages/Tickets";
import Managers from "./pages/Managers";
import Customers from "./pages/Customers";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <Layout>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/merchants" element={<Merchants />} />
                  <Route path="/managers" element={<Managers />} />
                  <Route path="/customers" element={<Customers />} />
                  <Route path="/approvals" element={<Approvals />} />
                  <Route path="/tickets" element={<Tickets />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="/alerts" element={<Alerts />} />
                  <Route path="/settlements" element={<Settlements />} />
                  <Route path="/health" element={<SystemHealth />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </Layout>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
