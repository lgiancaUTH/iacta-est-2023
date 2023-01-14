
// remove button.
//document.getElementsByClassName('page-header')[0].children[2].style.display = 'none';
//add menu buttons


var menuBar = ' \
<a href="./" class="btn">Home</a> \
<a href="data-info" class="btn">Data Info</a> \
<a href="leaderboard" class="btn">Submission and Leaderboard</a> \
';

// var menuBar = ' \
// <a href="./" class="btn">Home</a> \
// <a href="data-info" class="btn">Data Info</a>';

document.getElementsByClassName('page-header')[0].children[2].outerHTML = menuBar;
//add logo
var currTitle = document.getElementsByClassName('project-name')[0].innerHTML ;
document.getElementsByClassName('project-name')[0].innerHTML = '<img src="res/logo-iacta-est2023-small.png" width="100px"> ' + currTitle;

document.addEventListener('readystatechange', event => { 

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") {
      document.getElementsByClassName('site-footer-owner')[0].style.display = 'none';
      document.getElementsByClassName('site-footer-credits')[0].style.display = 'none';
    }
});


