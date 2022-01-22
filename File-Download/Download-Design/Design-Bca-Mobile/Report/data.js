// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyD-6ozxK1aa1inCYAcV0ndWElZQHPRGhAg",
  authDomain: "stack-image-report.firebaseapp.com",
  databaseURL: "https://stack-image-report-default-rtdb.firebaseio.com",
  projectId: "stack-image-report",
  storageBucket: "stack-image-report.appspot.com",
  messagingSenderId: "710557888173",
  appId: "1:710557888173:web:3bebb64962c06e13df6024",
  measurementId: "G-QYNBYV56JC",
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('Report Design-Bca-Mobile');

function reset() {
  document.getElementById("contactForm").reset();
}

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var kategori = getInputVal('kategori');
  var message = getInputVal('message');

  // Save message
  saveMessage(kategori, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 5000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(kategori, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    kategori: kategori,
    message: message,
  });
}