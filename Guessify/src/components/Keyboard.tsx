import { keyboardRows } from "./keyboardLayout.ts";
import type { KeyboardProps } from "../types/types.ts";
import { Key } from "./Key.tsx";

export function Keyboard({ onKeyPress, letterStatuses }: KeyboardProps) {
  return (
    <div className="flex flex-col gap-2 mt-20">
      {keyboardRows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-1">
          {row.map((key) => (
            <Key
              key={key}
              value={key}
              status={letterStatuses[key]}
              onClick={onKeyPress}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
