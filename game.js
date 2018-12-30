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
cs.cx = Math.random() * (1000 - 2 * circle.r) + circle.r;
cs.cy = Math.random() * (600 - 2 * circle.r) + circle.r;
cs.r = Math.floor(Math.random() * 30 + 10);
let points = 0;
let time = 2000;
let flag = true;

const skip = event => {
  if (cs.fill === "red" && flag) {
    points += 1;
    flag = false;
  } else points -= 1;
  cs.r = 0;
};

const finish = () => {
  clearInterval(timerId);
  cs.r = 0;
  circ.removeEventListener("click", skip);
  document.getElementById("points").innerHTML =
    "Gra skonczona, punkty: " + points + "/" + iterator;
  document.getElementById("restart").innerHTML = "Restart?";
  document.getElementById("restart").addEventListener("click", setUp);
};

const render = () => {
  circle.x = Math.floor(Math.random() * (1000 - 2 * circle.r) + circle.r);
  circle.y = Math.floor(Math.random() * (600 - 2 * circle.r) + circle.r);
  circle.color = "green";
  if (Math.random() > 0.5) circle.color = "red";
  if (cs.fill === "red") iterator += 1;
  circle.r = Math.floor(Math.random() * 30 + 10);

  cs.cx = circle.x;
  cs.cy = circle.y;
  cs.fill = circle.color;
  cs.r = circle.r;
  flag = true;

  if (iterator === 5) finish();
};

const setUp = () => {
  document.getElementById("points").innerHTML = "";
  document.getElementById("restart").innerHTML = "";
  iterator = 0;
  timerId = null;
  points = 0;
  time = 2000;
  flag = true;
  circ.addEventListener("click", skip);
  timerId = setInterval(render, time);
};

setUp();
