import footer1 from "../../public/img/23.png";
import footer2 from "../../public/img/24.png";
import footer3 from "../../public/img/25.png";
import footer4 from "../../public/img/footer 1 (1).png";
import footer5 from "../../public/img/footer 1 (2).png";
import footer6 from "../../public/img/footer 1 (3).png";

const FooterTwo = () => {
  return (
    <div>
      <div className="hidden md:flex flex-wrap justify-between bg-white gap-1 md:gap-64 my-10 px-[110px]">
        <div className="flex flex-row ">
          <img src={footer1} className="h-[60px] my-auto" />
          <h1 className="justify-center my-auto font-bold text-[15px] italic">
            95% <br />
            Saw Results*
          </h1>
        </div>
        <div className="flex flex-row">
          <img src={footer2} className="h-[60px] my-auto" />
          <h1 className="justify-center my-auto font-bold text-[15px] italic">
            Approved method
            <br /> to Beat Diabetes
            <br />
          </h1>
        </div>
        <div className="flex flex-row">
          <img src={footer3} className="h-[60px] my-auto" />
          <h1 className="justify-center my-auto font-bold text-[15px] italic">
            High Customer
            <br /> Satisfaction
            <br />
          </h1>
        </div>
      </div>
      <div className="md:hidden">
        <div className="grid grid-cols-2">
          <img src={footer4} />
          <img src={footer5} />
        </div>
        <img src={footer6} className="size-[55%] mx-auto" />
      </div>
    </div>
  );
};

export default FooterTwo;
