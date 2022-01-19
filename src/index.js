const clockTitle = document.querySelector(".js-clock");

const DAY = 1000 * 60 * 60 * 24;
const HOUR = 1000 * 60 * 60;
const MINUTES = 1000 * 60;
const SECOND = 1000;

const christmas = new Date("2022-12-25T00:00:00+0900");

function getDday() {
  const today = new Date();
  const distance = christmas.getTime() - today.getTime();
  const day = String(Math.floor(distance / DAY)).padStart(2, "0");
  const hours = String(Math.floor((distance % DAY) / HOUR)).padStart(2, "0");
  const minutes = String(Math.floor((distance % HOUR) / MINUTES)).padStart(
    2,
    "0"
  );
  const seconds = String(Math.floor((distance % MINUTES) / SECOND)).padStart(
    2,
    "0"
  );

  clockTitle.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

getDday();
setInterval(getDday, 1000);
