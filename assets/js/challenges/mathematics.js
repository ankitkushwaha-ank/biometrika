let mathAnswer = 0;

function initMathematics() {
  const a = Math.floor(Math.random() * 20) + 1;
  const b = Math.floor(Math.random() * 20) + 1;
  const operators = ['+', '-', '×'];
  const op = operators[Math.floor(Math.random() * operators.length)];
  
  mathAnswer = op === '+' ? a + b : op === '-' ? a - b : a * b;
  
  const area = document.getElementById('challenge-area');
  area.innerHTML = `
    <p style="margin-bottom:2rem;font-weight:500;">Solve the equation</p>
    <p style="font-size:3rem;font-weight:600;margin-bottom:2rem;">${a} ${op} ${b} = ?</p>
    <input type="number" id="math-input" placeholder="Your answer" class="input" style="max-width:200px;text-align:center;font-size:1.5rem;">
  `;
  
  document.getElementById('challenge-controls').innerHTML = `
    <button class="btn-red" onclick="verifyMath()">Submit Answer</button>
    <button class="btn-outline" onclick="initMathematics()">New Problem</button>
  `;
}

function verifyMath() {
  const input = parseInt(document.getElementById('math-input').value);
  if (input === mathAnswer) {
    showFeedback('success', '✓ Correct answer!');
  } else {
    showFeedback('error', '✗ Incorrect. Try again.');
  }
}
