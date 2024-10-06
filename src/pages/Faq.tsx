import { useState } from "react";
import img14 from "../../public/img/14.png";
import img15 from "../../public/img/15.png";
import second from "../../public/img/Pop Up Website.png";
import CustomPopup from "../components/CustomPopup";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const FAQ = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [img14, img15];

  // Handle switching to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle switching to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section>
      {/* Phone view */}
      <div className="md:hidden relative w-full h-[600px] overflow-hidden py-6">
        <div
          id="slider1"
          className="flex justify-center transition-transform duration-300 ease-in-out"
        >
          <img
            src={images[currentImageIndex]}
            alt={`FAQ Image ${currentImageIndex + 1}`}
            className="object-cover"
          />
        </div>
        <div className="flex justify-between items-center px-4 absolute inset-0 z-10">
          {/* Left Button */}
          <button onClick={prevImage} className="p-2">
            <BiChevronLeft className="text-4xl text-black" />
          </button>
          {/* Right Button */}
          <button onClick={nextImage} className="p-2">
            <BiChevronRight className="text-4xl text-black" />
          </button>
        </div>
        <CustomPopup
          buttonClassName="absolute bottom-10 left-[12%] mx-auto bg-button text-white text-lg font-bold px-6 py-2 rounded-md shadow-lg hover:shadow-xl transition duration-300"
          buttonText="Get your Diet plan now"
        />
      </div>

      {/* Desktop view */}
      <section className="hidden md:flex justify-center relative mb-7">
        <img src={second} alt="FAQ Desktop View" />
        <CustomPopup
          buttonClassName="absolute bottom-10 left-[37%] hidden md:block mx-auto mt-[60px] bg-button text-white text-3xl font-bold px-6 py-2 rounded-md shadow-lg hover:shadow-xl transition duration-300"
          buttonText="Get your Diet plan now"
        />
      </section>
    </section>
  );
};

export default FAQ;
