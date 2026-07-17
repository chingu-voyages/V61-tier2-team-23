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

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/game" element={<Gameboard />} />
    </Routes>
  );
}

export default App;
