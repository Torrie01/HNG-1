document.addEventListener("DOMContentLoaded", function() {
    // Get the current day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];

    // Get current UTC time (hours, minutes, and seconds)
    const currentUTCHours = currentDate.getUTCHours();
    const currentUTCMinutes = currentDate.getUTCMinutes();
    const currentUTCSeconds = currentDate.getUTCSeconds();

    // Display current day of the week and UTC time
    const dayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    dayOfWeekElement.textContent = `Current Day: ${currentDayOfWeek}`;

    const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    utcTimeElement.textContent = `Current UTC Time: ${currentUTCHours}:${currentUTCMinutes}:${currentUTCSeconds}`;
});
