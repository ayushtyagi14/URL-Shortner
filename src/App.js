import { useState } from "react";
import { default as HeroSection } from "./Components/HeroSection";
import InputShortner from "./Components/InputShortner";
import LinkResult from "./Components/LinkResult";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <HeroSection />
      <div className="flex items-center justify-center w-full bg-gray-600">
        <InputShortner setInputValue={setInputValue} />
        <LinkResult inputValue={inputValue} />
      </div>
    </div>
  );
}

export default App;
