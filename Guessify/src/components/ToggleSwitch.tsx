interface ToggleProps {
  label: string;
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}

export default function Toggle({ label, enabled, onChange }: ToggleProps) {
  return (
    <div className="mb-5 flex items-center justify-between">
      <span>{label}</span>

      <button
        onClick={() => onChange(!enabled)}
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
