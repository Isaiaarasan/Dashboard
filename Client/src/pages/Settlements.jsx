import React from "react";
import { Download, Search, Filter } from "lucide-react";

const Settlements = () => {
    const settlements = [
        { id: "SET-2024-001", merchant: "SpeedNet ISP", amount: "₹45,200.00", status: "Completed", date: "Oct 24, 2024" },
        { id: "SET-2024-002", merchant: "CableNet Solutions", amount: "₹12,450.00", status: "Processing", date: "Oct 24, 2024" },
        { id: "SET-2024-003", merchant: "FitZone Gyms", amount: "₹8,900.00", status: "Failed", date: "Oct 23, 2024" },
        { id: "SET-2024-004", merchant: "TechStart Hub", amount: "₹1,25,000.00", status: "Completed", date: "Oct 23, 2024" },
        { id: "SET-2024-005", merchant: "Coffee House Chain", amount: "₹3,400.00", status: "Completed", date: "Oct 22, 2024" },
    ];

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Settlements</h1>
                    <p className="text-gray-500">Manage and track merchant payouts.</p>
                </div>

                <div className="flex gap-2">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search ID..."
                            className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm hover:bg-gray-50 text-gray-700">
                        <Filter size={18} />
                        Filter
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-shadow">
                        <Download size={18} />
                        Export
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50/50 border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Settlement ID</th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Merchant</th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Amount</th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Date</th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Status</th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {settlements.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-4 text-sm font-medium text-blue-600">{item.id}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{item.merchant}</td>
                                <td className="px-6 py-4 text-sm font-mono text-gray-700">{item.amount}</td>
                                <td className="px-6 py-4 text-sm text-gray-500">{item.date}</td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                        item.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-red-100 text-red-800'
                                        }`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-gray-400 hover:text-blue-600">View</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Settlements;
