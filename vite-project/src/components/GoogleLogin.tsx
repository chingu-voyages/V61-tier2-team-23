import { useNavigate } from "react-router-dom";
import { loginWithGoogle } from "../services/auth";
import { getGoogleUser, createGoogleUser } from "../services/users";

import { useUser } from "./context/UserContext";

export default function GoogleLoginButton() {
  const { setUser } = useUser();

  const navigate = useNavigate();

  async function handleGoogleLogin() {
    try {
      const authUser = await loginWithGoogle();

      const profile = await getGoogleUser(authUser.uid);

      if (!profile) {
        await createGoogleUser(authUser.uid, authUser.email!);
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
      className="w-[500px] p-3 bg-white text-[14px] font-semibold border-1 border-gray-200 rounded-md mt-8 hover:cursor-pointer"
      onClick={handleGoogleLogin}
    >
      Continue with Google
    </button>
  );
}
