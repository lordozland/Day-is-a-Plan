var node = document.createElement("LI");                 // Create a <li> node
var textnode = document.createTextNode("Water");         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>


document.getElementById("lulz").appendChild(node);     // Append <li> to <ul> with id="myList"

var lulz = document.getElementById("lulz")
var notegive = document.getElementById("notegive")

// https://www.w3schools.com/jsref/prop_win_localstorage.asp

// Store
localStorage.setItem("lastname", "Smith");
// Retrieve
document.getElementById("result").innerHTML = localStorage.getItem("lastname");

