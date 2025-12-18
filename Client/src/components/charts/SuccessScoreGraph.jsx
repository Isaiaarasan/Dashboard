import React, { useState } from "react";
import { motion } from "framer-motion";

const SuccessScoreGraph = () => {
    // Mock Data: Total transactions vs Successful transactions per day
    const data = [
        { day: "Mon", total: 1200, success: 1150 },
        { day: "Tue", total: 1350, success: 1280 },
        { day: "Wed", total: 1100, success: 1080 },
        { day: "Thu", total: 1400, success: 1320 },
        { day: "Fri", total: 1600, success: 1550 },
        { day: "Sat", total: 1500, success: 1400 },
        { day: "Sun", total: 1300, success: 1250 },
    ];

    const maxVal = Math.max(...data.map(d => d.total));

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-80">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className="font-bold text-gray-800">Success Score</h3>
                    <p className="text-sm text-gray-500">Transaction Success Rate by Count</p>
                </div>
                <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">96.4%</div>
                    <div className="text-xs text-green-500 font-medium">+0.8% this week</div>
                </div>
            </div>

            <div className="flex-1 flex items-end justify-between gap-2 px-2">
                {data.map((item, index) => {
                    const successHeight = (item.success / maxVal) * 100;
                    const failHeight = ((item.total - item.success) / maxVal) * 100;

                    return (
                        <div key={index} className="flex flex-col items-center gap-2 group w-full">
                            <div className="relative w-full rounded-t-lg bg-gray-100 overflow-hidden h-40 flex flex-col justify-end">
                                {/* Background for Total Capacity (optional, or just stacked) */}
                                <div className="w-full bg-red-400/20 absolute top-0 bottom-0"></div>

                                {/* Success Bar */}
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: `${successHeight}%` }}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                    className="w-full bg-emerald-500 relative z-10 rounded-t-sm"
                                >
                                </motion.div>
                                {/* Failure part (top of success? or separate? Let's do stacked) */}
                            </div>
                            {/* Label */}
                            <span className="text-xs text-gray-400 font-medium">{item.day}</span>

                            {/* Tooltip (Simple Hover) */}
                            <div className="opacity-0 group-hover:opacity-100 absolute -top-10 bg-gray-900 text-white text-[10px] px-2 py-1 rounded transition-opacity pointer-events-none whitespace-nowrap z-20">
                                {item.success}/{item.total} Clean
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default SuccessScoreGraph;
