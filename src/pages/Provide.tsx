import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

// Import images
import image7 from "../../public/img/WEBSITE PICS (7).png";
import image8 from "../../public/img/WEBSITE PICS (8).png";
import image9 from "../../public/img/WEBSITE PICS (9).png";
import image10 from "../../public/img/WEBSITE PICS (10).png";
import image11 from "../../public/img/WEBSITE PICS (11).png";
import image12 from "../../public/img/WEBSITE PICS (12).png";
import image13 from "../../public/img/WEBSITE PICS (13).png";
import image14 from "../../public/img/WEBSITE PICS (14).png";
import image15 from "../../public/img/WEBSITE PICS (15).png";
import CustomPopup from "../components/CustomPopup";

const cardData = [
  {
    image: image7,
    title: "Task based Diet & Fitness plan will be provided",
    description: "(Meals, Food Timing, Food Measures, Exercise)",
  },
  {
    image: image8,
    title:
      "Experience the Personalized South Indian based diet with Traditional Touch",
    description: "(Diet based on affordable Daily food & Traditional method)",
  },
  {
    image: image9,
    title: "No more Boring Strict Monotonous Diet pattern!",
    description: "(Get a New Healthy Diet every week based on Sugar Level)",
  },
  {
    image: image10,
    title: "Beat Diabetes through Diabetecure's 4R Method",
    description: "(Regimen, Replace, Reinforce, Rebirth)",
  },
  {
    image: image11,
    title: "Track your Health Status",
    description:
      "(Health Data Graph will be displayed to track your Sugar Level)",
  },
  {
    image: image12,
    title: "We are your Healthy Notification",
    description: "(Rectify your Unhealthy eating pattern as we Notify)",
  },
  {
    image: image13,
    title: "Learn and Unlearn all about Diabetes through Infotainment",
    description:
      "(Get to know Tips, Tricks, Do's & Don'ts of Health through our Infotainment section)",
  },
  {
    image: image14,
    title: "We care for your Mental Health",
    description:
      "(Our Affirmation & Motivation posts will Strengthen you Physically & Mentally)",
  },
  {
    image: image15,
    title: "Language Options",
    description: "Now Diabetecure App is available in both English & Tamil",
  },
];

const Provide = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % cardData.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + cardData.length) % cardData.length);
  };

  return (
    <>
      <section className="pt-[50px] relative bg-white my-2 md:my-0 md:pt-[40px] p-4 overflow-hidden">
        <div className="inline-block absolute left-[-25%] top-3 bg-wwp text-white font-bold pl-[90px] rounded-full shadow-lg py-3 pr-5 text-center italic md:hidden">
          <h1 className="pr-5">What We Provide?</h1>
        </div>
        <div className="hidden md:inline-block md:absolute md:left-[-5%] md:top-[60px] bg-wwp text-white text-3xl font-bold pl-[90px] p-10 rounded-full shadow-lg py-3 pr-5 text-center italic">
          <h1 className="pr-5">What We Provide?</h1>
        </div>

        <div className="card-stack relative h-[450px] md:h-[600px]">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`card rounded-lg p-4 absolute w-full h-full transform transition-transform duration-700 ease-in-out ${
                index === currentCard
                  ? "translate-x-0 opacity-100 scale-100 z-10"
                  : index < currentCard
                  ? "-translate-x-full opacity-0 scale-90"
                  : "translate-x-full opacity-0 scale-90"
              }`}
            >
              <img
                src={card.image}
                alt={card.title}
                className="h-[250px] w-auto md:h-[450px] mx-auto" // Adjusted for mobile view
              />
              <h3 className="font-semibold text-lg text-center mt-3 italic md:text-[30px] md:my-1">
                {card.title}
              </h3>
              <p className="text-center text-gray-600 italic font-bold md:text-[25px] md:mt-3">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Progress Bar Segments */}
        <div className="w-3/4 md:w-2/4 mx-auto flex justify-between my-4">
          {cardData.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-full mx-1 bg-gray-200 rounded-full transition-all duration-300 ${
                index <= currentCard ? "bg-green-500" : ""
              }`}
            />
          ))}
        </div>

        <div className="flex justify-between">
          <button
            onClick={prevCard}
            className="absolute left-7 top-[320px] md:left-[220px] md:top-[220px] text-3xl md:text-5xl"
          >
            <BiChevronLeft />
          </button>
          <button
            onClick={nextCard}
            className="absolute right-7 top-[320px] md:right-[220px] md:top-[220px] text-3xl md:text-5xl"
          >
            <BiChevronRight />
          </button>
        </div>
      </section>

      <div className="md:hidden flex flex-col mb-6">
        <CustomPopup
          buttonClassName="mx-auto bg-button text-white text-lg font-bold px-6 py-2 rounded-md shadow-lg hover:shadow-xl transition duration-300"
          buttonText="Get your Diet plan now"
        />
      </div>

      {/* Desktop view button */}
      <CustomPopup
        buttonClassName="hidden md:block mx-auto mt-5 bg-button text-white text-3xl font-bold px-6 py-2 rounded-md shadow-lg hover:shadow-xl transition duration-300"
        buttonText="Get your Diet plan now"
      />
    </>
  );
};

export default Provide;
