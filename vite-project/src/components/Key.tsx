import type { LetterStatus } from "../types/types.ts";

interface KeyProps {
  value: string;
  status?: LetterStatus;
  onClick: (value: string) => void;
}

export function Key({ value, status = "unused", onClick }: KeyProps) {
  const statusStyles = {
    unused: "bg-[#d3d6da] text-[#202122]",
    absent: "bg-[#818384] text-[#ededed]",
    present: "bg-yellow-500 text-white",
    correct: "bg-green-600 text-white",
  };

  const isSpecial = value === "ENTER" || value === "BACKSPACE";

  return (
    <button
      onClick={() => onClick(value)}
      className={`
        h-14
        rounded
        font-semibold
        select-none
        transition-colors
        hover:cursor-pointer
        ${isSpecial ? "px-4" : "w-10"}
        ${statusStyles[status]}
      `}
    >
      {value === "BACKSPACE" ? "⌫" : value}
    </button>
  );
}
