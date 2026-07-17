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
    <div className="h-[21vh] md:h-[10vh] bg-[#171640] text-white flex flex-col md:flex-row items-start md:items-center text-center justify-between text-[14px] md:text-[16px]">
      <div className="md:w-60 flex items-center text-center mt-4 md:mt-0">
        <div
          className="flex w-60 ml-[3vw] text-[24px] lg:text-[30px] md:text-[14px] hover:cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          GUESSIFY
        </div>
      </div>
      <div className="flex md:justify-center ml-[3vw] md:ml-0 w-60 text-left md:text-center ml-2 md:ml-0 mt-2 md:mt-0 md:text-[14px] lg:text-[16px]">
        {getCurrentDateFormatted()}
      </div>
      <div className="flex flex-row md:flex-col w-60 md:flex-row items-center md:items-center justify-start md:justify-end mb-1 md:mb-0">
        {!user ? (
          <SettingsIcon
            className="hover:cursor-pointer ml-[3vw] md:ml-0 mr-[3vw]"
            onClick={() => setSettingsOpen((prev) => !prev)}
          />
        ) : (
          <>
            <div className="flex text-center items-center">
              <div className="w-[100px] flex text-right items-right justify-end md:text-[14px] lg:text-[16px] mr-[10px]">
                {user.name}
              </div>
              <button
                onClick={() => {
                  setUser(null);
                  navigate("/");
                }}
                className="bg-white text-black text-sm p-2 ml-4 mr-4 rounded-md hover:cursor-pointer"
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
