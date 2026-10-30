let holdProgress = 0;
let holdInterval = null;
let holdAnimationFrame = null;

function initHoldToVerify() {
  holdProgress = 0;
  
  const area = document.getElementById('challenge-area');
  area.innerHTML = `
    <p style="margin-bottom:2rem;font-weight:500;color:var(--text-secondary);">Press and hold for 3 seconds to verify</p>
    <div class="hold-button" id="hold-button" onmousedown="startHold()" onmouseup="stopHold()" ontouchstart="startHold(event)" ontouchend="stopHold()">
      <svg class="hold-progress-ring" width="220" height="220">
        <circle class="hold-progress-bg" cx="110" cy="110" r="100" />
        <circle class="hold-progress-fill" id="hold-progress-circle" cx="110" cy="110" r="100" />
      </svg>
      <div class="hold-fingerprint" id="hold-fingerprint">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="round">
          <path d="M12 11c2.21 0 4 1.79 4 4v5"></path>
          <path d="M8 15v5"></path>
          <path d="M12 15v5"></path>
          <path d="M16 15v2"></path>
          <path d="M20 18v1"></path>
          <path d="M4 18v1"></path>
          <ellipse cx="12" cy="12" rx="8" ry="9"></ellipse>
          <ellipse cx="12" cy="12" rx="6" ry="7"></ellipse>
          <ellipse cx="12" cy="12" rx="4" ry="5"></ellipse>
          <ellipse cx="12" cy="12" rx="2" ry="3"></ellipse>
        </svg>
      </div>
      <span class="hold-text" id="hold-text">Press to Start</span>
    </div>
  `;
  
  document.getElementById('challenge-controls').innerHTML = '';
  
  const circle = document.getElementById('hold-progress-circle');
  const circumference = 2 * Math.PI * 100;
  circle.style.strokeDasharray = circumference;
  circle.style.strokeDashoffset = circumference;
}

function startHold(e) {
  if (e) e.preventDefault();
  holdProgress = 0;
  const button = document.getElementById('hold-button');
  const text = document.getElementById('hold-text');
  const fingerprint = document.getElementById('hold-fingerprint');
  const circle = document.getElementById('hold-progress-circle');
  const circumference = 2 * Math.PI * 100;
  
  button.classList.add('holding');
  fingerprint.classList.add('scanning');
  text.textContent = 'Hold...';
  
  const startTime = Date.now();
  const duration = 3000;
  
  function animate() {
    const elapsed = Date.now() - startTime;
    holdProgress = Math.min((elapsed / duration) * 100, 100);
    
    const offset = circumference - (holdProgress / 100) * circumference;
    circle.style.strokeDashoffset = offset;
    
    if (holdProgress >= 100) {
      completeHold();
      return;
    }
    
    holdAnimationFrame = requestAnimationFrame(animate);
  }
  
  holdAnimationFrame = requestAnimationFrame(animate);
}

function stopHold() {
  if (holdAnimationFrame) {
    cancelAnimationFrame(holdAnimationFrame);
    holdAnimationFrame = null;
  }
  
  const button = document.getElementById('hold-button');
  const text = document.getElementById('hold-text');
  const fingerprint = document.getElementById('hold-fingerprint');
  
  if (holdProgress < 100) {
    button.classList.remove('holding');
    fingerprint.classList.remove('scanning');
    text.textContent = 'Released Too Early';
    
    setTimeout(() => {
      initHoldToVerify();
    }, 1500);
  }
}

function completeHold() {
  const button = document.getElementById('hold-button');
  const text = document.getElementById('hold-text');
  const fingerprint = document.getElementById('hold-fingerprint');
  
  button.classList.remove('holding');
  button.classList.add('verified');
  fingerprint.classList.remove('scanning');
  fingerprint.classList.add('unlocked');
  text.textContent = 'Verified!';
  
  showFeedback('success', 'Biometric verification complete');
}
