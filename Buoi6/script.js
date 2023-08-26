import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, getDoc, doc } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDRfdLvsDwoSm83YF9OTmk3mb4OHrAFDCM",
  authDomain: "jsi01-ea7a0.firebaseapp.com",
  projectId: "jsi01-ea7a0",
  storageBucket: "jsi01-ea7a0.appspot.com",
  messagingSenderId: "269320197",
  appId: "1:269320197:web:a855a4872e7406845f1c6c",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const querySnapshot = await getDocs(collection(db, "student")); // lấy tất cả dữ liệu từ collection student
querySnapshot.forEach((item) => { // duyệt qua từng document của collection student
  console.log("item.data(): ", item.data()); // item.data() là object chứa thông tin của document đó

  const liTag = document.createElement("li"); // tạo 1 thẻ li

  const buttonStudentTag = document.createElement("button"); // tạo 1 thẻ button
  buttonStudentTag.innerText = item.data().name; // gán tên vào cho thẻ button vừa tạo

  liTag.appendChild(buttonStudentTag); // gắn thẻ button vào thẻ li

  document.getElementById("container").appendChild(liTag); // gắn thẻ li vào thẻ ul bên ngoài
  
  buttonStudentTag.addEventListener("click", async function () { // thêm hành động click vào thẻ button
    
    // lấy thông tin document dựa trên id của document đó
    const docRef = doc(db, "student", item.id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      document.getElementById("name").innerText = docSnap.data().name // gắn tên của document vào thẻ h1 bên ngoài 
      document.getElementById("average").innerText = docSnap.data().avg // gắn avg của document vào thẻ h1 bên ngoài 
    } else {
      console.log("No such document!"); // nếu không tìm thấy document thì in ra dòng này
    }
  });
});
