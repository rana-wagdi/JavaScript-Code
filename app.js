 var name =prompt("What is your name!");

var firstChar = name.slice(0,1);
var lastChar = name.slice(1,name.length);

var upperCase=firstChar.toUpperCase();
var lowerCase = lastChar.toLowerCase();


var capital=upperCase + lowerCase;
alert("Hello, "+capital+" "+"!");
