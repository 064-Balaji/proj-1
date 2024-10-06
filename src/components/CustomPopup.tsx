import {
  Dialog,
  Flex,
  Heading,
  Radio,
  Text,
  TextField,
} from "@radix-ui/themes";
import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { CiCalendar, CiMobile2, CiUser } from "react-icons/ci";

const questions = [
  {
    question: "How long have you had Diabetes?",
    options: ["More than 5 years", "1 to 5 years", "Less than 1 year"],
  },
  {
    question: "Update your current sugar level?",
    options: [
      "140 - 199 mg/dL",
      "200 - 299 mg/dL",
      "300 - 399 mg/dL",
      "400 mg/dL & above",
    ],
  },
  {
    question: "Update your HbA1C level?",
    options: ["Less than 6%", "6% to 7%", "7% to 8%", "9% & above"],
  },
  {
    question: "What is your Lifestyle Status?",
    options: [
      "Active (You spend most of your day doing something physical)",
      "Moderate (You spend a large part of your day on your feet)",
      "Sedentary ( You spend most of your day sitting)",
    ],
  },
  {
    question: "Choose your Food Preference for your Diet",
    options: ["Vegetarian + Egg", "Non Vegetarian", "Vegetarian"],
  },
  {
    question: "Are you under any medication?",
    options: ["Yes", "No"],
  },
  {
    question: "Please provide your details",
    options: [],
    isInput: true,
  },
];

const CustomPopup = ({
  buttonText,
  buttonClassName,
}: {
  buttonText: string;
  buttonClassName: string;
}) => {
  const [curQuestion, setQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  const changeQues = (perform: string) => {
    if (perform === "add" && curQuestion < questions.length - 1) {
      setQuestion(curQuestion + 1);
      setSelectedOption("");
    } else if (perform === "neg" && curQuestion > 0) {
      setQuestion(curQuestion - 1);
      setSelectedOption("");
    }
  };

  const handleOptionChange = (value: any) => {
    setSelectedOption(value);
  };

  const progressPercentage = ((curQuestion + 1) / questions.length) * 100;

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <button className={buttonClassName}>{buttonText}</button>
      </Dialog.Trigger>
      <Dialog.Content className="bg-white rounded-lg shadow-2xl p-6 relative">
        <Flex direction="column" gap="4">
          <Heading size="4">TELL US ABOUT YOURSELF!</Heading>
          <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-4">
            <div
              className="bg-green-500 h-full"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>

          <Flex direction="column" gap="3">
            <Heading size="3">{questions[curQuestion].question}</Heading>
            {questions[curQuestion].options.length > 0 ? (
              <Flex direction="column" gap="2">
                {questions[curQuestion].options.map((O, index) => (
                  <Text
                    as="label"
                    key={index}
                    className="flex gap-2 items-center p-2 rounded-md bg-gray-100"
                  >
                    <Radio
                      name={`question-${curQuestion}`}
                      value={O}
                      onChange={() => handleOptionChange(O)}
                      checked={selectedOption === O}
                    />
                    <Text>{O}</Text>
                  </Text>
                ))}
              </Flex>
            ) : (
              <Flex direction={"column"} gap="2">
                <Flex direction={"column"}>
                  <Text className="font-semibold text-sm text-gray-600">
                    Name
                  </Text>
                  <TextField.Root placeholder="Enter your name">
                    <TextField.Slot>
                      <CiUser size={22} />
                    </TextField.Slot>
                  </TextField.Root>
                </Flex>
                <Flex direction={"column"}>
                  <Text className="font-semibold text-sm text-gray-600">
                    Age
                  </Text>
                  <TextField.Root placeholder="Enter your age" type="number">
                    <TextField.Slot>
                      <CiCalendar size={22} />
                    </TextField.Slot>
                  </TextField.Root>
                </Flex>
                <Flex direction={"column"}>
                  <Text className="font-semibold text-sm text-gray-600">
                    Mobile
                  </Text>
                  <TextField.Root
                    placeholder="Enter your Mobile Number"
                    type="number"
                  >
                    <TextField.Slot>
                      <CiMobile2 size={22} />
                    </TextField.Slot>
                  </TextField.Root>
                </Flex>
                <Flex direction={"column"}>
                  <Text className="font-semibold text-sm text-gray-600">
                    Email
                  </Text>
                  <TextField.Root placeholder="Enter your email" type="email">
                    <TextField.Slot>
                      <AiOutlineMail size={22} />
                    </TextField.Slot>
                  </TextField.Root>
                </Flex>
              </Flex>
            )}
            {curQuestion != 6 ? (
              <p className="font-thin text-gray-600">
                {6 - curQuestion} questions remaining
              </p>
            ) : (
              <p className="font-thin text-gray-600">You're almost there</p>
            )}
          </Flex>
          <Flex justify="between" className="mt-6">
            <button
              disabled={curQuestion === 0}
              onClick={() => changeQues("neg")}
              className={`px-4 py-2 rounded-md ${
                curQuestion === 0
                  ? "bg-gray-300 text-gray-500"
                  : "bg-green-500 text-white"
              } transition duration-300`}
            >
              Previous
            </button>
            <button
              disabled={!selectedOption}
              className={`px-4 py-2 rounded-md ${
                selectedOption
                  ? "bg-green-500 text-white"
                  : "bg-gray-300 text-gray-500"
              } transition duration-300`}
              onClick={() => changeQues("add")}
            >
              Next
            </button>
          </Flex>
        </Flex>
        <Dialog.Close>
          <button className="absolute top-5 right-5 text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default CustomPopup;
