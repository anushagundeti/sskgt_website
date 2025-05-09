import React, { useState } from 'react';
import { User, CalendarCheck, Clock, MapPin } from 'lucide-react';

const employees = [
  {
    id: 'EMP-001',
    name: 'Alice Johnson',
    role: 'Driver',
    location: 'Depot A',
    attendance: [
      { date: 'May 07, 2025', status: 'Present', time: '09:00 AM' },
      { date: 'May 06, 2025', status: 'Present', time: '09:05 AM' },
      { date: 'May 05, 2025', status: 'Absent', time: '-' },
    ],
  },
  {
    id: 'EMP-002',
    name: 'David Miller',
    role: 'Cleaner',
    location: 'Depot B',
    attendance: [
      { date: 'May 07, 2025', status: 'Present', time: '09:10 AM' },
      { date: 'May 06, 2025', status: 'Present', time: '08:55 AM' },
      { date: 'May 05, 2025', status: 'Present', time: '09:00 AM' },
    ],
  },
];

export default function EmployeesPage() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (
    <section className="bg-gray-50 py-12 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center gap-2">
          <User className="text-blue-600" /> Employee Management
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {employees.map((emp) => (
            <div
              key={emp.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer transition"
              onClick={() => setSelectedEmployee(emp)}
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-1">{emp.name}</h3>
              <p className="text-sm text-gray-600">ID: {emp.id}</p>
              <p className="text-sm text-gray-600">Role: {emp.role}</p>
              <p className="text-sm text-gray-600 flex items-center gap-1">
                <MapPin size={14} /> {emp.location}
              </p>
            </div>
          ))}
        </div>

        {selectedEmployee && (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-blue-900 flex items-center gap-2">
                <CalendarCheck className="text-blue-600" /> Attendance: {selectedEmployee.name}
              </h3>
              <button
                onClick={() => setSelectedEmployee(null)}
                className="text-sm text-blue-600 hover:underline"
              >
                Close
              </button>
            </div>

            <table className="w-full text-sm border-collapse">
              <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
                <tr>
                  <th className="px-4 py-2 text-left">Date</th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left">Check-In Time</th>
                </tr>
              </thead>
              <tbody>
                {selectedEmployee.attendance.map((entry, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} text-blue-900`}
                  >
                    <td className="px-4 py-2 border-b font-medium">{entry.date}</td>
                    <td className="px-4 py-2 border-b">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          entry.status === 'Present'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {entry.status}
                      </span>
                    </td>
                    <td className="px-4 py-2 border-b flex items-center gap-1">
                      <Clock size={14} className="text-gray-500" /> {entry.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}