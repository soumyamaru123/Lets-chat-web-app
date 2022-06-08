const firebaseConfig = {
    apiKey: "AIzaSyDFye84uVDwGIJHo4n9azAB7wa2Xdg9d7I",
    authDomain: "lets-chat-web-app-76b67.firebaseapp.com",
    projectId: "lets-chat-web-app-76b67",
    storageBucket: "lets-chat-web-app-76b67.appspot.com",
    messagingSenderId: "693646075825",
    appId: "1:693646075825:web:9782ac9fd338015be4ff90",
    measurementId: "G-9D94D2YSDG"

    
      
    firebase.initializeApp(firebaseConfig)
     
  };
  function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);

    firebase.database().ref("/").child(user_name).update({
        user_name: user_name,
        purpose: "adding user"
    })

    window.location = "web-app-room.html";
}