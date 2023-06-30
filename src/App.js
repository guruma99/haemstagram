import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Join from "./components/Join/Join";
import MainFeed from "./components/MainFeed/MainFeed";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/feed" element={<MainFeed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
