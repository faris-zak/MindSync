console.log("Connected Successfully.");


const mindSyncHomeIcon = document.getElementById("mindSyncHomeIcon");

window.onscroll = function() {smallScreenScrollFunction()};

function smallScreenScrollFunction(){
  if (document.body.scrollTop > 20 && document.documentElement.scrollTop > 20) {
    mindSyncHomeIcon.setAttribute("href", "#");
  } else {
    mindSyncHomeIcon.setAttribute("href", "index.html");
  }
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



import Hotjar from '@hotjar/browser';

const siteId = 5039200;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);