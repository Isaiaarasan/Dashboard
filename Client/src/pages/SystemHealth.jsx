import React from "react";
import { Server, Database, Activity, Wifi, CheckCircle, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

const SystemHealth = () => {
    const services = [
        { name: "API Gateway", status: "Operational", latency: "45ms", uptime: "99.99%", icon: Wifi },
        { name: "Payments Engine", status: "Operational", latency: "120ms", uptime: "99.95%", icon: Activity },
        { name: "Primary Database", status: "Operational", latency: "12ms", uptime: "100%", icon: Database },
        { name: "Backup Server", status: "Maintenance", latency: "-", uptime: "98.50%", icon: Server },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">System Health Status</h1>
                <p className="text-gray-500">Live monitoring of critical infrastructure.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                                <service.icon size={24} />
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${service.status === 'Operational' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                }`}>
                                {service.status}
                            </span>
                        </div>

                        <h3 className="text-lg font-bold text-gray-900">{service.name}</h3>

                        <div className="mt-4 grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-3 rounded-lg">
                                <p className="text-xs text-gray-500 mb-1">Latency</p>
                                <p className="font-mono font-semibold text-gray-800">{service.latency}</p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg">
                                <p className="text-xs text-gray-500 mb-1">Uptime (30d)</p>
                                <p className="font-mono font-semibold text-gray-800">{service.uptime}</p>
                            </div>
                        </div>

                        {/* Animated Pulse for Operational Services */}
                        {service.status === 'Operational' && (
                            <div className="absolute top-6 right-32 w-3 h-3">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SystemHealth;
