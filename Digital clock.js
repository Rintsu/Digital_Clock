function digitalClock(){

  var currentTime = new Date();
  var currentHours = currentTime.getHours();
  var currentMinutes = currentTime.getMinutes();
  var currentSeconds = currentTime.getSeconds();

  currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
  currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

  var timeOfDay = (currentHours < 12) ? "AM" : "PM";
  currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
  currentHours = (currentHours === 0) ? 12 : currentHours;

  var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

  document.getElementById("myClock").innerText = currentTimeString;
  document.getElementById("myClock").textContent = currentTimeString;

  var seconds = 0;
  seconds++;
  setTimeout(digitalClock, 1000);
}
