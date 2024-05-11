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
    clearButton.style.marginBottom = "0px";
    searchbar.style.marginBottom = "0px";
  }
  else{
    clearButton.style.opacity = 1;
    clearButton.style.marginBottom = "50px";
    searchbar.style.marginBottom = "10px";
  }
}

updateButtonVisibility();

searchbar.addEventListener('input', updateButtonVisibility);


const firstChapterButton = document.getElementById('firstChapterButton');
const secondChapterButton = document.getElementById('secondChapterButton');
const allChaptersButton = document.getElementById('showAllChaptersEleventhGradeButton');
const firstInfoChapter = document.getElementById('firstChapterInfoSection');
const secondInfoChapter = document.getElementById('secondChapterInfoSection');
const secondDownInfoChapter = document.getElementById('secondDownChapterInfoSection');
const firstChapter = document.getElementById('firstChapterSection');
const secondChapter = document.getElementById('secondChapterSection');
const secondChapterSectionLine = document.getElementById('secondChapterSectionLine');


function showFirstChapter(){
  firstChapter.style.display="block";
  secondChapter.style.display="none";
  firstInfoChapter.style.display="block";
  secondInfoChapter.style.display="none";
  secondDownInfoChapter.style.display="none";
  secondChapterSectionLine.style.display="none";
}

function showSecondChapter(){
  firstChapter.style.display="none";
  secondChapter.style.display="block";
  firstInfoChapter.style.display="none";
  secondInfoChapter.style.display="block";
  secondDownInfoChapter.style.display="none";
  secondChapterSectionLine.style.display="none";
}

function showAllChapter(){
  firstChapter.style.display="block";
  secondChapter.style.display="block";
  firstInfoChapter.style.display="block";
  secondInfoChapter.style.display="none";
  secondDownInfoChapter.style.display="block";
  secondChapterSectionLine.style.display="block";
}