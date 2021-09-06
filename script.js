'use strict';

const hexText = document.querySelector('.hex-text');
const hexButton = document.querySelector('.btn');
const container = document.querySelector('.container');

const generateColor = () => {
  const randomColor = Math.random().toString(16).substring(2, 8);
  container.style.backgroundColor = `#${randomColor}`;
  hexText.textContent = `#${randomColor}`;
  hexButton.style.border = `0.5rem solid #${randomColor}`;
};

hexButton.addEventListener('click', generateColor);

window.onload = () => {
  generateColor();
};
