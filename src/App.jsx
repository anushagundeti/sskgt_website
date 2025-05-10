import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Employees from './pages/Employees.jsx';
import Vehicles from './pages/Vehicles.jsx';
import Contact from './pages/Contact.jsx';
import {
  HomeIcon,
  InfoIcon,
  GiftIcon,
  UsersIcon,
  TruckIcon,
  MailIcon,
} from "lucide-react";

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
      <nav className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-white shadow gap-4 md:gap-0">
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link to="/" className="text-2xl font-bold text-blue-900 flex items-center gap-2">
            <TruckIcon size={24} /> SSKGT
          </Link>
        </div>

        <div className="flex flex-wrap justify-center md:justify-end gap-4">
          {navItems.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-1 px-3 py-2 rounded-md text-sm transition whitespace-nowrap ${
                  isActive
                    ? "bg-blue-900 text-white"
                    : "text-blue-900 hover:text-blue-600"
                }`
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
