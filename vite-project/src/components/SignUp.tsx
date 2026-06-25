import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="h-[100vh] bg-[#f3f3f1]">
      <div className="flex flex-col text-center items-center justify-center">
        <div className="text-[#9da0a1] mt-10">--- Back to home</div>
        <div className="text-black font-bold text-[40px] mt-4">
          Create account
        </div>
        <div className="text-[#9da0a1]">
          Join GUESSIFY and track your streak
        </div>
        <div className="w-[500px] p-3 bg-white text-[14px] font-semibold border-1 border-gray-200 rounded-md mt-8 hover:cursor-pointer">
          Continue with Google
        </div>
        <div className="text-gray-400 text-[12px] mt-6">
          --------------------------------------------------- Or
          ---------------------------------------------------
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
              type="text"
              className="w-[494px] bg-white ml-1 mt-2 p-3 px-4 border-1 border-gray-200 rounded-lg placeholder-[#9da0a1] text-sm focus:outline-none"
              placeholder="adaChen@email.com"
            ></input>
          </div>
          <div className="mt-4">
            <p className="text-[10px] font-bold">PASSWORD</p>
            <input
              type="password"
              placeholder="8 + characters"
              className="w-[494px] bg-white ml-1 mt-2 p-3 px-4 border-1 border-gray-200 rounded-lg placeholder-[#9da0a1] text-sm focus:outline-none"
            ></input>
          </div>
          <div className="mt-4">
            <p className="text-[10px] font-bold">CONFIRM PASSWORD</p>
            <input
              type="password"
              placeholder="8 + characters"
              className="w-[494px] bg-white ml-1 mt-2 p-3 px-4 border-1 border-gray-200 rounded-lg placeholder-[#9da0a1] text-sm focus:outline-none"
            ></input>
          </div>
        </div>
        <div className="w-[500px] p-3 bg-[#6aaa64] border-1 rounded-lg text-white font-semibold mt-8 hover:cursor-pointer">
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
