import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClpRM1UbEBsUBd9RdhNHNb2beAMVIVzd0",
  authDomain: "t-pro-webadmin.firebaseapp.com",
  projectId: "t-pro-webadmin",
  storageBucket: "t-pro-webadmin.appspot.com",
  messagingSenderId: "547729673677",
  appId: "1:547729673677:web:f875de80d420b3ce180884",
  measurementId: "G-PWE8495H42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);