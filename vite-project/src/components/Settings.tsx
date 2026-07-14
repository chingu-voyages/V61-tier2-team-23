import Toggle from "./ToggleSwitch";
import { useUser } from "./context/UserContext";

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SettingsPanel({ isOpen, onClose }: SettingsPanelProps) {
  const user = useUser();
  return (
    <>
      {/* Dark overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/30" onClick={onClose} />
      )}

      <aside
        className={`
          fixed
          top-0
          right-0
          h-full
          w-80
          bg-white
          dark:bg-slate-800
          shadow-xl
          transition-transform
          duration-300
          z-50
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="p-6 text-gray-900">
          <div className="flex flex-row justify-between">
            <h2 className="mb-6 text-xl font-bold">Settings</h2>
            <p
              className="hover:cursor-pointer border-1 h-6 w-6 rounded-full flex text-center items-center justify-center"
              onClick={onClose}
            >
              X
            </p>
          </div>

          <div className="text-gray-900 border-b-1 dark:text-white">
            <Toggle label="Add Hints" />
          </div>

          <div className="mt-4 text-gray-900 border-b-1 dark:text-white">
            <Toggle label="Dark Mode" />
          </div>
          {user.user === null ? null : (
            <div className="flex flex-col">
              <h1 className="flex text-left mt-4">STATS</h1>
              <div className="flex flex-row mt-2">
                <div className="w-20 p-4 rounded-lg bg-gray-200">
                  <h1 className="font-bold text-lg">0</h1>
                  <p className="text-md">Played</p>
                </div>
                <div className="w-20 p-4 rounded-lg bg-gray-200 ml-4">
                  <h1 className="font-bold text-lg">0</h1>
                  <p className="text-md">Won</p>
                </div>
                <div className="w-20 p-4 rounded-lg bg-gray-200 ml-4">
                  <h1 className="font-bold text-lg">0</h1>
                  <p className="text-md">Streak</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
