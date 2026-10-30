const categories = {
  fruits: ['🍎', '🍌', '🍇'],
  vehicles: ['🚗', '🚕', '✈️'],
  animals: ['🐶', '🐱', '🐘']
};

function initClassification() {
  const items = Object.entries(categories).flatMap(([cat, emojis]) => 
    emojis.map(emoji => ({emoji, category: cat}))
  ).sort(() => Math.random() - 0.5);
  
  const area = document.getElementById('challenge-area');
  area.innerHTML = `
    <p style="margin-bottom:1.5rem;font-weight:500;">Drag items into correct categories</p>
    <div style="display:flex;gap:1rem;margin-bottom:1.5rem;">
      ${items.map(item => `
        <div class="order-item" draggable="true" data-category="${item.category}" ondragstart="handleClassDragStart(event)">
          <span style="font-size:2.5rem;">${item.emoji}</span>
        </div>
      `).join('')}
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;">
      ${['fruits', 'vehicles', 'animals'].map(cat => `
        <div class="card" data-drop-category="${cat}" ondragover="handleClassDragOver(event)" ondrop="handleClassDrop(event)" style="min-height:120px;text-align:center;">
          <h4 style="text-transform:capitalize;margin-bottom:0.5rem;">${cat}</h4>
          <div class="drop-zone"></div>
        </div>
      `).join('')}
    </div>
  `;
  
  document.getElementById('challenge-controls').innerHTML = `
    <button class="btn-red" onclick="verifyClassification()">Verify Classification</button>
    <button class="btn-outline" onclick="initClassification()">Reset</button>
  `;
}

let draggedClassItem = null;

function handleClassDragStart(e) {
  draggedClassItem = e.target;
  e.dataTransfer.effectAllowed = 'move';
}

function handleClassDragOver(e) {
  e.preventDefault();
  return false;
}

function handleClassDrop(e) {
  e.stopPropagation();
  e.preventDefault();
  
  if (draggedClassItem && e.currentTarget.querySelector('.drop-zone')) {
    e.currentTarget.querySelector('.drop-zone').appendChild(draggedClassItem);
  }
  return false;
}

function verifyClassification() {
  let correct = true;
  document.querySelectorAll('[data-drop-category]').forEach(zone => {
    const category = zone.dataset.dropCategory;
    const items = zone.querySelectorAll('[data-category]');
    items.forEach(item => {
      if (item.dataset.category !== category) correct = false;
    });
  });
  
  if (correct) {
    showFeedback('success', '✓ All items correctly classified!');
  } else {
    showFeedback('error', '✗ Some items are in wrong categories.');
  }
}
