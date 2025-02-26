import React from 'react';
import kompImg from "../../../assets/img/kompImg.jpg";
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const AboutHome = () => {
  const { t } = useTranslation()
  return (
    <>
    <div className="container mx-auto relative pt-20">
      <div className='flex justify-center'>
        <div className="absolute top-14 lg:top-[5px] w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] 3xl:h-[400px] 3xl:w-[400px] 4xl:h-[500px] 4xl:w-[500px] rounded-full bg-white z-10" style={{backgroundImage: "url('../../../assets/img/kompImg.jpg')"}}>
          <img src={kompImg} className='rounded-full w-full h-full' alt="" />
        </div>
        <div className="mt-4 w-[90%] mx-auto h-[200px] lg:h-[300px] xl:h-[350px] 2xl:h-[400px] 3xl:h-[500px] 4xl:h-[700px] bg-green-600 flex justify-center items-end relative clip-triangle">
          <div className="flex gap-2 mb-2 z-10">
            <div className="w-[100px] bg-white rounded-md 4xl:w-[500px] 3xl:w-[400px] 2xl:w-[300px] md:w-[200px]">
              <img src="/logo/aboutlogo1.png" alt="" />
            </div>
            <div className="w-[100px] bg-white rounded-md 4xl:w-[500px] 3xl:w-[400px] 2xl:w-[300px] md:w-[200px]">
              <img src="/logo/aboutlogo2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='container mx-auto mt-8'>
      <div className='w-[90%] mx-auto min-h-24'>
        <p className='xs:text-sm md:text-lg 2xl:text-2xl 3xl:text-3xl'>
        Kompaniya tarkibidagi Agro Aliance group 2014 yilda tashkil etilgan bo'lib, o'simliklarni himoya qilish vositalari hamda organik va mineral o'g'itlarni ta'minotchisi sifatida faoliyat boshlagan bo'lsa, Agro Aziya Group 2017 yilda tashkil etilib, ishonchli o'simliklarni himoya qilish vositalarini ta'minotchisi sifatida tanilgan.  Kompaniya qisqa muddatda klaster va fermerlarning ishonchli hamkoriga aylandi.
        </p>

        <div className='my-10 flex justify-center items-center'>
          <NavLink className='xs:text-sm md:text-lg 2xl:text-2xl 3xl:text-3xl px-5 py-2 3xl:px-10 3xl:py-4 bg-teal-600 text-white rounded-md hover:bg-teal-800' to={'/about'}>{t('MoreDetail')}</NavLink>
        </div>
      </div>
    </div>
    </>

  );
};

export default AboutHome;