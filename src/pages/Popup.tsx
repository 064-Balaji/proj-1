const Popup = () => {
  return (
    <div
      id="popup"
      className="fixed inset-0 bg-[#009846] bg-opacity-70 md:bg-black md:bg-opacity-70 flex items-center justify-center"
    >
      <div className="bg-white rounded-lg p-8 max-w-md w-50 md:w-[800px] shadow-2xl md:shadow-none">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[25px] text-center font-bold">
            TELL US ABOUT YOURSELF!
          </h2>
          <button
            id="closeButton"
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div id="progressContainer" className="mb-4 flex space-x-1"></div>
        <h3 id="question" className="text-xl font-semibold mb-4"></h3>
        <div id="options" className="space-y-2 text-xl"></div>
        <p id="indicator" className="text-sm text-gray-500 mb-4"></p>
        <div className="mt-6 flex justify-between">
          <button
            id="previousButton"
            className="bg-gray-300 text-gray-500 font-bold py-2 px-4 rounded cursor-not-allowed"
            disabled
          >
            Previous
          </button>
          <button
            id="nextButton"
            className="bg-gray-300 text-gray-500 font-bold py-2 px-4 rounded cursor-not-allowed"
            disabled
          >
            Next
          </button>
        </div>
        <h3 id="error" className="text-red-700 hidden">
          *Enter a 10 digit phone number
        </h3>
      </div>
    </div>
  );
};

export default Popup;
