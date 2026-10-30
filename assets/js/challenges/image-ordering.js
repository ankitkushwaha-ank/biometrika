let orderItems = [];

function initImageOrdering() {
  const correctOrder = ['🌱', '🌿', '🌳', '🌲'];
  orderItems = [...correctOrder].sort(() => Math.random() - 0.5);
  
  const area = document.getElementById('challenge-area');
  area.innerHTML = `
    <p style="margin-bottom:1.5rem;font-weight:500;">Arrange the plant growth sequence from seed to tree</p>
    <div class="image-order" id="order-container">
      ${orderItems.map((emoji, i) => `
        <div class="order-item" draggable="true" data-emoji="${emoji}" data-index="${i}" 
             ondragstart="handleOrderDragStart(event)" 
             ondragover="handleOrderDragOver(event)"
             ondrop="handleOrderDrop(event)">
          <span style="font-size:3rem;">${emoji}</span>
        </div>
      `).join('')}
    </div>
  `;
  
  document.getElementById('challenge-controls').innerHTML = `
    <button class="btn-red" onclick="verifyOrder()">Verify Order</button>
    <button class="btn-outline" onclick="initImageOrdering()">Reset</button>
  `;
}

let draggedElement = null;

function handleOrderDragStart(e) {
  draggedElement = e.target;
  e.dataTransfer.effectAllowed = 'move';
}

function handleOrderDragOver(e) {
  e.preventDefault();
  return false;
}

function handleOrderDrop(e) {
  e.stopPropagation();
  if (draggedElement !== e.currentTarget) {
    const draggedHTML = draggedElement.innerHTML;
    draggedElement.innerHTML = e.currentTarget.innerHTML;
    e.currentTarget.innerHTML = draggedHTML;
  }
  return false;
}

function verifyOrder() {
  const currentOrder = Array.from(document.querySelectorAll('.order-item span')).map(s => s.textContent);
  const correctOrder = ['🌱', '🌿', '🌳', '🌲'];
  
  if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder)) {
    showFeedback('success', '✓ Correct sequence!');
  } else {
    showFeedback('error', '✗ Incorrect sequence. Try again.');
  }
}
