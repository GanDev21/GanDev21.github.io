const houses = Array.from(document.querySelectorAll('.house'));
const hudScorePoints = document.querySelector('.points');
const hudTimeSeconds = document.querySelector('.seconds');
const mainMenu = document.querySelector('.main-menu');
const menuItems = Array.from(document.querySelectorAll('.menu-item'));
const rules = document.querySelector('.rules-container');
const finalScore = document.querySelector('.final-score');
const finalResult = document.querySelector('.final-result');
const restart = document.querySelector('.restart');
const returnToMain = Array.from(document.querySelectorAll('.return-to-main'));

const CONTENT = [
{
  type: '🍭',
  value: '+50' },

{
  type: '🍬',
  value: '+100' },

{
  type: '🍫',
  value: '+150' },

{
  type: '🍦',
  value: '+200' },

{
  type: '🍩',
  value: '+250' },

{
  type: '🍪',
  value: '+300' },

{
  type: '👻',
  value: '-250' },

{
  type: '🧟‍♂️',
  value: '-500' }];



let SCORE = 0;
let TIMER = 30;
let generateTimeout = null;
let fadeTimeout = null;
let scoreTimeout = null;
let contentTimeout = null;
let timerInterval;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function handleClick() {
  if (this.classList.contains('active')) {
    SCORE += parseInt(this.dataset.score);
    this.classList.add('click');
    this.classList.remove('active');
    this.dataset.content = '';
    if (typeof SCORE === 'number') {
      hudScorePoints.textContent = SCORE;
    }
    scoreTimeout = setTimeout(() => {
      this.dataset.score = '';
      this.classList.remove('click', 'negative');
      window.clearTimeout(scoreTimeout);
      scoreTimeout = null;
    }, 300);
  }
}

function resetValues() {
  TIMER = 30;
  SCORE = 0;
  hudScorePoints.textContent = '';
}

function handleMenuClick() {
  if (this.classList.contains('new-game')) {
    mainMenu.classList.remove('visible');
    start();
  }
  if (this.classList.contains('rules')) {
    mainMenu.classList.remove('visible');
    rules.classList.add('visible');
  }
  resetValues();
}

function handleReturnClick() {
  this.parentElement.classList.remove('visible');
  mainMenu.classList.add('visible');
}

function handleRestart() {
  resetValues();
  this.parentElement.classList.remove('visible');
  start();
}

houses.forEach(house => {
  house.addEventListener('mousedown', handleClick);
});

menuItems.forEach(item => {
  item.addEventListener('click', handleMenuClick);
});

returnToMain.forEach(control => {
  control.addEventListener('click', handleReturnClick);
});

restart.addEventListener('click', handleRestart);

function generateContent() {
  if (TIMER > 0) {
    generateTimeout = setTimeout(() => {
      const randHouse = getRandomArbitrary(0, houses.length);
      if (!houses[randHouse].classList.contains('active')) {
        const randContentValue = getRandomArbitrary(0, CONTENT.length);
        const contentValue = CONTENT[randContentValue];
        houses[randHouse].classList.add('active');
        houses[randHouse].dataset.content = contentValue.type;
        houses[randHouse].dataset.score = contentValue.value;
        if (contentValue.value.includes('-')) {
          houses[randHouse].classList.add('negative');
        }
        fadeTimeout = setTimeout(() => {
          if (houses[randHouse].classList.contains('active')) {
            houses[randHouse].classList.remove('active', 'negative');
            contentTimeout = setTimeout(() => {
              houses[randHouse].dataset.content = '';
              houses[randHouse].dataset.score = '';
              window.clearTimeout(contentTimeout);
              contentTimeout = null;
            }, 300);
          }
        }, 1900);
      }
      generateContent();
    }, 300);
  }
}

function start() {
  generateContent();
  timerInterval = setInterval(() => {
    TIMER = TIMER - 1;
    hudTimeSeconds.textContent = `${TIMER}s`;
    if (TIMER === 0) {
      window.clearInterval(timerInterval);
      window.clearTimeout(generateTimeout);
      window.clearTimeout(fadeTimeout);
      generateTimeout = null;
      fadeTimeout = null;
      timerInterval = null;
      finalResult.textContent = SCORE;
      finalScore.classList.add('visible');
      houses.forEach(house => {
        if (house.classList.contains('active')) {
          house.classList.remove('active');
          house.dataset.content = '';
          house.dataset.score = '';
        }
      });
    }
  }, 1000);
}