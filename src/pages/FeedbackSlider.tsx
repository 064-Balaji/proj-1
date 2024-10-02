import { useState } from "react";
import feedback from "../../public/img/feedback final (1).png";
import feedback2 from "../../public/img/feedback 2 final.png";
import feedback3 from "../../public/img/feedback final (3).png";
import feedback4 from "../../public/img/feedback final (4).png";
import feedback5 from "../../public/img/feedback final (5).png";
import feedback6 from "../../public/img/feedback final (6).png";

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
    setCurrentSlide(
      currentSlide === 0 ? feedbackImages.length - 1 : currentSlide - 1
    );
  };

  const handleNextClick = () => {
    setCurrentSlide((currentSlide + 1) % feedbackImages.length);
  };

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
            style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}
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
          className="absolute left-[-10%] top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full focus:outline-none"
        >
          &#10094;
        </button>
        <button
          onClick={handleNextClick}
          className="absolute right-[-10%] top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full focus:outline-none"
        >
          &#10095;
        </button>
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
          className="absolute left-[-10%] top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full focus:outline-none"
        >
          &#10094;
        </button>
        <button
          onClick={handleNextClick}
          className="absolute right-[-10%] top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full focus:outline-none"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default FeedbackSlider;
