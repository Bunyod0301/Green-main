import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Products from "../pages/products/Products";
import useStore from "../../store/useStore";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { transformImageUrl } from "../../utils/transformImgUrl";
import { useTranslation } from "react-i18next";
import { getLocalizedKey } from "../../utils/translateFormat";

// ProductCard komponenti
const ProductCard = ({ img, title, desc, id }) => {
  const maxLength = 60;
  const isTextLong = desc?.length > maxLength;
  const displayText = desc?.slice(0, maxLength) + (isTextLong ? "..." : "");
  const { t } = useTranslation();
  
  return (
    <div className="bg-white rounded-lg shadow-lg flex flex-col items-center p-4 space-y-4 h-full md:min-h-[390px]">
      {/* Rasm */}
      <div className="relative">
        <img
          src={img}
          alt="Product Image"
          className="w-full h-48 3xl:h-96 object-cover rounded-lg"
        />
        {/* <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
          <i className="fas fa-leaf text-green-500"></i>
        </div> */}
      </div>

      {/* Mahsulot nomi va tavsifi */}
      <div className="flex-grow flex flex-col justify-between w-full">
        <h3 className="text-xl xl:text-2xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm xl:text-xl mt-2">{displayText}</p>
      </div>

      {/* "Batafsil" tugmasi */}
      <div className="flex justify-between w-full mt-auto text-lg xl:text-xl">
        <NavLink to={`/products/plant-protection/view/${id}`} className="text-green-500 hover:text-green-800 transition-all ease-in">
          {t("MoreDetail")}
        </NavLink>
        <span className="text-green-500">&#9733;</span>
      </div>
    </div>
  );
};


const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-next absolute top-[40%] right-[-40px] z-10 p-3 bg-teal-500 hover:bg-teal-800 transition-all ease-in rounded-[50%] text-white cursor-pointer" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-prevabsolute absolute top-[40%] left-[-40px] z-10 p-3 bg-teal-500 hover:bg-teal-800 transition-all ease-in rounded-[50%] text-white cursor-pointer" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
};

function LazyLoad() {
  const {
    productOne,
    productTwo,
    loading,
    error,
    fetchProductOne,
    fetchProductTwo
  } = useStore();
  useEffect(() => {
    fetchProductOne();
    fetchProductTwo();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>error...🤷‍♂️</div>;
  }



  const settings = {
    dots: false,
    lazyLoad: "ondemand",
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    centerMode: false,
    focusOnSelect: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full h-full py-10 bg-gray-100">
      <div className="container mx-auto px-[5%]">
        <div>
          <Products />
        </div>
        <div>
        <Slider {...settings}>
          {productOne?.map((item, index) => (
            <div className="px-2 my-2 h-full flex" key={index}>
              <ProductCard title={item.titleUz} img={transformImageUrl(item.productPicture)} desc={getLocalizedKey(item, "description")} id={item.id} /> {/* vaqtincha */}
            </div>
          ))}
        </Slider>
        </div>
      </div>
    </div>
  );
}

export default LazyLoad;





// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { useEffect, useState, useRef } from "react";
// import { NavLink } from "react-router-dom";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import useStore from "../../store/useStore";
// import { transformImageUrl } from "../../utils/transformImgUrl";
// import { useTranslation } from "react-i18next";
// import { getLocalizedKey } from "../../utils/translateFormat";

// const ProductCard = ({ img, title, desc, id, maxHeight }) => {
//   const maxLength = 60;
//   const isTextLong = desc?.length > maxLength;
//   const displayText = desc?.slice(0, maxLength) + (isTextLong ? "..." : "");
//   const { t } = useTranslation();
//   return (
//     <div className="bg-white rounded-lg shadow-lg flex flex-col items-center p-4 w-full" style={{ height: maxHeight ? `${maxHeight}px` : "auto" }}>
//       <div className="relative">
//         <img src={img} alt="Product Image" className="w-full h-48 2xl:h-96 object-cover rounded-lg" />
//       </div>
//       <div className="flex-grow flex flex-col justify-end w-full">
//         <h3 className="text-xl xl:text-2xl font-semibold text-gray-800">{title}</h3>
//         <p className="text-gray-600 text-sm xl:text-xl mt-2">{displayText}</p>
//       </div>
//       <div className="flex justify-between w-full mt-auto text-lg xl:text-xl">
//         <NavLink to={`/products/plant-protection/view/${id}`} className="text-green-500 hover:text-green-600">
//           {t("MoreDetail")}
//         </NavLink>
//       </div>
//     </div>
//   );
// };

// const Arrow = ({ onClick, direction }) => (
//   <div className={`absolute top-[40%] ${direction === "next" ? "right-[-40px]" : "left-[-40px]"} z-10 p-3 bg-teal-500 hover:bg-teal-800 rounded-full text-white cursor-pointer`} onClick={onClick}>
//     {direction === "next" ? <FaArrowRight /> : <FaArrowLeft />}
//   </div>
// );

// function LazyLoad() {
//   const { productOne, loading, error, fetchProductOne } = useStore();
//   const [maxHeight, setMaxHeight] = useState(0);
//   const cardRefs = useRef([]);

//   useEffect(() => {
//     fetchProductOne();
//   }, []);

//   useEffect(() => {
//     if (productOne?.length) {
//       const heights = cardRefs.current.map((card) => card?.offsetHeight || 0);
//       setMaxHeight(Math.max(...heights));
//     }
//   }, [productOne]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error...🤷‍♂️</div>;

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 1500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     responsive: [
//       { breakpoint: 1280, settings: { slidesToShow: 3 } },
//       { breakpoint: 1024, settings: { slidesToShow: 2 } },
//       { breakpoint: 768, settings: { slidesToShow: 1 } }
//     ],
//     nextArrow: <Arrow direction="next" />,
//     prevArrow: <Arrow direction="prev" />,
//   };

//   return (
//     <div className="w-full h-full py-10 bg-gray-100">
//       <div className="container mx-auto px-[5%]">
//         <Slider {...settings}>
//           {productOne?.map((item, index) => (
//             <div className="px-2 my-2 flex items-stretch" key={index} ref={(el) => (cardRefs.current[index] = el)}>
//               <ProductCard title={item.titleUz} img={transformImageUrl(item.productPicture)} desc={getLocalizedKey(item, "description")} id={item.id} maxHeight={maxHeight} />
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// }

// export default LazyLoad;
