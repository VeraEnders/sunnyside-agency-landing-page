const arrow = document.querySelector('.arrow');

function scrollDown(e) {
  e.preventDefault();
  window.scroll(0, window.innerHeight);
}

arrow.addEventListener('click', scrollDown);