                    // Membership Form

const form = document.getElementById('membership-form');
const submitButton = document.getElementById('submitButton');
const xAccount = document.getElementById('xAccount');
const xPlatform = document.getElementById('xPlatform');

xAccount.addEventListener('change', () =>{
    if(xAccount.checked){
        xPlatform.style.display = 'block';
    } else {
        xPlatform.style.display = 'none';
    }
})


submitButton.addEventListener('submit', function(event) {
    event.preventDefault();
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