var date =new Date();

const dayNames=['Saturday','Sunday','Monday','Tuesday','Wensday','thursday','Friday'];

document.querySelector('p').innerHTML=("Today is: "+dayNames[date.getDay()]);

if(date.getHours()>=12){
    console.log("current time is: "+(date.getHours()-12)+" PM: "+date.getMinutes()+" : "+date.getSeconds());
}else{
        console.log("current time is: "+(date.getHours()-12)+" AM: "+date.getMinutes()+" : "+date.getSeconds());

}