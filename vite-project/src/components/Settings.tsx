// import { useState } from "react";

// type ToggleSwitchProps = {
//   defaultOn?: boolean;
//   onChange?: (isOn: boolean) => void;
// };

const Settings = () => {
  //   const [darkMode, setDarkMode] = useState(false);

  //   const handleDarkMode = () => {
  //     if (darkMode === false) {
  //       setDarkMode(true);
  //     } else {
  //       setDarkMode(false);
  //     }
  //   };

  //   export default function ToggleSwitch({
  //   defaultOn = false,
  //   onChange,
  // }: ToggleSwitchProps) {
  //   const [isOn, setIsOn] = useState(defaultOn);

  //   function toggle() {
  //     const newValue = !isOn;
  //     setIsOn(newValue);
  //     onChange?.(newValue);
  //   }

  return (
    <div>
      <div>
        <h1>Settings</h1>
        <p>X</p>
      </div>
      <div>
        <div>
          <h1>Dark Mode</h1>
          <p>Switch theme</p>
        </div>
        <div>
          {/* <button
            onClick={toggle}
            className={`relative h-8 w-14 rounded-full transition-colors duration-300 ${
              isOn ? "bg-green-500" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-300 ${
                isOn ? "translate-x-7" : "translate-x-1"
              }`}
            />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Settings;
