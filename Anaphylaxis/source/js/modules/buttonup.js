const activeBtn = document.querySelector('.buttonup');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 580) {
    activeBtn.style.display = 'flex'
  } else {
    activeBtn.style.display = 'none'
  }
});
