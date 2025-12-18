import React from 'react';
import ActiveMerchantsTable from '../components/merchants/ActiveMerchantsTable';

const Merchants = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Merchants Management</h1>
                    <p className="text-gray-500 mt-1">Monitor and manage all merchant accounts and activities.</p>
                </div>
            </div>

            <ActiveMerchantsTable />
        </div>
    );
};

export default Merchants;
