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

const eleventhFirstChapterInfoSection = document.getElementById('eleventhFirstChapterInfoSection');
const eleventhSecondChapterInfoSection = document.getElementById('eleventhSecondChapterInfoSection');

const site2025 = document.getElementById('site2025');


// const secondDownInfoChapter = document.getElementById('secondDownChapterInfoSection');

const eleventhFirstChapterSection = document.getElementById('eleventhFirstChapterSection');
const eleventhSecondChapterSection = document.getElementById('eleventhSecondChapterSection');


function showEleventhGrade(){
  showFirstChapterEleventhGradeButton.style.display="inline-flex";
  showSecondChapterEleventhGradeButton.style.display="inline-flex";
  showTwelfthGradeButton.style.opacity="0.6";
  showTwelfthGradeButton.style.color="#14213D";
  showEleventhGradeButton.style.opacity="1";
  showEleventhGradeButton.style.color="#FCA311";
  searchBarSection.style.display="none";
  site2025.style.display="none";
}

function showTwelfthGrade(){
  showFirstChapterEleventhGradeButton.style.display="none";
  showSecondChapterEleventhGradeButton.style.display="none";
  eleventhSecondChapterSection.style.display="none";
  eleventhFirstChapterInfoSection.style.display="none";
  eleventhFirstChapterSection.style.display="none";
  eleventhSecondChapterInfoSection.style.display="none";
  showTwelfthGradeButton.style.opacity="1";
  showTwelfthGradeButton.style.color="#FCA311";
  showEleventhGradeButton.style.opacity="0.6";
  showEleventhGradeButton.style.color="#14213D";
  showSecondChapterEleventhGradeButton.style.opacity="1";
  showSecondChapterEleventhGradeButton.style.color="#14213D";
  showFirstChapterEleventhGradeButton.style.opacity="1";
  showFirstChapterEleventhGradeButton.style.color="#14213D";
  searchBarSection.style.display="none";
  site2025.style.display="block";
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