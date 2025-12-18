import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MultiBarGraph = () => {
    const [range, setRange] = useState("Monthly");

    const generateDummyData = (count) => {
        return Array.from({ length: count }, (_, i) => ({
            label: `D${i + 1}`,
            merchants: Math.floor(Math.random() * 50) + 10,
            managers: Math.floor(Math.random() * 30) + 5,
            customers: Math.floor(Math.random() * 100) + 20,
        }));
    };

    const dataSets = {
        Weekly: [
            { label: "Mon", merchants: 12, managers: 5, customers: 20 },
            { label: "Tue", merchants: 15, managers: 8, customers: 25 },
            { label: "Wed", merchants: 18, managers: 6, customers: 30 },
            { label: "Thu", merchants: 14, managers: 9, customers: 22 },
            { label: "Fri", merchants: 20, managers: 12, customers: 35 },
            { label: "Sat", merchants: 25, managers: 15, customers: 45 },
            { label: "Sun", merchants: 22, managers: 14, customers: 40 },
        ],
        Monthly: [
            { label: "Jan", merchants: 40, managers: 20, customers: 60 },
            { label: "Feb", merchants: 45, managers: 25, customers: 70 },
            { label: "Mar", merchants: 50, managers: 28, customers: 85 },
            { label: "Apr", merchants: 55, managers: 32, customers: 95 },
            { label: "May", merchants: 60, managers: 35, customers: 110 },
            { label: "Jun", merchants: 70, managers: 40, customers: 130 },
            { label: "Jul", merchants: 75, managers: 42, customers: 140 },
            { label: "Aug", merchants: 80, managers: 45, customers: 150 },
            { label: "Sep", merchants: 85, managers: 48, customers: 160 },
            { label: "Oct", merchants: 90, managers: 50, customers: 170 },
            { label: "Nov", merchants: 95, managers: 55, customers: 180 },
            { label: "Dec", merchants: 100, managers: 60, customers: 190 },
        ],
        Yearly: [
            { label: "2019", merchants: 200, managers: 50, customers: 500 },
            { label: "2020", merchants: 350, managers: 120, customers: 1200 },
            { label: "2021", merchants: 500, managers: 200, customers: 2500 },
            { label: "2022", merchants: 750, managers: 350, customers: 4000 },
            { label: "2023", merchants: 900, managers: 450, customers: 6000 },
        ],
        "Daily (40)": generateDummyData(40)
    };

    const activeData = dataSets[range];

    // Calculate max value dynamically to prevent overflow
    const allValues = activeData.flatMap(d => [d.merchants, d.managers, d.customers]);
    const maxVal = Math.max(...allValues) * 1.1;

    return (
        <div className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl border border-white/60 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-300 flex flex-col h-[400px]">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 shrink-0">
                <div>
                    <h3 className="font-bold text-gray-800">User Growth by Type</h3>
                    <p className="text-[10px] text-gray-500">Merchants, Managers, and Customers</p>
                </div>
                {/* Tabs */}
                <div className="flex bg-gray-100 rounded-lg p-1 overflow-x-auto max-w-full scrollbar-none">
                    {Object.keys(dataSets).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setRange(tab)}
                            className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all whitespace-nowrap ${range === tab ? "bg-white text-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-900"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex-1 relative min-h-0 flex">
                {/* Y-Axis Labels (Fixed) */}
                <div className="flex flex-col justify-between text-[10px] text-gray-300 pointer-events-none h-full py-6 pr-2 shrink-0 w-8">
                    {[100, 75, 50, 25, 0].map((val) => (
                        <div key={val} className="text-right">
                            {Math.round((maxVal * val) / 100)}
                        </div>
                    ))}
                </div>

                {/* Scrollable Chart Area */}
                <div className="overflow-x-auto flex-1 h-full pb-2 scrollbar-thin scrollbar-thumb-gray-200">
                    <div
                        className="h-full relative flex items-end px-2"
                        style={{ minWidth: activeData.length > 12 ? `${activeData.length * 40}px` : '100%' }}
                    >
                        {/* Grid Lines (Background) */}
                        <div className="absolute inset-x-0 top-0 bottom-6 flex flex-col justify-between pointer-events-none z-0">
                            {[100, 75, 50, 25, 0].map((val) => (
                                <div key={val} className="w-full h-px bg-gray-50" />
                            ))}
                        </div>

                        {/* Bars Container */}
                        <div className="flex items-end justify-between w-full h-[calc(100%-24px)] z-10 gap-2"> {/* substracting bottom label height approx */}
                            {activeData.map((item, index) => (
                                <div key={index} className="flex-1 h-full flex items-end justify-center gap-[2px] sm:gap-1 group relative">
                                    {/* Merchants Bar */}
                                    <motion.div
                                        layout
                                        initial={{ height: 0 }}
                                        animate={{ height: `${(item.merchants / maxVal) * 100}%` }}
                                        transition={{ duration: 0.5, delay: index * 0.02 }}
                                        className="w-1.5 sm:w-2 bg-blue-500 rounded-t-sm relative group-hover:bg-blue-600 transition-colors"
                                    />
                                    {/* Managers Bar */}
                                    <motion.div
                                        layout
                                        initial={{ height: 0 }}
                                        animate={{ height: `${(item.managers / maxVal) * 100}%` }}
                                        transition={{ duration: 0.5, delay: index * 0.02 + 0.01 }}
                                        className="w-1.5 sm:w-2 bg-purple-500 rounded-t-sm relative group-hover:bg-purple-600 transition-colors"
                                    />
                                    {/* Customers Bar */}
                                    <motion.div
                                        layout
                                        initial={{ height: 0 }}
                                        animate={{ height: `${(item.customers / maxVal) * 100}%` }}
                                        transition={{ duration: 0.5, delay: index * 0.02 + 0.02 }}
                                        className="w-1.5 sm:w-2 bg-emerald-400 rounded-t-sm relative group-hover:bg-emerald-500 transition-colors"
                                    />

                                    {/* Tooltip (Hover) */}
                                    <div className="hidden group-hover:block fixed -translate-y-full -translate-x-1/2 bg-gray-900/90 text-white text-[10px] p-2 rounded z-50 pointer-events-none backdrop-blur-sm shadow-xl border border-white/10"
                                        style={{ left: "auto", top: "auto" }} /* Note: simplified tooltip positioning for demo */
                                    >
                                        <div className="font-bold mb-1 border-b border-gray-700 pb-1">{item.label}</div>
                                        <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mb-0.5"></div> Merch: {item.merchants}</div>
                                        <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500 mb-0.5"></div> Mgr: {item.managers}</div>
                                        <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mb-0.5"></div> Cust: {item.customers}</div>
                                    </div>

                                    {/* X-Axis Label */}
                                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] text-gray-400 font-medium whitespace-nowrap">
                                        {item.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center gap-4 mt-2 text-[10px] font-medium shrink-0 pt-2 border-t border-gray-50">
                <div className="flex items-center gap-1"><div className="w-2 h-2 bg-blue-500 rounded-full"></div>Merchants</div>
                <div className="flex items-center gap-1"><div className="w-2 h-2 bg-purple-500 rounded-full"></div>Managers</div>
                <div className="flex items-center gap-1"><div className="w-2 h-2 bg-emerald-400 rounded-full"></div>Customers</div>
            </div>
        </div>
    );
};

export default MultiBarGraph;
