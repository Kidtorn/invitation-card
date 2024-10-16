const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiPieces = Array.from({ length: 100 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  size: Math.random() * 5 + 2,
  dx: Math.random() * 2 - 1,
  dy: Math.random() * 2 + 1,
  color: `hsl(${Math.random() * 360}, 100%, 50%)`
}));

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confettiPieces.forEach(piece => {
    ctx.fillStyle = piece.color;
    ctx.fillRect(piece.x, piece.y, piece.size, piece.size);
    piece.x += piece.dx;
    piece.y += piece.dy;

    if (piece.y > canvas.height) piece.y = 0;
    if (piece.x > canvas.width) piece.x = 0;
  });
  requestAnimationFrame(drawConfetti);
}

drawConfetti();
