import React from 'react';
import { Mail, Phone } from 'lucide-react';

export default function OwnerCard() {
  return (
    <div className="max-w-6xl mx-auto mt-20 px-4">
      <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow flex flex-col md:flex-row overflow-hidden">
        
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="./images/owner.jpg.jpeg"
            alt="SSKGT Owner"
            className="h-64 w-64 object-cover mx-auto"
          />
        </div>

        {/* Info Section */}
        <div className="p-6 md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-1">Mr. GUNDETI VENU</h2>
          <p className="text-blue-600 font-medium mb-1">Founder & CEO, SSKGT</p>
          <p className="text-blue-600 font-medium mb-4">SRI SAI KRISHNA GOODS & TRANSPORT </p>
          <p className="text-gray-700 mb-6">
            With over 30 years of experience in the logistics and transportation industry, Mr. Venu has built SSKGT from the ground up. His vision is to provide reliable and efficient services while fostering a supportive work environment for all employees. He believes in leveraging technology to streamline operations and enhance customer satisfaction.
          </p>
          <div className="flex items-center gap-6 text-blue-700 font-medium">
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>venu.gundeti@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span>9246933445</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
