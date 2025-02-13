import React, { useEffect } from "react";
import useStore from "../../../store/useStore";
import Orb from "../../../Orb";
import ProductCard from "../../../components/cards/ProductCard";
import { getLocalizedKey } from "../../../utils/translateFormat";
import { t } from "i18next";

function PlantProtection() {
  const { productOne, loading, error, fetchProductOne } = useStore();

  useEffect(() => {
    fetchProductOne();
  }, []);

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

  if (error) {
    return <div className="text-center min-h-[80vh]">Xatolik yuz berdi: {error}</div>;
  }

  return (
    <div className="bg-slate-100">
      <div className="container mx-auto flex items-center justify-center flex-col px-2 py-8">
        <div className="flex w-full items-center flex-col md:flex-row justify-center gap-4">
          <div className="text-center ">
            <h2 className="text-3xl font-bold">{t("OurCatalog")}</h2>
            <p className="text-lg text-gray-600">{productOne?.length}+ {t("TypeProducts")}</p>
          </div>
        </div>

        {/* Mahsulotlar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {productOne.map((product, index) => (
            <ProductCard
              key={index}
              id={product.id} // ✅ `id` ga qarab yo‘naltiramiz
              icon={product.iconUrl || "/default-icon.jpg"}
              productPicture={product.productPicture || "/default-image.jpg"}
              title={getLocalizedKey(product, 'title')}
              description={getLocalizedKey(product, 'description')}
              type="productOne" // ✅ `productOne` deb turini yuboramiz
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlantProtection;
