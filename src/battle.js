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
    if (i === pos.length || i < 0) return;

    ctx.clearRect(0, 0, 2000, 2000);


    drawStar(pos[i].x, pos[i].y, 10, 30, 15, i * 1000);
  
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

function drawStar(cx, cy, spikes, outerRadius, innerRadius, radius) {
  let ctx = battle.ctx;
  let rot = Math.PI / 2 * 3;
  let x = cx;
  let y = cy;
  let step = Math.PI / spikes;

  ctx.strokeSyle = "#000";
  ctx.save();
  ctx.beginPath();
  ctx.translate(cx, cy);
  ctx.rotate(radius);
  ctx.translate(-cx, -cy);
  ctx.moveTo(cx, cy - outerRadius)
  for (let i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y)
    rot += step

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y)
    rot += step
  }
  ctx.lineTo(cx, cy - outerRadius)
  ctx.closePath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = 'red';
  ctx.stroke();
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.restore();
}
