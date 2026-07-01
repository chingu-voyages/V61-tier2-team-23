import Logo from "../images/Guessifylogo.png";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-[100vh] bg-[#f3f3f1] flex flex-col text-center items-center">
      <div className="text-[50px] font-bold mt-8">GUESSIFY</div>
      <div className="text-[#9da0a1] mt-2">
        Guess the hidden word. You have 6 tries.
      </div>
      <img src={Logo} className="h-40 mt-4"></img>
      <div className="flex flex-row">
        <div
          className="w-[240px] p-3 bg-[#1a1a1b] text-white font-semibold rounded-lg mr-2 hover:cursor-pointer"
          onClick={() => {
            navigate("/game");
          }}
        >
          Play now
        </div>
        <div
          className="w-[240px] p-3 bg-[#6aaa64] text-white font-semibold rounded-lg ml-2 hover:cursor-pointer"
          onClick={() => {
            navigate("/login");
          }}
        >
          Sign in
        </div>
      </div>
      <div className="flex flex-row mt-2 text-[14px]">
        <p className="text-[#9da0a1] font-semibold mr-1">No account?</p>
        <p
          className="text-[#6aaa64] font-semibold ml-1 hover:cursor-pointer"
          onClick={() => {
            navigate("/register");
          }}
        >
          Create one free
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
