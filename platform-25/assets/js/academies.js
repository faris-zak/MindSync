document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll(".toggle-more-info");
  
    toggleButtons.forEach(button => {
      button.addEventListener("click", function() {
        const moreInfo = this.nextElementSibling;
        if (moreInfo.style.display === "none" || !moreInfo.style.display) {
          moreInfo.style.display = "block";
          this.textContent = "معلومات أقل";
        } else {
          moreInfo.style.display = "none";
          this.textContent = "مزيد من المعلومات";
        }
      });
    });
  });