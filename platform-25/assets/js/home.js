function joinNow() {
    window.location.href = '#membership';
    
    home.style.display = 'none';
    membership.style.display = 'block';
}

const footerSection = document.getElementById('footerSection');
const footerHeight = footerSection.offsetHeight; // Get footer height

window.addEventListener("scroll", () => {
    const currentScrollPosition = window.scrollY;
    const windowHeight = window.innerHeight; // Get the window height

    const footerTopPosition = footerSection.offsetTop; // Get footer top position

    if (currentScrollPosition + windowHeight >= footerTopPosition) {
        // Button styles when footer section starts to appear
        membershipButton.style.bottom = '160px';
    } else {
        // Reset button styles if not near footer (optional)
        membershipButton.style.bottom = '160px'; // Remove style
    }
});
