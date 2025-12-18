import React from "react";
import { AlertTriangle, CheckCircle, AlertOctagon, Info, X } from "lucide-react";
import { motion } from "framer-motion";

const Alerts = () => {
    const alerts = [
        { type: "critical", message: "Server API Gateway timeout detected", time: "2 mins ago", id: 1 },
        { type: "warning", message: "High latency on payment processing node #4", time: "15 mins ago", id: 2 },
        { type: "info", message: "Scheduled maintenance completed successfully", time: "1 hour ago", id: 3 },
        { type: "info", message: "New merchant onboarding queue is clear", time: "2 hours ago", id: 4 },
        { type: "critical", message: "Database backup failed: Integrity Check Error", time: "5 hours ago", id: 5 },
    ];

    const getIcon = (type) => {
        switch (type) {
            case 'critical': return <AlertOctagon className="text-red-500" />;
            case 'warning': return <AlertTriangle className="text-yellow-500" />;
            case 'info': return <Info className="text-blue-500" />;
            case 'success': return <CheckCircle className="text-green-500" />;
            default: return <Info className="text-gray-500" />;
        }
    };

    const getTypeStyles = (type) => {
        switch (type) {
            case 'critical': return "bg-red-50 border-red-100 text-red-900";
            case 'warning': return "bg-yellow-50 border-yellow-100 text-yellow-900";
            case 'info': return "bg-blue-50 border-blue-100 text-blue-900";
            default: return "bg-gray-50 border-gray-100 text-gray-900";
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">System Alerts</h1>
                    <p className="text-gray-500">Real-time notifications and system status updates.</p>
                </div>
                <div className="flex gap-2">
                    <button className="bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">Mark all read</button>
                    <button className="bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 transition-colors">Clear Critical</button>
                </div>
            </div>

            <div className="space-y-4">
                {alerts.map((alert, index) => (
                    <motion.div
                        key={alert.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex items-start gap-4 p-4 rounded-xl border ${getTypeStyles(alert.type)}`}
                    >
                        <div className="mt-1 flex-shrink-0">
                            {getIcon(alert.type)}
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <h3 className="font-semibold capitalize">{alert.type} Alert</h3>
                                <button className="text-gray-400 hover:text-gray-600"><X size={16} /></button>
                            </div>
                            <p className="mt-1 text-sm opacity-90">{alert.message}</p>
                            <span className="text-xs mt-2 block opacity-70 font-medium">{alert.time}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Alerts;
