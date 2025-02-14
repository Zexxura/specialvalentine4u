// const yearsEl = document.getElementById('years');
// const monthsEl = document.getElementById('months');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const startDate = new Date('2024-06-30'); // Tanggal mulai

function timeSince() {
  const currentDate = new Date();

  const totalSeconds = (currentDate - startDate) / 1000;
//   const years = Math.floor(totalSeconds / (365 * 24 * 60 * 60));
//   const months = Math.floor(totalSeconds / (30 * 24 * 60 * 60));
  const days = Math.floor(totalSeconds / (24 * 60 * 60));
  const hours = Math.floor(totalSeconds / (60 * 60)) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

//   yearsEl.innerHTML = formatTime(years);
//   monthsEl.innerHTML = formatTime(months);
  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minutesEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Initial update
timeSince();
setInterval(timeSince, 1000); // Update every second

setTimeout(function() {
    document.getElementById("container").style.opacity = 1;
  }, 500); // Tunda selama 2 detik

  setTimeout(function() {
    document.getElementById("button").style.opacity = 1;
  }, 500); // Tunda selama 2 detik