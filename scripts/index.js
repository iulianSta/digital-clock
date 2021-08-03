// Any code you will write for your website (in the future!) should go here
// timeDisplay function
const timeDisplay = () => {
  // Select element
  let clock = document.querySelector("#myClockDisplay");
  // Variables
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = "AM";
  if (h == 0) h = 12;
  else if (h > 12) {
    h = h - 12;
    session = "PM";
  }
  h = h < 10 ? `0${h}` : h;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  let time = `${h}:${m}:${s} ${session}`;
  clock.innerHTML = time;
  setTimeout(timeDisplay, 1000);
};
timeDisplay();
