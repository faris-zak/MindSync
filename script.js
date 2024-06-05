console.log("Connected Successfully.");


var mindSyncHomeIcon = document.getElementById("mindSyncHomeIcon");

window.onscroll = function() {smallScreenScrollFunction()};

function smallScreenScrollFunction(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mindSyncHomeIcon.setAttribute("href", "#top");
  } else {
    mindSyncHomeIcon.setAttribute("href", "index.html");
  }
}

function mindSyncHomeIcon(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// -----------------

var toTop = document.getElementById("toTop");

window.onscroll = function() {bigScreenScrollFunction()};

function bigScreenScrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTop.style.opacity = "1";
    toTop.style.paddingBottom = "100px";
  } else {
    toTop.style.opacity = "0";
    toTop.style.paddingBottom = "0px";
  }
}

function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}