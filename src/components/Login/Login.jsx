import React, { useState } from "react";
import "./css/index.css";
// import firebaseApp from "../../config/firebaseApp";
import { authService } from "../../firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState(undefined);
  const [password, setpassword] = useState(undefined);

  //로그인함수
  const __doLogin = async (e) => {
    try {
      e.preventDefault();
      const currentUser = await signInWithEmailAndPassword(
        authService,
        email,
        password
      );
      console.log(currentUser.user);
      // console.log(currentUser.user.email);
      // console.log(currentUser.user.uid);
      // setUser(currentUser.user);
    } catch (err) {
      if (err.code === "auth/wrong-password") {
        console.log("비밀번호 틀림");
      }
      console.error(err);
      /*
      입력한 아이디가 없을 경우 : auth/user-not-found.
      비밀번호가 잘못된 경우 : auth/wrong-password.
      */
    }
  };

  //로그아웃 함수
  const __logout = async () => {
    try {
      await signOut(authService);
      console.log("로그아웃 성공");
    } catch (err) {
      console.log(err.code);
    }
  };

  return (
    <div className="login">
      <div className="wrapper">
        <div className="logo">
          <img src="/assets/welcome/haemstagram.svg" alt="로고" />
        </div>
        <form className="login-contents" onSubmit={__doLogin}>
          <div className="email-inp custom-inp">
            <div className="title txt-bold">이메일</div>
            <div className="inp">
              <input
                type="email"
                placeholder="이메일을 입력해주세요"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="password-inp custom-inp">
            <div className="title txt-bold">비밀번호</div>
            <div className="inp">
              <input
                type="password"
                placeholder="비밀번호를 입력해 주세요"
                onChange={(e) => setpassword(e.target.value)}
                required
              />
            </div>
          </div>
          <button className="login-btn" type="submit">
            로그인 하기
          </button>
        </form>
        <div className="go-join" onClick={__logout}>
          <div className="title txt-bold">또는 회원가입하기</div>
          <div className="asset">
            <img src="/assets/welcome/arrow.svg" alt="회원가입하기" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
