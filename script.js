console.log("Connected Successfully.");


var topFunction = document.getElementById("mindSyncHomeIcon");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topFunction.setAttribute("href", "#");
  } else {
    topFunction.setAttribute("href", "index.html");
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}