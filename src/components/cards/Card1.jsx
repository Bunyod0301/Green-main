import React from "react";
import agro from '../../../src/assets/img/Agro-Vertimeks.png'
import { useNavigate } from "react-router-dom";
import { transformImageUrl } from "../../utils/transformImgUrl";
import { tableType } from "./tableType";
const AgroNurellCard = ({data}) => {
  const navigate = useNavigate();
  return (
    data && <div className="bg-gray-100 p-0 min-h-screen flex items-center justify-center relative">
      <button
        onClick={() => navigate(-1)}
        className="bg-teal-500 font-medium text-white py-2 px-5 rounded-lg hover:bg-teal-600 absolute left-0 top-3"
      ><span className="mr-1">←</span>Орқага</button>
      <div className="mt-16 w-full md:w-[80%]  bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-300">
        <div className="flex flex-col items-center md:flex-row">
          <img
            src={transformImageUrl(data?.productOne?.productPicture)} // vaqtincha
            alt="Agro-Nurell 55% эм.к."
            className="w-96 h-96 object-contain p-2"
          />
          <div className="px-1 md:px-4 py-4">
            <h1 className="text-2xl font-bold text-green-700">{data?.productOne?.titleUz}</h1>
            <p className="text-sm text-gray-600 mt-1">{ data?.productOne?.productOneName }</p>
            <p className="text-gray-700 mt-2">{ data?.productOne?.descriptionUz }</p>
          </div>
        </div>

        <div className="px-1 md:px-4 pb-4">
          <div className="flex gap-2 md:gap-10 flex-wrap items-center">
            <div className="mt-2">
              <h2 className="font-semibold text-gray-800">Таъсир этувчи модда:</h2>
              <p className="text-gray-700">{ data?.productOne?.tasirModdaUz }</p>
            </div>

            <div className="mt-2">
              <h2 className="font-semibold text-gray-800">Кимёвий синфи:</h2>
              <p className="text-gray-700">{data?.productOne?.kimyoviySinfiUz}</p>
            </div>

            <div className="mt-2">
              <h2 className="font-semibold text-gray-800">Препарат шакли:</h2>
              <p className="text-gray-700">{ data?.productOne?.preparatShakliUz }</p>
            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-lg font-semibold text-green-700">
              Сарф меъёрлари ва қўллаш тартиби:
            </h2>
            <div className="w-full overflow-x-auto md:overflow-visible">
              <table className="w-full mt-2 text-xs sm:text-sm text-left text-gray-700 border border-gray-300 table p-0">
                <thead className="bg-green-100">
                  <tr>
                    {tableType[data?.productOne.jadvalType - 1]}
                  </tr>
                </thead>
                <tbody>
                  { 
                    (data?.productOne?.jadvalType != 5 && data?.productOne?.jadvalType != 4) ?
                    data?.tableOnes?.map((data, index) => (
                      <tr key={index}>
                        <td className="p-1 sm:p-2 border">{data?.ekinTuriUz}</td>
                        <td className="p-1 sm:p-2 border">{data?.begonaQarshiUz}</td>
                        <td className="p-1 sm:p-2 border">{data?.sarfMeyoriUz}</td>
                        <td className="p-1 sm:p-2 border">{data?.birgaSarfUz}</td>
                        <td className="p-1 sm:p-2 border">{data?.onlsum}</td>
                      </tr>
                    )) : 
                    data?.tableOnes?.map((data, index) => (
                      <tr key={index}>
                        <td className="p-1 sm:p-2 border">{data?.ekinTuriUz}</td>
                        <td className="p-1 sm:p-2 border">{data?.begonaQarshiUz}</td>
                        <td className="p-1 sm:p-2 border">{data?.sarfMeyoriUz}</td>
                        <td className="p-1 sm:p-2 border">{data?.birgaSarfUz}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgroNurellCard;