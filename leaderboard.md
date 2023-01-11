---
layout: default
permalink: /leaderboard
title: Submission and Leaderboard
---

<script type="text/javascript" src="header.js"></script>

<script>

document.addEventListener('readystatechange', event => { 

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") {
        // make iframe full page
        document.getElementById('content').style = "max-width:none;";
    }
});

// Browser detection
window.addEventListener("load", () => {
  // CHROME
  if (navigator.userAgent.indexOf("Chrome") != -1 ) {
    // console.log("Google Chrome");
  }
  // FIREFOX
  else if (navigator.userAgent.indexOf("Firefox") != -1 ) {
    // console.log("Mozilla Firefox");
  }
  // EDGE
  else if (navigator.userAgent.indexOf("Edge") != -1 ) {
    // console.log("Internet Exploder");
  }
  // OTHERS
  else {
    alert('The submission website is only compatible with Chrome, Firefox and Edge.')
  }


//   // SAFARI
//   else if (navigator.userAgent.indexOf("Safari") != -1 ) {
//     // console.log("Safari");
//   }
//   // OPERA
//   else if (navigator.userAgent.indexOf("Opera") != -1 ) {
//     console.log("Opera");
//   }
//   // YANDEX BROWSER
//   else if (navigator.userAgent.indexOf("YaBrowser") != -1 ) {
//     console.log("YaBrowser");
//   }  
});

</script>

<iframe src="https://glabapps.uth.edu/IACTA-EST-2023/" title="description" style="width: 100%;height: 1200px;"></iframe >
