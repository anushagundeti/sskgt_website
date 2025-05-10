import React from 'react';
import { Info, Target, Users, ShieldCheck } from 'lucide-react';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="flex justify-center mb-2">
          <Info size={28} className="text-blue-600" />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">About SSKGT</h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Learn more about our company, mission, and the values that drive us.
        </p>
      </div>

      {/* Our Story Section */}
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 sm:p-8 md:p-12 mb-12 sm:mb-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            SSKGT was founded with a simple mission: to revolutionize fleet management through technology and exceptional service...
          </p>
          <p className="text-gray-700 text-sm sm:text-base">
            Our team comprises industry veterans and tech innovators passionate about solving complex logistical problems...
          </p>
        </div>
        <img
          src="/images/lorry.jpeg"
          alt="About"
          className="w-full h-64 sm:h-full object-cover rounded-lg"
        />
      </div>

      {/* Mission, Team, Values Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center mb-12">
        {/* Mission */}
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
          <div className="bg-blue-900 rounded-full w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 flex items-center justify-center">
            <Target size={26} color="white" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2">Our Mission</h3>
          <p className="text-gray-600 text-sm sm:text-base">
            To empower businesses with intelligent fleet management solutions that drive efficiency...
          </p>
        </div>

        {/* Team */}
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
          <div className="bg-blue-900 rounded-full w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 flex items-center justify-center">
            <Users size={26} color="white" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2">Our Team</h3>
          <p className="text-gray-600 text-sm sm:text-base">
            A dedicated group of experts in logistics, technology, and customer service...
          </p>
        </div>

        {/* Values */}
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
          <div className="bg-blue-900 rounded-full w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 flex items-center justify-center">
            <ShieldCheck size={26} color="white" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2">Our Values</h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Integrity, Innovation, Customer-Focus, and Reliability are the cornerstones...
          </p>
        </div>
      </div>

      {/* Thank You */}
      <p className="text-center text-gray-600 text-base sm:text-lg font-medium max-w-3xl mx-auto">
        Thank you for considering SSKGT. We're excited to help your business thrive.
      </p>
    </div>
  );
}
