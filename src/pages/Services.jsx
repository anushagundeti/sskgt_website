import React from 'react';
import {
  ListChecks,
  Wrench,
  Fuel,
  Users,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';


export default function Services() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
  };
  const serviceData = [
    {
      icon: <ListChecks size={28} color="white" />,
      title: 'Comprehensive Fleet Tracking',
      description:
        'Real-time GPS tracking, geofencing, and route optimization to monitor your entire fleet efficiently.',
    },
    {
      icon: <Users size={28} color="white" />,
      title: 'Employee Management',
      description:
        'Tools for managing driver assignments, tracking performance, and simplifying communication with your team.',
    },
    {
      icon: <Wrench size={28} color="white" />,
      title: 'Vehicle Maintenance Scheduling',
      description:
        'Proactive maintenance alerts, service history logging, and scheduling to keep your vehicles in top condition.',
    },
    {
      icon: <Fuel size={28} color="white" />,
      title: 'Fuel Management & Reporting',
      description:
        'Track fuel consumption, costs, and efficiency with detailed logs and insightful reports.',
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2 flex items-center justify-center gap-2">
          <ListChecks size={32} className="text-teal-600" />
          Our Services
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover how SSKGT can streamline your operations and boost productivity with our range of specialized services.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-left flex gap-4 items-start"
            >
              <div className="bg-teal-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
                {service.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-1">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Call-to-Action Section */}
      <div className="mt-16 bg-gray-100 p-10 rounded-xl text-center max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">
          Ready to Optimize Your Service?
        </h3>
        <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
          Contact us today for a personalized consultation and demo to see how SSKGT can be tailored to your specific business needs.
        </p>
      <div className="text-center mt-6">
  <button
    onClick={handleGetStarted}
    className="bg-teal-900 text-white font-semibold px-6 py-3 rounded-md shadow-md bg-blue-900 transition"
  >
    Get Started
  </button>
</div>
      </div>
      </div>
    </section>
  );
}
