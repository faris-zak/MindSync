                    // Membership Form

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