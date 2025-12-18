import React from "react";
import { User, Bell, Lock, Key, Save } from "lucide-react";

const Settings = () => {
    return (
        <div className="max-w-4xl space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
                <p className="text-gray-500">Manage your profile and platform preferences.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex border-b border-gray-100">
                    {['Profile', 'Notifications', 'Security', 'API Keys'].map((tab, i) => (
                        <button
                            key={i}
                            className={`px-6 py-4 text-sm font-medium transition-colors ${i === 0 ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50' : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="p-8 space-y-8">
                    {/* Profile Section */}
                    <section className="space-y-6">
                        <div className="flex items-center gap-6">
                            <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden relative group cursor-pointer">
                                <img src="https://ui-avatars.com/api/?name=Super+Admin&background=0D8ABC&color=fff&size=200" alt="Avatar" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-white text-xs font-medium">Change</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-gray-900">Super Admin</h3>
                                <p className="text-gray-500 text-sm">admin@subverse.ai</p>
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
                                    <input type="email" defaultValue="admin@subverse.ai" className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-blue-500" />
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
                </div>
            </div>
        </div>
    );
};

export default Settings;
