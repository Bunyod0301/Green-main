import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Slick uchun CSS
import "slick-carousel/slick/slick-theme.css"; // Slick mavzusi uchun CSS

const Hero = () => {
  const settings = {
    dots: false, // Pastki nuqtalarni ko'rsatadi
    infinite: true, // Cheksiz aylanish
    speed: 1000, // Animatsiya tezligi (ms)
    slidesToShow: 1, // Har safar bitta slayd
    slidesToScroll: 1, // Har safar bitta slaydni aylantirish
    autoplay: true,
    autoplaySpeed: 4000
  };

  // axios
  //   .get("http://152.42.231.76/New")
  //   .then((response) => {
  //     console.log(response.data[0].desUz);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        <div>
          <img
            src="/slider/7.jpg"
            alt="Agricultural Management"
            className="w-full h-[80vh] object-cover object-bottom"
          />
        </div>
        <div>
          <img
            src="/slider/6.jpg"
            alt="Farm Fields"
            className="w-full h-[80vh] object-cover object-bottom"
          />
        </div>
        <div>
          <img
            src="/slider/5.jpg"
            alt="Greenhouse"
            className="w-full h-[80vh] object-cover object-bottom"
          />
        </div>
        <div>
          <img
            src="/slider/8.jpg"
            alt="Crop Inspection"
            className="w-full h-[80vh] object-cover object-top"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
