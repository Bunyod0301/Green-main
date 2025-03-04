import React, { useState } from "react";
import { RxInstagramLogo } from "react-icons/rx";
import { TbBrandFacebook } from "react-icons/tb";
import { PiTelegramLogo } from "react-icons/pi";
import logo from "../../assets/img/Logo final-07.png";
import { NavLink } from "react-router-dom";
import ModalForm from "../modal/ModalForm";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-green-600 text-white py-10 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
        {/* Logo Section */}
        <div className="rounded-sm rounded-tr-[55px] rounded-bl-[30px] bg-white p-1 h-[70px] w-[210px]">
            <NavLink to="/" className="flex items-center justify-between gap-3">
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
            </NavLink>
          </div>

        {/* Address Section */}
        <div>
          <h3 className="text-lg font-bold text-green-300">{t("Address")}</h3>
          <p className="max-w-[300px] mt-2">{t("Navbar.Address")}</p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-bold text-green-300">{t("Navbar.Menu.Contact")}</h3>
          <div className="mt-2 space-y-1">
            <a href="tel:+998998510018" className="block hover:text-green-300">+998 99 851 00 18</a>
            <a href="tel:+998998210018" className="block hover:text-green-300">+998 99 821 00 18</a>
            <a href="tel:+998772997700" className="block hover:text-green-300">+998 77 299 77 00</a>
          </div>
          <a href="mailto:info@aag-group.uz" className="text-green-400 hover:text-green-200 mt-2 inline-block">info@aag-group.uz</a>
        </div>

        {/* Social Media & Modal Button */}
        <div>
          <h3 className="text-lg font-bold text-green-300">{t("UsSocial")}</h3>
          <div className="flex justify-center md:justify-start gap-3 mt-2">
            <a target="_blank" href="https://www.facebook.com/100090505449159/" className="p-2 bg-white text-green-600 rounded-md hover:bg-green-500 hover:text-white"><TbBrandFacebook size={24} /></a>
            <a target="_blank" href="https://www.instagram.com/agrocom_uz?igsh=OXRyOTA3YXo5enhq" className="p-2 bg-white text-green-600 rounded-md hover:bg-green-500 hover:text-white"><RxInstagramLogo size={24} /></a>
            <a target="_blank" href="https://t.me/agrocomguruh" className="p-2 bg-white text-green-600 rounded-md hover:bg-green-500 hover:text-white"><PiTelegramLogo size={24} /></a>
          </div>
          <button onClick={toggleModal} className="mt-4 text-green-400 font-medium py-2 px-4 rounded-lg hover:text-green-200">
            {t("RequestRecons")}
          </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && <ModalForm toggleModal={toggleModal} />} 
    </div>
  );
};

export default Footer;
