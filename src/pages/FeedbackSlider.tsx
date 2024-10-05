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

  const totalSlides = Math.ceil(feedbackImages.length / 3);

  const handlePrevClick = () => {
    setCurrentSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
  };

  const handleNextClick = () => {
    setCurrentSlide((currentSlide + 1) % totalSlides);
  };

  // Progress percentage calculation based on currentSlide
  const progressPercentage = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <section>
      <h1 className="font-bold text-2xl text-center md:text-3xl">
        What people say about Diabetecure
      </h1>

      {/* Desktop View */}
      <div className="hidden md:block relative w-[1000px] mx-auto my-10">
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {feedbackImages.map((imgSrc, index) => (
              <div key={index} className="flex-shrink-0 w-1/3">
                <img
                  src={imgSrc}
                  alt={`Feedback ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handlePrevClick}
          className="absolute left-[-10%] top-1/2 transform -translate-y-1/2 bg-opacity-50 p-3 rounded-full focus:outline-none"
        >
          <BiChevronLeft size="32" />
        </button>
        <button
          onClick={handleNextClick}
          className="absolute right-[-10%] top-1/2 transform -translate-y-1/2 bg-opacity-50 p-3 rounded-full focus:outline-none"
        >
          <BiChevronRight size="32" />
        </button>

        {/* Progress Bar */}
        <div className="w-3/4 mx-auto bg-gray-200 h-2 rounded-full mt-6">
          <div
            className="bg-green-500 h-full rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden relative w-[350px] mx-auto my-10">
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {feedbackImages.map((imgSrc, index) => (
              <div key={index} className="flex-shrink-0 w-full">
                <img
                  src={imgSrc}
                  alt={`Feedback ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handlePrevClick}
          className="absolute left-[-10%] top-1/2 transform -translate-y-1/2 bg-opacity-50 text-white p-3 rounded-full focus:outline-none"
        >
          <BiChevronLeft />
        </button>
        <button
          onClick={handleNextClick}
          className="absolute right-[-10%] top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full focus:outline-none"
        >
          <BiChevronLeft />
        </button>

        {/* Progress Bar for mobile view */}
        <div className="w-3/4 mx-auto bg-gray-200 h-2 rounded-full mt-6">
          <div
            className="bg-green-500 h-full rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>
    </section>
  );
};

export default FeedbackSlider;
