function search_section(){
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName('sections');
  
  for (i = 0; i < x.length; i++){
    if (!x[i].innerHTML.toLowerCase().includes(input)){
    x[i].style.display = "none";
    }
    else{
    x[i].style.display = "list-item";
    }
}};


function clearField(){
  document.getElementById('searchbar').value = "";
}


const searchbar = document.getElementById('searchbar');
const clearButton = document.getElementById('clearButton');

function updateButtonVisibility() {
  if (searchbar.value === ""){
    clearButton.style.opacity = 0;
    clearButton.style.cursor = 'default';
    clearButton.style.marginBottom = "0px";
    searchbar.style.marginBottom = "0px";
  }
  else{
    clearButton.style.opacity = 1;
    clearButton.style.cursor = 'pointer';
    clearButton.style.marginBottom = "50px";
    searchbar.style.marginBottom = "10px";
  }
}

updateButtonVisibility();

searchbar.addEventListener('input', updateButtonVisibility);

clearButton.addEventListener('click', function(){
  location.reload();
});


const showFirstChapterEleventhGradeButton = document.getElementById('showFirstChapterEleventhGradeButton');
const showSecondChapterEleventhGradeButton = document.getElementById('showSecondChapterEleventhGradeButton');

const showFirstChapterTwelfthGradeButton = document.getElementById('showFirstChapterTwelfthGradeButton');
const showSecondChapterTwelfthGradeButton = document.getElementById('showSecondChapterTwelfthGradeButton');

const eleventhFirstChapterInfoSection = document.getElementById('eleventhFirstChapterInfoSection');
const eleventhSecondChapterInfoSection = document.getElementById('eleventhSecondChapterInfoSection');

const twelfthFirstChapterInfoSection = document.getElementById('twelfthFirstChapterInfoSection');
const twelfthSecondChapterInfoSection = document.getElementById('twelfthSecondChapterInfoSection');

// const secondDownInfoChapter = document.getElementById('secondDownChapterInfoSection');

const eleventhFirstChapterSection = document.getElementById('eleventhFirstChapterSection');
const eleventhSecondChapterSection = document.getElementById('eleventhSecondChapterSection');

const twelfthFirstChapterSection = document.getElementById('twelfthFirstChapterSection');
const twelfthSecondChapterSection = document.getElementById('twelfthSecondChapterSection');




function showEleventhGrade(){
  showFirstChapterEleventhGradeButton.style.display="inline-flex";
  showSecondChapterEleventhGradeButton.style.display="inline-flex";
  showFirstChapterTwelfthGradeButton.style.display="none";
  showSecondChapterTwelfthGradeButton.style.display="none";
  twelfthSecondChapterSection.style.display="none";
  twelfthSecondChapterInfoSection.style.display="none";
  twelfthFirstChapterSection.style.display="none";
  twelfthFirstChapterInfoSection.style.display="none";
}



function showTwelfthGrade(){
  showFirstChapterEleventhGradeButton.style.display="none";
  showSecondChapterEleventhGradeButton.style.display="none";
  showFirstChapterTwelfthGradeButton.style.display="inline-flex";
  showSecondChapterTwelfthGradeButton.style.display="inline-flex";
  eleventhSecondChapterSection.style.display="none";
  eleventhSecondChapterInfoSection.style.display="none";
  eleventhFirstChapterSection.style.display="none";
  eleventhFirstChapterInfoSection.style.display="none";
}

// -------------

function showEleventhGradeFirstChapter(){
  eleventhFirstChapterSection.style.display="block";
  eleventhSecondChapterSection.style.display="none";
  eleventhFirstChapterInfoSection.style.display="block";
  eleventhSecondChapterInfoSection.style.display="none";
}

function showEleventhGradeSecondChapter(){
  eleventhFirstChapterSection.style.display="none";
  eleventhSecondChapterSection.style.display="block";
  eleventhFirstChapterInfoSection.style.display="none";
  eleventhSecondChapterInfoSection.style.display="block";
}

// -------------

function showTwelfthGradeFirstChapter(){
  twelfthFirstChapterSection.style.display="block";
  twelfthSecondChapterSection.style.display="none";
  twelfthFirstChapterInfoSection.style.display="block";
  twelfthSecondChapterInfoSection.style.display="none";
}

function showTwelfthGradeSecondChapter(){
  twelfthFirstChapterSection.style.display="none";
  twelfthSecondChapterSection.style.display="block";
  twelfthFirstChapterInfoSection.style.display="none";
  twelfthSecondChapterInfoSection.style.display="block";
}