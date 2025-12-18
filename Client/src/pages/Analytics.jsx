import React from "react";
import StatCard from "../components/ui/StatCard";
import { Activity, ArrowUpRight, ArrowDownRight, Users, Clock, Globe } from "lucide-react";
import { motion } from "framer-motion";

const Analytics = () => {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Analytics Overview</h1>
                <p className="text-gray-500">Detailed insights into your platform's performance.</p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard
                    title="Total Sessions"
                    value="2.4M"
                    subtext="Avg. duration 4m 32s"
                    icon={Activity}
                    trend="up"
                    trendValue="+14%"
                />
                <StatCard
                    title="Active Users"
                    value="850K"
                    subtext="Currently online"
                    icon={Users}
                    trend="up"
                    trendValue="+5.2%"
                />
                <StatCard
                    title="Geographic Reach"
                    value="142"
                    subtext="Countries supported"
                    icon={Globe}
                    trend="up"
                    trendValue="+3"
                />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Traffic Source Chart */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-gray-800">Traffic Sources</h3>
                        <select className="bg-gray-50 border-none text-sm rounded-lg p-2 cursor-pointer outline-none">
                            <option>This Week</option>
                            <option>This Month</option>
                        </select>
                    </div>
                    <div className="h-64 flex items-end justify-between gap-2 px-4">
                        {[40, 65, 33, 85, 54, 90, 60, 40, 65, 33, 85, 54, 90, 60].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="w-full bg-blue-100 rounded-t-sm hover:bg-blue-500 transition-colors cursor-pointer relative group"
                            >
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    {h}% Traffic
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 text-xs text-gray-400 px-2">
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                        <span>Sun</span>
                    </div>
                </div>

                {/* User Retention Chart */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-gray-800 mb-6">User Retention</h3>
                    <div className="space-y-6">
                        {['Week 1', 'Week 2', 'Week 3', 'Week 4'].map((week, i) => (
                            <div key={i}>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="font-medium text-gray-600">{week}</span>
                                    <span className="font-bold text-gray-900">{90 - (i * 12)}%</span>
                                </div>
                                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${90 - (i * 12)}%` }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
