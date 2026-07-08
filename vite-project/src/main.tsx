import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

type User = {
  name: string;
  picture: string;
  sub: string;
};

function Root({}) {
  const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  const [user, setUser] = useState<User>({ name: "", picture: "", sub: "" });

  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <Header user={user} setUser={setUser} />
        <App user={user} setUser={setUser} />
        <Footer />
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);
