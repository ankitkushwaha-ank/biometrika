let currentRotation = 0;

function initRotation() {
  currentRotation = Math.floor(Math.random() * 360);
  
  const area = document.getElementById('challenge-area');
  area.innerHTML = `
    <p style="margin-bottom:1.5rem;font-weight:500;">Rotate the image to upright position</p>
    <div style="margin-bottom:2rem;">
      <div id="rotatable-image" style="width:200px;height:200px;background:#ddd;border-radius:12px;display:flex;align-items:center;justify-content:center;transform:rotate(${currentRotation}deg);transition:transform 0.3s;">
        <span style="font-size:4rem;">🎯</span>
      </div>
    </div>
    <input type="range" id="rotation-slider" min="0" max="360" value="${currentRotation}" style="width:300px;" oninput="updateRotation(this.value)">
    <p style="margin-top:0.5rem;color:var(--charcoal);">Rotation: <span id="rotation-value">${currentRotation}</span>°</p>
  `;
  
  document.getElementById('challenge-controls').innerHTML = `
    <button class="btn-red" onclick="verifyRotation()">Verify Rotation</button>
    <button class="btn-outline" onclick="initRotation()">Reset</button>
  `;
}

function updateRotation(value) {
  currentRotation = parseInt(value);
  document.getElementById('rotatable-image').style.transform = `rotate(${currentRotation}deg)`;
  document.getElementById('rotation-value').textContent = currentRotation;
}

function verifyRotation() {
  const normalized = currentRotation % 360;
  if (normalized < 10 || normalized > 350) {
    showFeedback('success', '✓ Image is upright!');
  } else {
    showFeedback('error', '✗ Not quite upright. Keep rotating.');
  }
}
