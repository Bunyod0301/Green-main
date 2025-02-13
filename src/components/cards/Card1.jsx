import React from "react";
import agro from '../../../src/assets/img/Agro-Vertimeks.png'
import { useNavigate } from "react-router-dom";
import { transformImageUrl } from "../../utils/transformImgUrl";
const AgroNurellCard = ({data}) => {
  const navigate = useNavigate();
  console.log(data);
  return (
    data && <div className="bg-gray-100 p-6 min-h-screen flex items-center justify-center relative">
      <button
        onClick={() => navigate(-1)}
        className="bg-teal-500 font-medium text-white py-2 px-5 rounded-lg hover:bg-teal-600 absolute left-3 top-3"
      ><span class="mr-1">←</span>Орқага</button>
      <div className="mt-10 w-full md:w-[80%]  bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-300">
        <div className="flex flex-col items-center md:flex-row">
          <img
            src={transformImageUrl(data?.productOne?.productPicture)} // vaqtincha
            alt="Agro-Nurell 55% эм.к."
            className="w-96 h-96 object-contain p-2"
          />
          <div className="p-4">
            <h1 className="text-2xl font-bold text-green-700">{data?.productOne?.titleUz}</h1>
            <p className="text-sm text-gray-600 mt-1">{ data?.productOne?.productOneName }</p>
            <p className="text-gray-700 mt-2">{ data?.productOne?.descriptionUz }</p>
          </div>
        </div>

        <div className="px-4 pb-4">
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
            <table className="w-full mt-2 text-sm text-left text-gray-700 border border-gray-300 hidden md:table">
              <thead className="bg-green-100">
                <tr>
                  <th className="p-2 border">Экин тури</th>
                  <th className="p-2 border">Қайси бегона ўтларга қарши ишлатилади</th>
                  <th className="p-2 border">Сарф меъёри (л/га)</th>
                  <th className="p-2 border">1 га учун ишлатиладиган суюқлик сарфи, л/га</th>
                  <th className="p-2 border">10 л сув учун препарат сарфи ва майдони, мл (сотих)</th>
                </tr>
              </thead>
              <tbody>
                {
                  data?.tableOnes?.map((data, index)=>
                    <tr key={index}>
                      <td className="p-2 border">{data?.ekinTuriUz}</td>
                      <td className="p-2 border">{data?.begonaQarshiUz}</td>
                      <td className="p-2 border">{data?.sarfMeyoriUz}</td>
                      <td className="p-2 border">{data?.birgaSarfUz}</td>
                      <td className="p-2 border">{data?.onlsum}</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
            <div className="block md:hidden">
              {
                data?.tableOnes?.map((data, index)=>
                  <div
                    key={index}
                    className="border border-gray-300 rounded-md p-3 mb-3 bg-white shadow-sm"
                  >
                    <div className="p-1">
                      <p className="bg-green-100 font-semibold p-2">Экин тури:</p>
                      <p className="p-2">{data.ekinTuriUz}</p>
                    </div>
                    <div className="p-1">
                      <p className="bg-green-100 font-semibold p-2" >Қайси бегона ўтларга қарши:</p>
                      <p className="p-2">{data.begonaQarshiUz}</p>
                    </div>
                    <div className="p-1">
                      <p className="bg-green-100 font-semibold p-2">Сарф меъёри (л/га)</p>
                      <p className="p-2">{data.sarfMeyoriUz}</p>
                    </div>
                    <div className="p-1">
                      <p className=" bg-green-100 font-semibold p-2">1 га учун ишлатиладиган суюқлик сарфи, л/га</p>
                      <p className="p-2">{data.birgaSarfUz}</p>
                    </div>
                    <div className="p-1">
                      <p className="bg-green-100 font-semibold p-2">10 л сув учун препарат сарфи ва майдони, мл (сотих)</p>
                      <p className="p-2">{data.onlsum}</p>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgroNurellCard;