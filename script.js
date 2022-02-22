let colorGlobal = 'black';
let heigth = 5;

//Maxuel Carvalho DevMedia
function gerarCor() {
  return `#${parseInt((Math.random() * 0xFFFFFF))
    .toString(16)
    .padStart(6, '0')}`;
}

const paletColor = document.querySelectorAll('.color');

function pushColor() {
  for (let i = 0; i < paletColor.length; i += 1) {
    const cor = paletColor[i];
    if (i === 0) {
      cor.style.backgroundColor = 'black';
    } else {
      cor.style.background = gerarCor();
    }
  }
}

pushColor();

function addRemoveClass() {
  const itemsColors = document.querySelector('#color-palette');
  itemsColors.addEventListener('click', (event) => {
    const itemSetado = event.target;
    const itemAntigoSetado = document.querySelector('.selected');
    itemAntigoSetado.classList.remove('selected');
    itemSetado.classList.add('selected');

    const newColor = window.getComputedStyle(itemSetado);
    colorGlobal = newColor.background;
  });
}

addRemoveClass();

const clear = document.querySelector('#clear-board');

clear.addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
});

const pixels = document.querySelector('#pixel-board');

function criarQuadroPixel(tamanho) {
  pixels.innerHTML = '';

  for (let i = 0; i < tamanho; i += 1) {
    const line = document.createElement('div');
    line.classList.add('line');
    pixels.appendChild(line);
    pixels.style.backgroundColor = 'white';
    pixels.style.cursor = 'Pointer';
    for (let index = 0; index < tamanho; index += 1) {
      const coluns = document.createElement('div');
      coluns.classList.add('pixel');
      line.appendChild(coluns);
    }
  }
}

criarQuadroPixel(heigth);

const items = document.querySelectorAll('#pixel-board');

function verifyPixels() {
  for (let i = 0; i < items.length; i += 1) {
    const item = items[i];
    item.addEventListener('click', (event) => {
      const itemAtual = event.target;
      itemAtual.style.background = colorGlobal;
    });
  }
}

verifyPixels();

const buttonIput = document.querySelector('#generate-board');

function checkInput() {
  const inputValue = document.querySelector('#board-size');
  const newValue = inputValue.value;
  if (newValue === '') {
    alert('Board inválido!');
  } else if (newValue < 5 && newValue > 0) {
    heigth = 5;
    criarQuadroPixel(heigth);
  } else if (newValue > 50) {
    heigth = 50;
    criarQuadroPixel(heigth);
  } else if (newValue >= 5 && newValue <= 50) {
    heigth = newValue;
    criarQuadroPixel(heigth);
  }
  inputValue.value = '';
}

buttonIput.addEventListener('click', checkInput);
