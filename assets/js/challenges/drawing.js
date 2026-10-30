let isDrawing = false;
let drawingPoints = [];

function initDrawing() {
  const area = document.getElementById('challenge-area');
  area.innerHTML = `
    <p style="margin-bottom:1.5rem;font-weight:500;">Draw a circle</p>
    <canvas class="drawing-canvas" id="drawing-canvas" width="400" height="300"></canvas>
  `;
  
  document.getElementById('challenge-controls').innerHTML = `
    <button class="btn-red" onclick="verifyDrawing()">Verify Drawing</button>
    <button class="btn-outline" onclick="clearDrawing()">Clear</button>
  `;
  
  const canvas = document.getElementById('drawing-canvas');
  const ctx = canvas.getContext('2d');
  
  ctx.lineWidth = 3;
  ctx.lineCap = 'round';
  ctx.strokeStyle = 'var(--red-primary)';
  
  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    const rect = canvas.getBoundingClientRect();
    drawingPoints = [{x: e.clientX - rect.left, y: e.clientY - rect.top}];
  });
  
  canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      ctx.beginPath();
      ctx.moveTo(drawingPoints[drawingPoints.length - 1].x, drawingPoints[drawingPoints.length - 1].y);
      ctx.lineTo(x, y);
      ctx.stroke();
      
      drawingPoints.push({x, y});
    }
  });
  
  canvas.addEventListener('mouseup', () => {
    isDrawing = false;
  });
}

function clearDrawing() {
  const canvas = document.getElementById('drawing-canvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawingPoints = [];
}

function verifyDrawing() {
  if (drawingPoints.length > 50) {
    showFeedback('success', '✓ Shape drawn successfully!');
  } else {
    showFeedback('error', '✗ Draw a complete shape to verify.');
  }
}
