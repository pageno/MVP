<script type="module">
// Firebase SDK import
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth, onAuthStateChanged, 
         createUserWithEmailAndPassword, 
         signInWithEmailAndPassword, 
         signOut } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// Firebase 설정
const firebaseConfig = {
  apiKey: "AIzaSyAIEnqTT-k094W-JOXDyXeFRdynKfy323I",
  authDomain: "metatoriworld-17096.firebaseapp.com",
  projectId: "metatoriworld-17096",
  storageBucket: "metatoriworld-17096.firebasestorage.app",
  messagingSenderId: "657765446565",
  appId: "1:657765446565:web:971fa5c42f06eb8cc56e4c"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Auth 상태 변경 감지
export function checkAuth(redirectIfLoggedOut = true) {
  onAuthStateChanged(auth, (user) => {
    if (!user && redirectIfLoggedOut) {
      window.location.href = "index.html"; // 로그인 안 하면 로그인 페이지로
    }
  });
}
</script>
