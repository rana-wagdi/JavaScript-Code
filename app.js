function lifeInWeeks(age) {
  /************Don't change the code above************/

  //Write your code here.
  var daysRemaning = 90 - age;

  var days = daysRemaning * 365;
  var weeks = Math.floor(daysRemaning * 52);
  var years = Math.floor(daysRemaning* 12);

  console.log(
    "You have " +
      days +
      " days, " +
      weeks +
      " weeks, and " +
      years +
      " months left."
  );

  /*************Don't change the code below**********/
}
lifeInWeeks(56);
