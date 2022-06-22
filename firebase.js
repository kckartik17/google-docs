import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKFGS9vW5kCnWRVxe16lzaq6SJqkFif5U",
  authDomain: "docs-b0f7e.firebaseapp.com",
  projectId: "docs-b0f7e",
  storageBucket: "docs-b0f7e.appspot.com",
  messagingSenderId: "847501251036",
  appId: "1:847501251036:web:c1f3f5b88fcf464ce5ff19",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
