const endDate = new Date("8 sep, 2024 18:41:00").getTime();
const startDate = new Date().getTime();

let x = setInterval(function updataTimer() {
  const currentData = new Date().getTime();
  const distanceConvered = currentData - startDate;
  // time -> milli seconds;
  const distancePending = endDate - currentData;

  //calculate days, min hrs, secs
  //  1days = 24 * 60 * 60 * 60 * 1000 ms
  const oneDayInMillis = 24 * 60 * 60 * 1000;
  const oneHourInMillis = 60 * 60 * 1000;
  const oneMinInMillis = 60 * 1000;
  const oneSecInMillis = 1000;

  const days = Math.floor(distancePending / oneDayInMillis);

  const hrs = Math.floor(
    (distancePending % (24 * 60 * 60 * 1000)) / oneHourInMillis
  );

  const mins = Math.floor(
    (distancePending % (60 * 60 * 1000)) / oneMinInMillis
  );

  const secs = Math.floor((distancePending % (60 * 1000)) / oneSecInMillis);

  //populate in UI
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hrs;
  document.getElementById("minutes").innerHTML = mins;
  document.getElementById("seconds").innerHTML = secs;

  //calculate width percentage for progress bar
  const totalDistance = endDate - startDate;

  const percentageDistance = (distanceConvered / totalDistance) * 100;

  //set width for progress bar
  document.getElementById("progress-bar").style.width =
    percentageDistance + "%";

  if (distancePending < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
    document.getElementById("progress-bar").style.width = "100%";
  }
}, 1000);
