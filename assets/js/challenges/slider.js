function initSlider() {
  const area = document.getElementById('challenge-area');
  area.innerHTML = `
    <p style="margin-bottom:2rem;font-weight:500;">Slide to complete verification</p>
    <div class="slider-track" id="slider-track">
      <div class="slider-handle" id="slider-handle" style="left:0;">→</div>
    </div>
  `;
  
  document.getElementById('challenge-controls').innerHTML = `
    <button class="btn-outline" onclick="initSlider()">Reset</button>
  `;
  
  const track = document.getElementById('slider-track');
  const handle = document.getElementById('slider-handle');
  let isDragging = false;
  
  handle.addEventListener('mousedown', () => {
    isDragging = true;
  });
  
  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const trackRect = track.getBoundingClientRect();
      let newLeft = e.clientX - trackRect.left - 25;
      newLeft = Math.max(0, Math.min(newLeft, 250));
      handle.style.left = newLeft + 'px';
      
      if (newLeft >= 240) {
        isDragging = false;
        handle.style.background = '#28a745';
        setTimeout(() => {
          showFeedback('success', '✓ Slider verification complete!');
        }, 200);
      }
    }
  });
  
  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
}
