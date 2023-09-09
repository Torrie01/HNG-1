document.addEventListener("DOMContentLoaded", function () {
    // Get the current day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
  
    // Get current UTC time (hours, minutes, and seconds)
    let currentUTCHours = currentDate.getUTCHours();
    currentUTCHours = currentUTCHours < 10 ? `0${currentUTCHours}` : currentUTCHours;
    let currentUTCMinutes = currentDate.getUTCMinutes();
    currentUTCMinutes = currentUTCMinutes < 10 ? `0${currentUTCMinutes}` : currentUTCMinutes;
    let currentUTCSeconds = currentDate.getUTCSeconds();
    currentUTCSeconds = currentUTCSeconds < 10 ? `0${currentUTCSeconds}` : currentUTCSeconds;
  
    // Display current day of the week and UTC time
    const dayOfWeekElement = document.querySelector(
      '[data-testid="currentDayOfTheWeek"]'
    );
  
    dayOfWeekElement.textContent = `${currentDayOfWeek}`;
  
    const utcTimeElement = document.querySelector(
      '[data-testid="currentUTCTime"]'
    );
    utcTimeElement.textContent = `${currentUTCHours}:${currentUTCMinutes}:${currentUTCSeconds}`;
  });