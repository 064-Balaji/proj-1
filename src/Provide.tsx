import { useEffect, useState } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

const features = [
  {
    title: "Task based Diet & Fitness plan will be provided",
    description: "(Meals, Food Timing, Food Measures, Exercise)",
  },
  {
    title:
      "Experience the Personalized South Indian based diet with Traditional Touch",
    description: "(Diet based on affordable Daily food & Traditional method)",
  },
  {
    title: "No more Boring Strict Monotonous Diet pattern!",
    description: "(Get a New Healthy Diet every week based on Sugar Level)",
  },
  {
    title: "Beat Diabetes through Diabetecure's 4R Method",
    description: "(Regimen, Replace, Reinforce, Rebirth)",
  },
  {
    title: "Track your Health Status",
    description:
      "(Health Data Graph will be displayed to track your Sugar Level)",
  },
  {
    title: "We are your Healthy Notification",
    description: "(Rectify your Unhealthy eating pattern as we Notify)",
  },
  {
    title: "Learn and Unlearn all about Diabetes through Infotainment",
    description:
      "(Get to know Tips, Tricks, Do's & Don'ts of Health through our Infotainment section)",
  },
  {
    title: "We care for your Mental Health",
    description:
      "(Our Affirmation & Motivation posts will Strengthen you Physically & Mentally)",
  },
  {
    title: "Language Options",
    description: "Now Diabetecure App is available in both English & Tamil",
  },
];

const Provide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextFeature = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
  };

  const prevFeature = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + features.length) % features.length
    );
  };

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "ArrowRight") {
        nextFeature();
      } else if (event.key === "ArrowLeft") {
        prevFeature();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className="bg-white overflow-hidden">
      <div className="absolute left-0 top-0 bg-blue-600 text-white font-bold px-8 py-3 rounded-br-full shadow-lg">
        <h1 className="text-2xl md:text-3xl italic">What We Provide?</h1>
      </div>

      <div className="mt-20 md:mt-24 max-w-4xl mx-auto">
        <div className="relative h-[400px] md:h-[450px]">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-all duration-300 ease-in-out ${
                index === currentIndex
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-full"
              }`}
            >
              <img
                src="/api/placeholder/400/300"
                alt={`Feature ${index + 1}`}
                className="h-64 w-auto mx-auto object-cover"
              />
              <h3 className="text-xl md:text-2xl font-semibold text-center mt-4 italic">
                {feature.title}
              </h3>
              <p className="text-center text-gray-600 mt-2 italic">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-4">
          <button
            onClick={prevFeature}
            className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            aria-label="Previous feature"
          >
            <CiCircleChevLeft size={24} />
          </button>
          <button
            onClick={nextFeature}
            className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            aria-label="Next feature"
          >
            <CiCircleChevRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Provide;
