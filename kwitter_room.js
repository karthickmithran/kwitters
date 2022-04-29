
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBGswYvBghFN2HxofUZOKLG0QfgIDLN6zc",
    authDomain: "kwitter-4977c.firebaseapp.com",
    projectId: "kwitter-4977c",
    storageBucket: "kwitter-4977c.appspot.com",
    messagingSenderId: "185039075076",
    appId: "1:185039075076:web:a98e79386c9b2b8b0cc251"
  };

  
  // Initialize Firebase
  //const app = initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


//user_name=localStorage.getItem("user_name");
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
