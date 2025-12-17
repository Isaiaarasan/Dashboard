import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const StatCard = ({ title, value, subtext, trend, icon: Icon, trendValue }) => {
  const isPositive = trend === "up";

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
          <Icon size={24} />
        </div>
        {trendValue && (
          <div
            className={`flex items-center gap-1 text-sm font-medium ${
              isPositive ? "text-green-600" : "text-red-600"
            }`}
          >
            {isPositive ? (
              <ArrowUpRight size={16} />
            ) : (
              <ArrowDownRight size={16} />
            )}
            {trendValue}
          </div>
        )}
      </div>
      <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
      <div className="flex items-baseline gap-2">
        <h2 className="text-2xl font-bold text-gray-900">{value}</h2>
        {subtext && <span className="text-xs text-gray-400">{subtext}</span>}
      </div>
    </div>
  );
};

export default StatCard;
