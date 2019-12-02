document.body.style.backgroundColor = localStorage.getItem('nm');

if (localStorage.getItem('nm') == null || undefined) {
        localStorage.setItem('nm', 'on');
}
if(localStorage.getItem('nm') == 'on'){
  document.body.classList.toggle('nightmode');
}

document.querySelector('[data-switch-contrast]').addEventListener('click', function() {
  document.body.classList.toggle('nightmode');
  if(localStorage.getItem('nm') == 'on'){
    localStorage.setItem('nm', 'off');
  }else if(localStorage.getItem('nm') == 'off'){
    localStorage.setItem('nm', 'on');
  }
});
