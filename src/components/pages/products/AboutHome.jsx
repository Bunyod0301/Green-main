import React from 'react';
import kompImg from "../../../assets/img/kompImg.jpg";
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const AboutHome = () => {
  const { t, i18n } = useTranslation()
  return (
    <>
    {/* <div className="container mx-auto relative pt-20">
      <div className='flex justify-center'>
        <div className="absolute top-14 lg:top-[5px] w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] 3xl:h-[400px] 3xl:w-[400px] 4xl:h-[500px] 4xl:w-[500px] rounded-full bg-white z-10">
          <img src='/logo/Logo.png' className='rounded-full w-full h-full p-5' alt="" />
        </div>
        <div className="mt-4 w-[90%] mx-auto h-[200px] lg:h-[300px] xl:h-[350px] 2xl:h-[400px] 3xl:h-[500px] 4xl:h-[700px] bg-green-600 flex justify-center items-end relative clip-triangle">
          <div className="flex gap-2 mb-2 z-10">
            <div className="w-[100px] bg-white rounded-md 4xl:w-[500px] 3xl:w-[400px] 2xl:w-[300px] md:w-[200px]">
              <img src="/logo/aboutlogo2.png" alt="" />
            </div>
            <div className="w-[100px] bg-white rounded-md 4xl:w-[500px] 3xl:w-[400px] 2xl:w-[300px] md:w-[200px]">
              <img src="/logo/aboutlogo1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div> */}
    <div className='container mx-auto'>
      <div className='w-[100%] md:w-[90%] mx-auto bg-green-600 my-10 rounded-2xl min-h-[20vh] p-4 md:p-10'>
        <p className='xs:text-sm md:text-lg 2xl:text-2xl 3xl:text-3xl text-white text-justify indent-10'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis beatae voluptate labore vitae esse veniam similique quia necessitatibus, optio architecto obcaecati rerum, quidem, explicabo voluptatum autem provident quam! Sed, perferendis. Facere quidem accusantium obcaecati saepe dignissimos harum ullam aliquid quae voluptatem autem voluptates voluptate quis soluta provident natus itaque id eligendi, error commodi corrupti, hic similique! Magni dolorum, sequi exercitationem animi voluptates cupiditate alias placeat libero minima laudantium mollitia quidem et omnis provident, ab tempora quam velit doloremque, minus in aut harum. Ipsa, ducimus. Nemo mollitia delectus, quam veritatis dolore adipisci soluta nobis voluptatibus excepturi facilis iure temporibus impedit placeat, incidunt ullam deserunt atque ut nihil quos blanditiis. Tempore porro, ipsa libero accusantium voluptates consequatur, harum iure ullam sit soluta, ea a mollitia officiis. Doloribus possimus assumenda ad nemo expedita natus, nulla eum officiis nostrum quas ipsa, facere eaque veniam dignissimos non quo excepturi doloremque eos? Saepe eum fugiat, quis molestiae fugit quo neque eligendi dolor. Et explicabo deserunt sunt voluptate. Sequi aliquam corrupti nobis ea dolorem ducimus unde omnis, amet ratione consectetur illo? Doloremque mollitia eligendi libero tenetur. Blanditiis placeat dolorem itaque rem? Itaque iure saepe eos ea quae, animi nesciunt eius ut? Quas enim doloribus inventore tempore consequatur.
        </p>
      </div>
    </div>
    <div className='container mx-auto mt-8'>
      <div className='w-[90%] mx-auto min-h-24'>
        {/* { i18n.language == 'uz' ?
          <p className='xs:text-sm md:text-lg 2xl:text-2xl 3xl:text-3xl'>
            <span className='font-bold'>AgroCom</span> компанияси таркибидаги Agro Aliance Group 2014 йилда ташкил этилган бўлиб, ўсимликларни ҳимоя қилиш воситалари ҳамда органик ва минерал ўғитларни таъминотчиси сифатида фаолият бошлаган бўлса, Agro Aziya Group 2017 йилда ташкил этилиб, ишончли ўсимликларни ҳимоя қилиш воситалари таъминотчиси сифатида танилган. Компания қисқа муддатда кластер ва фермерларнинг ишончли ҳамкорига айланди.
          </p> :
          <p className='xs:text-sm md:text-lg 2xl:text-2xl 3xl:text-3xl'>
            <span className='font-bold'>AgroCom</span> компания в составе Agro Aliance Group была основана в 2014 году и начала свою деятельность в качестве поставщика средств защиты растений, а также органических и минеральных удобрений. В 2017 году была основана Agro Aziya Group, которая зарекомендовала себя как надежный поставщик средств защиты растений. Компания за короткий срок стала надежным партнером для кластеров и фермеров.
          </p>
        } */}
        <div className='my-10 flex justify-center items-center'>

{/* <button
        onClick={handleDetailsClick}
        className="relative overflow-hidden w-full bg-teal-500 font-medium text-white py-[6px] 2xl:py-[12px] 2xl:text-xl rounded-lg group"
      >
        <span className="absolute left-0 top-0 h-full w-0 bg-teal-800 transition-all duration-800 group-hover:w-full"></span>
        <span className="relative z-10">{t("MoreDetail")}</span>
      </button> */}

          {/* <NavLink className='relative button overflow-hidden xs:text-sm md:text-lg 2xl:text-2xl 3xl:text-3xl px-5 py-2 3xl:px-10 3xl:py-4 bg-teal-600 text-white rounded-md group' to={'/about'}>
            <span className="absolute left-0 top-0 h-full w-0 bg-teal-800 transition-all duration-800 group-hover:w-full"></span>
            <span className="relative z-10">{t("MoreDetail")}</span>
          </NavLink> */}
          <div className="wrap my-10">
            <NavLink to={'about'} className="button">
              {t("MoreDetail")}
            </NavLink>
          </div>

        </div>
      </div>
    </div>
    </>

  );
};

export default AboutHome;