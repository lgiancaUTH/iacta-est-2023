---
layout: default
title: "page1"
permalink: /page1
---


<script>
// remove element by class
function rmElByClass(className) {
    // grab element  to hide
    // const elem = document.querySelector('#hint')
    const elem = document.getElementsByClassName( className )[0];

    // remove element
    elem.parentNode.removeChild(elem);

}

document.addEventListener('readystatechange', event => { 

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") {
        //=== Remove elements
        // // button.
        // document.getElementsByClassName('page-header')[0].children[2].style.display = 'none';
        // // footers
        // document.getElementsByClassName('site-footer-owner')[0].style.display = 'none';
        // document.getElementsByClassName('site-footer-credits')[0].style.display = 'none';
        const elem =  document.getElementsByClassName('page-header')[0].children[2];
        elem.parentNode.removeChild(elem);
        rmElByClass( 'site-footer-owner' );
        rmElByClass( 'site-footer-credits' );

        //=== 

        // make iframe full page
        document.getElementById('content').style = "max-width:none;";
    }
});


</script>


# test page 1
<!-- <iframe src="https://glabapps.uth.edu/" title="description"></iframe > -->
<iframe src="https://glabapps.uth.edu/IACTA-EST-2023/" title="description" style="width: 100%;height: 1200px;"></iframe >
