// src.firebase.js
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { Firestore, getFirestore } from "firebase/firestore";
// import "firebase/database";
import "firebase/auth";
import { getAuth } from "firebase/auth";
// import {
//   ref,
//   getStorage,
//   uploadBytes,
//   listAll,
//   getDownloadURL,
// } from "firebase/storage";
//   import {
//     deleteDoc,
//     doc,
//     getDoc,
//     getFirestore,
//     setDoc,
//     updateDoc,
//   } from "firebase/firestore";

//👇.env config 정보
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // firebaseConfig를 사용하여 앱 초기화
export const authService = getAuth(app);
// export { signWidthEmailAndPassword };
// export const dbService = getFirestore();
// export const realtimeDbService = getDatabase();

// const firebase = initializeApp(firebaseConfig);

//firebase의 firestore 인스턴스를 변수에 저장
// const Firestore = getFirestore(firebase);

//필요한 곳에서 사용할 수 있도록 내보내기
// export { authService };
