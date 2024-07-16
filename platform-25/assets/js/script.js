const mindsyncBrand = document.getElementById('mindsyncBrand');

function applyStyles(x) {

    if (x.matches) { 
        mindsyncBrand.getAttribute('src');
        mindsyncBrand.setAttribute('src', 'assets/images/mindsynclogo.png');
    } else {
        mindsyncBrand.setAttribute('src', 'assets/images/mindsync-logo.png');
    }
  }
  
  const x = window.matchMedia("(max-width: 540px)");
  applyStyles(x);
  x.addListener(applyStyles);



mindsyncBrand.addEventListener("contextmenu", (event) => {
    event.preventDefault();
});