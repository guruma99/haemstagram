import React, { useState } from "react";
import "./css/index.css";
// import firebaseApp from "../../config/firebaseApp";
import { authService } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

// const Fauth = firebaseApp.auth();

function Login() {
  const [email, setEmail] = useState(undefined);
  const [password, setpassword] = useState(undefined);

  const __doLogin = async (e) => {
    try {
      e.preventDefault();
      const currentUser = await signInWithEmailAndPassword(
        authService,
        email,
        password
      );
      console.log(currentUser);
      // setUser(currentUser.user);
    } catch (err) {
      if (err.code == "auth/wrong-password") {
        console.log("비밀번호 틀림");
      }
      console.error(err);
      /*
      입력한 아이디가 없을 경우 : auth/user-not-found.
      비밀번호가 잘못된 경우 : auth/wrong-password.
      */
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
        <div className="go-join">
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
