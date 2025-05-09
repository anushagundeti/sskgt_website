import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Employees from './pages/Employees.jsx';
import Vehicles from './pages/Vehicles.jsx';
import Contact from './pages/Contact.jsx';
import { Link } from 'react-router-dom';



import { HomeIcon, InfoIcon, GiftIcon, UsersIcon, TruckIcon, MailIcon } from "lucide-react";

const navItems = [
  { to: "/", label: "Home", icon: <HomeIcon size={18} /> },
  { to: "/about", label: "About", icon: <InfoIcon size={18} /> },
  { to: "/services", label: "Services", icon: <GiftIcon size={18} /> },
  { to: "/employees", label: "Employees", icon: <UsersIcon size={18} /> },
  { to: "/vehicles", label: "Vehicles", icon: <TruckIcon size={18} /> },
  { to: "/contact", label: "Contact", icon: <MailIcon size={18} /> },
];

export default function App() {
  return (
    <Router>
      <nav className="flex items-center justify-between p-4 bg-white shadow">
        <div className="flex items-center gap-2 text-blue-900 font-bold text-xl">
          <TruckIcon size={24} /> 
          <Link to="/" className="text-2xl font-bold text-blue-900 flex items-center gap-2">
            SSKGT
          </Link>
        </div>
        <div className="flex gap-6">
          {navItems.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-1 px-4 py-2 rounded-md transition ${isActive ? "bg-teal-600 text-white" : "text-blue-900 hover:text-teal-600"}`
              }
            >
              {icon}
              <span>{label}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
