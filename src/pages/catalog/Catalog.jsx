

import React, { useEffect } from 'react';
import useStore from '../../store/useStore';
import Orb from '../../Orb';
import { transformImageUrl } from '../../utils/transformImgUrl';

const Catalog = () => {

  const { Catalogs, loading, error, fetchCatalog } = useStore();

  

  useEffect(() => {
    fetchCatalog();
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
    <div className='min-h-[70vh] container mx-auto'>
      <h1 className='text-center text-3xl font-bold mt-5'>Махсулот китоблари</h1>

      <div className='md:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8'>
        {
          Catalogs?.length && 
          Catalogs.map((item, index)=>(
          <div className="bg-white rounded-lg transform transition duration-300 hover:scale-105 shadow-lg hover:shadow-2xl p-4 w-full space-y-2">
              <div className="flex justify-center items-center mb-4">
                <img
                  src={transformImageUrl(item?.filePicture)}
                  alt={item.fileName}
                  className="w-[250px] h-[250px] object-contain bg-white"
                  // onError={(e) => (e.target.src = "/default-image.jpg")}
                />
              </div>
              <div className='flex gap-5 items-center mb-2'>
                <h3 className="text-xl font-semibold text-start">{item.nameUz}</h3>
                <p className="">{((item.fileSize / 1024) / 1024).toFixed(1)}MB</p>
              </div>
              
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = item.filePath;
                  link.target = '_blank'
                  link.setAttribute("download", item.fileName || "file.pdf");
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="w-full bg-teal-500 font-medium text-white py-[6px] rounded-lg hover:bg-teal-600 text-center"
              >
                Юклаб олиш
              </button>
          </div>
          ))
        }
      </div>
    </div>
  );
};

export default Catalog;