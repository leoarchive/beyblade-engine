import { init_canvas } from "./canvas.js";
import { init_route } from "./route.js";

export function init_bladewar() {
  let { canvas, ctx } = init_canvas();

  init_route(ctx, 100);
}
