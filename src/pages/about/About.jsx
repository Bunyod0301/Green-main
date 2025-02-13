import React, { useState } from "react";
import kompImg from "../../assets/img/kompImg.jpg";
import kompImg2 from "../../assets/img/kompImg2.jpg";
import kompImg3 from "../../assets/img/Logo final-07.png";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
// Har bir tab uchun alohida komponentlar
const Content1 = () => {
  return (
    <div>
      <div className="p-4 xs:p-1 md:p-4 xs:text-sm md:text-lg text-gray-700">
        {t("About.Desc1")}
      </div>
      <div className="flex items-center justify-center">
        <img src={kompImg3} alt="kompImg" className="w-[450px]" />
      </div>
      <div className="p-4 xs:p-1 md:p-4 xs:text-sm md:text-lg text-gray-700">
        <span className="font-bold xs:text-lg md:text-xl">
          Agro Alliance Group
        </span>{" "}
        {t("About.Desc2")}
      </div>
      <div className="flex items-center justify-center">
        <img src={kompImg} alt="kompImg" />
      </div>
      <div className="p-4 xs:p-1 md:p-4 xs:text-sm md:text-lg text-gray-700">
        <span className="font-bold xs:text-lg md:text-xl">
          Agro Aziya Group
        </span>{" "}
        {t("About.Desc3")}
      </div>
      <div className="flex items-center justify-center">
        <img src={kompImg2} alt="kompImg2" />
      </div>
    </div>
  );
};

const AboutPage = () => {
    const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0); // Faol tabning indeksi
  const tabs = [{ id: 0, label: null, content: <Content1 /> }];
  return (
    <section>
      <div className="mx-auto container px-[5%] py-10">
        <h1 className="font-semibold text-green-500 text-[30px]">
          {t("About.Title")}
        </h1>
        <div className="w-full mt-10">
          {/* Tabs Header */}
          <div className="flex border-b border-gray-300">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`flex-1 py-3 text-center font-semibold ${
                  activeTab === index
                    ? "border-b-4 border-blue-500 text-blue-500"
                    : "text-gray-600"
                } hover:text-blue-500`}>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tabs Content */}
          <div className="p-6 xs:p-1 md:p-6 bg-[#F7F7F7] mt-4 rounded-b-lg shadow-md">
            {tabs[activeTab].content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
