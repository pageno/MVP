// Firebase 초기화
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAIEnqTT-k094W-JOXDyXeFRdynKfy323I",
  authDomain: "metatoriworld-17096.firebaseapp.com",
  projectId: "metatoriworld-17096",
  storageBucket: "metatoriworld-17096.firebasestorage.app",
  messagingSenderId: "657765446565",
  appId: "1:657765446565:web:971fa5c42f06eb8cc56e4c"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
