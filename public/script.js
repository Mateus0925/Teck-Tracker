const produtosBtn = document.getElementById('produtos-btn');
const dropdownMenu = document.getElementById('dropdown-menu');
const overlay = document.getElementById('overlay');

produtosBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const isOpen = dropdownMenu.classList.contains('show');

  if (isOpen) {
    dropdownMenu.classList.remove('show');
    overlay.style.display = 'none';
  } else {
    dropdownMenu.classList.add('show');
    overlay.style.display = 'block';
  }
});

overlay.addEventListener('click', () => {
  dropdownMenu.classList.remove('show');
  overlay.style.display = 'none';
});
