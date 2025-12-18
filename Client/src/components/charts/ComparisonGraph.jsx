import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ComparisonGraph = () => {
    const [range, setRange] = useState("Monthly");

    const dataSets = {
        Weekly: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            current: [45, 52, 48, 60, 55, 68, 70],
            previous: [40, 45, 42, 50, 48, 55, 60],
            growth: "+14.5%"
        },
        Monthly: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            current: [30, 45, 40, 60, 55, 75, 80, 70, 85, 90, 80, 95],
            previous: [25, 35, 30, 45, 40, 55, 60, 50, 65, 70, 75, 80],
            growth: "+18.2%"
        },
        Yearly: {
            labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
            current: [20, 35, 45, 60, 80, 95],
            previous: [15, 25, 35, 45, 65, 80],
            growth: "+22.4%"
        }
    };

    const activeData = dataSets[range];
    const { labels, current, previous } = activeData;
    const maxVal = Math.max(...current, ...previous) * 1.1; // 10% buffers

    // Helper to Create SVG Path
    const createPath = (dataPoints) => {
        const points = dataPoints.map((val, i) => {
            const x = (i / (labels.length - 1)) * 100;
            const y = 100 - (val / maxVal) * 100;
            return `${x},${y}`;
        });

        // Simple straight lines for clarity, or can use bezier logic later
        return `M ${points.join(" L ")}`;
    };

    // Create Area Path (Close the loop at bottom)
    const createAreaPath = (dataPoints) => {
        const linePath = createPath(dataPoints);
        return `${linePath} L 100,100 L 0,100 Z`;
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-[400px]">
            {/* Header with Tabs */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                    <h3 className="font-bold text-gray-800">TPV Comparison</h3>
                    <p className="text-sm text-gray-500">Current vs Previous Period</p>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">{activeData.growth}</span>
                    <div className="flex bg-gray-100 rounded-lg p-1">
                        {Object.keys(dataSets).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setRange(tab)}
                                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${range === tab ? "bg-white text-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-900"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Graph Area */}
            <div className="flex-1 relative w-full h-full">
                {/* Y-Axis Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between text-xs text-gray-300 pointer-events-none">
                    {[100, 75, 50, 25, 0].map((val) => (
                        <div key={val} className="w-full h-px bg-gray-50 flex items-center relative">
                            <span className="absolute -top-2 right-full pr-2 text-[10px] w-8 text-right">{Math.round((maxVal * val) / 100)}</span>
                        </div>
                    ))}
                </div>

                {/* The Chart */}
                <div className="absolute inset-0 left-8 right-0 bottom-6 top-2">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="currentGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                            </linearGradient>
                        </defs>

                        {/* Previous Period Line (Dotted Gray) */}
                        <motion.path
                            key={`prev-${range}`}
                            d={createPath(previous)}
                            fill="none"
                            stroke="#9CA3AF"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.5 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            vectorEffect="non-scaling-stroke"
                        />

                        {/* Current Period Area (Blue Gradient) */}
                        <motion.path
                            key={`curr-area-${range}`}
                            d={createAreaPath(current)}
                            fill="url(#currentGradient)"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        />

                        {/* Current Period Line (Solid Blue) */}
                        <motion.path
                            key={`curr-line-${range}`}
                            d={createPath(current)}
                            fill="none"
                            stroke="#3B82F6"
                            strokeWidth="3"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            vectorEffect="non-scaling-stroke"
                        />

                        {/* Data Points (Dots) */}
                        {current.map((val, i) => (
                            <motion.circle
                                key={`dot-${range}-${i}`}
                                cx={(i / (labels.length - 1)) * 100}
                                cy={100 - (val / maxVal) * 100}
                                r="0"
                                animate={{ r: 1.5 }} // Radius relative to viewBox, keep small
                                className="fill-blue-600 stroke-white stroke-[0.5]"
                                transition={{ delay: 1.5 + (i * 0.1) }}
                            />
                        ))}
                    </svg>
                </div>

                {/* X-Axis Labels */}
                <div className="absolute bottom-0 left-8 right-0 flex justify-between text-[10px] text-gray-400 font-medium">
                    {labels.map((label, i) => (
                        <span key={i} className="transform -translate-x-1/2">{label}</span>
                    ))}
                </div>
            </div>

            {/* Legend */}
            <div className="flex justify-center gap-6 mt-4 text-xs font-medium">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-1 bg-gray-400 opacity-50 border-b border-gray-400 border-dashed"></span>
                    <span className="text-gray-500">Previous Period</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-3 h-1 bg-blue-500 rounded-full"></span>
                    <span className="text-gray-800">Current Period</span>
                </div>
            </div>
        </div>
    );
};

export default ComparisonGraph;
