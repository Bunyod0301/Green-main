import React, { useEffect, useState } from 'react';
import logo from "../../assets/img/Logo final-07.png";
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Navbar2 = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(()=>{
    setIsMobileMenuOpen(false);
  }, [location.pathname])

  return (
    <>
    <div className="bg-green-800">
      <div className='lg:container mx-auto text-white py-2 px-6 flex justify-center md:justify-between items-center text-sm'>
        <div className="hidden md:flex items-center gap-2">
          {/* <span>🌿</span> */}
          {/* <p className='font-bold'>{t("Navbar.HarvestFruitful")}</p> */}
        </div>

        <div className="flex items-center gap-8">
          {/* <p className='hidden md:block font-bold'>{t("Navbar.Address")}</p> */}

          <div className="flex gap-2">
            <button onClick={() => changeLanguage('uz')} className={`hover:underline font-bold ${i18n.language == 'uz' ? 'underline' : ''}`}>ЎЗ</button>
            <span>/</span>
            <button onClick={() => changeLanguage('ru')} className={`hover:underline font-bold ${i18n.language == 'ru' ? 'underline' : ''}`}>РУ</button>
          </div>
        </div>
      </div>
    </div>
    <nav className="w-full bg-green-600">
      <div className="lg:container flex flex-wrap items-center justify-between mx-auto p-8">
        <NavLink to='/' className="flex items-center space-x-3 rtl:space-x-reverse" end>
          <div className="rounded-sm rounded-tr-[55px] rounded-bl-[30px] bg-white p-1 h-[70px] w-[210px]">
            <div className="flex items-center justify-between gap-2">
              <img
                src={logo}
                alt="logo"
                className="rounded-[17px] w-[80px] h-[55px]"
              />
              <div className="w-full text-end">
                <h3 className="font-bold text-[#0E644D] text-start text-[26px]">
                  Agro<span className="text-green-500">Com</span>
                </h3>
                <span className="text-green-600 text-end w-full font-medium text-[12px] hover:text-slate-300">
                  Ishonchli himoya
                </span>
              </div>
            </div>
          </div>
        </NavLink>


        <div className="hidden md:flex lg:hidden items-center gap-7">
              <div className="flex items-center gap-3 font-medium text-white">
                <div className="flex-col flex">
                  <a
                    href="tel:+998998510018"
                    className="text-white hover:underline">
                    📞: +998 99 851 00 18
                  </a>
                  <a
                    href="tel:+998998210018"
                    className="text-white hover:underline">
                    📞: +998 99 821 00 18
                  </a>
                  <a
                    href="tel:+998772997700"
                    className="text-white hover:underline">
                    📞: +998 77 299 77 00
                  </a>
                </div>
              </div>
          </div>
        
        <button
          onClick={toggleMobileMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className='w-full lg:w-[70%] flex flex-col items-end gap-4'>
          <div className="hidden lg:flex items-center gap-7">
              <div className="flex items-center gap-3 font-medium text-white">
                <div className="flex-col flex">
                  <a
                    href="tel:+998998510018"
                    className="text-white hover:underline">
                    📞: +998 99 851 00 18
                  </a>
                  <a
                    href="tel:+998998210018"
                    className="text-white hover:underline">
                    📞: +998 99 821 00 18
                  </a>
                  <a
                    href="tel:+998772997700"
                    className="text-white hover:underline">
                    📞: +998 77 299 77 00
                  </a>
                </div>
              </div>
          </div>
          <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} w-full lg:block md:w-auto`} id="navbar-dropdown">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg bg-green-600 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-sm md:p-0 font-bold ${
                      isActive ? 'text-green-900' : 'text-white'
                    }`
                  }
                >
                  {t("Navbar.Menu.Home")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-sm md:p-0 font-bold ${
                      isActive ? 'text-green-900' : 'text-white'
                    }`
                  }
                >
                  {t("Navbar.Menu.About")}
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
                  {t("Navbar.Menu.Products")}
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-sm md:p-0 font-bold ${
                      isActive ? 'text-green-900' : 'text-white'
                    }`
                  }
                >
                  {t("Navbar.Menu.Blog")}
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to="/news"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-sm md:p-0 font-bold ${
                      isActive ? 'text-green-900' : 'text-white'
                    }`
                  }
                >
                  {t("Navbar.Menu.News")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/catalog"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-sm md:p-0 font-bold ${
                      isActive ? 'text-green-900' : 'text-white'
                    }`
                  }
                >
                  {'Каталог'}
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
                  {t("Navbar.Menu.Contact")}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar2;