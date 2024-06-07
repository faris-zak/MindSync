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
  
  clearButton.addEventListener('click', function(){
    location.reload();
  });


  let isWorkTime = true;
  let workDuration = 25 * 60; // 25 minutes
  let breakDuration = 5 * 60; // 5 minutes
  let timerDuration = workDuration;
  let timer;
  let isPaused = true;
  
  const timerElement = document.getElementById("pomodoroTimer");
  
  function startTimer() {
      if (isPaused) {
          isPaused = false;
          timer = setInterval(updateTimer, 1000);
      }
  }
  
  function pauseTimer() {
      isPaused = true;
      clearInterval(timer);
  }
  
  function resetTimer() {
      isPaused = true;
      clearInterval(timer);
      timerDuration = isWorkTime ? workDuration : breakDuration;
      displayTime(timerDuration);
  }
  
  function updateTimer() {
      if (timerDuration > 0) {
          timerDuration--;
          displayTime(timerDuration);
      } else {
          clearInterval(timer);
          isWorkTime = !isWorkTime;
          timerDuration = isWorkTime ? workDuration : breakDuration;
          displayTime(timerDuration);
          startTimer();
      }
  }
  
  function displayTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      timerElement.innerHTML = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }
  
  // Initialize the timer display
  displayTime(timerDuration);