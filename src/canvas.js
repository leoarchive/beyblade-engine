export function init_canvas() {
  let canvas = document.createElement("canvas");
  document.body.appendChild(canvas);

  document.body.style.margin = 0;
  canvas.style.position = "fixed";

  let ctx = canvas.getContext("2d");

  resize(ctx);

  return { canvas, ctx };
}

export function resize(ctx) {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}
