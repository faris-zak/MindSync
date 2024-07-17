                    // Membership Form

const form = document.getElementById('membership-form');
const submitButton = document.getElementById('submitButton');


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


