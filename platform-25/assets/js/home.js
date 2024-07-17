function joinNow() {
    window.location.href = '#membership';
    home.style.display = 'none';
    membership.style.display = 'block';
}

function joinLater() {
    home.style.display = 'none';
    membership.style.display = 'block';
}

const contentAnimation = document.getElementById('myDropdown');
let clickCount = 0;

contentAnimation.addEventListener('click', function() {
    clickCount++;
    
    if (clickCount % 2 === 1) {
        // First click, fade in
        this.classList.remove('fadeOutList');
        this.classList.add('fadeInList');
    } else {
        // Second click, fade out
        this.classList.remove('fadeInList');
        this.classList.add('fadeOutList');
    }
});