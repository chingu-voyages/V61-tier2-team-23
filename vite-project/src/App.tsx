// import { useState } from 'react';
import "./App.css";
import { Routes, Route } from "react-router-dom";
// import { getRandomWord } from './data/words'
// import { useWordle } from './hooks/useWordle';
import Gameboard from "./components/GameBoard";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Signup from "./components/SignUp";
// import { LetterStatus } from './types/types';

type User = {
  name: string;
  picture: string;
  sub: string;
};

type AppProps = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

function App({ user, setUser }: AppProps) {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/register"
        element={<Signup user={user} setUser={setUser} />}
      />
      <Route path="/login" element={<Login user={user} setUser={setUser} />} />
      <Route path="/game" element={<Gameboard />} />
    </Routes>
  );
}

export default App;
