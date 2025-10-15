import React from "react";
import credit from "../assets/credit.png";

import { FaCloudUploadAlt, FaFileAlt, FaCreditCard } from "react-icons/fa";
const Sidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    {
      id: "generate",
      label: "Generate Report",
      icon: FaCloudUploadAlt,
      description: "Upload new report",
    },
    {
      id: "view",
      label: "View All Reports",
      icon: FaFileAlt,
      description: "Browse reports",
    },
  ];

  return (
    <div className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col h-screen sticky top-0">
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
            <img src="/credit.png" alt="Credit Logo" className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-white font-bold text-lg">CreditSea</h1>
            <p className="text-gray-500 text-xs">Credit Report Tool</p>
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full px-4 py-3 rounded-lg flex items-start gap-3 transition-all duration-300 group ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "text-gray-400 hover:bg-gray-800 hover:text-gray-200"
              }`}
            >
              <Icon
                className={`mt-1 flex-shrink-0 ${
                  isActive
                    ? "text-white"
                    : "text-gray-500 group-hover:text-gray-300"
                }`}
              />
              <div className="text-left">
                <div className="font-semibold text-sm">{item.label}</div>
                <div
                  className={`text-xs ${
                    isActive ? "text-blue-100" : "text-gray-600"
                  }`}
                >
                  {item.description}
                </div>
              </div>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-800 bg-gray-950">
        <div className="bg-gray-800/50 rounded-lg p-3">
          <p className="text-gray-400 text-xs leading-relaxed">
            Secure credit report analysis. Your data is protected.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
