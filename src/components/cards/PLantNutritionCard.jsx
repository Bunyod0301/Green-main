import React from "react";
import { useNavigate } from "react-router-dom";
import { transformImageUrl } from "../../utils/transformImgUrl";
import { useTranslation } from "react-i18next";
import { getLocalizedKey } from "../../utils/translateFormat";
const PlantNutritionCard = ({data}) => {
  const { t } = useTranslation()
  const navigate = useNavigate();
  
  return (
    data && <div className="bg-gray-100 p-0 min-h-[70vh] flex justify-center relative rounded-lg">
      <button
        onClick={() => navigate(-1)}
        className="bg-teal-500 font-medium text-white py-2 px-5 rounded-lg hover:bg-teal-600 absolute left-0 top-0"
      ><span className="mr-1">←</span>{t('back')}</button>
      <div className="mt-16 w-full md:w-[80%] my-auto  bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-300">
        <div className="flex flex-col items-center md:flex-row">
          <img
            src={transformImageUrl(data?.productTwo?.productPicture)} // vaqtincha
            alt="Agro-Nurell 55% эм.к."
            className="w-96 h-96 object-contain p-2"
          />
          <div className="px-1 md:px-4 py-4">
            <h1 className="text-2xl font-bold text-green-700">{getLocalizedKey(data?.productTwo, "title")}</h1>
            <p className="text-sm text-gray-600 mt-1">{ data?.productTwo?.productTwoName }</p>

            <div className="w-full overflow-x-auto md:overflow-visible">
              <table className="w-full mt-2 text-xs sm:text-sm text-left text-gray-700 border border-gray-300 table p-0">
                <thead className="bg-green-100">
                  <tr>
                    <th className="p-1 sm:p-2 border">{t("PlantNutrition.View.guaranteed_composition")}</th>
                    <th className="p-1 sm:p-2 border">%</th>
                  </tr>
                </thead>
                <tbody>
                  { 
                    data?.tableTwo.map((data, index)=>(
                      <tr key={index}>
                        <td className="p-1 sm:p-2 border">{data?.nameUz}</td>
                        <td className="p-1 sm:p-2 border">{data?.foiz}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
              <div>
                <p className="mt-2">{getLocalizedKey(data?.productTwo, "description")}</p>
                <p className="font-bold mt-2">{getLocalizedKey(data?.productTwo, "sarf")}</p>
                <p className="font-bold mt-2">{t("PlantNutrition.View.packaging")} - {data?.productTwo?.desUz}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PlantNutritionCard;