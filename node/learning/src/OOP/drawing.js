function draw() {
  let canvas = document.getElementById("circle");
  if (canvas.getContext) {
    let ctx = canvas.getContext("2d");
    let X = canvas.width / 2;
    let Y = canvas.height / 2;
    let R = 45;
    ctx.beginPath();
    ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#FF0000";
    ctx.stroke();
  }
}
window.draw = draw;
