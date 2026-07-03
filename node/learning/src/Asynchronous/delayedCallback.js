function invokeAfterDelay(callback) {
  setTimeout(callback, 2000);
}
function display_message() {
  console.log("Hello!");
}

invokeAfterDelay(display_message);
