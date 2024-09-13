import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyAwibo3ig5SluP4gqu6l3RkdjL_6dAMNL4",
    authDomain: "mbbs-campus-dadu110.firebaseapp.com",
    projectId: "mbbs-campus-dadu110",
    storageBucket: "mbbs-campus-dadu110.appspot.com",
    messagingSenderId: "853486859885",
    appId: "1:853486859885:web:66fc471e3cf6afcb277164"
};


const app = initializeApp(firebaseConfig);
const storage = getStorage(app);


export { storage }