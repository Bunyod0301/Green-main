import { useState } from "react";
import { api } from "../../store/useStore";

const Contact = ({ address = "Tashkent, Uzbekistan" }) => {

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    message: '',
    success: true
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsModalOpen(true); // Modalni ochish
    setLoading(true); // Loading boshlash
    try {
      const response = await api.post('/Contact', formData);
      setMessage(
        {
          message: 'Аризангиз муваффақиятли юборилди! Сиз билан менежерлар тез орада алоқага чиқадилар!',
          success: true
        }
      )
      console.log(response.data); // Foydali natija chiqadi
    } catch (error) {
      setMessage({
        message: 'Хатолик юз берди! Қайтадан уринб кўринг!',
        success: false
      })
      console.error("Хатолик юз берди! Қайтадан уринб кўринг!", error);
    }
    console.log("Yuborilgan ma'lumotlar:", formData);
    setLoading(false)
  };
  

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}&output=embed`;
  return (
    <div className="bg-[#F2F2F3]">
      <div className="container mx-auto px-0 md:px-[5%] py-10 space-y-10">
        <div className="w-full">
          <h1 className="font-semibold text-[30px] text-green-500">Бош офис</h1>
        </div>
        <div className="relative w-full h-96">
          <iframe
            src={mapSrc}
            title="Google Map"
            aria-label="Map"
            aria-roledescription="map"
            role="region"
            className="absolute inset-0 w-full h-full border-none"
            allowFullScreen></iframe>
        </div>
        <div className="bg-white space-y-7 p-2 md:p-10">
          <h2 className="text-[#484848] text-[20px] font-semibold">
            Қайта алоқа учун ариза
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2">
              <input
                onChange={handleChange}
                name="name"
                value={formData.name}
                type="text"
                placeholder="Ism Familia"
                className=" shadow-md active:shadow-xl p-2 col-4 border-none bg-[#F2F3F3] rounded-md outline-none"
                required
              />
              <input
                onChange={handleChange}
                name="phone"
                value={formData.phone}
                type="text"
                placeholder="Telefon"
                className=" shadow-md active:shadow-xl p-2 border-none bg-[#F2F3F3] rounded-md outline-none"
                required
              />
              <input
                onChange={handleChange}
                name="email"
                value={formData.email}
                type="text"
                placeholder="El.pochta"
                className=" shadow-md active:shadow-xl p-2 border-none bg-[#F2F3F3] rounded-md outline-none"
              />
            </div>
            <div className="w-full ">
              <textarea
                onChange={handleChange}
                name="message"
                value={formData.message}
                className="w-full outline-none bg-[#F2F3F3] p-2 rounded-md h-[250px]"
                required
                placeholder="Mavzu"></textarea>
            </div>
            <div className="flex justify-center md:justify-end">
              <button
                type="submit"
                className="w-[230px] h-12 rounded-lg bg-green-600 text-white font-medium rounded-tl-3xl rounded-br-3xl">
                Юбориш
              </button>
            </div>
          </form>
        </div>
      </div>


      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80">
            {loading ? (
              <div>
                <p className="text-blue-500 font-semibold">Юборилмоқда...</p>
                <div className="mt-3 w-6 h-6 border-4 border-blue-500 border-dashed rounded-full animate-spin mx-auto"></div>
              </div>
            ) : (
              <p className={`${message.success ? 'text-green-500' : 'text-red-500'} font-semibold`}>{message.message}</p>
            )}
            {!loading && (
              <button
                className="mt-4 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-800 transition"
                onClick={() => setIsModalOpen(false)}
              >
                OK
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
