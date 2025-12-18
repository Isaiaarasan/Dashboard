import React from "react";
import { AlertOctagon, AlertTriangle, Info, CheckCircle, X, Filter } from "lucide-react";
import { motion } from "framer-motion";

const Alerts = () => {
    // Specific requirements: High payment failures, High support tickets, Steep drop in subscribers
    const alerts = [
        {
            id: 1,
            type: "Critical",
            source: "Payment Gateway",
            message: "High failure rate detected (15%) in last hour for HDFC Netbanking.",
            time: "10 mins ago",
            category: "Payment Failures"
        },
        {
            id: 2,
            type: "High",
            source: "SpeedNet ISP",
            message: "Sudden 20% drop in active subscribers detected.",
            time: "45 mins ago",
            category: "Subscriber Drop"
        },
        {
            id: 3,
            type: "Medium",
            source: "Support Desk",
            message: "Unusual spike in support tickets from 'CableNet Sols'.",
            time: "2 hours ago",
            category: "Support Tickets"
        },
        {
            id: 4,
            type: "Low",
            source: "System",
            message: "Routine database optimization completed with warnings.",
            time: "5 hours ago",
            category: "Maintenance"
        },
        {
            id: 5,
            type: "Info",
            source: "Onboarding",
            message: "New merchant 'Urban Fibernet' documentation verified.",
            time: "1 day ago",
            category: "Onboarding"
        },
    ];

    const getIcon = (type) => {
        switch (type) {
            case 'Critical': return <AlertOctagon className="text-red-500" />;
            case 'High': return <AlertTriangle className="text-orange-500" />;
            case 'Medium': return <AlertTriangle className="text-yellow-500" />;
            case 'Low': return <Info className="text-blue-500" />;
            case 'Info': return <Info className="text-gray-500" />;
            default: return <Info className="text-gray-500" />;
        }
    };

    const getTypeStyles = (type) => {
        switch (type) {
            case 'Critical': return "bg-red-50 border-red-100 text-red-900";
            case 'High': return "bg-orange-50 border-orange-100 text-orange-900";
            case 'Medium': return "bg-yellow-50 border-yellow-100 text-yellow-900";
            case 'Low': return "bg-blue-50 border-blue-100 text-blue-900";
            default: return "bg-gray-50 border-gray-100 text-gray-900";
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">System Alerts</h1>
                    <p className="text-gray-500">Real-time monitoring of critical events.</p>
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm hover:bg-gray-50 text-gray-700">
                        <Filter size={18} />
                        Filter Priority
                    </button>
                    <button className="bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 transition-colors font-medium text-sm">Clear Critical</button>
                </div>
            </div>

            <div className="space-y-4">
                {alerts.map((alert, index) => (
                    <motion.div
                        key={alert.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex items-start gap-4 p-5 rounded-xl border ${getTypeStyles(alert.type)} relative group`}
                    >
                        <div className="mt-1 flex-shrink-0 bg-white p-2 rounded-full shadow-sm">
                            {getIcon(alert.type)}
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-2">
                                    <h3 className="font-bold text-lg">{alert.type} Alert</h3>
                                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/50 border border-black/5 uppercase tracking-wide opacity-70">
                                        {alert.category}
                                    </span>
                                </div>
                                <button className="text-black/20 hover:text-black/50 transition-colors"><X size={18} /></button>
                            </div>
                            <p className="mt-1 font-medium opacity-90">{alert.message}</p>
                            <div className="flex items-center gap-4 mt-3 text-xs opacity-70 font-semibold uppercase tracking-wide">
                                <span>Source: {alert.source}</span>
                                <span>•</span>
                                <span>{alert.time}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Alerts;
