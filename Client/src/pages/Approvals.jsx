import React, { useState } from "react";
import { Check, X } from "lucide-react";

const Approvals = () => {
    // Mock Data
    const approvals = [
        { id: 1, name: "Urban Fibernet Pvt Ltd", type: "ISP", date: "2024-10-24", documents: "Verified", status: "Pending" },
        { id: 2, name: "SkyHigh Travels", type: "Travel Agency", date: "2024-10-23", documents: "Pending", status: "Pending" },
        { id: 3, name: "Fresh Mart Chain", type: "Retail", date: "2024-10-23", documents: "Verified", status: "Rejected" },
    ];

    const [rejectId, setRejectId] = useState(null);
    const [rejectReason, setRejectReason] = useState("");

    const handleRejectClick = (id) => {
        setRejectId(id);
        setRejectReason("");
    };

    const confirmReject = () => {
        if (!rejectReason) return alert("Please provide a reason.");
        console.log("Rejected", rejectId, rejectReason);
        setRejectId(null);
    };

    return (
        <div className="space-y-8 relative">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Pending Approvals</h1>
                <p className="text-gray-500">Review and approve new merchant onboardings.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50/50 border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Merchant Entity</th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Type</th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Applied Date</th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Documents</th>
                            <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {approvals.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="font-bold text-gray-900">{item.name}</div>
                                    <div className="text-xs text-blue-600 cursor-pointer hover:underline">View Details</div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">{item.type}</td>
                                <td className="px-6 py-4 text-sm text-gray-500">{item.date}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${item.documents === 'Verified' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                        }`}>
                                        {item.documents}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <button className="flex items-center gap-1 px-3 py-1.5 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 text-xs font-bold transition-colors">
                                            <Check size={14} /> Approve
                                        </button>
                                        <button onClick={() => handleRejectClick(item.id)} className="flex items-center gap-1 px-3 py-1.5 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 text-xs font-bold transition-colors">
                                            <X size={14} /> Reject
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Rejection Modal */}
            {rejectId && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
                    <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Reject Application</h3>
                        <p className="text-sm text-gray-500 mb-4">Please provide a reason for rejecting this merchant.</p>
                        <textarea
                            value={rejectReason}
                            onChange={(e) => setRejectReason(e.target.value)}
                            className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500/20 outline-none resize-none mb-4"
                            placeholder="Reason for rejection..."
                        ></textarea>
                        <div className="flex justify-end gap-3">
                            <button onClick={() => setRejectId(null)} className="px-4 py-2 text-gray-600 font-medium hover:bg-gray-100 rounded-lg">Cancel</button>
                            <button onClick={confirmReject} className="px-4 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700">Confirm Reject</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Approvals;
