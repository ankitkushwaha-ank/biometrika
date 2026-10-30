// Playground - All challenges accessible anytime
const challenges = {
  1: {
    type: 'Interaction',
    how: 'Tests human-like click behavior. Bots click at exact pixel coordinates with zero hesitation.'
  },
  2: {
    type: 'Visual Recognition',
    how: 'Analyzes perception of spatial orientation. Humans naturally recognize correct image orientation.'
  },
  3: {
    type: 'Puzzle Solving',
    how: 'Measures problem-solving and hand-eye coordination through slider movement patterns.'
  },
  4: {
    type: 'Sequence Recognition',
    how: 'Tests temporal reasoning through drag interactions revealing natural movement patterns.'
  },
  5: {
    type: 'Motor Skills',
    how: 'Analyzes fine motor control through drawing stroke pressure, speed, and curve smoothness.'
  },
  6: {
    type: 'Sustained Interaction',
    how: 'Measures continuous interaction through pressure consistency and natural tremor patterns.'
  }
};

function loadChallenge(num) {
  document.getElementById('step').textContent = num;
  document.getElementById('type').textContent = challenges[num].type;
  document.getElementById('how').textContent = challenges[num].how;
  
  const zone = document.getElementById('challenge');
  
  if (num === 1) {
    zone.innerHTML = `
      <h2 style="font-size: 1.6rem; font-weight: 600; margin-bottom: 0.5rem;">Click to verify</h2>
      <p style="color: #666; font-size: 0.95rem; margin-bottom: 2rem;">Click the box below to verify you're human</p>
      <div style="min-height: 250px; display: flex; align-items: center; justify-content: center;">
        <div id="box" onclick="verify()" style="width: 140px; height: 140px; border: 2px solid #E0E0E0; border-radius: 10px; background: linear-gradient(135deg, #FAFAFA 0%, #FFFFFF 100%); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.25s;">
          <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
          </svg>
        </div>
      </div>
      <button style="width: 100%; background: #D0D0D0; color: #888; padding: 0.95rem; border-radius: 8px; font-weight: 600; border: none; margin-top: 2rem; font-size: 0.95rem;">Next →</button>
    `;
  } else if (num === 2) {
    zone.innerHTML = `
      <h2 style="font-size: 1.6rem; font-weight: 600; margin-bottom: 0.5rem;">Rotate the image</h2>
      <p style="color: #666; font-size: 0.95rem; margin-bottom: 2rem;">Rotate the image to make it upright</p>
      <div style="min-height: 300px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <img id="img" src="../assets/playground/biometrica_captcha_assets/rotation_india_gate.png" style="width: 260px; height: 260px; object-fit: cover; border-radius: 12px; margin-bottom: 1.5rem; box-shadow: 0 4px 16px rgba(0,0,0,0.1); transform: rotate(45deg);">
        <input type="range" id="slider" min="0" max="360" value="45" style="width: 100%; max-width: 400px; height: 6px; background: linear-gradient(90deg, #FFE0E0 0%, var(--red-accent) 50%, #FFE0E0 100%); border-radius: 3px; outline: none; -webkit-appearance: none;">
        <div style="margin-top: 1rem; font-weight: 700; font-size: 1.1rem; color: var(--red-accent);"><span id="angle">45</span>°</div>
      </div>
      <button style="width: 100%; background: var(--red-accent); color: #fff; padding: 0.95rem; border-radius: 8px; font-weight: 600; border: none; margin-top: 2rem; font-size: 0.95rem; cursor: pointer;">Next →</button>
    `;
    const s = document.getElementById('slider');
    const i = document.getElementById('img');
    const a = document.getElementById('angle');
    s.addEventListener('input', () => {
      i.style.transform = 'rotate(' + s.value + 'deg)';
      a.textContent = s.value;
    });
  } else if (num === 3) {
    zone.innerHTML = `
      <h2 style="font-size: 1.6rem; font-weight: 600; margin-bottom: 0.5rem;">Slide to complete puzzle</h2>
      <p style="color: #666; font-size: 0.95rem; margin-bottom: 2rem;">Move the slider to fit the missing piece</p>
      <div style="min-height: 300px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <div style="position: relative; width: 100%; max-width: 500px; border-radius: 12px; overflow: hidden; margin-bottom: 1.5rem;">
          <img src="../assets/playground/biometrica_captcha_assets/slider_tropical_cove.png" style="width: 100%; display: block;">
          <div id="piece" style="position: absolute; width: 80px; height: 80px; top: 50%; transform: translateY(-50%); left: 0; background-size: 500px; background-position: center; border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.3); background-image: url('../assets/playground/biometrica_captcha_assets/slider_tropical_cove.png');"></div>
        </div>
        <div style="width: 100%; max-width: 500px; background: #F8F8F8; padding: 1.25rem; border-radius: 10px;">
          <input type="range" id="pslider" min="0" max="100" value="0" style="width: 100%; height: 8px; background: linear-gradient(90deg, #FF6B6B 0%, var(--red-accent) 100%); border-radius: 4px; outline: none; -webkit-appearance: none;">
        </div>
      </div>
      <button style="width: 100%; background: var(--red-accent); color: #fff; padding: 0.95rem; border-radius: 8px; font-weight: 600; border: none; margin-top: 2rem; font-size: 0.95rem; cursor: pointer;">Next →</button>
    `;
    const ps = document.getElementById('pslider');
    const pc = document.getElementById('piece');
    ps.addEventListener('input', () => {
      const w = 500 - 80;
      pc.style.left = (ps.value / 100 * w) + 'px';
    });
  } else if (num === 4) {
    zone.innerHTML = `
      <h2 style="font-size: 1.6rem; font-weight: 600; margin-bottom: 0.5rem;">Arrange images in order</h2>
      <p style="color: #666; font-size: 0.95rem; margin-bottom: 2rem;">Drag images to arrange from first to last</p>
      <div style="min-height: 300px; display: flex; align-items: center; justify-content: center;">
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; width: 100%; max-width: 550px;">
          <div draggable="true" style="position: relative; cursor: grab; border: 3px solid transparent; border-radius: 10px;">
            <img src="../assets/playground/biometrica_captcha_assets/sequence_taj_mahal_panorama_frame_1.png" style="width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 8px;">
            <div style="position: absolute; bottom: 8px; right: 8px; width: 32px; height: 32px; background: #111; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700;">1</div>
          </div>
          <div draggable="true" style="position: relative; cursor: grab; border: 3px solid transparent; border-radius: 10px;">
            <img src="../assets/playground/biometrica_captcha_assets/sequence_taj_mahal_panorama_frame_2.png" style="width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 8px;">
            <div style="position: absolute; bottom: 8px; right: 8px; width: 32px; height: 32px; background: #111; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700;">2</div>
          </div>
          <div draggable="true" style="position: relative; cursor: grab; border: 3px solid transparent; border-radius: 10px;">
            <img src="../assets/playground/biometrica_captcha_assets/sequence_taj_mahal_panorama_frame_3.png" style="width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 8px;">
            <div style="position: absolute; bottom: 8px; right: 8px; width: 32px; height: 32px; background: #111; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700;">3</div>
          </div>
          <div draggable="true" style="position: relative; cursor: grab; border: 3px solid transparent; border-radius: 10px;">
            <img src="../assets/playground/biometrica_captcha_assets/sequence_taj_mahal_panorama_frame_4.png" style="width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 8px;">
            <div style="position: absolute; bottom: 8px; right: 8px; width: 32px; height: 32px; background: #111; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700;">4</div>
          </div>
        </div>
      </div>
      <button style="width: 100%; background: var(--red-accent); color: #fff; padding: 0.95rem; border-radius: 8px; font-weight: 600; border: none; margin-top: 2rem; font-size: 0.95rem; cursor: pointer;">Next →</button>
    `;
  } else if (num === 5) {
    zone.innerHTML = `
      <h2 style="font-size: 1.6rem; font-weight: 600; margin-bottom: 0.5rem;">Draw a simple shape</h2>
      <p style="color: #666; font-size: 0.95rem; margin-bottom: 2rem;">Draw a circle in the box below</p>
      <div style="min-height: 300px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <img src="../assets/playground/biometrica_captcha_assets/draw_circle.png" style="width: 100px; height: 100px; opacity: 0.25; margin-bottom: 1.5rem;">
        <canvas id="canvas" width="380" height="380" style="border: 2px solid #E5E5E5; border-radius: 12px; cursor: crosshair; background: #FAFAFA;"></canvas>
        <button onclick="clearC()" style="margin-top: 1rem; padding: 0.6rem 1.5rem; background: #F5F5F5; border: 1px solid #E0E0E0; border-radius: 8px; cursor: pointer; font-weight: 500;">Clear</button>
      </div>
      <button style="width: 100%; background: var(--red-accent); color: #fff; padding: 0.95rem; border-radius: 8px; font-weight: 600; border: none; margin-top: 2rem; font-size: 0.95rem; cursor: pointer;">Next →</button>
    `;
    initDraw();
  } else if (num === 6) {
    zone.innerHTML = `
      <h2 style="font-size: 1.6rem; font-weight: 600; margin-bottom: 0.5rem;">Press and hold for 3 seconds</h2>
      <p style="color: #666; font-size: 0.95rem; margin-bottom: 2rem;">Press and hold the button until it completes</p>
      <div style="min-height: 300px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <div style="position: relative; width: 220px; height: 220px; margin-bottom: 1.5rem;">
          <svg style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 100%; height: 100%;">
            <circle fill="none" stroke="#FFE0E0" stroke-width="6" r="105" cx="110" cy="110"/>
            <circle id="ring" fill="none" stroke="var(--red-accent)" stroke-width="6" r="105" cx="110" cy="110" style="stroke-dasharray: 659.73; stroke-dashoffset: 659.73; transform: rotate(-90deg); transform-origin: 50% 50%; transition: stroke-dashoffset 0.05s linear;"/>
          </svg>
          <div id="holdbtn" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 180px; height: 180px; border-radius: 50%; background: linear-gradient(135deg, #FF6B6B 0%, var(--red-accent) 100%); display: flex; flex-direction: column; align-items: center; justify-content: center; color: #fff; cursor: pointer; box-shadow: 0 12px 40px rgba(197, 43, 26, 0.4);">
            <img src="../assets/playground/fingerprint-press-hold-white.png" style="width: 70px; height: 70px; margin-bottom: 0.75rem;">
            <div style="font-size: 2rem; font-weight: 700;"><span id="timer">3.0</span>s</div>
          </div>
        </div>
        <p style="color: #666; font-size: 0.95rem;">Hold to verify</p>
      </div>
      <button style="width: 100%; background: var(--red-accent); color: #fff; padding: 0.95rem; border-radius: 8px; font-weight: 600; border: none; margin-top: 2rem; font-size: 0.95rem; cursor: pointer;">Complete →</button>
    `;
    initHold();
  }
}

function verify() {
  const box = document.getElementById('box');
  box.style.borderColor = '#4CAF50';
  box.style.background = 'linear-gradient(135deg, #F1F8F4 0%, #FFFFFF 100%)';
  box.innerHTML = '<svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>';
}

function initDraw() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  let drawing = false;
  ctx.strokeStyle = '#C52B1A';
  ctx.lineWidth = 4;
  ctx.lineCap = 'round';
  
  canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  });
  canvas.addEventListener('mousemove', (e) => {
    if (!drawing) return;
    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  });
  canvas.addEventListener('mouseup', () => drawing = false);
  canvas.addEventListener('mouseleave', () => drawing = false);
}

function clearC() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function initHold() {
  const btn = document.getElementById('holdbtn');
  const timer = document.getElementById('timer');
  const ring = document.getElementById('ring');
  let interval, time = 3.0;
  const circ = 659.73;
  
  btn.addEventListener('mousedown', () => {
    time = 3.0;
    ring.style.strokeDashoffset = circ;
    interval = setInterval(() => {
      time -= 0.05;
      timer.textContent = Math.max(0, time).toFixed(1);
      ring.style.strokeDashoffset = circ - ((3 - time) / 3 * circ);
      if (time <= 0) {
        clearInterval(interval);
        btn.style.background = 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)';
      }
    }, 50);
  });
  
  btn.addEventListener('mouseup', () => {
    if (time > 0) {
      clearInterval(interval);
      time = 3.0;
      timer.textContent = '3.0';
      ring.style.strokeDashoffset = circ;
    }
  });
  btn.addEventListener('mouseleave', () => {
    if (time > 0) {
      clearInterval(interval);
      time = 3.0;
      timer.textContent = '3.0';
      ring.style.strokeDashoffset = circ;
    }
  });
}

// Load first challenge on page load
window.addEventListener('DOMContentLoaded', () => loadChallenge(1));
