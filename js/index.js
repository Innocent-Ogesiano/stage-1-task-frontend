// Calling showTime function at every second
setInterval(showTime, 1000);

// Defining showTime funcion
function showTime() {
	// Getting current time and date
	let d = new Date();

    let day = d.getDay();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let today = days[day];
    let currentDayElement = document.getElementById("currentDayOfTheWeek");
    currentDayElement.innerHTML = today;

    let cuurentUTCHour = d.getUTCHours();
    let currentUTCMinutes = d.getUTCMinutes();
    let currentUTCSeconds = d.getUTCSeconds();
    let currentUTCMilliseconds = d.getUTCMilliseconds();

	cuurentUTCHour = cuurentUTCHour < 10 ? "0" + cuurentUTCHour : cuurentUTCHour;
	currentUTCMinutes = currentUTCMinutes < 10 ? "0" + currentUTCMinutes : currentUTCMinutes;
	currentUTCSeconds = currentUTCSeconds < 10 ? "0" + currentUTCSeconds : currentUTCSeconds;
    currentUTCMilliseconds = currentUTCMilliseconds < 10 ? "0" + currentUTCMilliseconds : currentUTCMilliseconds;

    let utcTime = `${cuurentUTCHour}:${currentUTCMinutes}:${currentUTCSeconds}:${currentUTCMilliseconds}`;

	// Displaying the time
	document.getElementById(
		"currentUTCTime"
	).innerHTML = utcTime;
}

showTime();

