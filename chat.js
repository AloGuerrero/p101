// Configuración de Firebase de tu app web
//AGREGA TUS ENLACES DE FIREBASE AQUÍ
const firebaseConfig = {
    apiKey: "AIzaSyByIb63wN8Q9VHYBVxRTGbl5l5ric0cyTw",
    authDomain: "clase-prueba-8e43b.firebaseapp.com",
    projectId: "clase-prueba-8e43b",
    storageBucket: "clase-prueba-8e43b.appspot.com",
    messagingSenderId: "664718293345",
    appId: "1:664718293345:web:ac75ef75fa08d207f7ad20"
  };
  

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name",user_name);

    window.location = "chat_room.html";
    
}



