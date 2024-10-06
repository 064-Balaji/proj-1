import journey1 from "../../public/img/2 (1).png";
import journey2 from "../../public/img/3 (2).png";
import journey3 from "../../public/img/4 (1).png";
import CustomPopup from "../components/CustomPopup";

const Journey = () => {
  return (
    <section>
      {/* Phone view */}
      <div className="flex flex-col bg-white space-y-4 md:hidden">
        <h2 className="font-bold text-3xl text-gray-800 text-center">
          The Diabetecure Journey
        </h2>

        <img
          src={journey1}
          alt="Journey Step 1"
          className="trigger-popup h-[190px] w-[300px] mx-auto"
        />
        <img
          src={journey2}
          alt="Journey Step 2"
          className="trigger-popup h-[190px] w-[300px] mx-auto"
        />
        <img
          src={journey3}
          alt="Journey Step 3"
          className="trigger-popup h-[190px] w-[300px] mx-auto"
        />

        <CustomPopup
          buttonClassName="mx-auto bg-button text-white text-lg font-bold px-6 py-2 rounded-md shadow-lg hover:shadow-xl transition duration-300"
          buttonText="Get your Diet plan now"
        />
      </div>

      {/* Desktop view */}
      <h1 className="hidden md:block text-center font-bold text-5xl my-20">
        The Diabetecure Journey
      </h1>

      <div className="hidden md:grid grid-cols-3 gap-10 px-40">
        <a className="trigger-popup">
          <img
            src={journey1}
            alt="Journey Step 1"
            className="trigger-popup h-64"
          />
        </a>
        <a className="trigger-popup">
          <img
            src={journey2}
            alt="Journey Step 2"
            className="trigger-popup h-64"
          />
        </a>
        <a className="trigger-popup">
          <img
            src={journey3}
            alt="Journey Step 3"
            className="trigger-popup h-64"
          />
        </a>
      </div>

      <CustomPopup
        buttonClassName="hidden md:block mx-auto mt-[60px] bg-button text-white text-3xl font-bold px-6 py-2 rounded-md shadow-lg hover:shadow-xl transition duration-300"
        buttonText="Get your Diet plan now"
      />

      <div className="md:my-20"></div>
    </section>
  );
};

export default Journey;
