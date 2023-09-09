import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";

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


const inputScore = document.getElementById("newScore");
let idUpdate = ""

async function getData() {
  document.getElementById("container").innerHTML = ""
  const querySnapshot = await getDocs(collection(db, "student")); // lấy tất cả dữ liệu từ collection student
  querySnapshot.forEach((item) => { // duyệt qua từng document của collection student  
    const liTag = document.createElement("li"); // tạo 1 thẻ li
  
    const buttonStudentTag = document.createElement("button"); // tạo 1 thẻ button
    buttonStudentTag.innerText = item.data().name; // gán tên vào cho thẻ button vừa tạo
  
    liTag.appendChild(buttonStudentTag); // gắn thẻ button tên vào thẻ li

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete" 
    deleteBtn.style.backgroundColor = "red"
    deleteBtn.style.color = "white"
  
    liTag.appendChild(deleteBtn); // gắn thẻ button delete vào thẻ li

    document.getElementById("container").appendChild(liTag); // gắn thẻ li vào thẻ ul bên ngoài
    
    buttonStudentTag.addEventListener("click", async function () { // thêm hành động click vào thẻ button
      inputScore.value = item.data().avg
      idUpdate = item.id
    });


    deleteBtn.addEventListener("click", async function() {
      await deleteDoc(doc(db, "student", item.id));
      getData();
    })
  });
}


document.getElementById("addScore").addEventListener("click", async function () {
  const score = inputScore.value;
  const ref = doc(db, "student", idUpdate);

  await updateDoc(ref, {
    avg: score
  });

  inputScore.value = ""
  getData();
})

getData();