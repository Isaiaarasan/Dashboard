import React from "react";
import StatCard from "../components/ui/StatCard";
import MultiBarGraph from "../components/charts/MultiBarGraph";
import ComparisonGraph from "../components/charts/ComparisonGraph";
import PaymentPieChart from "../components/charts/PaymentPieChart";
import TicketOverlayGraph from "../components/charts/TicketOverlayGraph";
import SuccessScoreGraph from "../components/charts/SuccessScoreGraph";
import { Users, CreditCard, UserCheck, Shield, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Merchants",
      value: "45",
      subtext: "Platform partners",
      icon: Users,
      trend: "up",
      trendValue: "+3 this week",
    },
    {
      title: "Total Managers",
      value: "12",
      subtext: "Operational staff",
      icon: Shield,
      trend: "up",
      trendValue: "+1 newly added",
    },
    {
      title: "Total Customers",
      value: "1.25L",
      subtext: "End users",
      icon: UserCheck,
      trend: "up",
      trendValue: "+12.5% Growth",
    },
    {
      title: "Total TPV",
      value: "₹8.5 Cr",
      subtext: "Processed Volume",
      icon: CreditCard,
      trend: "up",
      trendValue: "+8.2%",
    },
  ];

  const pendingApprovals = [
    { name: "Urban Fibernet Pvt Ltd", date: "2 mins ago", type: "ISP" },
    { name: "SkyHigh Travels", date: "1 hour ago", type: "Travel" },
    { name: "Fresh Mart Chain", date: "4 hours ago", type: "Retail" },
  ];

  return (
    <div className="space-y-8 pb-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Super Admin Dashboard
          </h1>
          <p className="text-gray-500">Overview of platform performance and entities.</p>
        </div>

        <div className="flex items-center gap-2">
          <select className="bg-white border border-gray-200 text-sm rounded-lg px-4 py-2 cursor-pointer focus:ring-2 focus:ring-blue-500/20 outline-none">
            <option>This Month</option>
            <option>Last Month</option>
            <option>This Quarter</option>
          </select>
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

      {/* Graph Row 1: Users & Payment Methods */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <MultiBarGraph />
        </div>
        <div className="lg:col-span-1">
          <PaymentPieChart />
        </div>
      </div>

      {/* Graph Row 2: TPV & Efficiency */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ComparisonGraph />
        </div>
        <div className="lg:col-span-1">
          <SuccessScoreGraph />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TicketOverlayGraph />
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center">
          <p className="text-gray-400 italic">More widgets coming soon...</p>
        </div>
      </div>

      {/* Bottom Widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pending Approvals */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-800">Pending Approvals</h3>
            <Link to="/approvals" className="text-xs font-semibold text-blue-600 hover:underline">View All</Link>
          </div>
          <div className="space-y-4">
            {pendingApprovals.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                    {item.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">{item.name}</h4>
                    <p className="text-xs text-gray-500">{item.type} • {item.date}</p>
                  </div>
                </div>
                <button className="text-xs bg-white border border-gray-200 px-3 py-1.5 rounded-md font-medium text-gray-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                  Review
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity / Active Merchants Preview */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-800">Active Merchants Activity</h3>
            <Link to="/merchants" className="text-xs font-semibold text-blue-600 hover:underline">Manage</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-100 text-xs text-gray-400 uppercase">
                  <th className="pb-3 pl-2">Merchant</th>
                  <th className="pb-3 text-right">TPV (Today)</th>
                  <th className="pb-3 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[1, 2, 3].map((_, i) => (
                  <tr key={i} className="text-sm">
                    <td className="py-3 pl-2 font-medium text-gray-700">SpeedNet ISP #{i + 1}</td>
                    <td className="py-3 text-right text-gray-600">₹45,00{i}</td>
                    <td className="py-3 text-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                    </td>
                  </tr>

                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
