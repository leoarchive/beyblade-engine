import { init_canvas } from "./canvas.js";
import { init_route } from "./route.js";
import { battle } from "./battle.js";

let bladewar = {
  canvas: null,
  ctx: null,
  route: {},
};

export function init_bladewar() {
  let { canvas, ctx } = init_canvas();

  bladewar.canvas = canvas;
  bladewar.ctx = ctx;
  bladewar.route = init_route(ctx, 100);

  battle.canvas = canvas;
  battle.ctx = ctx;
  battle.pos = bladewar.route.pos;
}
