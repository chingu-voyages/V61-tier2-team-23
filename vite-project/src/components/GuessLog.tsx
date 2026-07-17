import type { History } from "../types/types";

interface BoardProps {
  currentGuess: string[];
  prevState: History;
}

const Guesslog = ({ currentGuess, prevState }: BoardProps) => {
  const statusStyles = {
    unused: "bg-[#d3d6da] text-[#202122]",
    absent: "bg-[#818384] text-[#ededed] border-none",
    present: "bg-yellow-500 text-white border-none",
    correct: "bg-green-600 text-white border-none",
  };

  const historyEntries = Array.from(prevState.entries());
  const totalRows = 6;

  return (
    <div className="flex flex-col text-center justify-center text-[20px] mt-20">
      {Array.from({ length: totalRows }).map((_, rowIndex) => {
        if (rowIndex < historyEntries.length) {
          const [word, statuses] = historyEntries[rowIndex];
          return (
            <div
              key={rowIndex}
              className="flex items-center text-center justify-center mt-2 first:mt-0"
            >
              {word.split("").map((letter, letterIndex) => (
                <div
                  key={letterIndex}
                  className={`flex items-center text-center justify-center w-[80px] h-[80px] font-bold text-[34px] border border-[#d3d6da] first:ml-0 ml-2 ${
                    statusStyles[statuses[letterIndex]] || "bg-white"
                  }`}
                >
                  {letter}
                </div>
              ))}
            </div>
          );
        }

        if (rowIndex === historyEntries.length) {
          return (
            <div
              key={rowIndex}
              className="flex items-center text-center justify-center mt-2 first:mt-0"
            >
              {Array.from({ length: 5 }).map((_, letterIndex) => (
                <div
                  key={letterIndex}
                  className="flex items-center text-center justify-center w-[80px] h-[80px] bg-white dark:bg-black dark:text-white border border-[#d3d6da] dark:border-black font-bold text-[34px] first:ml-0 ml-2 text-black"
                >
                  {currentGuess[letterIndex] || ""}
                </div>
              ))}
            </div>
          );
        }

        return (
          <div
            key={rowIndex}
            className="flex items-center text-center justify-center mt-2 first:mt-0"
          >
            {Array.from({ length: 5 }).map((_, letterIndex) => (
              <div
                key={letterIndex}
                className="flex items-center text-center justify-center w-[80px] h-[80px] bg-white dark:bg-black dark:text-white border border-[#d3d6da] dark:border-black font-bold text-[34px] first:ml-0 ml-2"
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Guesslog;
