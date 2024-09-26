import { Flex } from "@radix-ui/themes";
import CustomButton from "./CustomButton";

const Content = () => {
  return (
    <Flex justify={"between"}>
      <Flex direction={"column"} gap={"9"} className="ml-16 mt-8">
        <h2 className="font-bold text-5xl mb-2">
          Doctor Recommended Diabetes App
        </h2>
        <p className="text-5xl font-medium">
          Get your Diet and Fitness plan for Diabetes
        </p>
        <div className="w-1/3 border-t-4 border-black mb-4 rounded-2xl"></div>
        <p className="text-5xl">
          95% saw Best Results in 3 weeks when followed consistently*
        </p>
        <CustomButton />
      </Flex>
      <img
        src="https://passionatesandy2004.github.io/demo-16/assests/img/Untitled%20design%20(3).png"
        alt="design image"
        height={"700px"}
        width={"950px"}
      />
    </Flex>
  );
};

export default Content;
