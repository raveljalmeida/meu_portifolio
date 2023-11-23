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