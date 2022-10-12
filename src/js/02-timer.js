import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
startBtn = document.querySelector('button[data-start]');

const datetimeInput = document.getElementById('datetime-picker');

//datetimeInput.addEventListener('input', flatpickr);
const todaysDate = new Date();
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
    console.log(selectedDates[0]);
    if (selectedDates[0] < todaysDate) {
      window.alert('Please choose a date in the future');
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
      const ms = selectedDates[0] - todaysDate;
      convertMs(ms);
      //console.log(convertMs(ms));
      const timeLeft = convertMs(ms);
      console.log(timeLeft);
      console.log(timeLeft.days);
    }
  },
});

//startBtn.addEventListener('click', () => {
//const ms = datetimeInput.value - todaysDate;
//console.log(ms);

//setInterval(() => {

function convertMs(ms) {
  console.log(ms);
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
