import React from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Get in Touch</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          We're here to help and answer any question you might have. We look forward to hearing from you!
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Contact Info Card */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-blue-900 mb-6">Contact Information</h3>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <Mail className="text-blue-600" size={24} />
              <div>
                <h4 className="font-bold text-blue-900">Email Us</h4>
                <p className="text-blue-600">venu.gundeti@gmail.com</p>
                <p className="text-sm text-gray-600">We typically respond within 24 hours.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Phone className="text-blue-600" size={24} />
              <div>
                <h4 className="font-bold text-blue-900">Call Us</h4>
                <p className="text-blue-600">9246933445</p>
                <p className="text-sm text-gray-600">Mon–Fri, 9am – 5pm</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <MapPin className="text-blue-600" size={24} />
              <div>
                <h4 className="font-bold text-blue-900">Our Office</h4>
                <p className="text-gray-700">S.No:2, Bypass Road, Bommakal, Karimnagar, 505001, Telangana</p>
                <a href="https://maps.google.com" className="text-sm text-blue-600 hover:underline">Get Directions</a>
              </div>
            </li>
          </ul>

          <div className="mt-8">
            <h4 className="font-bold text-blue-900 mb-2">Follow Us</h4>
            <div className="flex gap-4">
              <Facebook className="text-gray-600 hover:text-blue-600 cursor-pointer" />
              <Twitter className="text-gray-600 hover:text-blue-700 cursor-pointer" />
              <Linkedin className="text-gray-600 hover:text-blue-700 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-blue-900 mb-6">Send Us a Message</h3>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-blue-900 mb-1">Full Name</label>
                <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded-md p-2" />
              </div>
              <div>
                <label className="block font-medium text-blue-900 mb-1">Email Address</label>
                <input type="email" placeholder="you@example.com" className="w-full border border-gray-300 rounded-md p-2" />
              </div>
            </div>
            <div>
              <label className="block font-medium text-blue-900 mb-1">Subject</label>
              <input type="text" placeholder="Inquiry about services" className="w-full border border-gray-300 rounded-md p-2" />
            </div>
            <div>
              <label className="block font-medium text-blue-900 mb-1">Message</label>
              <textarea placeholder="Tell us more about your needs…" rows="5" className="w-full border border-gray-300 rounded-md p-2"></textarea>
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-900 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
