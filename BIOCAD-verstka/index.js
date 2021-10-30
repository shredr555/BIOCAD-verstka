import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyB-Zs2HbRM9rTeliFTTcrdf1iBCvJgPm2s",
  authDomain: "biocad-project.firebaseapp.com",
  projectId: "biocad-project",
  storageBucket: "biocad-project.appspot.com",
  messagingSenderId: "122842028610",
  appId: "1:122842028610:web:6d64d3e3e48c879d48abdb",
  measurementId: "G-6DKP75860M"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);