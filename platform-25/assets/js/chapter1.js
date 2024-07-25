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
        const filePath = button.getAttribute('data-file-path');
        const fileName = filePath.split('/').pop();
        button.nextElementSibling.innerText = fileName;
    });

    // Add event listeners to buttons
    document.querySelectorAll('.view-file').forEach(button => {
        button.addEventListener('click', function() {
            const filePath = this.getAttribute('data-file-path');
            const fileName = filePath.split('/').pop();
            const googleDriveLink = this.getAttribute('data-google-drive-link');
            
            const modal = document.getElementById('fileModal');
            const iframe = document.getElementById('fileFrame');
            const modalFileName = document.getElementById('modalFileName');
            const downloadButton = document.getElementById('downloadFileButton');
            const printButton = document.getElementById('printFileButton');
            const openFileButton = document.getElementById('openFileButton');
            
            // Set the file path and name to the iframe source and modal file name
            iframe.src = filePath;
            modalFileName.innerText = fileName;
            
            // Set the file path to the download button href
            downloadButton.href = filePath;
            
            // Set the file path to the print button data attribute
            printButton.setAttribute('data-file-path', filePath);
            
            // Set the unique Google Drive link
            openFileButton.href = googleDriveLink;
            
            // Display the modal
            modal.style.display = 'block';
        });
    });

    // Get the close button element
    const span = document.getElementById('closeButton');

    // Function to close the modal
    function closeModal() {
        const modal = document.getElementById('fileModal');
        modal.style.display = 'none';
    }

    // Function to print the file
    function printFile(filePath) {
        const printWindow = window.open(filePath, '_blank');
        printWindow.onload = function() {
            printWindow.print();
        };
    }

    // Add event listener for the print button
    const printButton = document.getElementById('printFileButton');
    printButton.addEventListener('click', function() {
        const filePath = this.getAttribute('data-file-path');
        printFile(filePath);
    });

    // When the user clicks on span (x) or the close button, close the modal
    span.onclick = closeModal;

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        const modal = document.getElementById('fileModal');
        if (event.target == modal) {
            closeModal();
        }
    };
});