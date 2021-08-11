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



// https://stackoverflow.com/questions/51305704/moment-js-if-statement-not-working-check-before-time

function calTime(hour, mins) {
    var format = "HH:mm";  
    var bt = moment().add(hour,'h').add(mins, 'm');
    if (bt.isAfter(moment('10:15', "HH:mm"))){
       bt = bt.add(15, 'm');
    }
  
     return bt.format(format);
};

//   https://www.w3schools.com/js/js_htmldom_css.asp


document.getElementById(id).style.property = new style
