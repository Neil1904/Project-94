
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyDwsrIgpBzJbcFMCBe7C0yuQfsUY-yWZFU",
      authDomain: "neil-qcbp.firebaseapp.com",
      projectId: "neil-qcbp",
      storageBucket: "neil-qcbp.appspot.com",
      messagingSenderId: "716469597261",
      appId: "1:716469597261:web:e8a07b8327b40f5867d804",
      measurementId: "G-VJMFXZVDE8"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();