
  const firebaseConfig = {
    apiKey: "AIzaSyB81kTZdHWgg4MCU5P07kZZAAi4r1D6_XI",
    authDomain: "ahmedportfolio-8d65c.firebaseapp.com",
    databaseURL: "https://ahmedportfolio-8d65c-default-rtdb.firebaseio.com",
    projectId: "ahmedportfolio-8d65c",
    storageBucket: "ahmedportfolio-8d65c.appspot.com",
    messagingSenderId: "1034863631777",
    appId: "1:1034863631777:web:7d84c7ac3afc17c5e9bfe0",
    measurementId: "G-R4YWQ4Y4BL"
  };

  firebase.initializeApp(firebaseConfig);
 
  var AhmedportfolioDB= firebase.database().ref('Ahmedportfolio')
  document.getElementById("about-loginside").addEventListener('submit',submitform);

  function submitform(e)
  {
    e.preventDefault();
    var name= document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var msg=document.getElementById("msg").value;

    savedMsg(name,email,msg);
  }

  const  savedMsg = (name,email,msg) =>{
     
    document.querySelector(".alert").style.display="block";

    setTimeout(() =>{
        document.querySelector(".alert").style.display="none";
    
    }, 3000);

    document.getElementById("about-loginside").reset();

    var newContactForm=AhmedportfolioDB.push();

    newContactForm.set({
    
        Name : name,
        Email : email,
        Message : msg,

    });


  };

  

//   const getValue = (id) =>{
//     return document.getElementById(id).value;
//   };