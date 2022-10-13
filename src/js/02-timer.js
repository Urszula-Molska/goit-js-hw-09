import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
startBtn = document.querySelector('button[data-start]');

const datetimeInput = document.getElementById('datetime-picker');

const todayDate = new Date();
const todayMs = todayDate.getTime();

const daysLeft = document.querySelector('span[data-days]');
const hoursLeft = document.querySelector('span[data-hours]');
const minutesLeft = document.querySelector('span[data-minutes]');
const secondsLeft = document.querySelector('span[data-seconds]');

const flatpickr = flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < todayDate) {
      window.alert('Please choose a date in the future');
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
});

inputMs = flatpickr.selectedDates[0].getTime();
console.log(inputMs);

startBtn.addEventListener('click', () => {
  setInterval(() => {
    const ms = inputMs - todayMs;
    console.log(ms);
    convertMs(ms);
    const timeLeft = convertMs(ms);
    console.log(timeLeft);
    daysLeft.innerHTML = timeLeft.days;
    hoursLeft.innerHTML = timeLeft.hours;
    minutesLeft.innerHTML = timeLeft.minutes;
    secondsLeft.innerHTML = timeLeft.seconds;
  }, 1000);
});

function convertMs(ms) {
  //console.log(ms);
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  //daysLeft = days;
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
