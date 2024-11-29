import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import WorkoutContextProvider from "./context/WorkoutContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  
  <WorkoutContextProvider>
  <BrowserRouter>
    <Navbar />
    <div className="pages">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  </BrowserRouter>
  </WorkoutContextProvider>
);