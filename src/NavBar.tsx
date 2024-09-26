import { Flex } from "@radix-ui/themes";
import { FaWhatsapp } from "react-icons/fa";
import CustomButton from "./CustomButton";

const NavBar = () => {
  return (
    <Flex
      justify={"between"}
      align={"center"}
      className="px-4 h-28 border-b-2 border-gray-300"
    >
      <img
        src="https://passionatesandy2004.github.io/demo-16/assests/img/WEBSITE_PICS-images-17-removebg-preview.png"
        alt="test image"
        className="h-12 md:h-20 md:pl-10"
      />
      <Flex gap={"3"} align={"center"}>
        <CustomButton />
        <FaWhatsapp size={"38"} color="green" />
      </Flex>
    </Flex>
  );
};

export default NavBar;
