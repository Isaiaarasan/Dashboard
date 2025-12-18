import React from "react";
import { motion } from "framer-motion";

const RevenueChart = () => {
    // Mock data for the chart - 12 points for months or weeks
    const data = [40, 65, 55, 80, 60, 95, 75, 45, 70, 50, 85, 90];
    const max = Math.max(...data);
    const min = Math.min(...data);

    return (
        <div className="h-64 w-full flex items-end justify-between gap-1 sm:gap-2 pt-8 relative overflow-hidden">
            {/* Background Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between text-xs text-gray-300 pointer-events-none">
                {[100, 75, 50, 25, 0].map((val) => (
                    <div key={val} className="w-full h-px bg-gray-100 flex items-center">
                        <span className="pl-0">{val}%</span>
                    </div>
                ))}
            </div>

            {/* Bars/Areas - Using columns for a modern analytics look */}
            {data.map((value, index) => (
                <div key={index} className="relative flex-1 h-full flex items-end group">
                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                        ₹{(value * 0.12).toFixed(1)} Cr
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-4 border-transparent border-t-gray-900"></div>
                    </div>

                    {/* The Bar */}
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: `${value}%`, opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: index * 0.05,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        className="w-full mx-1 bg-gradient-to-t from-blue-500/20 to-blue-600 rounded-t-sm hover:from-blue-500 hover:to-indigo-600 transition-all duration-300 cursor-pointer relative"
                    >
                        {/* Top Line Accent */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-blue-400/50 rounded-t-sm"></div>
                    </motion.div>
                </div>
            ))}
        </div>
    );
};

export default RevenueChart;
