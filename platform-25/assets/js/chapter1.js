document.getElementById('search-bar').addEventListener('keyup', function() {
    var input = document.getElementById('search-bar');
    var filter = input.value.toLowerCase();
    var subjects = document.getElementsByClassName('subject');

    for (var i = 0; i < subjects.length; i++) {
        var subject = subjects[i];
        var subjectName = subject.getAttribute('data-subject');

        if (subjectName.toLowerCase().indexOf(filter) > -1) {
            subject.style.display = '';
        } else {
            subject.style.display = 'none';
        }
    }
});



                        // File Card
document.addEventListener('DOMContentLoaded', () => {
    // Set file names in span tags based on data-file-path
    document.querySelectorAll('.view-file').forEach(button => {
        var filePath = button.getAttribute('data-file-path');
        var fileName = filePath.split('/').pop();
        button.nextElementSibling.innerText = fileName;
    });

    // Add event listeners to buttons
    document.querySelectorAll('.view-file').forEach(button => {
        button.addEventListener('click', function() {
            var filePath = this.getAttribute('data-file-path');
            var modal = document.getElementById('fileModal');
            var iframe = document.getElementById('fileFrame');
            var modalFileName = document.getElementById('modalFileName');
            var downloadButton = document.getElementById('downloadFileButton');
            var openFileButton = document.getElementById('openFileButton');
            
            // Extract the file name from the file path
            var fileName = filePath.split('/').pop();
            
            // Set the file path and name to the iframe source and modal file name
            iframe.src = filePath;
            modalFileName.innerText = fileName;
            
            // Set the file path to the download button href
            downloadButton.href = filePath;
            
            // Set the file path to the open file button href
            openFileButton.href = filePath;
            
            // Display the modal
            modal.style.display = 'block';
        });
    });

    // Get the close button elements
    var span = document.getElementById('closeButton');
    var closeModalButton = document.getElementById('closeModalButton');

    // Function to close the modal
    function closeModal() {
        var modal = document.getElementById('fileModal');
        modal.style.display = 'none';
    }

    // When the user clicks on span (x) or the close button, close the modal
    span.onclick = closeModal;
    closeModalButton.onclick = closeModal;

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        var modal = document.getElementById('fileModal');
        if (event.target == modal) {
            closeModal();
        }
    };
});                        