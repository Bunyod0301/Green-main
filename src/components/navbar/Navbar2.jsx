import React, { useState } from 'react';
import logo from "../../assets/img/Logo final-07.png";
import { NavLink } from 'react-router-dom';

const Navbar2 = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-green-600">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-8">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="rounded-sm rounded-tr-[40px] rounded-bl-[25px] bg-white p-2">
            <NavLink to="/" className="flex items-center justify-between gap-2">
              <img src={logo} className="h-8" alt="Flowbite Logo" />
              <div className="w-full text-end">
                <h3 className="font-bold text-[#0E644D] text-start text-[24px]">
                  Agro<span className="text-green-500">Com</span>
                </h3>
              </div>
            </NavLink>
          </div>
        </a>
        <button
          onClick={toggleMobileMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg bg-green-500 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:dark:bg-green-600">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm md:p-0 font-bold ${
                    isActive ? 'text-green-900' : 'text-white'
                  }`
                }
              >
                Бош саҳифа
              </NavLink>
            </li>
            {/* <li className="relative">
              <button
                onClick={toggleDropdown}
                id="dropdownNavbarLink"
                className="flex items-center justify-between w-full py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Dropdown
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>
              <div
                id="dropdownNavbar"
                className={`${
                  isDropdownOpen ? 'block' : 'hidden'
                } absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <NavLink
                      to="/dashboard"
                      className={({ isActive }) =>
                        `block px-4 py-2 font-bold ${
                          isActive ? 'text-green-900' : 'text-gray-700'
                        }`
                      }
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/settings"
                      className={({ isActive }) =>
                        `block px-4 py-2 font-bold ${
                          isActive ? 'text-green-900' : 'text-gray-700'
                        }`
                      }
                    >
                      Settings
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/earnings"
                      className={({ isActive }) =>
                        `block px-4 py-2 font-bold ${
                          isActive ? 'text-green-900' : 'text-gray-700'
                        }`
                      }
                    >
                      Earnings
                    </NavLink>
                  </li>
                </ul>
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </div>
              </div>
            </li> */}
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm md:p-0 font-bold ${
                    isActive ? 'text-green-900' : 'text-white'
                  }`
                }
              >
                Компания
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm md:p-0 font-bold ${
                    isActive ? 'text-green-900' : 'text-white'
                  }`
                }
              >
                Махсулотларимиз
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm md:p-0 font-bold ${
                    isActive ? 'text-green-900' : 'text-white'
                  }`
                }
              >
                Блог
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/news"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm md:p-0 font-bold ${
                    isActive ? 'text-green-900' : 'text-white'
                  }`
                }
              >
                Янгиликлар
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm md:p-0 font-bold ${
                    isActive ? 'text-green-900' : 'text-white'
                  }`
                }
              >
                Алоқа
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;