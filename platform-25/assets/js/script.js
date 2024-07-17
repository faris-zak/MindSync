                // Clear Fragment
document.getElementById('clearFragment').addEventListener('click', function() {
    // Clear fragment identifier from URL
    history.replaceState({}, document.title, window.location.pathname);
    
    // Reset all other content

    home.style.display = 'block';
    academies.style.display = 'none';
    chapter1.style.display = 'none';
    // chapter2.style.display = 'none';
    studentGraduating25.style.display = 'none';
    membership.style.display = 'none';
});



                // MindSync Logo Tuning

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



                // Sidebar Buttons

const academiesButton = document.getElementById('academiesButton');
const chapter1Button = document.getElementById('chapter1Button');
// const chapter2 = document.getElementById('chapter2Button');
const studentGraduating25Button = document.getElementById('studentGraduating25Button');
const membershipButton = document.getElementById('membershipButton');

const academiesButton2 = document.getElementById('academiesButton2');
const chapter1Button2 = document.getElementById('chapter1Button2');
// const chapter2Button2 = document.getElementById('chapter2Button');
const studentGraduating25Button2 = document.getElementById('studentGraduating25Button2');
const membershipButton2 = document.getElementById('membershipButton2');



                // Page Sections

const home = document.getElementById('home');
const academies = document.getElementById('academies');
const chapter1 = document.getElementById('chapter-1');
// const chapter2 = document.getElementById('chapter-2');
const studentGraduating25 = document.getElementById('student-graduating25');
const membership = document.getElementById('membership');


                // Page Sections Functions - 1

academiesButton.addEventListener('click', () => {
    home.style.display = 'none';
    academies.style.display = 'block';
    chapter1.style.display = 'none';
    // chapter2.style.display = 'none';
    studentGraduating25.style.display = 'none';
    membership.style.display = 'none';

});

chapter1Button.addEventListener('click', () => {
    home.style.display = 'none';
    academies.style.display = 'none';
    chapter1.style.display = 'block';
    // chapter2.style.display = 'none';
    studentGraduating25.style.display = 'none';
    membership.style.display = 'none';
});

/* chapter2Button.addEventListener('click', () => {
    home.style.display = 'none';
    academies.style.display = 'none';
    chapter1.style.display = 'none';
    chapter2.style.display = 'block';
    studentGraduating25.style.display = 'none';
    membership.style.display = 'none';
}); */

studentGraduating25Button.addEventListener('click', () => {
    home.style.display = 'none';
    academies.style.display = 'none';
    chapter1.style.display = 'none';
    // chapter2.style.display = 'none';
    studentGraduating25.style.display = 'block';
    membership.style.display = 'none';
});

membershipButton.addEventListener('click', () => {
    home.style.display = 'none';
    academies.style.display = 'none';
    chapter1.style.display = 'none';
    // chapter2.style.display = 'none';
    studentGraduating25.style.display = 'none';
    membership.style.display = 'block';
});


                // Page Sections Functions - 2
academiesButton2.addEventListener('click', () => {
    home.style.display = 'none';
    academies.style.display = 'block';
    chapter1.style.display = 'none';
    // chapter2.style.display = 'none';
    studentGraduating25.style.display = 'none';
    membership.style.display = 'none';
});

chapter1Button2.addEventListener('click', () => {
    home.style.display = 'none';
    academies.style.display = 'none';
    chapter1.style.display = 'block';
    studentGraduating25.style.display = 'none';
    membership.style.display = 'none';
});

/* chapter2Button2.addEventListener('click', () => {
    home.style.display = 'none';
    academies.style.display = 'none';
    chapter1.style.display = 'none';
    chapter2.style.display = 'block';
    studentGraduating25.style.display = 'none';
    membership.style.display = 'none';
}); */

studentGraduating25Button2.addEventListener('click', () => {
    home.style.display = 'none';
    academies.style.display = 'none';
    chapter1.style.display = 'none';
    // chapter2.style.display = 'none';
    studentGraduating25.style.display = 'block';
    membership.style.display = 'none';
});

membershipButton2.addEventListener('click', () => {
    home.style.display = 'none';
    academies.style.display = 'none';
    chapter1.style.display = 'none';
    // chapter2.style.display = 'none';
    studentGraduating25.style.display = 'none';
    membership.style.display = 'block';
});



                    // Dropdown Menu

const myDropdown = document.getElementById('myDropdown');

function myFunction() {

    if(myDropdown.style.display == 'block'){
        myDropdown.classList.remove('fadeInDropdown'); // Remove fadeIn class
        myDropdown.style.display = 'none';
    } else{
        myDropdown.style.display = 'block';
        myDropdown.classList.add('fadeInDropdown'); // Add fadeIn class
    }
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