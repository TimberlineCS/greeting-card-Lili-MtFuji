// Ririko Fujiwara
// Period 1
// 12/17/2023

/*Provide a description about what this program does here*/

/*Write code to create and manipulate the elements on the index.html page.  
The elements must come to gether to resemble an image.  Your Greeting Card
must also include text, an image, and music. */
var mm = "I am Ririko";
console.log(mm);



// var box = document.createElement("h1");box.style.width = "600px";
// box.style.height = "400px";
// box.style.border = "red solid 10px";
// box.style.backgroundColor = "#354A65"
// box.style.borderRadius = "5%"
// box.innerHTML = "Happy Holidays\n";
// document.body.append(box)

// var background = document.createElement("img");
// background.src = "Images/FallingSnowTransparent.gif";

var background = document.createElement("div");
background.style.width = "100%";
background.style.height = "550px";
background.style.borderWidt = "3em";
background.style.borderStyle = "dotted";
background.style.borderColor = "white";
// background.style.backgroundColor = "#77d7f2";
background.style.backgroundColor = "#04194B";
// background.style.padding = "10px";
document.body.append(background);


// Adding header
var header = document.createElement("h1");
header.innerHTML = "Merry Christmas";
header.style.textAlign = "center";
header.style.fontsize = "3em";
header.style.color = "white";
header.style.fontFamily = "cursive";
background.append(header);

var message = document.createElement("div");
message.innerHTML = "Mr.Snowman";
message.style.color = "yellow";
message.style.textAlign = "center";
background.append(message);

// Placing hat
var hat = document.createElement("div");
hat.style.border = "red solid 60px";
hat.style.width = "0px"; 
hat.style.height = "0px";
hat.style.borderLeftColor = "transparent"; 
hat.style.borderRightColor = "transparent";
hat.style.borderTopColor = "transparent"; 
hat.style.margin = "0 auto";
hat.style.top = "15px";
hat.style.position = "relative";
background.append(hat);



// Placing head
var head = document.createElement("div");
head.style.width = "100px";
head.style.height = "100px";
head.style.borderRadius = "50%";
head.style.backgroundColor = "#EEF0F4";
head.style.margin = "0 auto";

background.append(head); 

// Placing body
var body = document.createElement("div");
body.style.width = "150px";
body.style.height = "150px";
body.style.borderRadius = "50%";
body.style.backgroundColor = "#EEF0F4";
body.style.margin = "0 auto";
body.style.top = "-5px";
body.style.position = "relative";
background.append(body); 

// Placing eye
var eye = document.createElement("div");
eye.style.width = "15px";
eye.style.height = "15px";
eye.style.borderRadius = "50%";
eye.style.backgroundColor = "black";
eye.style.margin = "0 auto";
eye.style.top = "35px";
eye.style.left = "20px";
eye.style.position = "relative";
head.append(eye); 

// Placing eye
var eye2 = document.createElement("div");
eye2.style.width = "15px";
eye2.style.height = "15px";
eye2.style.borderRadius = "50%";
eye2.style.backgroundColor = "black";
eye2.style.margin = "0 auto";
eye2.style.top = "20px";
eye2.style.right = "20px";
eye2.style.position = "relative";
head.append(eye2); 

// Placing mouth
var mouth = document.createElement("div");
mouth.style.width = "38px";
mouth.style.height = "5px";
mouth.style.rectangle= "50%";
mouth.style.backgroundColor = "black";
mouth.style.margin = "0 auto";
mouth.style.top = "34px";
mouth.style.right = "0px";
mouth.style.position = "relative";
head.append(mouth); 

// Placing bottum
var button = document.createElement("div");
button.style.width = "15px";
button.style.height = "15px";
button.style.borderRadius = "50%";
button.style.backgroundColor = "black";
button.style.margin = "0 auto";
button.style.top = "25px";
button.style.position = "relative";
body.append(button); 

// Placing bottum
var button2 = document.createElement("div");
button2.style.width = "15px";
button2.style.height = "15px";
button2.style.borderRadius = "50%";
button2.style.backgroundColor = "black";
button2.style.margin = "0 auto";
button2.style.top = "50px";
button2.style.position = "relative";
body.append(button2); 

// Placing bottum
var button3 = document.createElement("div");
button3.style.width = "15px";
button3.style.height = "15px";
button3.style.borderRadius = "50%";
button3.style.backgroundColor = "black";
button3.style.margin = "0 auto";
button3.style.top = "75px";
button3.style.position = "relative";
body.append(button3); 


var moon = document.createElement("img");
moon.src = "Images/moon3.png";
moon.style.width = "60px";
moon.style.height = "60px";
moon.style.top = "-450px";
moon.style.left = "50px"
moon.style.position = "relative";
background.append(moon);

var snow = document.createElement("img");
snow.src = "Images/FallingSnowTransparent.gif";
snow.style.top = "-100px";
snow.style.left = "-15px"
snow.setAttribute("width","700px")
snow.style.position = "absolute";
background.append(snow);

var snow2 = document.createElement("img");
snow2.src = "Images/FallingSnowTransparent.gif";
snow2.style.top = "-100px";
snow2.style.left = "600px"
snow2.setAttribute("width","700px")
snow2.style.position = "absolute";
background.append(snow2);


var au = new Audio("Music/MerryChristmasMr.Lawrence.mp3");
au.controls = true;
document.body.appendChild(au);



    