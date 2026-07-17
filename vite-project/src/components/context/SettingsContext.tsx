import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  useEffect,
} from "react";

interface SettingsContextType {
  hardMode: boolean;
  setHardMode: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined,
);

interface SettingsProviderProps {
  children: ReactNode;
}

export function SettingsProvider({ children }: SettingsProviderProps) {
  const [hardMode, setHardMode] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Optional: Load saved settings
  useEffect(() => {
    const savedHardMode = localStorage.getItem("hardMode");
    const savedDarkMode = localStorage.getItem("darkMode");

    if (savedHardMode !== null) {
      setHardMode(JSON.parse(savedHardMode));
    }

    if (savedDarkMode !== null) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  // Optional: Save settings
  useEffect(() => {
    localStorage.setItem("hardMode", JSON.stringify(hardMode));
  }, [hardMode]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // Toggle Tailwind dark mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <SettingsContext.Provider
      value={{
        hardMode,
        setHardMode,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error("useSettings must be used inside a SettingsProvider");
  }

  return context;
}
