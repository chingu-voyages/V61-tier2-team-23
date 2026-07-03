import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { createUser } from "../services/firestore";
import { useState } from "react";

type GoogleUser = {
  email: string;
  name: string;
  picture: string;
  sub: string;
};

type User = {
  name: string;
  picture: string;
  sub: string;
};

type AppProps = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

const Signup = ({ setUser }: AppProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  console.log(email, password, confirmPassword);

  async function handleCreateUser() {
    if (password.length > 8 && password === confirmPassword) {
      try {
        const id = await createUser({
          email: email,
          password: password,
        });

        console.log("Created user with ID:", id);
        navigate("/game");
      } catch (error) {
        console.error("Failed to create user:", error);
      }
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
        <div className="w-[500px] p-3 bg-white text-[14px] font-semibold border-1 border-gray-200 rounded-md mt-8 hover:cursor-pointer">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              if (credentialResponse.credential) {
                const getUser: GoogleUser = jwtDecode(
                  credentialResponse.credential,
                );
                setUser(getUser);
                navigate("/game");
              }
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
        <div className="flex items-center w-[500px] mt-6">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-4 text-xs text-gray-400">OR</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>
        <div className="w-[500px] flex flex-col text-start mt-6">
          <div className="">
            <p className="text-[10px] font-bold">NAME</p>
            <input
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
        <div
          className="w-[500px] p-3 bg-[#6aaa64] border-1 rounded-lg text-white font-semibold mt-8 hover:cursor-pointer"
          onClick={() => {
            handleCreateUser();
          }}
        >
          Create Account
        </div>
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
              navigate("/game");
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
