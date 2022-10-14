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

let inputMs;

const flatpickr = flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    inputMs = selectedDates[0].getTime();
    if (inputMs <= todayMs) {
      window.alert('Please choose a date in the future');
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
});

startBtn.addEventListener('click', () => {
  setInterval(() => {
    const nowDate = new Date().getTime();
    let ms = inputMs - nowDate;
    convertMs(ms);
    const timeLeft = convertMs(ms);
    console.log(timeLeft);
    //const counterDays = timeLeft.days;
    daysLeft.innerHTML = addLeadingZero(timeLeft.days);
    hoursLeft.innerHTML = addLeadingZero(timeLeft.hours);
    minutesLeft.innerHTML = addLeadingZero(timeLeft.minutes);
    secondsLeft.innerHTML = addLeadingZero(timeLeft.seconds);
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

function addLeadingZero(value) {
  if (value.toString().length < 2) {
    return value.toString().padStart(2, '0');
  } else return value;
}

/*daysLeft.innerHTML = timeLeft.days.padStart(2, '0');
hoursLeft.innerHTML = timeLeft.hours.padStart(2, '0');
minutesLeft.innerHTML = timeLeft.minutes.padStart(2, '0');
secondsLeft.innerHTML = timeLeft.seconds.padStart(2, '0');*/
