import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { UserProvider } from "./components/context/UserContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Root({}) {
  const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  return (
    <UserProvider>
      <BrowserRouter>
        <GoogleOAuthProvider clientId={CLIENT_ID}>
          <Header />
          <App />
          <Footer />
        </GoogleOAuthProvider>
      </BrowserRouter>
    </UserProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);
