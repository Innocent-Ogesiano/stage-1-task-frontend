const d = new Date();
let day = d.getDay();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let today = days[day];
let hour = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
let milliseconds = d.getMilliseconds();

let time = `${hour}:${minutes}:${seconds}:${milliseconds}`;

console.log(`Today is: ${today}`);
console.log(`Current time is: ${time}`);
let currentDayElement = document.getElementById("currentDayOfTheWeek");
currentDayElement.innerHTML = today;

let cuurentUTCHour = d.getUTCHours();
let currentUTCMinutes = d.getUTCMinutes();
let currentUTCSeconds = d.getUTCSeconds();
let currentUTCMilliseconds = d.getUTCMilliseconds();

let utcTime = `${cuurentUTCHour}:${currentUTCMinutes}:${currentUTCSeconds}:${currentUTCMilliseconds}`;

console.log(`Current UTC time is: ${utcTime}`);

let currentUtcTimeElement = document.getElementById("currentUTCTime");
currentUtcTimeElement.innerHTML = utcTime;
