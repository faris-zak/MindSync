document.addEventListener("DOMContentLoaded", () => {
    // ✅ 1. Set file names inside the corresponding .file-name span
    document.querySelectorAll(".view-file").forEach(button => {
        const filePath = button.getAttribute("data-file-path");
        const fileName = filePath.split("/").pop();

        // Find the .file-name span inside the same .card-info container
        const fileNameSpan = button.closest(".card-info")?.querySelector(".file-name");
        if (fileNameSpan) {
            fileNameSpan.innerText = fileName;
        }
    });

    // ✅ 2. Function to open the modal
    function openFileModal(button) {
        const filePath = button.getAttribute("data-file-path");
        const fileName = filePath.split("/").pop();
        const googleDriveLink = button.getAttribute("data-google-drive-link");

        const modal = document.getElementById("fileModal");
        const iframe = document.getElementById("fileFrame");
        const modalFileName = document.getElementById("modalFileName");
        const downloadButton = document.getElementById("downloadFileButton");
        const printButton = document.getElementById("printFileButton");
        const openFileButton = document.getElementById("openFileButton");

        // Set the file path and name
        iframe.src = filePath;
        modalFileName.innerText = fileName;
        downloadButton.href = filePath;
        printButton.setAttribute("data-file-path", filePath);
        openFileButton.href = googleDriveLink;

        // Show the modal
        modal.style.display = "block";
    }

    // ✅ 3. Event delegation for all "view-file" buttons
    document.body.addEventListener("click", (event) => {
        const button = event.target.closest(".view-file");
        if (button) {
            openFileModal(button);
        }
    });

    // ✅ 4. Close modal function
    function closeModal() {
        const modal = document.getElementById("fileModal");
        modal.style.display = "none";
        document.getElementById("fileFrame").src = ""; // Clear the iframe
    }

    // ✅ 5. Print file function
    function printFile(filePath) {
        const printWindow = window.open(filePath, "_blank");
        printWindow.onload = function () {
            printWindow.print();
        };
    }

    // ✅ 6. Print button click event
    document.getElementById("printFileButton").addEventListener("click", function () {
        const filePath = this.getAttribute("data-file-path");
        printFile(filePath);
    });

    // ✅ 7. Close modal on clicking the close button
    document.getElementById("closeButton").onclick = closeModal;

    // ✅ 8. Close modal when clicking outside
    window.onclick = function (event) {
        const modal = document.getElementById("fileModal");
        if (event.target === modal) {
            closeModal();
        }
    };
});
