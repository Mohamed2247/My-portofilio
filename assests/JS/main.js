const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 120);
});

const form = document.getElementById("contactForm");
const alert = document.querySelector(".alert");

const firebaseConfig = {
  apiKey: "AIzaSyA1LEXFlcvqcwwcY1UaaxNzDa8jaJTTLP8",
  authDomain: "my-portfolio-2cdf1.firebaseapp.com",
  databaseURL: "https://my-portfolio-2cdf1-default-rtdb.firebaseio.com",
  projectId: "my-portfolio-2cdf1",
  storageBucket: "my-portfolio-2cdf1.appspot.com",
  messagingSenderId: "339286332073",
  appId: "1:339286332073:web:729cee780484a6fa290fb8",
  measurementId: "G-WFNFQGLPHG",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const ref = database.ref("messages");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const msgContact = document.getElementById("msgContact").value;

  ref.push({
    name: name,
    email: email,
    msgContact: msgContact,
  });
  alert.style.display = "block";

  setTimeout(() => {
    alert.style.display = "none";
  }, 2000);

  form.reset();
});

function toggleMenu() {
  const navList = document.querySelector(".navList");
  navList.classList.toggle("active");
}
