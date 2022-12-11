//animation toggle
const toggle = document.getElementById('toggle');
toggle.on('click' , fade);
function fade()
{
  toggle.classList.toggle('active');
};


              //firebas



var firebaseConfig = {
  apiKey: "AIzaSyBkcLrQaixp8dhiMrNfrWdJ52nyadLS4cU",
  authDomain: "login-demo-254f7.firebaseapp.com",
  projectId: "login-demo-254f7",
  storageBucket: "login-demo-254f7.appspot.com",
  messagingSenderId: "228883805517",
  appId: "1:228883805517:web:db9063121d6bf3a79ab304",
  measurementId: "G-C8Q2HYKHY1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth =  firebase.auth();

//signup function
function signup(){
  var emailup = document.getElementById("email1");
  var passwordup = document.getElementById("password1");

  const promise = auth.createUserWithEmailAndPassword(emailup.value,passwordup.value);
  //
  promise.catch(e=>alert(e.message));
  alert("SignUp Successfully");
  window.location.href = "../html.html";


}

//signIN function
function  signin(){
  var emailin = document.getElementById("email2");
  var passwordin  = document.getElementById("password2");
  


  if(emailin.value=='Driver@gmail.com' && passwordin.value=='1234')
  {
    document.getElementById('pages').href= '../GPS Driver/Index.html';
  }
  
}




