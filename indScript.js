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


const justPapersSection = document.getElementById('justPapers');
const justPapersSectionBody = document.getElementById('justPaperSectionSoon');
const justPapersSectionDetails = document.getElementById('justPapersSectionDetails');

function showSoon(){
    justPapersSectionBody.style.opacity = '1';
    justPapersSectionBody.style.transform = 'translateY(10px)';
    justPapersSectionDetails.style.paddingBottom = '20px';
}

function hideSoon(){
    justPapersSectionBody.style.opacity = '0';
    justPapersSectionBody.style.transform = 'translateY(-0px)';
    justPapersSectionDetails.style.paddingBottom = '0px';
}

justPapersSection.addEventListener('mouseover', showSoon);
justPapersSection.addEventListener('mouseout', hideSoon);