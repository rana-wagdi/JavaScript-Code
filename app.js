 var name =prompt("What is your name!");

var firstChar = name.slice(0,1);

var upperCase=firstChar.toUpperCase();
var capital=upperCase + name.slice(1,name.length);
alert("Hello, "+capital);
