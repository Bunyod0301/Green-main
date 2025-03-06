import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Slick uchun CSS
import "slick-carousel/slick/slick-theme.css"; // Slick mavzusi uchun CSS
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-next absolute top-[50%] right-[5%] z-10 p-[2vh] text-[2vh] bg-teal-500 hover:bg-teal-800 transition-all ease-in rounded-[50%] text-white cursor-pointer" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-prevabsolute absolute top-[50%] left-[5%] z-10 p-[2vh] text-[2vh] bg-teal-500 hover:bg-teal-800 transition-all ease-in rounded-[50%] text-white cursor-pointer" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
};
const Hero = () => {
  const settings = {
    dots: false, // Pastki nuqtalarni ko'rsatadi
    infinite: true, // Cheksiz aylanish
    speed: 1500, // Animatsiya tezligi (ms)
    slidesToShow: 1, // Har safar bitta slayd
    slidesToScroll: 1, // Har safar bitta slaydni aylantirish
    autoplay: true,
    autoplaySpeed: 2000,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };
  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        <div>
          <img
            src="/slider/8.jpg"
            alt="Crop Inspection"
            className="w-full h-[80vh] object-cover object-top"
          />
        </div>
        <div>
          <img
            src="/slider/6.jpg"
            alt="Farm Fields"
            className="w-full h-[80vh] object-cover object-center"
          />
        </div>
        {/* <div>
          <img
            src="/slider/10.jpg"
            alt="Greenhouse"
            className="w-full h-[80vh] object-cover object-bottom"
          />
        </div> */}

        <div>
          <img
            src="/slider/11.webp"
            alt="Greenhouse"
            className="w-full h-[80vh] object-cover object-bottom"
          />
        </div>
        
        {/* <div>
          <img
            src="/slider/4.jpg"
            alt="Crop Inspection"
            className="w-full h-[80vh] object-cover"
          />
        </div> */}
        <div>
          <img
            src="/slider/12.jpg"
            alt="Crop Inspection"
            className="w-full h-[80vh] object-cover"
          />
        </div>
        {/* <div>
          <img
            src="/slider/13.jpg"
            alt="Crop Inspection"
            className="w-full h-[80vh] object-cover"
          />
        </div> */}
        {/* <div>
          <img
            src="/slider/14.jpg"
            alt="Crop Inspection"
            className="w-full h-[80vh] object-cover object-center"
          />
        </div> */}
        {/* <div>
          <img
            src="/slider/15.jpg"
            alt="Crop Inspection"
            className="w-full h-[80vh] object-cover"
          />
        </div> */}
        <div>
          <img
            src="/slider/7.jpg"
            alt="Agricultural Management"
            className="w-full h-[80vh] object-cover object-center"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
