import React from "react";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";

const TabsWithRouter = () => {
  return (
    <div className="p-4">
      {/* Tab tugmalari */}
      <div className="flex space-x-4 border-b">
        <NavLink
          to="/products/tab1"
          className={({ isActive }) =>
            `px-4 py-2 font-semibold ${
              isActive
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`
          }
        >
          Tab 1
        </NavLink>
        <NavLink
          to="/products/tab2"
          className={({ isActive }) =>
            `px-4 py-2 font-semibold ${
              isActive
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`
          }
        >
          Tab 2
        </NavLink>
      </div>

      {/* Tab kontenti */}
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default TabsWithRouter
