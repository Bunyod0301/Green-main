import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

import kalsiyCom from "../../../assets/img/kalsiyCom.jpg";
import agroVertimaks from "../../../assets/img/Agro-Vertimeks.png";
import { useTranslation } from "react-i18next";

const ProductCard = ({
  src,
  title,
  catalogLink,
  bgColor = "bg-white",
  textColor = "text-green-600"
}) => {
  const imgRef = useRef(null);
  const glassRef = useRef(null);
  const { t } = useTranslation();
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
        <h3 className={`text-xl xl:text-3xl font-semibold mb-2 ${textColor}`}>{title}</h3>
        <NavLink className='relative w-[100%] sm:w-[80%] md:w-[100%] 2xl:w-[80%]  overflow-hidden xs:text-sm md:text-lg 2xl:text-xl 4xl:text-2xl px-5 py-2 3xl:px-10 3xl:py-4 bg-teal-600 text-white rounded-full my-3 group' to={catalogLink}>
          <span className="absolute left-0 top-0 h-full w-0 bg-teal-800 transition-all duration-700 group-hover:w-full"></span>
          <span className="relative z-10">{t("NextCatalog")}</span>
        </NavLink>
      </div>
    </div>
  );
};

const Products = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-100 py-10">
      <h2 className="text-center text-3xl xl:text-5xl font-bold mb-10 text-green-500">
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
    </div>
  );
};

export default Products;
