import React from 'react';
import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-700">
        {/* Brand Section */}
        <div>
          <h3 className="text-lg font-bold text-blue-900 mb-2">SSKGT</h3>
          <p>Efficiently managing your fleet, ensuring reliability and professionalism.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-blue-900 mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/employees" className="hover:underline">Our Team</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-blue-900 mb-2">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-teal-700">
              <Mail size={16} /> venu.gundeti@gmail.com
            </li>
            <li className="flex items-center gap-2 text-teal-700">
              <Phone size={16} /> 9246933445
            </li>
            <li className="flex gap-4 pt-2 text-gray-600">
              <Facebook className="hover:text-blue-600 cursor-pointer" size={18} />
              <Twitter className="hover:text-blue-400 cursor-pointer" size={18} />
              <Linkedin className="hover:text-blue-700 cursor-pointer" size={18} />
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t text-center text-gray-600 py-4 text-xs">
        © {new Date().getFullYear()} SSKGT. All rights reserved.
      </div>
    </footer>
  );
}
