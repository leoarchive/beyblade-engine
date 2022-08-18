import { resize } from "./canvas.js";

let route = {
  x: 0,
  y: 0,
  moves: 0,
  leave_click: false,
  pos: [],
};

export function init_route(ctx, moves_available) {
  route.moves = moves_available;

  window.addEventListener("resize", resize(ctx));
  document.addEventListener("mousemove", (e) => draw(e, ctx));
  document.addEventListener("mousedown", (e) => setPosition(e));
  document.addEventListener("mouseup", (e) => (route.leave_click = true));
  // document.addEventListener("mouseenter", (e) => setPosition(e));

  return route;
}

function setPosition(e) {
  if (--route.moves <= 0 || route.leave_click) return;
  document.getElementById('steps').innerText = route.moves

  route.x = e.clientX;
  route.y = e.clientY;

  route.pos.push({ x: e.clientX, y: e.clientY });
}

function draw(e, ctx) {
  if (e.buttons !== 1) return;

  ctx.beginPath();

  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.strokeStyle = "#5eeb34";

  ctx.moveTo(route.x, route.y);
  setPosition(e, route);
  ctx.lineTo(route.x, route.y);

  ctx.stroke();
}
