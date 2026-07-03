import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

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

const Login = ({ user, setUser }: AppProps) => {
  const navigate = useNavigate();

  console.log(user);

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
        <div className="text-black font-bold text-[30px] mt-4">
          Welcome back
        </div>
        <div className="text-[#9da0a1]">Sign in to continue your streak</div>
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
          <div className="w-[500px] flex justify-end mt-1">
            <p className="text-[10px] font-bold text-[#6aaa64] hover:cursor-pointer">
              Forgot password?
            </p>
          </div>
        </div>
        <div className="w-[500px] p-3 bg-[#6aaa64] border-1 rounded-lg text-white font-semibold mt-8 hover:cursor-pointer">
          Sign in
        </div>
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
