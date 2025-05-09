import React from 'react';
import { Fuel, Truck, User, Calendar, MapPin, DollarSign, Droplet, X } from 'lucide-react';

import { vehicles } from '../data/vehicles';
import FuelLogModal from '../components/FuelLogModal';
import { fuelLogs } from '../data/fuelLogs';
import { useState } from 'react';


export default function Vehicles() {
  const [openVehicleId, setOpenVehicleId] = useState(null);
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-700 border border-green-400';
      case 'In Repair':
        return 'bg-yellow-100 text-yellow-700 border border-yellow-400';
      case 'Out of Service':
        return 'bg-red-100 text-red-700 border border-red-400';
      default:
        return '';
    }
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 flex items-center gap-2">
            <Truck className="text-teal-600" size={32} />
            Our Fleet
          </h2>
          <p className="text-gray-600 mt-1">Manage and track all company vehicles.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src={vehicle.image} alt={vehicle.id} className="w-full h-48 object-cover" />
            <div className="p-4 border-t">
              <h3 className="font-semibold text-blue-900 flex items-center gap-2 mb-2">
                <Truck size={18} /> {vehicle.id}
              </h3>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <User size={14} /> Driver: <span className="font-semibold text-blue-800">{vehicle.driver}</span>
              </p>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <User size={14} /> Cleaner: <span className="font-semibold text-blue-800">{vehicle.cleaner}</span>
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <span className={`text-sm px-4 py-1 rounded-full text-center font-medium ${getStatusStyle(vehicle.status)}`}>
                  {vehicle.status}
                </span>
                <button
                  onClick={() => setOpenVehicleId(vehicle.id)}
                  className="border border-gray-300 px-4 py-2 rounded-md flex justify-center items-center gap-2 bg-gray-100 transition"
                >
                  <Fuel size={16} /> View Fuel Log
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {openVehicleId && (
      <FuelLogModal
        vehicleId={openVehicleId}
        logs={fuelLogs[openVehicleId] || []}
        onClose={() => setOpenVehicleId(null)}
      />
    )}
    </section>
  );
  
}
