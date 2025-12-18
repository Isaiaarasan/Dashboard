import React from "react";
import { motion } from "framer-motion";

const TicketOverlayGraph = () => {
    // Mock Data: Tickets vs Resolved
    const data = [
        { day: 'M', tickets: 24, resolved: 20 },
        { day: 'T', tickets: 30, resolved: 28 },
        { day: 'W', tickets: 45, resolved: 40 },
        { day: 'T', tickets: 35, resolved: 32 },
        { day: 'F', tickets: 55, resolved: 45 },
        { day: 'S', tickets: 15, resolved: 15 },
        { day: 'S', tickets: 10, resolved: 8 },
    ];

    const maxVal = 60;

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-80 flex flex-col">
            <h3 className="font-bold text-gray-800 mb-6">Support Efficiency</h3>
            <div className="flex-1 flex items-end justify-between gap-3 relative px-2">
                {/* Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between text-xs text-gray-300 pointer-events-none z-0">
                    {[100, 75, 50, 25, 0].map((val) => (
                        <div key={val} className="w-full h-px bg-gray-50 flex items-center"></div>
                    ))}
                </div>

                {data.map((item, index) => (
                    <div key={index} className="flex-1 h-full flex items-end justify-center relative z-10 group">
                        {/* Total Tickets (Background Bar) */}
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${(item.tickets / maxVal) * 100}%` }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="w-full max-w-[24px] bg-gray-100 rounded-t-md absolute bottom-0 border border-gray-200"
                        >
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-gray-400 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                                {item.tickets}
                            </div>
                        </motion.div>

                        {/* Resolved Tickets (Foreground Bar) */}
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${(item.resolved / maxVal) * 100}%` }}
                            transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                            className="w-full max-w-[24px] bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-t-md absolute bottom-0 opacity-90 hover:opacity-100 transition-opacity"
                        >
                            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white/50 rounded-full"></div>
                        </motion.div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between mt-4 text-xs font-medium text-gray-400 px-2">
                {data.map((item, index) => (
                    <span key={index}>{item.day}</span>
                ))}
            </div>
            <div className="flex justify-center gap-4 mt-4 text-xs font-medium">
                <div className="flex items-center gap-1"><div className="w-2 h-2 bg-gray-200 rounded-sm border border-gray-300"></div>Total Tickets</div>
                <div className="flex items-center gap-1"><div className="w-2 h-2 bg-indigo-500 rounded-sm"></div>Resolved</div>
            </div>
        </div>
    );
};

export default TicketOverlayGraph;
