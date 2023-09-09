document.addEventListener("DOMContentLoaded", function() {
  // Get the current day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];

  // Get current UTC time (hours, minutes, seconds, and milliseconds)
    const currentUTCHours = currentDate.getUTCHours();
    const currentUTCMinutes = currentDate.getUTCMinutes();
    const currentUTCSeconds = currentDate.getUTCSeconds();
    const currentUTCMilliseconds = currentDate.getUTCMilliseconds();

  // Format minutes with leading zeros
    const UTCMinutes = currentUTCMinutes.toString().padStart(2, '0');

  // Display current day of the week
    const dayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    dayOfWeekElement.textContent = `Current Day of the week: ${currentDayOfWeek}`;

  // Display current UTC time with formatted minutes and milliseconds
    const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    utcTimeElement.textContent = `UTC Time: ${currentUTCHours}:${UTCMinutes}:${currentUTCSeconds}.${currentUTCMilliseconds}`;
});
    