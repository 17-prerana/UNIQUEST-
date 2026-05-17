let currentXP = 30;
const xpFill = document.querySelector('.xp-fill');
const xpText = document.querySelector('.progress-text');

function gainXP(xp) {
  currentXP += xp;
  if (currentXP > 100) currentXP = 100;
  xpFill.style.width = `${currentXP}%`;

  const remaining = 100 - currentXP;
  xpText.innerHTML = `${remaining} XP to <span class="highlight">Apprentice</span>`;

  if (currentXP === 100) levelUpFlash();
}

function levelUpFlash() {
  document.body.classList.add('level-up');
  setTimeout(() => document.body.classList.remove('level-up'), 1000);
}

setTimeout(() => gainXP(15), 2500);

const style = document.createElement('style');
style.textContent = `
body.level-up {
  animation: screenFlash 1s ease;
}
@keyframes screenFlash {
  0% { background-color: rgba(255, 204, 51, 0.05); }
  50% { background-color: rgba(255, 204, 51, 0.25); }
  100% { background: radial-gradient(circle at top, #0c0f19, #0a0b16); }
}`;
document.head.appendChild(style);