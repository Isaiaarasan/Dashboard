import React from "react";
import StatCard from "../components/ui/StatCard";
import RevenueChart from "../components/ui/RevenueChart";
import { Users, CreditCard, AlertOctagon, Activity } from "lucide-react";

const Dashboard = () => {
  // Data derived from video
  const stats = [
    {
      title: "Total Merchants",
      value: "45",
      subtext: "42 Active • 3 Pending",
      icon: Users,
      trend: "up",
      trendValue: "+3 this week",
    },
    {
      title: "Total Subscribers",
      value: "1,25,000",
      subtext: "+12.5% Growth",
      icon: Users,
      trend: "up",
      trendValue: "+12.5%",
    },
    {
      title: "Total TPV",
      value: "₹8.5 Cr",
      subtext: "Total payment volume",
      icon: CreditCard,
      trend: "up",
      trendValue: "+8.2%",
    },
    {
      title: "Active Alerts",
      value: "7",
      subtext: "Requires attention",
      icon: AlertOctagon,
      trend: "down",
      trendValue: "2 Critical",
    },
  ];

  const topMerchants = [
    { name: "SpeedNet ISP", score: 92, tpv: "₹3.5 Cr" },
    { name: "CableNet Solutions", score: 88, tpv: "₹2.5 Cr" },
    { name: "FitZone Gyms", score: 75, tpv: "₹1.2 Cr" },
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Dashboard Overview
          </h1>
          <p className="text-gray-500">Welcome back, Super Admin.</p>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors">
            <span>Last 30 Days</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-shadow">
            Download Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart Area (Simulated) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-800">TPV & Revenue Trends</h3>
            <select className="bg-gray-50 border-none text-sm rounded-lg p-2 cursor-pointer focus:ring-2 focus:ring-blue-500/20 outline-none">
              <option>Last 30 Days</option>
              <option>Last Quarter</option>
              <option>This Year</option>
            </select>
          </div>
          {/* Revenue Chart Component */}
          <RevenueChart />
        </div>

        {/* Top Merchants List */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-6">
            Top Merchants by Health
          </h3>
          <div className="space-y-6">
            {topMerchants.map((merchant, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-gray-700">
                    {merchant.name}
                  </span>
                  <span className="text-gray-500">{merchant.tpv}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${merchant.score > 85
                        ? "bg-green-500"
                        : merchant.score > 70
                          ? "bg-yellow-500"
                          : "bg-red-500"
                        }`}
                      style={{ width: `${merchant.score}%` }}
                    ></div>
                  </div>
                  <span className="text-xs font-bold text-gray-600">
                    {merchant.score}/100
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
