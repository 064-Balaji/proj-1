import docPanel from "../../public/img/WEBSITE PICS (5).png";
import diaCure from "../../public/img/WEBSITE PICS (6).png";

const PageTwo = () => {
  return (
    <section>
      {/* Phone view */}
      <div className="relative w-full overflow-hidden rounded-lg mb-6 md:hidden">
        <div className="relative w-full">
          <img src={diaCure} alt="Diabetes cure way" />
        </div>
        <h1 className="text-center text-[26px] mt-50 text-gray-600">
          Diabetecure’s Way to Beat Diabetes
        </h1>
        <h1 className="text-center font-bold text-xl my-5 italic">
          NUTRITION + FITNESS + MEDICAL RESEARCHES
        </h1>
        <div className="flex flex-col">
          <p className="p-4 text-xl text-wrap text-center">
            Our Diabetecure App is created based on the findings & guidance of
            ICMR
            <br />
            <span className="italic">(Indian Council of Medical Research)</span>
            ,<br />
            Researches, Panel of Doctors, Nutritionists & Fitness coaches.
          </p>
          <button className="mx-auto bg-gray-600 text-white text-lg font-bold px-6 py-2 rounded-md shadow-lg hover:shadow-xl transition duration-300 ">
            Get your Diet plan now
          </button>
        </div>
        <img src={docPanel} alt="Doctors panel" />
      </div>

      {/* Desktop view */}
      <div className="hidden md:block relative h-[650px]">
        <div className="absolute top-0 left-0">
          <img
            src={diaCure}
            alt="Diabetes cure way"
            className="h-[350px] w-[600px]"
          />
        </div>
        <div className="text-center h-full w-full pt-20">
          <h1 className="text-5xl text-text mb-10 text-gray-600">
            Diabetecure’s Way to Beat Diabetes
          </h1>
          <h1 className="text-center font-bold text-4xl my-5 italic">
            NUTRITION + FITNESS + MEDICAL RESEARCHES
          </h1>
          <p className="p-4 text-3xl text-center mb-[75px]">
            Our Diabetecure App is created based on
            <br />
            the findings & guidance of ICMR{" "}
            <span className="italic">(Indian Council of Medical Research)</span>
            ,
            <br />
            Researches, Panel of Doctors, Nutritionists & Fitness coaches.
          </p>
          <button className="mx-auto trigger-popup bg-gray-600 text-white text-3xl font-bold px-6 py-2 rounded-md shadow-lg hover:shadow-xl transition duration-300">
            Get your Diet plan now
          </button>
        </div>
        <div className="absolute bottom-5 right-0">
          <img
            src={docPanel}
            alt="Doctors panel"
            className="h-[350px] w-[600px]"
          />
        </div>
      </div>
    </section>
  );
};

export default PageTwo;
