import yt from "../../public/img/mobileFinal utube.png";
import yt2 from "../../public/img/final utube 1.png";
import popup from "../../public/img/Pop Up MOBILE VIEW DIABETECURE (4).png";
import facebook from "../../public/img/final facebook 1.png";
import mobInsta from "../../public/img/mobileFinal insta.png";
import Insta from "../../public/img/instagram final 2.png";

const SocialMedia = () => {
  const redirectToUtube = () => {
    window.open("https://www.youtube.com", "_blank"); // Update with actual YouTube link
  };

  const redirectToFace = () => {
    window.open("https://www.facebook.com", "_blank"); // Update with actual Facebook link
  };

  const redirectToInsta = () => {
    window.open("https://www.instagram.com", "_blank"); // Update with actual Instagram link
  };

  return (
    <div>
      <div className="flex flex-row pb-10 md:mx-auto md:justify-center">
        <div
          onClick={redirectToUtube}
          className="mt-10 md:mt-[38px] cursor-pointer"
        >
          <img src={yt} alt="YouTube Mobile" className="md:hidden" />
          <img
            src={yt2}
            alt="YouTube Desktop"
            className="hidden md:block h-[465px]"
          />
        </div>
        <div onClick={redirectToFace} className="cursor-pointer">
          <img src={popup} alt="Facebook Mobile" className="md:hidden" />
          <img
            src={facebook}
            alt="Facebook Desktop"
            className="hidden md:block h-[500px]"
          />
        </div>
        <div
          onClick={redirectToInsta}
          className="mt-10 md:mt-12 cursor-pointer"
        >
          <img src={mobInsta} alt="Instagram Mobile" className="md:hidden" />
          <img
            src={Insta}
            alt="Instagram Desktop"
            className="hidden md:block h-[450px]"
          />
        </div>
      </div>
      <div>
        <h1 className="justify-center mx-auto text-center font-bold text-xl mb-20 px-7 italic text-gray-600 md:text-4xl">
          Know more about us through our Social Media Platform
        </h1>
      </div>
    </div>
  );
};

export default SocialMedia;
