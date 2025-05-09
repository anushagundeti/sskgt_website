
import React from 'react';
import { UsersRound, Truck, PhoneCall } from 'lucide-react';

const services = [
  {
    icon: <UsersRound />,
    title: 'Employee Management',
    description: 'Efficiently track and manage your valuable team members, from drivers to office staff.',
  },
  {
    icon: <Truck />,
    title: 'Vehicle Tracking',
    description: 'Keep a detailed log of your vehicles, including status, assignments, and fuel history.',
  },
  {
    icon: <PhoneCall />,
    title: 'Seamless Communication',
    description: 'Easy-to-use contact forms and readily available information to keep you connected.',
  },
];

export default function ServiceHighlights() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
          Why Choose <span className="text-teal-600">SSKGT?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-8 text-center"
            >
              <div className="flex justify-center items-center mb-4">
                <div className="bg-teal-600 rounded-full w-16 h-16 flex items-center justify-center">
                  {React.cloneElement(service.icon, {
                    size: 28,
                    strokeWidth: 2,
                    color: 'white',
                  })}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
