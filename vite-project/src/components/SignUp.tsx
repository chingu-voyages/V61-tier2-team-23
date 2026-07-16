import { useNavigate } from "react-router-dom";
import { createUser } from "../services/users";
import { register } from "../services/auth";
import { useUser } from "./context/UserContext";
import { useState } from "react";
import GoogleLoginButton from "./GoogleLogin";

const Signup = () => {
  const { setUser } = useUser();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    if (password.length > 7 && password === confirmPassword) {
      setLoading(true);
      try {
        // Create Firebase Auth account
        const authUser = await register(email, password);

        // Create Firestore document
        await createUser({
          uid: authUser.uid,
          name: name,
          email: authUser.email!,
          nGames: 0,
          wins: 0,
          winStreak: 0,
        });
        setUser({
          uid: authUser.uid,
          name: name,
          email: authUser.email!,
          nGames: 0,
          wins: 0,
          winStreak: 0,
        });
        alert("Account created!");
      } catch (err) {
        console.error(err);
        alert("Registration failed. Email may need to contain @ and .");
      }

      setLoading(false);
    } else {
      alert("Passwords must be at least 8 characters and must match.");
    }
  }

  return (
    <div className="h-[90vh] bg-[#f3f3f1]">
      <div className="flex flex-col text-center items-center justify-center">
        <div
          className="text-[#9da0a1] mt-10 hover:cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          ⟵ Back to home
        </div>
        <div className="text-black font-bold text-[40px] mt-4">
          Create account
        </div>
        <div className="text-[#9da0a1]">
          Join GUESSIFY and track your streak
        </div>
        <GoogleLoginButton />
        <div className="flex items-center w-[500px] mt-6">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-xs text-gray-400">OR</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>
        <form onSubmit={handleRegister}>
          <div className="w-[500px] flex flex-col text-start mt-6">
            <div className="">
              <p className="text-[10px] font-bold">NAME</p>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                className="w-[494px] bg-white ml-1 mt-2 p-3 px-4 border-1 border-gray-200 rounded-lg placeholder-[#9da0a1] text-sm focus:outline-none"
                placeholder="Ada Chen"
              ></input>
            </div>
            <div className="mt-4">
              <p className="text-[10px] font-bold">EMAIL</p>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                className="w-[494px] bg-white ml-1 mt-2 p-3 px-4 border-1 border-gray-200 rounded-lg placeholder-[#9da0a1] text-sm focus:outline-none"
                placeholder="adaChen@email.com"
              ></input>
            </div>
            <div className="mt-4">
              <p className="text-[10px] font-bold">PASSWORD</p>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder="8 + characters"
                className="w-[494px] bg-white ml-1 mt-2 p-3 px-4 border-1 border-gray-200 rounded-lg placeholder-[#9da0a1] text-sm focus:outline-none"
              ></input>
            </div>
            <div className="mt-4">
              <p className="text-[10px] font-bold">CONFIRM PASSWORD</p>
              <input
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                type="password"
                placeholder="8 + characters"
                className="w-[494px] bg-white ml-1 mt-2 p-3 px-4 border-1 border-gray-200 rounded-lg placeholder-[#9da0a1] text-sm focus:outline-none"
              ></input>
            </div>
          </div>
          <button
            className="w-[500px] p-3 bg-[#6aaa64] border-1 rounded-lg text-white font-semibold mt-8 hover:cursor-pointer"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>
        <div className="mt-10 flex text-center items-center justify-center">
          <p className="w-[200px] text-[12px] text-[#9da0a1]">
            By signing up you agree to our Terms and Privacy policy
          </p>
        </div>
        <div className="w-[200px] flex flex-row text-center items-center justify-center mt-8">
          <p className="text-[12px] text-[#9da0a1]">Already have an account?</p>
          <p
            className="text-[12px] text-[#6aaa64] ml-2 hover:cursor-pointer"
            onClick={() => {
              navigate("/login");
            }}
          >
            Sign in
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
