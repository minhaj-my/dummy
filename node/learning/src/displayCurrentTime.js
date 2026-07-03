function displayTime() {
  var today = new Date();
  var day = today.getDay();

  var daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();

  var prepand = hour >= 12 ? " PM " : " AM ";
  hour = hour >= 12 ? hour - 12 : hour;

  console.clear();
  console.log("Today is: " + daylist[day] + ".");
  console.log(
    "Current Time : " +
      hour +
      prepand +
      " : " +
      minute +
      " minutes : " +
      "  " +
      second +
      " seconds",
  );
}

setInterval(displayTime, 1000);
