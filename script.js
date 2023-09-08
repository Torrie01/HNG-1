// JavaScript to update current day of the week and UTC time

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDate = new Date();
const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
const utcTime = currentDate.toUTCString();

document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Current Day of the Week: ${dayOfWeek}`;
document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time: ${utcTime}`;
