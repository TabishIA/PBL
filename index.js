// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCHy1eAxsDNiKx6r9OINytVx_gjJDkZZ2g",
  authDomain: "servicefinder-88e05.firebaseapp.com",
  databaseURL: "https://servicefinder-88e05-default-rtdb.firebaseio.com",
  projectId: "servicefinder-88e05",
  storageBucket: "servicefinder-88e05.appspot.com",
  messagingSenderId: "795378069877",
  appId: "1:795378069877:web:681ea358148d19a215e33c",
  measurementId: "G-2TCH99G6J8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Set database variable
var database = firebase.database();

function saveData() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var username = document.getElementById('username').value;
  var say_something = document.getElementById('say_something').value;
  var favourite_food = document.getElementById('favourite_food').value;

  database.ref('users/' + username).set({
    email: email,
    password: password,
    username: username,
    say_something: say_something,
    favourite_food: favourite_food
  });

  alert('Saved');
}

function getData() {
  var username = document.getElementById('username').value;

  var userRef = database.ref('users/' + username);
  userRef.on('value', function (snapshot) {
    var data = snapshot.val();

    alert(data.email);
  });
}

function updateData() {
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  var updates = {
    email: email,
    password: password
  };

  database.ref('users/' + username).update(updates);

  alert('Updated');
}

function removeData() {
  var username = document.getElementById('username').value;

  database.ref('users/' + username).remove();

  alert('Deleted');
}

