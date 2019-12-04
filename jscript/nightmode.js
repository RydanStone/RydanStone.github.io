//load nightmode(nm) item
document.body.style.backgroundColor = localStorage.getItem('nm');

//checks if this is their first time on the site or cleared their cookies
//sets nightmode on if true
if (localStorage.getItem('nm') == null || undefined) {
        localStorage.setItem('nm', 'on');
}

//checks to see if they had nightmode on
//if they did, it toggles nightmode class onto objects
if(localStorage.getItem('nm') == 'on'){
  document.body.classList.toggle('nightmode');
}

//Handles any click on nightmode button and switches the value to the opposite of the current value
document.querySelector('[data-switch-contrast]').addEventListener('click', function() {
  document.body.classList.toggle('nightmode');
  if(localStorage.getItem('nm') == 'on'){
    localStorage.setItem('nm', 'off');
  }else if(localStorage.getItem('nm') == 'off'){
    localStorage.setItem('nm', 'on');
  }
});
