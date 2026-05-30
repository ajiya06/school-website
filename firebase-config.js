// ============================================================
// FIREBASE CONFIG — Global Academy CMS
// ============================================================
// Yeh file SABHI pages mein include karni hogi
// <script src="firebase-config.js" type="module"></script>
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

// Your Firebase Config
const firebaseConfig = {
  apiKey:            "AIzaSyC618HPLLdXBhD7phy_L47w5d36U9GIPLi",
  authDomain:        "school-website-cms.firebaseapp.com",
  projectId:         "school-website-cms",
  storageBucket:     "school-website-cms.firebasestorage.app",
  messagingSenderId: "720284453351",
  appId:             "1:720284453351:web:05e609eac5747f9aaf9542",
  measurementId:     "G-HT4LSRM993"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore Database
const db = getFirestore(app);

// Initialize Authentication
const auth = getAuth(app);

// Export for use in all pages
export { app, db, auth };

// ============================================================
// FIRESTORE COLLECTIONS — Yeh collections automatically
// ban jayenge jab pehli baar data save hoga
// ============================================================
// admissions      — Admission form submissions
// campus_tours    — Campus tour bookings
// faculty_apps    — Faculty job applications
// notices         — Notice board items
// events          — School events
// faculty         — Faculty members
// results         — Exam results
// alumni          — Alumni profiles
// ============================================================
