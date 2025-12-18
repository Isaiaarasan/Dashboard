import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    MoreHorizontal,
    AlertCircle,
    CheckCircle,
    Eye,
    Power,
    Ban,
    Search,
    Filter,
    Download,
    TrendingUp,
    TrendingDown,
    Wifi,
    Tv,
    Dumbbell
} from 'lucide-react';

const ActiveMerchantsTable = () => {
    // Mock Data based on the structure
    const [merchants, setMerchants] = useState([
        {
            id: 1,
            name: 'SpeedNet ISP',
            sector: 'Internet',
            subscribers: 12500,
            tpv: '₹3.5 Cr',
            revenue: '₹12.5 L',
            growth: 12.5, // Percentage
            status: 'Active',
            logo: 'SN'
        },
        {
            id: 2,
            name: 'CableNet Sols',
            sector: 'Cable',
            subscribers: 8200,
            tpv: '₹2.1 Cr',
            revenue: '₹8.2 L',
            growth: -2.4, // Negative growth
            status: 'Active',
            logo: 'CN'
        },
        {
            id: 3,
            name: 'FitZone Gyms',
            sector: 'Fitness',
            subscribers: 450,
            tpv: '₹1.2 Cr',
            revenue: '₹3.5 L',
            growth: 5.8,
            status: 'Active',
            logo: 'FZ'
        },
        {
            id: 4,
            name: 'Urban Fibernet',
            sector: 'Internet',
            subscribers: 6800,
            tpv: '₹1.8 Cr',
            revenue: '₹6.1 L',
            growth: 8.1,
            status: 'Active',
            logo: 'UF'
        },
        {
            id: 5,
            name: 'Metro Cable',
            sector: 'Cable',
            subscribers: 3200,
            tpv: '₹95 L',
            revenue: '₹2.8 L',
            growth: 0.5,
            status: 'Inactive',
            logo: 'MC'
        },
    ]);

    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('all'); // all, Active, Inactive

    const filteredMerchants = merchants.filter(merchant => {
        const matchesSearch = merchant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            merchant.sector.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = statusFilter === 'all' || merchant.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const handleDeactivate = (id) => {
        const reason = prompt("Enter reason for deactivation:");
        if (reason && window.confirm("Are you sure you want to deactivate this merchant?")) {
            setMerchants(merchants.map(m => m.id === id ? { ...m, status: 'Inactive' } : m));
        }
    };

    const handleActivate = (id) => {
        if (window.confirm("Are you sure you want to activate this merchant?")) {
            setMerchants(merchants.map(m => m.id === id ? { ...m, status: 'Active' } : m));
        }
    };

    return (
        <div className="space-y-6">
            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/70 backdrop-blur-xl p-4 rounded-2xl border border-white/50 shadow-sm">
                <div className="relative w-full sm:w-96 group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                    <input
                        type="text"
                        placeholder="Search merchants, sectors..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500/20 text-slate-700 placeholder:text-slate-400 font-medium transition-all"
                    />
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                    <div className="relative group">
                        <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all font-medium shadow-sm">
                            <Filter size={18} />
                            <span>{statusFilter === 'all' ? 'All Status' : statusFilter}</span>
                        </button>
                        {/* Simple Dropdown for Filter */}
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 p-2 hidden group-hover:block z-20">
                            {['all', 'Active', 'Inactive'].map(status => (
                                <button
                                    key={status}
                                    onClick={() => setStatusFilter(status)}
                                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium ${statusFilter === status ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'}`}
                                >
                                    {status === 'all' ? 'All Merchants' : status}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-[#4169E1] text-white rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all font-medium">
                        <Download size={18} />
                        <span>Export</span>
                    </button>
                </div>
            </div>

            {/* Premium Table/List View */}
            <div className="bg-white/70 backdrop-blur-3xl rounded-3xl border border-white/60 shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-slate-100">
                                <th className="px-8 py-5 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Merchant</th>
                                <th className="px-6 py-5 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Sector</th>
                                <th className="px-6 py-5 text-right text-xs font-bold text-slate-400 uppercase tracking-wider">Subscribers</th>
                                <th className="px-6 py-5 text-right text-xs font-bold text-slate-400 uppercase tracking-wider">TPV</th>
                                <th className="px-6 py-5 text-right text-xs font-bold text-slate-400 uppercase tracking-wider">Revenue</th>
                                <th className="px-6 py-5 text-right text-xs font-bold text-slate-400 uppercase tracking-wider">Growth</th>
                                <th className="px-6 py-5 text-center text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-5 text-right text-xs font-bold text-slate-400 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50 relative">
                            <AnimatePresence>
                                {filteredMerchants.map((merchant, index) => (
                                    <motion.tr
                                        key={merchant.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.2, delay: index * 0.05 }}
                                        className="group hover:bg-blue-50/50 transition-colors relative"
                                    >
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-blue-700 font-bold shadow-inner">
                                                    {merchant.logo}
                                                </div>
                                                <div>
                                                    <div className="font-bold text-slate-900">{merchant.name}</div>
                                                    <div className="text-xs text-slate-400 font-medium">ID: #{merchant.id.toString().padStart(4, '0')}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex items-center gap-2">
                                                {merchant.sector === 'Internet' && <div className="p-1.5 rounded-lg bg-cyan-100 text-cyan-600"><Wifi size={14} /></div>}
                                                {merchant.sector === 'Cable' && <div className="p-1.5 rounded-lg bg-purple-100 text-purple-600"><Tv size={14} /></div>}
                                                {merchant.sector === 'Fitness' && <div className="p-1.5 rounded-lg bg-orange-100 text-orange-600"><Dumbbell size={14} /></div>}
                                                <span className="font-medium text-slate-700">{merchant.sector}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-right">
                                            <div className="font-bold text-slate-700">{merchant.subscribers.toLocaleString()}</div>
                                        </td>
                                        <td className="px-6 py-5 text-right">
                                            <div className="font-bold text-slate-900">{merchant.tpv}</div>
                                        </td>
                                        <td className="px-6 py-5 text-right">
                                            <div className="font-bold text-green-600">{merchant.revenue}</div>
                                        </td>
                                        <td className="px-6 py-5 text-right">
                                            <div className={`inline-flex items-center gap-1 font-bold ${merchant.growth >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                                                {merchant.growth >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                                                {Math.abs(merchant.growth)}%
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-center">
                                            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${merchant.status === 'Active'
                                                ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.2)]'
                                                : 'bg-rose-500/10 text-rose-600 border-rose-500/20'
                                                }`}>
                                                <div className={`w-1.5 h-1.5 rounded-full ${merchant.status === 'Active' ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`} />
                                                {merchant.status}
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 text-right">
                                            <div className="flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                                                <motion.button
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                >
                                                    <Eye size={18} />
                                                </motion.button>
                                                {merchant.status === 'Active' ? (
                                                    <motion.button
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        onClick={() => handleDeactivate(merchant.id)}
                                                        className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                                                    >
                                                        <Ban size={18} />
                                                    </motion.button>
                                                ) : (
                                                    <motion.button
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        onClick={() => handleActivate(merchant.id)}
                                                        className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                                                    >
                                                        <Power size={18} />
                                                    </motion.button>
                                                )}
                                            </div>
                                        </td>
                                    </motion.tr>
                                ))}
                            </AnimatePresence>
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="px-8 py-5 border-t border-slate-100 flex items-center justify-between text-sm">
                    <div className="text-slate-400 font-medium">Showing <span className="text-slate-900 font-bold">1-5</span> of <span className="text-slate-900 font-bold">45</span></div>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 font-medium hover:bg-slate-50 transition-colors disabled:opacity-50">Previous</button>
                        <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 font-medium hover:bg-slate-50 transition-colors">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActiveMerchantsTable;
