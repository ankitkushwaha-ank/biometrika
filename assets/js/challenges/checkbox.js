function initCheckbox() {
  const area = document.getElementById('challenge-area');
  area.innerHTML = `
    <div class="checkbox-container">
      <label style="display:flex;align-items:center;gap:1rem;cursor:pointer;">
        <input type="checkbox" id="human-check" style="width:24px;height:24px;cursor:pointer;">
        <span style="font-size:1.2rem;font-weight:500;">I'm a human</span>
      </label>
    </div>
  `;
  
  document.getElementById('challenge-controls').innerHTML = '';
  
  document.getElementById('human-check').addEventListener('change', (e) => {
    if (e.target.checked) {
      setTimeout(() => {
        showFeedback('success', '✓ Verification successful!');
      }, 300);
    }
  });
}
