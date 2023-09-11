  function updateDayOfWeekAndUTCTime() {
    const dayOfWeekElement = document.getElementById("currentDayOfTheWeek");
    const utcTimeElement = document.getElementById("currentUTCTime");

    const currentDayOfWeek = new Date().getUTCDay();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeekString = daysOfWeek[currentDayOfWeek];

    const currentUTCTimeInMillis = new Date().getTime();

    dayOfWeekElement.innerHTML = dayOfWeekString;
    utcTimeElement.innerHTML = currentUTCTimeInMillis;
}


updateDayOfWeekAndUTCTime(); 


setInterval(updateDayOfWeekAndUTCTime, 1000);

