
/* section highlighting */
// global
var bgTextHighlight = "#82ccdd";
var bgTextOriginal = "#ffffff";
var head = document.getElementById("header");

// about
var navAbout = document.getElementById("nav-about");
var aboutSection = document.getElementById("about");

// experience
var navExperience = document.getElementById("nav-experience");
var expSection = document.getElementById("experience");

// nav
var nav = document.getElementById("navList");
var navOffsetThreshold = -23;
var headThreshold = 20;

//console.log(aboutSectionBG);

/* Section Highlighting */

navAbout.addEventListener('click', function() {

  if(aboutSection.style.backgroundColor != bgTextHighlight) {
    aboutSection.style.backgroundColor = bgTextHighlight;
    expSection.style.backgroundColor = bgTextOriginal;
  }
});

navExperience.addEventListener('click', function() {
  if(expSection.style.backgroundColor != bgTextHighlight) {
    expSection.style.backgroundColor = bgTextHighlight;
    aboutSection.style.backgroundColor  = bgTextOriginal;
  }
});

window.addEventListener('scroll', function(e) {
  let viewportOffsetHead = head.getBoundingClientRect();
  let viewportOffsetNav = nav.getBoundingClientRect();
  // these are relative to the viewport, i.e. the window
  let topHead = viewportOffsetHead.top; // offset of header element's start position relative with top of viewport
  let topNav = viewportOffsetNav.top; // offset of nav element's start position relative with top of viewport

  if(topNav<navOffsetThreshold) {
    nav.classList.add("scrollNav");
  } else {
    nav.classList.remove("scrollNav");
  }

  if(topHead > headThreshold) {
    expSection.style.backgroundColor = bgTextOriginal;
    aboutSection.style.backgroundColor  = bgTextOriginal;
  }

});
