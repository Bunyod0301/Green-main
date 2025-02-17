import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../store/useStore";
import { t } from "i18next";


function ProductCard({ icon, productPicture, title, description, type, id, productType, static_data }) {
  const navigate = useNavigate();
  const { setSelectedProduct } = useStore();

  const handleDetailsClick = () => {
    setSelectedProduct(id, type);
    // navigate(`/details/${type}/${id}`);

    if(type == 'productOne') {
      navigate(`/products/plant-protection/view/${id}`)
    } else {
      if(productType == 4) {
        if(static_data){
        navigate(`/products/plant-nutrition/npk/${id}`)
        } else {
          navigate(`/products/plant-nutrition/view/${id}`)
        }
      } else {
      navigate(`/products/plant-nutrition/view/${id}`)
      }
    }

  };

  const [showFullText, setShowFullText] = useState(false);
  const maxLength = 60;
  const isTextLong = description?.length > maxLength;
  const displayText = showFullText
    ? description
    : description.slice(0, maxLength) + (isTextLong ? "..." : "");

  return (
    <div className="bg-white rounded-lg transform transition duration-300 hover:scale-105 shadow-lg hover:shadow-2xl p-4 w-full sm:w-60 md:w-72 lg:w-80 space-y-2">
      <div className="flex justify-center items-center mb-4">
        {icon && <img
          src={icon}
          alt={title}
          className="w-[50px] absolute top-1 right-2 object-contain bg-white"
          // onError={(e) => (e.target.src = "/default-image.jpg")}
        />}
        <img
          src={productPicture}
          alt={title}
          className="w-[250px] h-[250px] object-contain bg-white"
          // onError={(e) => (e.target.src = "/default-image.jpg")}
        />
      </div>
      <h3 className="text-xl font-semibold text-start mb-2">{title}</h3>
      <p className="text-gray-700 text-start text-[13px] font-medium">
        {displayText}
      </p>

      <button
        onClick={handleDetailsClick}
        className="w-full bg-teal-500  font-medium text-white py-[6px] rounded-lg hover:bg-teal-600">
        {t("MoreDetail")}
      </button>
    </div>
  );
}

export default ProductCard