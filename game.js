let circ = document.getElementById("circ");
let cs = circ.style;
let iterator = 0;
let timerId = null;
let circle = {
  x: 50,
  y: 50,
  color: "green",
  r: 40
};
let points = 0;
let time = 2000;
let flag = true;

const skip = event => {
  if (cs.fill === "red" && flag) {
    points += 1;
    flag = false;
  } else points -= 1;
};

const finish = () => {
  clearInterval(timerId);
  circ.removeEventListener("click", skip);
  console.log("Punkty " + points);
};

const render = () => {
  circle.x = Math.floor(
    Math.random() * (800 - 2 * (circle.r + 4)) + circle.r + 4
  );
  circle.y = Math.floor(
    Math.random() * (600 - 2 * (circle.r + 4)) + circle.r + 4
  );
  circle.color = "green";
  if (Math.floor(Math.random() > 0.5)) circle.color = "red";
  if (cs.fill === "red") iterator += 1;
  circle.r = Math.floor(Math.random() * 20 + 20);

  cs.cx = circle.x;
  cs.cy = circle.y;
  cs.fill = circle.color;
  cs.r = circle.r;
  flag = true;

  if (iterator === 2) finish();
};

const setUp = () => {
  circ.addEventListener("click", skip);
  timerId = setInterval(render, time);
};

setUp();
