function initImagePuzzle() {
  const area = document.getElementById('challenge-area');
  area.innerHTML = `
    <p style="margin-bottom:1.5rem;font-weight:500;">Drag the missing piece into place</p>
    <div class="puzzle-container" style="background:#f0f0f0;border-radius:12px;">
      <svg width="400" height="300" style="display:block;">
        <rect width="400" height="300" fill="#ddd"/>
        <rect width="320" height="240" x="40" y="30" fill="#999"/>
        <circle cx="80" cy="260" r="4" fill="#666"/>
        <text x="200" y="160" text-anchor="middle" fill="#666" font-size="18">Missing Piece Area</text>
      </svg>
      <div class="puzzle-piece" id="puzzle-piece" style="left:150px;top:200px;background:var(--red-primary);border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:600;">
        Piece
      </div>
    </div>
  `;
  
  document.getElementById('challenge-controls').innerHTML = `
    <button class="btn-red" onclick="verifyPuzzle()">Verify Position</button>
    <button class="btn-outline" onclick="initImagePuzzle()">Reset</button>
  `;
  
  const piece = document.getElementById('puzzle-piece');
  let isDragging = false;
  let offsetX, offsetY;
  
  piece.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - piece.offsetLeft;
    offsetY = e.clientY - piece.offsetTop;
  });
  
  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      piece.style.left = (e.clientX - offsetX) + 'px';
      piece.style.top = (e.clientY - offsetY) + 'px';
    }
  });
  
  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
}

function verifyPuzzle() {
  const piece = document.getElementById('puzzle-piece');
  const targetX = 160;
  const targetY = 110;
  const tolerance = 30;
  
  const currentX = parseInt(piece.style.left);
  const currentY = parseInt(piece.style.top);
  
  if (Math.abs(currentX - targetX) < tolerance && Math.abs(currentY - targetY) < tolerance) {
    showFeedback('success', '✓ Puzzle piece placed correctly!');
  } else {
    showFeedback('error', '✗ Not quite right. Try moving it closer to the center.');
  }
}
