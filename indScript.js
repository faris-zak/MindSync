const mindsyncBrandSection = document.getElementById('mindsyncBrand');
const mindsyncDev = document.getElementById('mindsyncDev');
const mindsyncWord = document.getElementById('mindsyncWord');

function handleMouseOver(){
    mindsyncBrandSection.style.backgroundColor = 'white';
    mindsyncDev.style.opacity = '1';
    mindsyncWord.style.opacity = '0';
}

function handleMouseOut(){
    mindsyncBrandSection.style.backgroundColor = '#14213D';
    mindsyncDev.style.opacity = '0';
    mindsyncWord.style.opacity = '1';
}

mindsyncBrandSection.addEventListener('mouseover', handleMouseOver);
mindsyncBrandSection.addEventListener('mouseout', handleMouseOut);


const mindsyncsSummaries = document.getElementById('mindsyncsSummaries');
const selfDevelopment = document.getElementById('selfDevelopment');
const academicEducation = document.getElementById('academicEducation');
const servicesTools = document.getElementById('servicesTools');

const horizontalLine1 = document.getElementById('horizontalLine1');
const horizontalLine2 = document.getElementById('horizontalLine2');
const horizontalLine3 = document.getElementById('horizontalLine3');

function handleMouseOver1(){
    horizontalLine1.style.height = '3px';
    horizontalLine1.style.backgroundColor = '#14213D';
}

function handleMouseOut1(){
    horizontalLine1.style.height = '2px';
    horizontalLine1.style.backgroundColor = '#FCA311';
}

function handleMouseOver2(){
    horizontalLine2.style.height = '3px';
    horizontalLine2.style.backgroundColor = '#14213D';
}

function handleMouseOut2(){
    horizontalLine2.style.height = '2px';
    horizontalLine2.style.backgroundColor = '#FCA311';
}

function handleMouseOver3(){
    horizontalLine3.style.height = '3px';
    horizontalLine3.style.backgroundColor = '#14213D';
}

function handleMouseOut3(){
    horizontalLine3.style.height = '2px';
    horizontalLine3.style.backgroundColor = '#FCA311';
}

mindsyncsSummaries.addEventListener('mouseover', handleMouseOver1);
mindsyncsSummaries.addEventListener('mouseout', handleMouseOut1);

selfDevelopment.addEventListener('mouseover', handleMouseOver1);
selfDevelopment.addEventListener('mouseout', handleMouseOut1);

selfDevelopment.addEventListener('mouseover', handleMouseOver2);
selfDevelopment.addEventListener('mouseout', handleMouseOut2);

academicEducation.addEventListener('mouseover', handleMouseOver2);
academicEducation.addEventListener('mouseout', handleMouseOut2);

academicEducation.addEventListener('mouseover', handleMouseOver3);
academicEducation.addEventListener('mouseout', handleMouseOut3);

servicesTools.addEventListener('mouseover', handleMouseOver3);
servicesTools.addEventListener('mouseout', handleMouseOut3);