import React from "react";

interface BoardProps {
  currentGuess: string[];
  guesses: string;
  solution: string;
}

const Guesslog = ({ currentGuess }: BoardProps) => {
  return (
    <div className="flex flex-col text-center justify-center text-[20px] mt-20">
      <div className="flex items-center text-center justify-center">
        <div className="flex items-center text-center justify-center w-[80px] h-[80px] bg-white border-1 border-[#d3d6da] font-bold text-[34px]">
          {currentGuess[0]}
        </div>
        <div className="flex items-center text-center justify-center w-[80px] h-[80px] bg-white border-1 border-[#d3d6da] font-bold text-[34px] ml-2">
          {currentGuess[1]}
        </div>
        <div className="flex items-center text-center justify-center w-[80px] h-[80px] bg-white border-1 border-[#d3d6da] font-bold text-[34px] ml-2">
          {currentGuess[2]}
        </div>
        <div className="flex items-center text-center justify-center w-[80px] h-[80px] bg-white border-1 border-[#d3d6da] font-bold text-[34px] ml-2">
          {currentGuess[3]}
        </div>
        <div className="flex items-center text-center justify-center w-[80px] h-[80px] bg-white border-1 border-[#d3d6da] font-bold text-[34px] ml-2">
          {currentGuess[4]}
        </div>
      </div>
      <div className="flex items-center text-center justify-center mt-2">
        <div className="flex items-center text-center justify-center w-[80px] h-[80px] bg-white border-1 border-[#d3d6da] font-bold text-[34px]"></div>
        <div className="flex items-center text-center justify-center w-[80px] h-[80px] bg-white border-1 border-[#d3d6da] font-bold text-[34px] ml-2"></div>
        <div className="flex items-center text-center justify-center w-[80px] h-[80px] bg-white border-1 border-[#d3d6da] font-bold text-[34px] ml-2"></div>
        <div className="flex items-center text-center justify-center w-[80px] h-[80px] bg-white border-1 border-[#d3d6da] font-bold text-[34px] ml-2"></div>
        <div className="flex items-center text-center justify-center w-[80px] h-[80px] bg-white border-1 border-[#d3d6da] font-bold text-[34px] ml-2"></div>
      </div>
      <div className="flex items-center text-center justify-center mt-2">
        <div className="flex items-center text-center justify-center w-[80px] h-[80px] bg-white border-1 border-[#d3d6da] font-bold text-[34px]"></div>
        <div className="flex items-center text-center justify-center w-[80px] h-[80px] bg-white border-1 border-[#d3d6da] font-bold text-[34px] ml-2"></div>
        <div className="flex items-center text-center justify-center w-[80px] h-[80px] bg-white border-1 border-[#d3d6da] font-bold text-[34px] ml-2"></div>
        <div className="flex items-center text-center justify-center w-[80px] h-[80px] bg-white border-1 border-[#d3d6da] font-bold text-[34px] ml-2"></div>
        <div className="flex items-center text-center justify-center w-[80px] h-[80px] bg-white border-1 border-[#d3d6da] font-bold text-[34px] ml-2"></div>
      </div>
      <div className="flex items-center text-center justify-center mt-2">
        <div className="flex items-center text-center justify-center w-[80px] h-[80px] bg-white border-1 border-[#d3d6da] font-bold text-[34px]"></div>
        <div className="flex items-center text-center justify-center w-[80px] h-[80px] bg-white border-1 border-[#d3d6da] font-bold text-[34px] ml-2"></div>
        <div className="flex items-center text-center justify-center w-[80px] h-[80px] bg-white border-1 border-[#d3d6da] font-bold text-[34px] ml-2"></div>
        <div className="flex items-center text-center justify-center w-[80px] h-[80px] bg-white border-1 border-[#d3d6da] font-bold text-[34px] ml-2"></div>
        <div className="flex items-center text-center justify-center w-[80px] h-[80px] bg-white border-1 border-[#d3d6da] font-bold text-[34px] ml-2"></div>
      </div>
      <div className="flex items-center text-center justify-center mt-2">
        <div className="flex items-center text-center justify-center w-[80px] h-[80px] bg-white border-1 border-[#d3d6da] font-bold text-[34px]"></div>
        <div className="flex items-center text-center justify-center w-[80px] h-[80px] bg-white border-1 border-[#d3d6da] font-bold text-[34px] ml-2"></div>
        <div className="flex items-center text-center justify-center w-[80px] h-[80px] bg-white border-1 border-[#d3d6da] font-bold text-[34px] ml-2"></div>
        <div className="flex items-center text-center justify-center w-[80px] h-[80px] bg-white border-1 border-[#d3d6da] font-bold text-[34px] ml-2"></div>
        <div className="flex items-center text-center justify-center w-[80px] h-[80px] bg-white border-1 border-[#d3d6da] font-bold text-[34px] ml-2"></div>
      </div>
      <div className="flex items-center text-center justify-center mt-2">
        <div className="flex items-center text-center justify-center w-[80px] h-[80px] bg-white border-1 border-[#d3d6da] font-bold text-[34px]"></div>
        <div className="flex items-center text-center justify-center w-[80px] h-[80px] bg-white border-1 border-[#d3d6da] font-bold text-[34px] ml-2"></div>
        <div className="flex items-center text-center justify-center w-[80px] h-[80px] bg-white border-1 border-[#d3d6da] font-bold text-[34px] ml-2"></div>
        <div className="flex items-center text-center justify-center w-[80px] h-[80px] bg-white border-1 border-[#d3d6da] font-bold text-[34px] ml-2"></div>
        <div className="flex items-center text-center justify-center w-[80px] h-[80px] bg-white border-1 border-[#d3d6da] font-bold text-[34px] ml-2"></div>
      </div>
    </div>
  );
};

export default Guesslog;
