const mindsyncBrand = document.getElementById('mindsyncBrand');


                // MindSync Logo Tuning
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



                // Sidebar Buttons

const stButton = document.getElementById('stButton');
const ndButton = document.getElementById('ndButton');
const rdButton = document.getElementById('rdButton');
const thButton = document.getElementById('thButton');



                // Dropdown Menu

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  function filterFunction() {
    const input = document.getElementById("myInput");
    const filter = input.value.toUpperCase();
    const div = document.getElementById("myDropdown");
    const a = div.getElementsByTagName("a");
    for (let i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }