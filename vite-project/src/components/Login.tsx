import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth";
import { getCurrentUser } from "../services/users";
import { useUser } from "./context/UserContext";
import GoogleLoginButton from "./GoogleLogin";

const Login = () => {
  const { setUser } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setError(false);
    setLoading(true);

    try {
      // Authenticate with Firebase
      const authUser = await login(email, password);

      // Retrieve Firestore profile
      const profile = await getCurrentUser(authUser.uid);

      // console.log("Authenticated User:", authUser);
      // console.log("Firestore Profile:", profile);

      if (!profile) {
        setError(true);
        return;
      }

      setUser(profile);
      navigate("/game");
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="h-[90vh] bg-[#f3f3f1] dark:bg-[#121213]">
      <div className="flex flex-col text-center items-center justify-center">
        <div
          className="text-[#9da0a1] mt-10 hover:cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          ⟵ Back to home
        </div>
        <div className="text-black dark:text-white font-bold text-[30px] mt-4">
          Welcome back
        </div>
        <div className="text-[#9da0a1]">Sign in to continue your streak</div>
        <GoogleLoginButton />
        <div className="flex items-center w-[500px] mt-6">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-xs text-gray-400">OR</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>
        <form onSubmit={handleLogin}>
          <div className="w-[500px] flex flex-col text-start mt-6">
            <div className="mt-4">
              <p className="text-[10px] font-bold dark:text-gray-600">EMAIL</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="w-[494px] bg-white dark:bg-[#121213] dark:text-gray-400 ml-1 mt-2 p-3 px-4 border-1 border-gray-200 dark:border-gray-600 rounded-lg placeholder-[#9da0a1] text-sm focus:outline-none"
                placeholder="adaChen@email.com"
              ></input>
            </div>
            <div className="mt-4">
              <p className="text-[10px] font-bold dark:text-gray-600">
                PASSWORD
              </p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="8+ characters"
                className="w-[494px] bg-white dark:bg-[#121213] dark:text-gray-400 ml-1 mt-2 p-3 px-4 border-1 border-gray-200 dark:border-gray-600 rounded-lg placeholder-[#9da0a1] text-sm focus:outline-none"
              ></input>
            </div>
            <div className="w-[500px] flex justify-end mt-1">
              <p className="text-[10px] font-bold text-[#6aaa64] hover:cursor-pointer">
                Forgot password?
              </p>
            </div>
          </div>
          {error === true ? (
            <div className="flex text-center items-center justify-center">
              <h1 className="mt-6 text-sm text-red-400">
                Invalid email or password.
              </h1>
            </div>
          ) : null}
          <button
            className="w-[500px] p-3 bg-[#6aaa64] rounded-lg text-white font-semibold mt-8 hover:cursor-pointer"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="w-[200px] flex flex-row text-center items-center justify-center mt-8">
          <p className="text-[12px] text-[#9da0a1]">New to GUESSIFY?</p>
          <p
            className="text-[12px] text-[#6aaa64] ml-2 hover:cursor-pointer"
            onClick={() => {
              navigate("/register");
            }}
          >
            Create Account
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
