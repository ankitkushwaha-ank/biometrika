let audioCode = '';

function initAudio() {
  audioCode = Math.floor(100000 + Math.random() * 900000).toString();
  
  const area = document.getElementById('challenge-area');
  area.innerHTML = `
    <p style="margin-bottom:1.5rem;font-weight:500;">Listen to the audio and enter the code</p>
    <button class="btn-outline" onclick="playAudioChallenge()" style="margin-bottom:2rem;font-size:2rem;padding:1rem 2rem;">
      🔊 Play Audio
    </button>
    <input type="text" id="audio-input" placeholder="Enter code" class="input" style="max-width:250px;text-align:center;font-size:1.2rem;" maxlength="6">
    <p style="margin-top:0.5rem;font-size:0.85rem;color:var(--charcoal);">Demo: Code is ${audioCode}</p>
  `;
  
  document.getElementById('challenge-controls').innerHTML = `
    <button class="btn-red" onclick="verifyAudio()">Verify Code</button>
    <button class="btn-outline" onclick="initAudio()">New Code</button>
  `;
}

function playAudioChallenge() {
  showFeedback('info', 'Audio playback simulated. In production, this would play the actual code.');
}

function verifyAudio() {
  const input = document.getElementById('audio-input').value;
  if (input === audioCode) {
    showFeedback('success', '✓ Correct code!');
  } else {
    showFeedback('error', '✗ Incorrect code. Try again.');
  }
}
