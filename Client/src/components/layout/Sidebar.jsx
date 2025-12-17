import React from "react";
import {
  Home,
  Users,
  PieChart,
  AlertTriangle,
  CreditCard,
  Activity,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: "Overview", active: true },
    { icon: Users, label: "Merchants", active: false },
    { icon: PieChart, label: "Analytics", active: false },
    { icon: AlertTriangle, label: "Alerts", active: false, badge: 7 }, //
    { icon: CreditCard, label: "Settlements", active: false },
    { icon: Activity, label: "System Health", active: false },
  ];

  return (
    <div className="w-64 h-screen bg-slate-900 text-white flex flex-col fixed left-0 top-0">
      <div className="p-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
          SubversePay
        </h1>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 group ${
              item.active
                ? "bg-blue-600 shadow-lg shadow-blue-900/50 text-white"
                : "text-slate-400 hover:bg-slate-800 hover:text-white"
            }`}
          >
            <div className="flex items-center gap-3">
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </div>
            {item.badge && (
              <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <button className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
          <Settings size={20} />
          <span>Settings</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
