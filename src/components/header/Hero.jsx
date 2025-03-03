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
      {/* <Slider {...settings}>
        <div>
          <img
            src="https://agro-olam.uz/wp-content/uploads/2021/03/agricultural-management-practices-past-exam-question-paper-and-memorandum-grade-12-november-june.jpg"
            alt="Agricultural Management"
            className="w-full h-[500px] md:h-[700px] object-cover" // Rasmlarni to'g'ri joylash
          />
        </div>
        <div>
          <img
            src="https://agro-olam.uz/wp-content/uploads/2021/02/photo_2021-02-11_20-52-17.jpg"
            alt="Farm Fields"
            className="w-full h-[700px] object-cover"
          />
        </div>
        <div>
          <img
            src="https://agro-olam.uz/wp-content/uploads/2021/02/photo_2021-02-16_20-47-07.jpg"
            alt="Greenhouse"
            className="w-full h-[700px] object-cover"
          />
        </div>
        <div>
          <img
            src="https://agro-olam.uz/wp-content/uploads/2021/07/photo_2021-07-23_07-09-02.jpg"
            alt="Crop Inspection"
            className="w-full h-[700px] object-cover"
          />
        </div>
      </Slider> */}
      <div>
          <img
            src="/slider/6.jpg"
            alt="Greenhouse"
            className="w-full h-[80vh] object-cover object-bottom"
          />
        </div>
    </div>
  );
};

export default Hero;
