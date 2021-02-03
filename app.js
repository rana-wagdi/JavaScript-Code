function whosPaying(names) {
  /******Don't change the code above*******/

  //Write your code here.

   names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

    var nameOnList= names[Math.floor(Math.random()*names.length)];
   personBuyLunch = nameOnList + " is going to buy lunch today!";

  return personBuyLunch;

  /******Don't change the code below*******/
}
whosPaying();