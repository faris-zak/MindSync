function search_section(){
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName('sections');
  
  for (i = 0; i < x.length; i++){
    if (!x[i].innerHTML.toLowerCase().includes(input)){
    x[i].style.display = 'none';
    }
    else{
    x[i].style.display = 'list-item';
    }
}};


function clearField(){
  document.getElementById('searchbar').value = '';
}


const searchbar = document.getElementById('searchbar');
const clearButton = document.getElementById('clearButton');

function updateButtonVisibility() {
  if (searchbar.value === ''){
    clearButton.style.opacity = 0;
    clearButton.style.cursor = 'default';
    clearButton.style.marginBottom = '0px';
    searchbar.style.marginBottom = '0px';
  }
  else{
    clearButton.style.opacity = 1;
    clearButton.style.cursor = 'pointer';
    clearButton.style.marginBottom = '50px';
    searchbar.style.marginBottom = '10px';
  }
}

updateButtonVisibility();

searchbar.addEventListener('input', updateButtonVisibility);

clearButton.addEventListener('click', function(){
  location.reload();
});