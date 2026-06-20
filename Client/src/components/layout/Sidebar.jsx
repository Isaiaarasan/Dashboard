import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Home,
  Users,
  PieChart,
  AlertTriangle,
  CreditCard,
  Activity,
  Settings,
  ShieldCheck,
  MessageSquare,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const menuItems = [
    { icon: Home, label: "Overview", path: "/" },
    { icon: Users, label: "Merchants", path: "/merchants" },
    { icon: ShieldCheck, label: "Approvals", path: "/approvals", badge: 3 },
    { icon: PieChart, label: "Analytics", path: "/analytics" },
    { icon: AlertTriangle, label: "Alerts", path: "/alerts", badge: 7 },
    { icon: CreditCard, label: "Settlements", path: "/settlements" },
    { icon: Activity, label: "System Health", path: "/health" },
    { icon: MessageSquare, label: "Tickets", path: "/tickets", badge: 5 },
  ];

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 z-50 flex flex-col bg-[#0f172a] text-white shadow-2xl overflow-hidden border-r border-slate-800">
      {/* Premium Gradient Background Accent */}
      <div className="absolute top-0 left-0 w-full h-64 bg-[#4169E1] opacity-10 blur-[100px] pointer-events-none" />

      {/* Brand Section */}
      <div className="p-8 relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2 rounded-xl shadow-lg shadow-blue-500/20 text-white">
            <ShieldCheck size={24} strokeWidth={2.5} />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-white">
            Dash<span className="text-blue-400">board</span>
          </h1>
        </div>
        <p className="text-xs text-slate-400 font-medium pl-14">Super Admin</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2 relative z-10 py-4 overflow-y-auto custom-scrollbar">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `relative group flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-300 ease-out ${isActive
                ? "bg-gradient-to-r from-blue-600/90 to-indigo-600/90 text-white shadow-lg shadow-blue-500/25"
                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className="flex items-center gap-3.5">
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 w-1 h-8 bg-white rounded-r-full shadow-[0_0_10px_2px_rgba(255,255,255,0.3)]"
                    />
                  )}
                  <item.icon
                    size={20}
                    className={`transition-colors duration-300 ${isActive ? 'text-white' : 'group-hover:text-blue-400'}`}
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  <span className={`font-medium tracking-wide ${isActive ? 'text-white' : ''}`}>{item.label}</span>
                </div>
                {item.badge && (
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm border ${isActive ? 'bg-white/20 text-white border-transparent' : 'bg-red-500/10 text-red-400 border-red-500/20'
                    }`}>
                    {item.badge}
                  </span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 relative z-10 border-t border-slate-800/50 space-y-2">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all w-full group ${isActive ? "bg-gradient-to-r from-blue-600/90 to-indigo-600/90 text-white shadow-lg" : "text-slate-400 hover:text-white hover:bg-slate-800/50"
            }`
          }
        >
          <Settings size={20} className="group-hover:rotate-90 transition-transform duration-500" />
          <span className="font-medium">Settings</span>
        </NavLink>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all w-full group text-slate-400 hover:text-red-400 hover:bg-red-500/10"
        >
          <LogOut size={20} className="transition-transform duration-300 group-hover:-translate-x-1" />
          <span className="font-medium">Log Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
