import { useState } from "react";
import feedback from "../../public/img/feedback final (1).png";
import feedback2 from "../../public/img/feedback 2 final.png";
import feedback3 from "../../public/img/feedback final (3).png";
import feedback4 from "../../public/img/feedback final (4).png";
import feedback5 from "../../public/img/feedback final (5).png";
import feedback6 from "../../public/img/feedback final (6).png";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const FeedbackSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const feedbackImages = [
    feedback,
    feedback2,
    feedback3,
    feedback4,
    feedback5,
    feedback6,
  ];

  const handlePrevClick = () => {
    const imagesPerSlide = window.innerWidth < 768 ? 1 : 3; // Adjust based on screen size
    setCurrentSlide((prevSlide) =>
      prevSlide === 0
        ? feedbackImages.length - imagesPerSlide
        : prevSlide - imagesPerSlide
    );
  };

  const handleNextClick = () => {
    const imagesPerSlide = window.innerWidth < 768 ? 1 : 3; // Adjust based on screen size
    setCurrentSlide(
      (prevSlide) => (prevSlide + imagesPerSlide) % feedbackImages.length
    );
  };

  const progressPercentage =
    ((currentSlide + (window.innerWidth < 768 ? 1 : 3)) /
      feedbackImages.length) *
    100;

  return (
    <section className="my-10">
      <h1 className="font-bold text-2xl text-center md:text-3xl">
        What people say about Diabetecure
      </h1>

      <div className="relative w-full max-w-[1000px] mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                currentSlide * (100 / (window.innerWidth < 768 ? 1 : 3))
              }%)`,
            }}
          >
            {feedbackImages.map((imgSrc, index) => (
              <div key={index} className="w-full md:w-1/3 flex-shrink-0 p-2">
                <img
                  src={imgSrc}
                  alt={`Feedback ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-3/4 mx-auto bg-gray-200 h-2 rounded-full mt-4">
          <div
            className="bg-green-500 h-full rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrevClick}
          className="absolute left-[-5%] top-1/2 transform -translate-y-1/2 bg-opacity-50 p-3 rounded-full focus:outline-none mx-2"
        >
          <BiChevronLeft size={28} />
        </button>
        <button
          onClick={handleNextClick}
          className="absolute right-[-5%] top-1/2 transform -translate-y-1/2 bg-opacity-50 p-3 rounded-full focus:outline-none mx-2"
        >
          <BiChevronRight size={28} />
        </button>
      </div>
    </section>
  );
};

export default FeedbackSlider;
