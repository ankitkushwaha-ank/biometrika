function initImageSelection() {
  const images = Array(9).fill(0).map((_, i) => ({
    id: i,
    isVehicle: i % 3 === 0
  }));
  
  const area = document.getElementById('challenge-area');
  area.innerHTML = `
    <p style="margin-bottom:1.5rem;font-weight:500;">Select all squares with <strong>vehicles</strong></p>
    <div class="image-grid">
      ${images.map(img => `
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Crect fill='%23${img.isVehicle ? 'e0e0e0' : 'f5f5f5'}' width='120' height='120'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23666' font-size='14' font-family='sans-serif'%3E${img.isVehicle ? '🚗' : '🌳'}%3C/text%3E%3C/svg%3E" 
             data-id="${img.id}" 
             data-vehicle="${img.isVehicle}"
             onclick="toggleImageSelection(this)">
      `).join('')}
    </div>
  `;
  
  document.getElementById('challenge-controls').innerHTML = `
    <button class="btn-red" onclick="verifyImageSelection()">Verify Selection</button>
    <button class="btn-outline" onclick="initImageSelection()">Reset</button>
  `;
}

function toggleImageSelection(img) {
  img.classList.toggle('selected');
}

function verifyImageSelection() {
  const selected = Array.from(document.querySelectorAll('.image-grid img.selected'));
  const correct = selected.every(img => img.dataset.vehicle === 'true');
  const allVehicles = document.querySelectorAll('.image-grid img[data-vehicle="true"]').length;
  const selectedVehicles = selected.filter(img => img.dataset.vehicle === 'true').length;
  
  if (correct && selectedVehicles === allVehicles) {
    showFeedback('success', '✓ Correct selection!');
  } else {
    showFeedback('error', '✗ Incorrect selection. Try again.');
  }
}
