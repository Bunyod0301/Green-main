import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

// Rasm importlari
import kalsiyCom from "../../../assets/img/kalsiyCom.jpg";
import agroVertimaks from "../../../assets/img/Agro-Vertimeks.png";
import shudring from "../../../assets/img/Icons_GreenShudringli.png";
import gerbli from "../../../assets/img/Icons_GreenGerbli.png";
import qongiz from "../../../assets/img/Icons_GreenQongiz.png";
import yaproq from "../../../assets/img/Icons_GreenYaproq.png";
import yer from "../../../assets/img/Icons_Green.png";
import yer2 from "../../../assets/img/Icons_Green2.png";
import green5 from "../../../assets/img/Icons_Green5.png";
import { t } from "i18next";

const ProductCard = ({
  src,
  title,
  catalogLink,
  bgColor = "bg-white",
  textColor = "text-green-600"
}) => {
  const imgRef = useRef(null);
  const glassRef = useRef(null);
  const zoom = 3;

  useEffect(() => {
    const magnify = () => {
      const img = imgRef.current;
      const glass = glassRef.current;
      if (!img || !glass) return;

      glass.style.backgroundImage = `url('${img.src}')`;
      glass.style.backgroundRepeat = "no-repeat";
      glass.style.backgroundSize = `${img.width * zoom}px ${
        img.height * zoom
      }px`;

      const bw = 3;
      const w = glass.offsetWidth / 2;
      const h = glass.offsetHeight / 2;

      const moveMagnifier = (e) => {
        e.preventDefault();
        const pos = getCursorPos(e);
        let x = pos.x;
        let y = pos.y;

        if (x > img.width - w / zoom) x = img.width - w / zoom;
        if (x < w / zoom) x = w / zoom;
        if (y > img.height - h / zoom) y = img.height - h / zoom;
        if (y < h / zoom) y = h / zoom;

        glass.style.left = `${x - w}px`;
        glass.style.top = `${y - h}px`;
        glass.style.backgroundPosition = `-${x * zoom - w + bw}px -${
          y * zoom - h + bw
        }px`;
      };

      const getCursorPos = (e) => {
        const rect = img.getBoundingClientRect();
        const x = e.pageX - rect.left - window.pageXOffset;
        const y = e.pageY - rect.top - window.pageYOffset;
        return { x, y };
      };

      img.addEventListener("mousemove", moveMagnifier);
      glass.addEventListener("mousemove", moveMagnifier);

      img.addEventListener("touchmove", moveMagnifier);
      glass.addEventListener("touchmove", moveMagnifier);
    };

    magnify();
  }, [src]);

  return (
    <div className={`relative flex flex-col md:flex-row items-center ${bgColor} shadow-lg rounded-lg p-4`}>
      {/* Magnifying Glass Effect */}
      <div
        ref={glassRef}
        className="absolute w-[180px] h-[180px] bg-white rounded-full border-2 shadow-lg cursor-none"
        style={{ visibility: "hidden" }}></div>

      {/* Product Image */}
      <img
        ref={imgRef}
        src={src}
        alt={title}
        className="md:w-1/2 w-[200px] h-[200px] md:h-full object-contain bg-white rounded-lg shadow-md transition-transform duration-300"
        onMouseEnter={() => {
          const glass = glassRef.current;
          if (glass) glass.style.visibility = "visible";
        }}
        onMouseLeave={() => {
          const glass = glassRef.current;
          if (glass) glass.style.visibility = "hidden";
        }}
      />

      {/* Product Info */}
      <div className="p-4 text-start flex flex-col justify-between w-full md:w-1/2">
        <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>{title}</h3>
        <NavLink
          to={catalogLink}
          className={`${textColor} text-sm md:text-base font-medium hover:underline transition-all`}
        >
          {t("NextCatalog")}
        </NavLink>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className="bg-gray-100 py-10">
      <h2 className="text-center text-3xl font-bold mb-10 text-green-500">
        {t("Navbar.Menu.Products")}
      </h2>

      <div className="flex flex-col md:flex-row gap-6 mx-auto container px-4">
        <ProductCard
          src={agroVertimaks}
          title={t("Menu.PlantProtection")}
          catalogLink="/products/plant-protection"
        />
        <ProductCard
          src={kalsiyCom}
          title={t("Menu.PlantNutrition")}
          catalogLink="/products/plant-nutrition"
          bgColor="bg-green-600"
          textColor="text-white"
        />
      </div>

      {/* <div className="flex justify-center flex-wrap gap-6 mt-10">
        {[
          {
            title: "Гербицидлар",
            icon: shudring
          },
          {
            title: "Фунгицидлар",
            icon: gerbli
          },
          {
            title: "Инсектоакарацидлар",
            icon: qongiz
          },
          {
            title: "Дефолиантлар",
            icon: yer
          },
          {
            title: "Сирт фаол модда",
            icon: yer2
          },
          {
            title: "Уруғдорилагичлар",
            icon: yaproq
          },
          {
            title: "Ўсимликларни ўсишини бошқарувчи",
            icon: green5
          }
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-green-500 text-white p-4 w-36 rounded-md shadow-md">
            <img
              src={item.icon}
              alt={item.title}
              className="w-16 h-16 mb-2 object-contain"
            />
            <p className="text-center text-[12px] font-medium">{item.title}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Products;
