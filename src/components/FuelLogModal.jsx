import React from 'react';
import { Fuel, Calendar, MapPin, DollarSign, Droplet, X } from 'lucide-react';

export default function FuelLogModal({ vehicleId, logs, onClose }) {
  if (!vehicleId) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center px-2 sm:px-4">
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-xl ring-1 ring-black/10 p-4 sm:p-6 relative overflow-auto max-h-[90vh]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-blue-600 hover:text-blue-800"
        >
          <X size={24} />
        </button>

        {/* Modal heading */}
        <h3 className="text-xl sm:text-2xl font-bold text-blue-900 flex items-center gap-2 mb-1">
          <Fuel size={22} className="sm:size-6" /> Fuel Log: {vehicleId}
        </h3>
        <p className="text-gray-500 mb-4 text-sm sm:text-base">
          Detailed fuel history for this vehicle.
        </p>

        {/* Responsive table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse min-w-[480px]">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs tracking-wider">
              <tr>
                <th className="px-3 py-2 border-b">
                  <Calendar size={16} className="inline mr-1" />Date
                </th>
                <th className="px-3 py-2 border-b text-right">
                  <Droplet size={16} className="inline mr-1" />Litres
                </th>
                <th className="px-3 py-2 border-b text-right">
                  <DollarSign size={16} className="inline mr-1" />Cost
                </th>
                <th className="px-3 py-2 border-b">
                  <MapPin size={16} className="inline mr-1" />Location
                </th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 transition text-blue-900`}
                >
                  <td className="px-3 py-2 border-b font-medium">{log.date}</td>
                  <td className="px-3 py-2 border-b text-right">{log.litres} L</td>
                  <td className="px-3 py-2 border-b text-right">${log.cost.toFixed(2)}</td>
                  <td className="px-3 py-2 border-b">{log.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
