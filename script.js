const garden = document.getElementById("rose-garden");
const bouquetLayout = [
  { x: 0, y: -88, scale: 0.93, turn: 0 },
  { x: -64, y: -72, scale: 0.9, turn: -15 },
  { x: 64, y: -72, scale: 0.9, turn: 15 },
  { x: -36, y: -86, scale: 0.92, turn: -8 },
  { x: 36, y: -86, scale: 0.92, turn: 8 },
  { x: -102, y: -48, scale: 0.88, turn: -25 },
  { x: 102, y: -48, scale: 0.88, turn: 25 },
  { x: -58, y: -56, scale: 0.91, turn: -12 },
  { x: 58, y: -56, scale: 0.91, turn: 12 },
  { x: -18, y: -64, scale: 0.95, turn: -3 },
  { x: 18, y: -64, scale: 0.95, turn: 3 },
  { x: -132, y: 0, scale: 0.94, turn: -28 },
  { x: 132, y: 0, scale: 0.94, turn: 28 },
  { x: -82, y: -12, scale: 0.96, turn: -18 },
  { x: 82, y: -12, scale: 0.96, turn: 18 },
  { x: -28, y: -24, scale: 1.01, turn: -5 },
  { x: 28, y: -24, scale: 1.01, turn: 5 },
  { x: -108, y: 42, scale: 1.02, turn: -24 },
  { x: 108, y: 42, scale: 1.02, turn: 24 },
  { x: -50, y: 28, scale: 1.04, turn: -12 }
];

for (let i = 0; i < bouquetLayout.length; i += 1) {
  const rose = document.createElement("article");
  const spot = bouquetLayout[i];
  const extraTurn = Math.sin(i * 1.7) * 0.8;
  const extraScale = 0.99 + (i % 3) * 0.01;

  rose.className = "rose";
  rose.style.setProperty("--x", `${spot.x}px`);
  rose.style.setProperty("--y", `${spot.y}px`);
  rose.style.setProperty("--scale", String(spot.scale * extraScale));
  rose.style.setProperty("--turn", `${spot.turn + extraTurn}deg`);
  rose.style.setProperty("--delay", `${(i % 6) * 0.28}s`);
  rose.style.zIndex = String(300 + Math.round(spot.y));

  const isSunflower = i % 3 === 0;
  const stemAndLeaves = `
    <div class="stem" aria-hidden="true"></div>
    <span class="leaf left" aria-hidden="true"></span>
    <span class="leaf right" aria-hidden="true"></span>
  `;

  if (isSunflower) {
    rose.classList.add("sunflower");
    const petals = Array.from({ length: 24 }, (_, p) =>
      `<span class="sp" style="--a:${p * 15}deg"></span>`
    ).join("");
    rose.innerHTML = `<span class="sunhead">${petals}<span class="sun-core"></span></span>${stemAndLeaves}`;
  } else {
    rose.innerHTML = `
      <span class="petal"></span>
      <span class="petal"></span>
      <span class="petal"></span>
      <span class="petal"></span>
      <span class="center"></span>
      ${stemAndLeaves}
    `;
  }

  garden.appendChild(rose);
}
