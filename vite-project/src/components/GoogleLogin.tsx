import { useNavigate } from "react-router-dom";
import { loginWithGoogle } from "../services/auth";
import { getGoogleUser, createGoogleUser } from "../services/users";
import GoogleImage from "../images/GoogleLogoWhite.png";
import GoogleImage2 from "../images/GoogleLogoBlack.jpg";

import { useUser } from "./context/UserContext";
import { useSettings } from "./context/SettingsContext";

export default function GoogleLoginButton() {
  const { setUser } = useUser();
  const { darkMode } = useSettings();

  const navigate = useNavigate();

  async function handleGoogleLogin() {
    try {
      const authUser = await loginWithGoogle();

      const profile = await getGoogleUser(authUser.uid);

      if (!profile) {
        await createGoogleUser(
          authUser.uid,
          authUser.displayName ?? "",
          authUser.email!,
        );
      } else {
        setUser(profile);
        console.log(profile);
        navigate("/game");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <button
      className="w-[500px] flex text-center items-center justify-center p-3 bg-white dark:bg-[#121213] text-[14px] dark:text-white font-semibold border-1 border-gray-200 dark:border-gray-600 rounded-md mt-8 hover:cursor-pointer"
      onClick={handleGoogleLogin}
    >
      <img src={darkMode ? GoogleImage2 : GoogleImage} className="w-5 mr-2" />
      Continue with Google
    </button>
  );
}
