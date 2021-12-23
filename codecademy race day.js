let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegister = true;
let runnerAge = 19;
if (runnerAge > 18 && earlyRegister === true) {
  raceNumber += 1000;
}
if (runnerAge > 18 && earlyRegister === true) {
  console.log(`Early entry adults will race at 9:30 am. Your number is ${raceNumber}.`);
} 
else if(!earlyRegister && runnerAge > 18){
  console.log(`Late entry adults will race at 11:00 am. Your number is ${raceNumber}.`);
} 
else if(runnerAge < 18 ) {
  console.log(`Youth entry racers will run at 12:30 pm. Your number is ${raceNumber}.`);
} 
else {
  console.log(`Please visit the registration desk to ensure your proper runner category`);
}