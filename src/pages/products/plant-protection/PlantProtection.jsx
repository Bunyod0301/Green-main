import React, { useEffect, useRef, useState } from "react";
import useStore from "../../../store/useStore";
import Orb from "../../../Orb";
import ProductCard from "../../../components/cards/ProductCard";
import { getLocalizedKey } from "../../../utils/translateFormat";
import { t } from "i18next";
import { transformImageUrl } from "../../../utils/transformImgUrl";
import { useSearchParams } from "react-router-dom";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ITEMS_PER_PAGE = 6;
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-next absolute top-[40%] right-[-30px] z-10 p-3 bg-teal-500 rounded-[50%] text-white cursor-pointer" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-prevabsolute absolute top-[40%] left-[-30px] z-10 p-3 bg-teal-500 rounded-[50%] text-white cursor-pointer" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
};

const categories = [
  { id: 1, name: "Гербицид", icon: "/logo/gerbisid.png" },
  { id: 2, name: "Фунгицид", icon: "/logo/fungisid.png" },
  { id: 3, name: "Инсектицид", icon: "/logo/insektisid.png" },
  { id: 4, name: "Дефолиант", icon: "/logo/defoliant.png" },
  { id: 5, name: "Сирт фаол модда", icon: "/logo/sirt_faol.png" },
  { id: 6, name: "Уруғ дорилагич", icon: "/logo/urug_pereparat.png" },
  { id: 7, name: "Ўсимликлар препарат", icon: "/logo/usimlik_pereparat.png" },
];


function PlantProtection() {
  const { productOne, loading, error, fetchProductOne } = useStore();

  const [activeTab, setActiveTab] = useState(categories[0].id);
  const [currentPage, setCurrentPage] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const type = parseInt(searchParams.get("type")) || 1; // `page` ni olish

  const catalogHeaderRef = useRef(null);

  let totalPages = null
  let currentProducts = null

  useEffect(() => {
    fetchProductOne();
    setActiveTab(type)
  }, []);

  useEffect(()=>{
    setSearchParams({ type: activeTab });
  }, [activeTab])



  const scrollToHeader = () => {
    catalogHeaderRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (loading) {
    return (
      <div className="w-[100%] h-[80vh] flex items-center justify-center">
        <Orb
          hoverIntensity={0.2}
          rotateOnHover={true}
          hue={2}
          forceHoverState={true}
        />
      </div>
    );
  }


  function FilterProduct(type){
    return productOne?.filter((product) => product.productType == type);
  }

  // Umumiy sahifalar sonini hisoblash
  totalPages = Math.ceil(FilterProduct(activeTab)?.length / ITEMS_PER_PAGE);

  // Joriy sahifadagi mahsulotlarni olish
  currentProducts = FilterProduct(activeTab).slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  if (error) {
    return <div className="text-center min-h-[80vh]">Xatolik yuz berdi: {error}</div>;
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
    <div className="bg-slate-100">


<div className="w-full container mx-auto">
      {/* Ichki kategoriya (Mahsulot turlari) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 bg-gray-100 p-4">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`flex items-center gap-1 p-2 text-left w-full ${
              activeTab === category.id
                ? "text-black font-bold border-l-4 border-green-500 bg-white shadow"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab(category.id)}
          >
            <img src={category.icon} alt={category.name} className="w-6 h-6" />
            {category.name}
          </button>
        ))}
      </div>
    </div>




      <div className="container mx-auto flex items-center justify-center flex-col px-2 py-8">
        <div className="flex w-full items-center flex-col md:flex-row justify-center gap-4">
          <div className="text-center ">
            <h2 ref={catalogHeaderRef} className="text-3xl font-bold">{t("OurCatalog")}</h2>
            {
              currentProducts?.length ?
              <p className="text-lg text-gray-600">{categories.find((c) => c.id === activeTab)?.name} {FilterProduct(activeTab)?.length}+ {t("TypeProducts")}</p> :
              <p className="text-lg text-gray-600 min-h-[60vh]">{categories.find((c) => c.id === activeTab)?.name} маҳсулотлар мавжуд эмас</p>
            }
          </div>
        </div>

        <div className="hidden md:block">
          {
            currentProducts?.length ? (<><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
              {currentProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  id={product.id}
                  icon={transformImageUrl(product.iconUrl)}
                  productPicture={transformImageUrl(product.productPicture)}
                  title={getLocalizedKey(product, "title")}
                  description={getLocalizedKey(product, "description")}
                  type="productOne"
                />
              ))}
            </div>

            <div className=" w-full flex justify-center items-center gap-4 mt-10">
              <button
                className="px-4 py-2 border rounded disabled:opacity-50 bg-teal-500 text-white"
                onClick={() => (setCurrentPage((prev) => Math.max(prev - 1, 1)), scrollToHeader())}
                disabled={currentPage === 1}
              >
                ⬅️ Олдинги
              </button>

              <span className="text-lg font-semibold">
                {currentPage} / {totalPages}
              </span>

              <button
                className="px-4 py-2 border rounded disabled:opacity-50 bg-teal-500 text-white"
                onClick={() => (setCurrentPage((prev) => Math.min(prev + 1, totalPages)), scrollToHeader())}
                disabled={currentPage === totalPages}
              >
                Кейинги ➡️
              </button>
            </div></>) : ''
          }
        </div>

          <div className="md:hidden w-full h-full">
            {currentProducts?.length > 1 ? 
              <Slider {...settings}>
                {currentProducts?.map((product, index) => (
                  <div className="px-2 my-2 h-full flex" key={index}>
                    <ProductCard
                      key={index}
                      id={product.id}
                      icon={transformImageUrl(product.iconUrl)}
                      productPicture={transformImageUrl(product.productPicture)}
                      title={getLocalizedKey(product, "title")}
                      description={getLocalizedKey(product, "description")}
                      type="productOne"
                    />
                  </div>
                ))}
              </Slider> :
              currentProducts?.map((product, index) => (
                <div className="px-2 my-2 h-full flex" key={index}>
                  <ProductCard
                    key={index}
                    id={product.id}
                    icon={transformImageUrl(product.iconUrl)}
                    productPicture={transformImageUrl(product.productPicture)}
                    title={getLocalizedKey(product, "title")}
                    description={getLocalizedKey(product, "description")}
                    type="productOne"
                  />
                </div>
              ))
            }
          </div>
      </div>
    </div>
  );
}

export default PlantProtection;
