import React from 'react';
import { Fuel, Calendar, MapPin, DollarSign, Droplet, X } from 'lucide-react';

export default function FuelLogModal({ vehicleId, logs, onClose }) {
  if (!vehicleId) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center px-4">
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-xl ring-1 ring-black/10 p-6 relative overflow-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-teal-600 hover:text-teal-800"
        >
          <X size={24} />
        </button>

        <h3 className="text-2xl font-bold text-blue-900 flex items-center gap-2 mb-1">
          <Fuel size={24} /> Fuel Log: {vehicleId}
        </h3>
        <p className="text-gray-500 mb-4">Detailed fuel history for this vehicle.</p>

        <table className="w-full text-sm text-left border-collapse">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs tracking-wider">
            <tr>
              <th className="px-4 py-2 border-b">
                <Calendar size={16} className="inline mr-1" />Date
              </th>
              <th className="px-4 py-2 border-b text-right">
                <Droplet size={16} className="inline mr-1" />Litres
              </th>
              <th className="px-4 py-2 border-b text-right">
                <DollarSign size={16} className="inline mr-1" />Cost
              </th>
              <th className="px-4 py-2 border-b">
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
                <td className="px-4 py-2 border-b font-medium">{log.date}</td>
                <td className="px-4 py-2 border-b text-right">{log.litres} L</td>
                <td className="px-4 py-2 border-b text-right">${log.cost.toFixed(2)}</td>
                <td className="px-4 py-2 border-b">{log.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
