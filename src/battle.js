export let battle = {
  canvas: null,
  ctx: null,
  pos: [],
};

export function init_battle() {
  let ctx = battle.ctx;
  let pos = battle.pos;
  let canvas = battle.canvas;
  let i = 0;

  window.requestAnimationFrame(draw);
  let ret = false;

  function draw() {
    if (i > pos.length || i < 0) return;

    ctx.clearRect(0, 0, 2000, 2000);
    ctx.beginPath();

    let x, y;

    if (i === pos.length) {
      x = canvas.width / 2;
      y = canvas.height / 2;
    } else {
      x = pos[i].x;
      y = pos[i].y;
    }
    ctx.arc(x, y, 50, 0, 2 * Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();

    // if (i > pos.length / 2) {
    //   ret = true;
    // } 
    
    if (ret) {
      i--;
    }
    else {
      i++;
    }
    window.requestAnimationFrame(draw);
  }
}
