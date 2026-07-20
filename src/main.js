import './style.css';

// Subtle matrix/constellation background
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

let width, height, cols, rows;
const fontSize = 14;
const chars = '01';
const drops = [];

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  cols = Math.ceil(width / fontSize);
  rows = Math.ceil(height / fontSize);
  drops.length = 0;
  for (let i = 0; i < cols; i++) {
    drops[i] = Math.random() * rows;
  }
}

function draw() {
  ctx.fillStyle = 'rgba(10, 10, 10, 0.12)';
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = 'rgba(124, 104, 242, 0.35)';
  ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

  for (let i = 0; i < drops.length; i++) {
    const char = chars[Math.floor(Math.random() * chars.length)];
    const x = i * fontSize;
    const y = drops[i] * fontSize;
    ctx.fillText(char, x, y);

    if (y > height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i] += 0.35;
  }

  requestAnimationFrame(draw);
}

resize();
window.addEventListener('resize', resize);
draw();


