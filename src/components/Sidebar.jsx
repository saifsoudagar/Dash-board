import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { MdDashboard } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { FaChartLine } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle link click and close the sidebar
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:flex md:flex-col h-full">
      {/* Mobile Top Navbar with Hamburger */}
      <div className="bg-[#17163B] p-4 flex justify-between items-center text-white md:hidden">
        <h2 className="font-bold text-[24px] flex justify-center">
          Ezy<span className="text-gray-100/45">Metrics</span>
        </h2>
        {!isOpen && (
          <button onClick={handleSidebarToggle} className="text-white focus:outline-none">
            <FiMenu size={24} />
          </button>
        )}
      </div>

      {/* Sidebar for Desktop and Slide-in Navbar for Mobile */}
      <div
        className={`md:block fixed md:relative top-0 left-0 h-full z-40 w-64 bg-[#17163B] text-white transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="flex md:flex-col flex-col  md:items-center mt-10 md:h-[800px] ">
          <h2 className="hidden md:block font-bold text-[24px] text-[#fff] flex justify-center">
            Ezy<span className="text-gray-100/45">Metrics</span>
          </h2>

          {/* Close Icon for Mobile */}
          <div className="flex justify-end md:hidden mt-2 mr-4">
            <button onClick={handleSidebarToggle} className="text-white focus:outline-none">
              <IoClose size={24} />
            </button>
          </div>

          {/* Navigation Links - Column layout for mobile and desktop */}
          <nav className="mt-10 space-y-6 md:space-y-9 flex flex-col font-roboto text-[17px] font-normal leading-[24px] text-gray-100/40 text-center">
            <NavLink
              to="/"
              onClick={handleLinkClick} // Close sidebar on link click
              className={({ isActive }) =>
                `flex gap-3 items-center px-4 py-2 ${
                  isActive
                    ? 'bg-[#1a1842cc] border-l-4 md:border-l-4 border-blue-400 text-white'
                    : 'hover:text-blue-400'
                }`
              }
            >
              <MdDashboard /> Dashboard
            </NavLink>
            <NavLink
              to="/leads"
              onClick={handleLinkClick} // Close sidebar on link click
              className={({ isActive }) =>
                `flex gap-3 items-center px-4 py-2 ${
                  isActive
                    ? 'bg-[#1a1842cc] border-l-4 md:border-l-4 border-blue-400 text-white'
                    : 'hover:text-blue-400'
                }`
              }
            >
              <FaUserFriends /> Leads
            </NavLink>
            <NavLink
              to="/analytics"
              onClick={handleLinkClick} // Close sidebar on link click
              className={({ isActive }) =>
                `flex gap-3 items-center px-4 py-2 ${
                  isActive
                    ? 'bg-[#1a1842cc] border-l-4 md:border-l-4 border-blue-400 text-white'
                    : 'hover:text-blue-400'
                }`
              }
            >
              <FaChartLine /> Analytics
            </NavLink>
            <NavLink
              to="/reports"
              onClick={handleLinkClick} // Close sidebar on link click
              className={({ isActive }) =>
                `flex gap-3 items-center px-4 py-2 ${
                  isActive
                    ? 'bg-[#1a1842cc] border-l-4 md:border-l-4 border-blue-400 text-white'
                    : 'hover:text-blue-400'
                }`
              }
            >
              <TbReportSearch /> Reports
            </NavLink>
          </nav>
        </div>
      </div>

      {/* Backdrop for Mobile Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden z-30"
          onClick={handleSidebarToggle}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
