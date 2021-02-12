
//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyBRUv55XVr24D4GTPpDf-BuJX-Px3Gay90",
    authDomain: "html-61a1e.firebaseapp.com",
    databaseURL: "https://html-61a1e-default-rtdb.firebaseio.com",
    projectId: "html-61a1e",
    storageBucket: "html-61a1e.appspot.com",
    messagingSenderId: "825931880272",
    appId: "1:825931880272:web:fcf0fcfaaf3f09f581be55",
    measurementId: "G-1X4JEWQ45L"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser()
  {
      user_name= document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({purpose : "adding user"});
  }