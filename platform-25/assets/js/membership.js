                    // Membership Form

const form = document.getElementById('membership-form');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Clear previous error or success messages
    formMessage.textContent = '';

    // Optionally, add client-side validation here before submission
    // Example: Checking if the terms of use checkbox is checked
    if (!document.getElementById('termsOfUse').checked) {
        formMessage.textContent = 'يجب الموافقة على شروط الاستخدام للمتابعة.';
        return; // Prevent further execution
    }

    fetch(this.action, {
        method: this.method,
        body: new FormData(this),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            formMessage.textContent = 'تم التسجيل بنجاح!';
            this.reset();
        } else {
            formMessage.textContent = 'حدث خطأ، يرجى المحاولة مرة أخرى.';
        }
    })
    .catch(error => {
        formMessage.textContent = 'حدث خطأ، يرجى المحاولة مرة أخرى.';
    });
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