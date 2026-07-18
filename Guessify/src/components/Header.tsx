import { useNavigate } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsPanel from "./Settings";
import { useState } from "react";
import { useUser } from "./context/UserContext";

const Header = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const { user, setUser } = useUser();

  const getCurrentDateFormatted = (): string => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    const monthName = () => {
      if (month === "01") {
        return "January";
      } else if (month === "02") {
        return "February";
      } else if (month === "03") {
        return "March";
      } else if (month === "04") {
        return "April";
      } else if (month === "05") {
        return "May";
      } else if (month === "06") {
        return "June";
      } else if (month === "07") {
        return "July";
      } else if (month === "08") {
        return "August";
      } else if (month === "09") {
        return "September";
      } else if (month === "10") {
        return "October";
      } else if (month === "11") {
        return "Novemeber";
      } else if (month === "12") {
        return "December";
      }
    };

    const dayNumber = () => {
      if (day.slice(0, 1) === "0") return day.slice(1);
      else {
        return day;
      }
    };

    return `${monthName()} ${dayNumber()}, ${year}`;
  };

  const navigate = useNavigate();

  return (
    <div className="relative h-16 md:h-[10vh] px-4 bg-[#171640] text-white flex flex-row items-center justify-between text-[12px] md:text-[16px]">
      <div className="flex items-center text-center">
        <div
          className="flex font-bold text-[16px] md:text-[24px] lg:text-[30px] hover:cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          GUESSIFY
        </div>
      </div>
      <div className="static md:absolute md:left-1/2 md:-translate-x-1/2 whitespace-nowrap text-center text-[10px] md:text-[14px]">
        {getCurrentDateFormatted()}
      </div>
      <div className="flex flex-row items-center justify-end gap-2">
        {!user ? (
          <SettingsIcon
            className="hover:cursor-pointer ml-[3vw] md:ml-0 mr-[3vw]"
            onClick={() => setSettingsOpen((prev) => !prev)}
          />
        ) : (
          <>
            <div className="flex text-center items-center">
              <div className="w-auto truncate max-w-[80px] md:max-w-none flex text-right items-center justify-end text-[10px] md:text-[14px] lg:text-[16px] mr-[4px] md:mr-[10px]">
                {user.name}
              </div>
              <button
                onClick={() => {
                  setUser(null);
                  navigate("/");
                }}
                className="bg-white text-black text-[10px] md:text-sm p-1 md:p-2 mx-2 md:mx-4 rounded-md hover:cursor-pointer"
              >
                Logout
              </button>
            </div>
            <SettingsIcon
              className="hover:cursor-pointer mr-[3vw]"
              onClick={() => setSettingsOpen((prev) => !prev)}
            />
          </>
        )}
      </div>
      <SettingsPanel
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
      />
    </div>
  );
};

export default Header;
