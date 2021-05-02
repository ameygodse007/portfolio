var firebaseConfig = {
  apiKey: "AIzaSyDyKK8O_Q95KCuN9x8Iip8wPhDCdsHYV5E",
  authDomain: "portfolio-f379e.firebaseapp.com",
  projectId: "portfolio-f379e",
  storageBucket: "portfolio-f379e.appspot.com",
  messagingSenderId: "621092354246",
  appId: "1:621092354246:web:8edf9fcd75c2621e097fc7",
  measurementId: "G-DSJECBWP7C",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}
