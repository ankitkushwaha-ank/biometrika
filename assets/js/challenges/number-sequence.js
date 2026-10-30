let numbers = [];
let clickedSequence = [];

function initNumberSequence() {
  numbers = Array.from({length: 12}, (_, i) => i + 1).sort(() => Math.random() - 0.5);
  clickedSequence = [];
  
  const area = document.getElementById('challenge-area');
  area.innerHTML = `
    <p style="margin-bottom:1.5rem;font-weight:500;">Click numbers in ascending order (1→12)</p>
    <div class="number-grid">
      ${numbers.map(num => `
        <button class="number-btn" data-number="${num}" onclick="clickNumber(${num}, this)">
          ${num}
        </button>
      `).join('')}
    </div>
  `;
  
  document.getElementById('challenge-controls').innerHTML = `
    <button class="btn-outline" onclick="initNumberSequence()">Reset</button>
  `;
}

function clickNumber(num, btn) {
  if (btn.classList.contains('clicked')) return;
  
  const expected = clickedSequence.length + 1;
  
  if (num === expected) {
    clickedSequence.push(num);
    btn.classList.add('clicked');
    
    if (clickedSequence.length === 12) {
      setTimeout(() => {
        showFeedback('success', '✓ Perfect sequence!');
      }, 200);
    }
  } else {
    showFeedback('error', '✗ Wrong number. Starting over...');
    setTimeout(() => {
      initNumberSequence();
    }, 1000);
  }
}
