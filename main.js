/*global document,setTimeout*/

var slideIndex = 0;
slideShow();

function slideShow() {

    'use strict';

    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('dot');

    /* I Have To site All mySlides and dot To desplay None */

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    if(slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active","");
    }
    
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className = dots[slideIndex-1].className + " active";
    
    setTimeout(slideShow, 3000);
}