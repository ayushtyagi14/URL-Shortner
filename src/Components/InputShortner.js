import { useState } from "react";

const InputShortner = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  };

  return (
    <div>
      <div className="mb-5 xl:w-96 mt-3">
        <label htmlFor="URL" className="form-label inline-block mb-2 text-white">
          URL Shortner
        </label>
        <input
          type="url"
          className="form-control block w-full px-1 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border
          border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600
          focus:outline-none"
          id="URL"
          placeholder="Paste a link to shorten it"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      <button
        className="w-full sm:w-3/6 h-8 flex items-center justify-center sm:ml-20 ml-0 mt-3 object-right-top border border-transparent text-base rounded-2xl font-medium text-white bg-teal-400 hover:bg-teal-500 md:py-2 md:text-md md:px-3 cursor-pointer"
        onClick={handleClick}
      >
        Shorten it!
      </button>
      </div>
    </div>
  );
};

export default InputShortner;
