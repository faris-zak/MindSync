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

// studentGraduating25Button.addEventListener('click', () => {
//     home.style.display = 'none';
//     academies.style.display = 'none';
//     chapter1.style.display = 'none';
//      chapter2.style.display = 'none';
//     studentGraduating25.style.display = 'block';
//     membership.style.display = 'none';
// });

// membershipButton.addEventListener('click', () => {
//     home.style.display = 'none';
//     academies.style.display = 'none';
//     chapter1.style.display = 'none';
//      chapter2.style.display = 'none';
//     studentGraduating25.style.display = 'none';
//     membership.style.display = 'block';
// });


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

// studentGraduating25Button2.addEventListener('click', () => {
//     home.style.display = 'none';
//     academies.style.display = 'none';
//     chapter1.style.display = 'none';
//     chapter2.style.display = 'none';
//     studentGraduating25.style.display = 'block';
//     membership.style.display = 'none';
// });

// membershipButton2.addEventListener('click', () => {
//     home.style.display = 'none';
//     academies.style.display = 'none';
//     chapter1.style.display = 'none';
//     chapter2.style.display = 'none';
//     studentGraduating25.style.display = 'none';
//     membership.style.display = 'block';
// });



                    // Dropdown Menu

const myDropdown = document.getElementById('myDropdown');
const animationButton = document.getElementById('animationButton');

function myFunction() {

    if(myDropdown.style.zIndex == 1 && myDropdown.style.opacity == 1){
        myDropdown.style.zIndex = -1;
        myDropdown.style.opacity = 0;
        myDropdown.style.transform = 'translateY(0)';
        myDropdown.style.userSelect = 'none';
    } else{
        myDropdown.style.zIndex = 1;
        myDropdown.style.opacity = 1;
        myDropdown.style.transform = 'translateY(10px)';
        myDropdown.style.userSelect = 'auto';
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

  document.addEventListener('click', (event) => {
    if (!animationButton.contains(event.target) && !myDropdown.contains(event.target)) {
        myDropdown.style.zIndex = -1;
        myDropdown.style.opacity = 0;
        myDropdown.style.transform = 'translateY(0)';
        myDropdown.style.userSelect = 'none';
    }
  });



                    // Share List
  document.addEventListener('DOMContentLoaded', () => {
    const shareButton = document.getElementById('shareButton');
    const shareOptions = document.getElementById('shareOptions');
    const copyLink = document.getElementById('copyLink');
  
    const shareText = "حبيت أشارك معكم منصة-25، إلي تجمع كل شيء تحتاجه كطالب في الصف الثاني عشر ببساطة. 🌐📚!\n\n🌟 تعرّف على منصة-25! 🌟\n\n";
    const currentURL = window.location.href;
  
    shareButton.addEventListener('click', () => {
        if(shareOptions.style.zIndex == 1 && shareOptions.style.opacity == 1){
            shareOptions.style.zIndex = -1;
            shareOptions.style.opacity = 0;
            shareOptions.style.transform = 'translateY(0)';
            shareOptions.style.userSelect = 'none';
        } else{
            shareOptions.style.zIndex = 1;
            shareOptions.style.opacity = 1;
            shareOptions.style.transform = 'translateY(10px)';
            shareOptions.style.userSelect = 'auto';
        }    });
  
    document.addEventListener('click', (event) => {
      if (!shareButton.contains(event.target) && !shareOptions.contains(event.target)) {
        shareOptions.style.zIndex = -1;
        shareOptions.style.opacity = 0;
        shareOptions.style.transform = 'translateY(0)';
        shareOptions.style.userSelect = 'none';
      }
    });

    copyLink.addEventListener('click', (event) => {
        event.preventDefault();
        try {
            // Create a temporary input element to hold the URL
            const dummy = document.createElement('input');
            
            // Construct the URL to be copied
            const url = `${shareText} ${currentURL}`;
            
            // Append the input element to the document body
            document.body.appendChild(dummy);
            
            // Set the value of the input element to the URL
            dummy.value = url;
            
            // Select the content of the input element
            dummy.select();
            
            // Copy the selected content to the clipboard
            document.execCommand('copy');
            
            // Remove the temporary input element from the document body
            document.body.removeChild(dummy);
            
            // Change the icon and text of the link
            const link = document.getElementById('copyLink');
            const icon = link.querySelector('i');
            link.textContent = ''; // Clear existing text
    
            // Change icon and text
            icon.classList.remove('fa-link');
            icon.classList.add('fa-check');
            link.appendChild(icon);
            link.appendChild(document.createTextNode(' تم نسخ الرابط'));
    
            // Optional: Revert the icon and text back after a few seconds
            setTimeout(() => {
                icon.classList.remove('fa-check');
                icon.classList.add('fa-link');
                link.textContent = ''; // Clear existing text
                link.appendChild(icon);
                link.appendChild(document.createTextNode(' نسخ الرابط'));
            }, 2000);
            
        } catch (error) {
            // Handle any errors that occur during the copy process
            console.error('Failed to copy link: ', error);
        }
    });    
  
    document.getElementById('shareTwitter').addEventListener('click', (event) => {
      event.preventDefault();
      const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentURL)}&text=${encodeURIComponent(shareText)}`;
      window.open(url, '_blank');
    });
  
    document.getElementById('shareWhatsapp').addEventListener('click', (event) => {
      event.preventDefault();
      const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + currentURL)}`;
      window.open(url, '_blank');
    });
  });