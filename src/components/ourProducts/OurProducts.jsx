import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Products from "../pages/products/Products";
import useStore from "../../store/useStore";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

// ProductCard komponenti
const ProductCard = ({ img, title, desc, id }) => {
  
  return (
    <div className="bg-white rounded-lg shadow-lg flex flex-col items-center p-4 space-y-4 h-full md:min-h-[390px]">
      {/* Rasm */}
      <div className="relative">
        <img
          src={img}
          alt="Product Image"
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
          <i className="fas fa-leaf text-green-500"></i>
        </div>
      </div>

      {/* Mahsulot nomi va tavsifi */}
      <div className="flex-grow flex flex-col justify-between w-full">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{desc}</p>
      </div>

      {/* "Batafsil" tugmasi */}
      <div className="flex justify-between w-full mt-auto">
        <NavLink to={`/products/plant-protection/view/${id}`} className="text-green-500 hover:text-green-600">
          {t("MoreDetail")}
        </NavLink>
        <span className="text-green-500 text-lg">&#9733;</span>
      </div>
    </div>
  );
};

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { t } from "i18next";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-next absolute top-[50%] right-0 z-10 p-3 bg-teal-500 rounded-[50%] text-white cursor-pointer" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-prevabsolute absolute top-[50%] left-0 z-10 p-3 bg-teal-500 rounded-[50%] text-white cursor-pointer" onClick={onClick}>
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
        breakpoint: 1280,
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
              <ProductCard title={item.titleUz} img={item.productPicture} desc={item.desUz} id={item.id} />
            </div>
          ))}
        </Slider>
        </div>
      </div>
    </div>
  );
}

export default LazyLoad;
