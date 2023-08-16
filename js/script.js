let count = 1;
const slides = document.getElementsByClassName("slide");
const slideTexts = document.getElementsByClassName("slide-text");
const radioButtons = document.querySelectorAll('input[name="radio-btn"]');
let intervalId;

document.getElementById("radio1").checked = true;

for (let i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener("click", function () {
    clearInterval(intervalId); // Interrompe o intervalo de tempo atual
    count = i + 1;
    animateZoom();
    startSlideshow(); // Reinicia o intervalo de tempo com o novo slide selecionado
  });
}

startSlideshow(); // Inicia o intervalo de tempo para a passagem automática de slides

function startSlideshow() {
  intervalId = setInterval(nextImage, 6000);
}

function nextImage() {
  count++;
  if (count > 4) {
    count = 1;
  }
  document.getElementById("radio" + count).checked = true;
  animateZoom();
}

function animateZoom() {
  for (let i = 0; i < 4; i++) {
    slides[i].classList.remove("active");
    slideTexts[i].classList.remove("active");
    slideTexts[i].style.animation = 'none'; // Limpa a animação anterior
  }
  slides[count - 1].classList.add("active");
  slideTexts[count - 1].classList.add("active");
  slideTexts[count - 1].style.animation = 'slide-animation 1.3s linear backwards'; // Aplica a animação no slide-text atual
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('menu-content').style.display = 'none'; // Esconde o menu hamburguer ao carregar a página
});

document.getElementById('menu-icon').addEventListener('click', function () {
  var menuContent = document.getElementById('menu-content');
  menuContent.style.display = menuContent.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('menu-icon').addEventListener('click', function() {
  var menuContent = document.getElementById('menu-content');
  menuContent.style.right = menuContent.style.right === '-50%' ? '0' : '-50%'; // Alterna entre aberto e fechado
});