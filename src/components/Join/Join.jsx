import React, { useState } from "react";
import "./css/index.css";
import { authService, db } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

function Join() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  // const [inNicknameExist, setinNicknameExist] = useState(false); //닉네임 중복확인 state
  // 닉네임들을 불러오는 useSelector를 작성하기

  const __createUser = async (e) => {
    e.preventDefault();
    try {
      if (email && nickname && password && password.length >= 8) {
        console.log(email, password, nickname);
        const joinResult = await createUserWithEmailAndPassword(
          authService,
          email,
          password,
          nickname
        );
        // 설정한 nickname을 유저프로필 displayName에 저장
        setName();

        // 사용자 생성이 성공 뒤 Firestore에 사용자 정보 저장
        await setDoc(doc(db, "Users", joinResult.user.uid), {
          uid: joinResult.user.uid,
          displayName: nickname,
          email: email,
          //가입날짜 timestamp 넣기
        });

        console.log(joinResult);
      } else {
        console.log("조건에 부합하는 값이 모자랍니다.");
      }
    } catch (err) {
      alert(err.code);
    }
  };
  //useeffect로 닉네임이 중복되는지 안되는지 확인하기

  //유저 닉네임을 프로필에 등록하는 함수
  const setName = async () => {
    const user = authService.currentUser;
    try {
      await updateProfile(user, {
        displayName: nickname,
        // 기본사진 설정하기
        // photoURL: "./user.svg",
      });
      alert(nickname + "님! 안녕하세요! 회원가입되었습니다!");
    } catch (err) {
      alert(err.code);
    }
  };

  return (
    <div className="join">
      <div className="wrapper">
        <div className="logo">
          <img src="/assets/welcome/haemstagram.svg" alt="로고" />
        </div>
        <form className="join-contents">
          <div className="email-inp custom-inp">
            <div className="top">
              <div className="title txt-bold">이메일</div>
              <div className="warning"></div>
            </div>
            <div className="inp">
              <input
                type="email"
                placeholder="이메일을 입력해주세요"
                onBlur={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="password-inp custom-inp">
            <div className="top">
              <div className="title txt-bold">비밀번호</div>
              <div className="warning">
                {password &&
                  password.length < 8 &&
                  "비밀번호는 8자리 이상이어야 합니다"}
              </div>
            </div>
            <div className="inp">
              <input
                type="password"
                placeholder="비밀번호를 8자리 이상 입력해주세요"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="nickname-inp custom-inp">
            <div className="top">
              <div className="title txt-bold">닉네임</div>
              <div className="warning">
                {/* {inNicknameExist && "이미 사용하고있는 닉네임 입니다"} */}
              </div>
            </div>
            <div className="inp">
              <input
                type="text"
                placeholder="닉네임을 입력해주세요"
                onChange={(e) => setNickname(e.target.value)}
                required
              />
            </div>
          </div>
          <button className="join-btn" type="submit" onClick={__createUser}>
            회원가입하기
          </button>
        </form>
      </div>
    </div>
  );
}

export default Join;
