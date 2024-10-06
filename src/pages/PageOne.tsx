import familUrl2 from "../../public/img/Untitled design (3).png";
import familUrl from "../../public/img/WEBSITE PICS (1).png";
import CustomPopup from "../components/CustomPopup";

const PageOne = () => {
  return (
    <main className="relative bg-white">
      {/* Phone view */}
      <section className="py-8 md:hidden">
        <div id="textElem" className="relative z-10 px-4">
          <h2 className="font-bold text-[25px] mb-2">
            Doctor Recommended Diabetes App
          </h2>
          <h1 className="text-[30px] mb-4">
            Get your Diet and Fitness Plan for Diabetes
          </h1>
          <div className="w-1/3 border-t-4 border-black mb-4 rounded-2xl"></div>
          <p className="text-[21px] mb-6">
            95% saw Best Results in 3 weeks when followed consistently*
          </p>
          <CustomPopup
            buttonClassName="bg-button text-white text-lg font-bold px-6 py-2 rounded-md shadow-lg hover:shadow-xl transition duration-300"
            buttonText="Get your Diet plan now"
          />
        </div>
        <div className="mt-4">
          <img src={familUrl} alt="Doctor Recommended App" />
        </div>
      </section>

      {/* Desktop view */}
      <div className="hidden md:flex lg:flex relative mt-7 h-[680px]">
        <div className="m-3 pl-20">
          <h1 className="flex-1 font-bold text-6xl lg:text-6xl">
            Doctor Recommended Diabetes App
          </h1>
          <h1 className="text-6xl font-light my-12 lg:my-14">
            Get your Diet and Fitness plan <br />
            for Diabetes
          </h1>
          <div className="w-1/4 border-t-8 border-black mb-6 rounded-2xl"></div>
          <h1 className="text-4xl my-10">
            95% saw Best Results in 3 weeks
            <br /> when followed consistently*
          </h1>
          <CustomPopup
            buttonClassName="bg-button text-white text-3xl font-bold px-8 py-4 rounded-md shadow-lg justify-center hover:shadow-xl transition duration-300"
            buttonText="Get your Diet plan now"
          />
        </div>
        <div className="absolute bottom-0 right-0">
          <img
            src={familUrl2}
            alt="Diet Plan"
            className="h-[700px] w-[950px]"
          />
        </div>
      </div>
    </main>
  );
};

export default PageOne;
