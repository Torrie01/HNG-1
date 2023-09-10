// Get references to the elements by their data-testid attributes
const slackNameElement = document.querySelector('[data-testid="slackUserName"]');
const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

// Function to update the current day of the week
function updateCurrentDay() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDay = daysOfWeek[currentDate.getUTCDay()];
    currentDayElement.textContent = currentDay;
}

// Function to update the current UTC time with milliseconds
function updateCurrentUTCTime() {
    const currentDate = new Date();
    const utcMilliseconds = currentDate.getUTCMilliseconds();
    currentUTCTimeElement.textContent = utcMilliseconds.toString().padStart(3, '0');
}

// Call the functions to update the elements
updateCurrentDay();
updateCurrentUTCTime();

