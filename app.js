import { auth } from './firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const signupBtn = document.getElementById('signup');
const loginBtn = document.getElementById('login');
const message = document.getElementById('message');

signupBtn.addEventListener('click', async () => {
  try {
    await createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value);
    message.textContent = '회원가입 성공! 로그인 해주세요.';
  } catch (error) {
    message.textContent = error.message;
  }
});

loginBtn.addEventListener('click', async () => {
  try {
    await signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value);
    window.location.href = 'profile.html';
  } catch (error) {
    message.textContent = error.message;
  }
});
