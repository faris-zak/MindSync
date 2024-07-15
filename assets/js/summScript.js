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

function updateButtonVisibility() {
  if (searchbar.value === ""){

    searchbar.style.marginBottom = "0px";
  }
  else{
    searchbar.style.marginBottom = "10px";
  }
}

updateButtonVisibility();

searchbar.addEventListener('input', updateButtonVisibility);


const searchBarSection = document.getElementById('searchBarSection');

const showFirstChapterEleventhGradeButton = document.getElementById('showFirstChapterEleventhGradeButton');
const showSecondChapterEleventhGradeButton = document.getElementById('showSecondChapterEleventhGradeButton');

const showEleventhGradeButton = document.getElementById('showEleventhGradeButton');
const showTwelfthGradeButton = document.getElementById('showTwelfthGradeButton');


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
  showTwelfthGradeButton.style.opacity="0.6";
  showTwelfthGradeButton.style.color="#14213D";
  showEleventhGradeButton.style.opacity="1";
  showEleventhGradeButton.style.color="#FCA311";
  showSecondChapterTwelfthGradeButton.style.opacity="1";
  showSecondChapterTwelfthGradeButton.style.color="#14213D";
  showFirstChapterTwelfthGradeButton.style.opacity="1";
  showFirstChapterTwelfthGradeButton.style.color="#14213D";
  searchBarSection.style.display="none";
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
  showTwelfthGradeButton.style.opacity="1";
  showTwelfthGradeButton.style.color="#FCA311";
  showEleventhGradeButton.style.opacity="0.6";
  showEleventhGradeButton.style.color="#14213D";
  showSecondChapterEleventhGradeButton.style.opacity="1";
  showSecondChapterEleventhGradeButton.style.color="#14213D";
  showFirstChapterEleventhGradeButton.style.opacity="1";
  showFirstChapterEleventhGradeButton.style.color="#14213D";
  searchBarSection.style.display="none";
}

function showEleventhGradeFirstChapter(){
  eleventhFirstChapterSection.style.display="block";
  eleventhSecondChapterSection.style.display="none";
  eleventhFirstChapterInfoSection.style.display="block";
  eleventhSecondChapterInfoSection.style.display="none";
  showSecondChapterEleventhGradeButton.style.opacity="0.6";
  showSecondChapterEleventhGradeButton.style.color="#14213D";
  showFirstChapterEleventhGradeButton.style.opacity="1";
  showFirstChapterEleventhGradeButton.style.color="#FCA311";
  searchBarSection.style.display="flex";
}

function showEleventhGradeSecondChapter(){
  eleventhFirstChapterSection.style.display="none";
  eleventhSecondChapterSection.style.display="block";
  eleventhFirstChapterInfoSection.style.display="none";
  eleventhSecondChapterInfoSection.style.display="block";
  showSecondChapterEleventhGradeButton.style.opacity="1";
  showSecondChapterEleventhGradeButton.style.color="#FCA311";
  showFirstChapterEleventhGradeButton.style.opacity="0.6";
  showFirstChapterEleventhGradeButton.style.color="#14213D";
  searchBarSection.style.display="flex";
}

function showTwelfthGradeFirstChapter(){
  twelfthFirstChapterSection.style.display="block";
  twelfthSecondChapterSection.style.display="none";
  twelfthFirstChapterInfoSection.style.display="block";
  twelfthSecondChapterInfoSection.style.display="none";
  showSecondChapterTwelfthGradeButton.style.opacity="0.6";
  showSecondChapterTwelfthGradeButton.style.color="#14213D";
  showFirstChapterTwelfthGradeButton.style.opacity="1";
  showFirstChapterTwelfthGradeButton.style.color="#FCA311";
  searchBarSection.style.display="flex";
}

function showTwelfthGradeSecondChapter(){
  twelfthFirstChapterSection.style.display="none";
  twelfthSecondChapterSection.style.display="block";
  twelfthFirstChapterInfoSection.style.display="none";
  twelfthSecondChapterInfoSection.style.display="block";
  showSecondChapterTwelfthGradeButton.style.opacity="1";
  showSecondChapterTwelfthGradeButton.style.color="#FCA311";
  showFirstChapterTwelfthGradeButton.style.opacity="0.6";
  showFirstChapterTwelfthGradeButton.style.color="#14213D";
  searchBarSection.style.display="flex";
}