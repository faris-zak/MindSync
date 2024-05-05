const mindsyncBrandSection = document.getElementById('mindsyncBrand');
const mindsyncLogo = document.getElementById('mindsyncLogo');
const mindsyncWord = document.getElementById('mindsyncWord');

function handleMouseOver(){
    mindsyncBrandSection.style.backgroundColor = 'white';
    mindsyncLogo.style.opacity = '1';
    mindsyncWord.style.opacity = '0';
}

function handleMouseOut(){
    mindsyncBrandSection.style.backgroundColor = '#14213D';
    mindsyncLogo.style.opacity = '0';
    mindsyncWord.style.opacity = '1';
}

mindsyncBrandSection.addEventListener('mouseover', handleMouseOver);
mindsyncBrandSection.addEventListener('mouseout', handleMouseOut);