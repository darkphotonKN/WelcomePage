
// global
var bgTextHighlight = "#25CCF7";
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



function navAdapt() {
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

    // change style back to original if scrolled close to the top
    if(topHead > headThreshold) {
      aboutSection.style.fontSize = "16px";
      aboutSection.style.backgroundColor  = bgTextOriginal;
      aboutSection.style.boxShadow = "0px 0px 0px 0px";
      expSection.style.fontSize = "16px";
      expSection.style.backgroundColor = bgTextOriginal;
      expSection.style.boxShadow = "0px 0px 0px 0px";
    }

  });
}

/* Section Highlighting */
function sectionHighlighting() {


  navAbout.addEventListener('click', function() {

    if(aboutSection.style.backgroundColor != bgTextHighlight) {
      aboutSection.style.backgroundColor = bgTextHighlight;
      aboutSection.style.fontSize = "18px";
      aboutSection.style.boxShadow = "0px 50px 30px -30px";
      expSection.style.backgroundColor = bgTextOriginal;
      expSection.style.fontSize = "16px";
      expSection.style.boxShadow = "0px 0px 0px 0px";
    }
  });

  navExperience.addEventListener('click', function() {
    if(expSection.style.backgroundColor != bgTextHighlight) {
      expSection.style.backgroundColor = bgTextHighlight;
      expSection.style.fontSize = "18px";
      expSection.style.boxShadow = "0px 50px 30px -30px";
      aboutSection.style.backgroundColor  = bgTextOriginal;
      aboutSection.style.fontSize = "16px";
      aboutSection.style.boxShadow = "0px 0px 0px 0px";
    }
  });

  navAdapt();
}

// initiate order
function init() {
  // activate nav highlighting
  sectionHighlighting();
}



//initiate web app
init();
