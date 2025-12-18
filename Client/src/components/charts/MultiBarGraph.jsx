import React from "react";
import { motion } from "framer-motion";

const MultiBarGraph = () => {
    const data = [
        { month: "Jan", merchants: 40, managers: 20, customers: 60 },
        { month: "Feb", merchants: 45, managers: 25, customers: 70 },
        { month: "Mar", merchants: 50, managers: 28, customers: 85 },
        { month: "Apr", merchants: 55, managers: 32, customers: 95 },
        { month: "May", merchants: 60, managers: 35, customers: 110 },
        { month: "Jun", merchants: 70, managers: 40, customers: 130 },
    ];

    const maxVal = 150;

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-80 flex flex-col">
            <h3 className="font-bold text-gray-800 mb-6">User Growth by Type</h3>
            <div className="flex-1 flex items-end justify-between gap-4 px-2 relative">
                {/* Y-Axis Lines */}
                <div className="absolute inset-0 flex flex-col justify-between text-xs text-gray-300 pointer-events-none z-0">
                    {[100, 75, 50, 25, 0].map((val) => (
                        <div key={val} className="w-full h-px bg-gray-50 flex items-center">
                            <span className="pl-0 opacity-50">{val}%</span>
                        </div>
                    ))}
                </div>

                {data.map((item, index) => (
                    <div key={index} className="flex-1 h-full flex items-end justify-center gap-1 z-10 group">
                        {/* Merchants Bar */}
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${(item.merchants / maxVal) * 100}%` }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="w-2 md:w-3 bg-blue-500 rounded-t-sm relative group-hover:bg-blue-600 transition-colors"
                        >
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                {item.merchants}
                            </div>
                        </motion.div>

                        {/* Managers Bar */}
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${(item.managers / maxVal) * 100}%` }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.05 }}
                            className="w-2 md:w-3 bg-purple-500 rounded-t-sm relative group-hover:bg-purple-600 transition-colors"
                        >
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                {item.managers}
                            </div>
                        </motion.div>

                        {/* Customers Bar */}
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${(item.customers / maxVal) * 100}%` }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                            className="w-2 md:w-3 bg-emerald-400 rounded-t-sm relative group-hover:bg-emerald-500 transition-colors"
                        >
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                {item.customers}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between mt-4 text-xs font-medium text-gray-400 px-2">
                {data.map((item, index) => (
                    <span key={index}>{item.month}</span>
                ))}
            </div>
            <div className="flex justify-center gap-4 mt-4 text-xs font-medium">
                <div className="flex items-center gap-1"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>Merchants</div>
                <div className="flex items-center gap-1"><div className="w-2 h-2 bg-purple-500 rounded-full"></div>Managers</div>
                <div className="flex items-center gap-1"><div className="w-2 h-2 bg-emerald-400 rounded-full"></div>Customers</div>
            </div>
        </div>
    );
};

export default MultiBarGraph;
