const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const result = document.getElementById('result');
const card = document.querySelector('.card');
const yay = document.getElementById('yay');

let shakeTimer;

const setResult = (text) => {
  result.textContent = text;
};

const clearCelebration = () => {
  card.classList.remove('celebrate');
  yay.setAttribute('aria-hidden', 'true');
};

const celebrate = () => {
  clearTimeout(shakeTimer);
  card.classList.remove('shake');
  card.classList.add('celebrate');
  yay.setAttribute('aria-hidden', 'false');
  setResult('Yay!');
};

const tryAgain = () => {
  clearCelebration();
  setResult('Try again.');
  card.classList.add('shake');
  clearTimeout(shakeTimer);
  shakeTimer = setTimeout(() => card.classList.remove('shake'), 700);

  const jitterX = (Math.random() * 2 - 1) * 80;
  const jitterY = (Math.random() * 2 - 1) * 30;
  noBtn.style.setProperty('--tx', `${jitterX.toFixed(0)}px`);
  noBtn.style.setProperty('--ty', `${jitterY.toFixed(0)}px`);
};

yesBtn.addEventListener('click', celebrate);
noBtn.addEventListener('click', tryAgain);

// Keyboard support
[yesBtn, noBtn].forEach((btn) => {
  btn.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      btn.click();
    }
  });
});

// No background noise needed; blur blobs handle ambience.
