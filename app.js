function bmiCalculator(weight, height) {
  //The first parameter should be the weight and the second should be the height.

  var bmi = weight /Math.pow(height ,2);

  return bmi;
}
 var bmi = bmiCalculator(65, 1.8);

console.log(Math.floor(bmi));