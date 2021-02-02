function bmiCalculator(weight, height) {
  var bmi = weight / (height * height);
  var interpretation = Math.random(bmi) * 60;
  interpretation=Math.floor(interpretation+1);
  if (interpretation < 18.5) {
    console.log("your BMI is, " +Math.floor( interpretation)+ " so you ara underweight");
  } 
  if( interpretation >=18.6 && interpretation <= 24.9){
      console.log("your BMI is "+ Math.floor( interpretation)+"so you have a normal weih")
  }
if (interpretation > 24.9) {
  console.log("your BMI is, " + interpretation + " so you ara overwieght");
} 
  return interpretation;
}
bmiCalculator(10,20);