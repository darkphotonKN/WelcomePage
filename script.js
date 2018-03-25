
/* section highlighting */

let navAbout = document.getElementById("nav-about");
let aboutSection = document.getElementById("about");
let aboutSectionBG = aboutSection.style.backgroundColor;


navAbout.addEventListener('click', function() {
  if(aboutSection.style.backgroundColor != "#a4b0be") {
    aboutSection.style.backgroundColor = "#a4b0be";
  } else {
    aboutSection.style.backgroundColor = "white";
  }
});
