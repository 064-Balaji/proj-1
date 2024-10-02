import img14 from "../../public/img/14.png";
import img15 from "../../public/img/15.png";
import second from "../../public/img/Pop Up Website.png";

const FAQ = () => {
  return (
    <section>
      {/* Phone view */}
      <div className="md:hidden relative w-full h-[600px] overflow-hidden py-6">
        <div
          id="slider1"
          className="flex justify-between transition-transform duration-300 ease-in-out"
        >
          <img src={img14} alt="FAQ Questions" className="object-cover" />
          <img src={img15} alt="FAQ Answers" className="object-cover" />
        </div>
        <div className="flex justify-center space-x-4">
          <button
            id="prevBtn1"
            className="text-white absolute left-7 top-[320px] md:absolute md:left-[220px] md:top-[220px] md:text-5xl md:text-black md:bg-white"
          >
            <img
              src="/assests/img/left.png"
              alt="Previous"
              className="block h-10 md:h-20"
            />
          </button>
          <button
            id="nextBtn1"
            className="text-white absolute right-7 top-[320px] md:absolute md:right-[220px] md:top-[220px] md:bg-white"
          >
            <img
              src="/assests/img/right.png"
              alt="Next"
              className="block h-10 md:h-20"
            />
          </button>
        </div>
        <button
          id="trigger-popup"
          className="trigger-popup absolute bottom-10 left-[25%] mx-auto bg-button text-white text-lg font-bold px-6 py-2 rounded-md shadow-lg hover:shadow-xl transition duration-300"
        >
          Get your Diet plan now
        </button>
      </div>

      {/* Desktop view */}
      <section className="hidden md:flex justify-center relative mb-7">
        <img src={second} alt="FAQ Desktop View" />
        <button className="absolute bottom-10 left-[37%] hidden md:block mx-auto mt-[60px] bg-gray-600 text-white text-3xl font-bold px-6 py-2 rounded-md shadow-lg hover:shadow-xl transition duration-300">
          Get your Diet plan now
        </button>
      </section>
    </section>
  );
};

export default FAQ;
