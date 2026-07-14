import { useState } from "react";

interface ToggleProps {
  label: string;
}

export default function Toggle({ label }: ToggleProps) {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="mb-5 flex items-center justify-between">
      <span>{label}</span>

      <button
        onClick={() => setEnabled(!enabled)}
        className={`
          relative
          h-7
          w-14
          rounded-full
          transition-colors
          duration-300
          ${enabled ? "bg-green-600" : "bg-gray-300"}
        `}
      >
        <span
          className={`
            absolute
            left-1
            top-1
            h-5
            w-5
            rounded-full
            bg-white
            transition-transform
            duration-300
            ${enabled ? "translate-x-7" : "translate-x-0"}
          `}
        />
      </button>
    </div>
  );
}
