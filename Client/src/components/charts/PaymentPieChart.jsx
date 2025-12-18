import React from "react";
import { motion } from "framer-motion";

const PaymentPieChart = () => {
    const data = [
        { label: "Credit Card", value: 45, color: "#4169E1" }, // Royal Blue
        { label: "UPI", value: 35, color: "#10B981" }, // Emerald
        { label: "Net Banking", value: 15, color: "#F59E0B" }, // Amber
        { label: "Wallets", value: 5, color: "#8B5CF6" }, // Violet
    ];

    // Calculate cumulative percentages for conical gradient or SVG segments
    // For simplicity and solid control in Framer Motion, we'll use SVG circles with dasharrays

    const size = 200;
    const center = size / 2;
    const radius = center - 20;
    const circumference = 2 * Math.PI * radius;

    let currentOffset = 0;

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-80 flex flex-col items-center">
            <h3 className="font-bold text-gray-800 mb-2 w-full text-left">Payment Methods</h3>

            <div className="relative flex-1 flex items-center justify-center">
                <svg width={size} height={size} className="transform -rotate-90">
                    {data.map((item, index) => {
                        const strokeDasharray = `${(item.value / 100) * circumference} ${circumference}`;
                        const strokeDashoffset = -currentOffset;
                        currentOffset += (item.value / 100) * circumference;

                        return (
                            <motion.circle
                                key={index}
                                cx={center}
                                cy={center}
                                r={radius}
                                fill="transparent"
                                stroke={item.color}
                                strokeWidth="24"
                                strokeDasharray={strokeDasharray}
                                strokeDashoffset={strokeDashoffset}
                                initial={{ strokeDasharray: `0 ${circumference}` }}
                                animate={{ strokeDasharray: strokeDasharray }}
                                transition={{ duration: 1, delay: index * 0.2 }}
                                className="hover:opacity-80 transition-opacity cursor-pointer"
                            />
                        );
                    })}
                    {/* Center Text */}
                    <text x="50%" y="50%" textAnchor="middle" dy=".3em" transform={`rotate(90 ${center} ${center})`} className="fill-gray-700 font-bold text-xl">
                        Dist.
                    </text>
                </svg>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-2 w-full px-4">
                {data.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                            <span className="text-gray-600">{item.label}</span>
                        </div>
                        <span className="font-bold text-gray-900">{item.value}%</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PaymentPieChart;
