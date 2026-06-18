import React, { useState } from "react";
import { User, Bell, Lock, Key, Save, History, FileText } from "lucide-react";

const Settings = () => {
    const [activeTab, setActiveTab] = useState('Profile');

    const auditLogs = [
        { id: 1, action: "Merchant Approval", user: "Super Admin", details: "Approved 'Urban Fibernet'", time: "2 mins ago" },
        { id: 2, action: "System Alert Cleared", user: "Super Admin", details: "Cleared 'Database High Load'", time: "1 hour ago" },
        { id: 3, action: "Settings Update", user: "Super Admin", details: "Updated email preferences", time: "5 hours ago" },
        { id: 4, action: "User Login", user: "Super Admin", details: "Login from IP 192.168.1.1", time: "1 day ago" },
    ];

    return (
        <div className="max-w-4xl space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
                <p className="text-gray-500">Manage your profile, preferences, and view audit history.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex border-b border-gray-100 overflow-x-auto">
                    {['Profile', 'Notifications', 'Security', 'Audit Logs'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-4 text-sm font-medium transition-colors whitespace-nowrap ${activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50' : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="p-8">
                    {activeTab === 'Profile' && (
                        <section className="space-y-6 animate-fadeIn">
                            <div className="flex items-center gap-6">
                                <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden relative group cursor-pointer">
                                    <img src="https://ui-avatars.com/api/?name=Super+Admin&background=0D8ABC&color=fff&size=200" alt="Avatar" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="text-white text-xs font-medium">Change</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">Super Admin</h3>
                                    <p className="text-gray-500 text-sm">admin@example.com</p>
                                    <button className="mt-2 text-sm text-blue-600 font-medium hover:underline">Upload new picture</button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Display Name</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                        <input type="text" defaultValue="Super Admin" className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-500" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                                    <div className="relative">
                                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">@</div>
                                        <input type="email" defaultValue="admin@example.com" className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-500" />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 flex justify-end">
                                <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-shadow">
                                    <Save size={18} />
                                    <span>Save Changes</span>
                                </button>
                            </div>
                        </section>
                    )}

                    {activeTab === 'Audit Logs' && (
                        <section className="space-y-6 animate-fadeIn">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Activity History</h3>
                            <div className="border border-gray-100 rounded-xl overflow-hidden">
                                <table className="w-full text-left">
                                    <thead className="bg-gray-50 border-b border-gray-100">
                                        <tr>
                                            <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">Action</th>
                                            <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">User</th>
                                            <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">Description</th>
                                            <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase text-right">Time</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {auditLogs.map((log) => (
                                            <tr key={log.id} className="hover:bg-gray-50/50">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-2 font-medium text-gray-800">
                                                        <History size={16} className="text-blue-500" /> {log.action}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-600">{log.user}</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">{log.details}</td>
                                                <td className="px-6 py-4 text-sm text-gray-400 text-right font-mono">{log.time}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    )}

                    {/* Placeholders for notifications and security */}
                    {(activeTab === 'Notifications' || activeTab === 'Security') && (
                        <div className="flex flex-col items-center justify-center py-12 text-center text-gray-400">
                            <Lock size={48} className="mb-4 text-gray-200" />
                            <h3 className="text-lg font-bold text-gray-900">Security & Notifications</h3>
                            <p className="text-sm">These settings are currently managed by the master configuration.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Settings;
