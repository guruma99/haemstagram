import React, { useCallback, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Join from "./components/Join/Join";
import MainFeed from "./components/MainFeed/MainFeed";
// import Header from "./components/Header/Header";
import Detail from "./components/Detail/Detail";
import Profile from "./components/Profile/Profile";
import { db } from "./firebase";

const database = db;

function App() {
  //닉네임을 실시간으로 불러오는 함수를 만들기
  const __getNicknames = useCallback(
    () => {
      const nicknameRef = database.ref("sta");
    },
    []

    // useEffect(() => {
    //   __getNicknames();
    //   return () => {};
    // }, [__getNicknames])
  );
  //함수를 실행시키기
  return (
    <div className="App">
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/feed" element={<MainFeed />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        {/* 클릭해서 있을 때 */}
        {false && <Detail />}
      </BrowserRouter>
    </div>
  );
}

export default App;
