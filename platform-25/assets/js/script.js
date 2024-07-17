                // Service Worker





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



                    // Membership Sorm

const form = document.getElementById('membership-form');
const submitButton = document.getElementById('submitButton');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Optionally, add validation here

    fetch(this.action, {
        method: this.method,
        body: new FormData(this),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.querySelector('.form-message').textContent = 'تم إرسال معلومات حسابك بنجاح!';
            this.reset();
        } else {
            document.querySelector('.form-message').textContent = 'حدث خطأ، يرجى المحاولة مرة أخرى.';
        }
    })
    .catch(error => {
        document.querySelector('.form-message').textContent = 'حدث خطأ، يرجى المحاولة مرة أخرى.';
    });
});

form.addEventListener("keyup", () => {
    const allFilled = Array.from(form.elements)
      .filter((field) => field.required)
      .every((field) => field.value);
  
    submitButton.disabled = !allFilled;
});



                    // Open Details Division

document.getElementById('toggle-details').addEventListener('click', function() {
    var detailsElement = document.getElementById('membership-card-open');
    if (!detailsElement.open) {
        detailsElement.open = true;
    } else {
        detailsElement.open = false;
    }
});