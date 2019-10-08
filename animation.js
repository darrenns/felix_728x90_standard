window.onload = function () {
    
    var tlOne, banner, background, backgroundimageOne, FrameOne, cta, bgexit;
    var tlOne = new TimelineLite();
    var banner = document.getElementById("banner");
    var frameOne = document.getElementById("frameOne");
    var cta = document.getElementById("cta");
    var textOne = document.getElementById("textOne");
    var catAnimationOne = document.getElementById("catAnimationOne");
    var catAnimationOneB = document.getElementById("catAnimationOneB");
    var productAnimationOne = document.getElementById("productAnimationOne");
    var productAnimationOneB = document.getElementById("productAnimationOneB");
    var frameTwo = document.getElementById("frameTwo");
    var textTwo = document.getElementById("textTwo");
    var endFrame = document.getElementById("endFrame");
    var endFrameBackground = document.getElementById("endFrameBackground");
    var redBar = document.getElementById("redBar");
    
    function initBannerAdd() {
        setPositionsObjects();
        animateAdNew();
    }

    function setPositionsObjects() {
        cta.style.opacity = "0";
        catAnimationOne.style.opacity = "1";
        textOne.style.opacity = "0";
        productAnimationOne.style.opacity = "1";
        frameTwo.style.opacity= "0";
        endFrame.style.opacity= "0";
        banner.style.opacity = "1";
    }
    
    function animateAdNew() {
        tlOne.to(textOne,1, {delay: 1, opacity:1, ease:Power4.easeout}, "-=0")
        .to(textOne,0.5, {delay: 0.5, opacity:0, ease:Power4.easeout}, "-=0")
        .to(frameTwo,1, {delay: 0.5, opacity:1, ease:Power4.easeout}, "-=0")
        .to(frameTwo,0.5, {delay: 1, opacity:0, ease:Power4.easeout}, "-=0")
        .to(endFrame,0, {delay: 0, opacity:1, ease:Power4.easeout}, "-=0")
        .to(redBar,0, {delay: 0, opacity:1, ease:Power4.easeout}, "-=0")
        .to(cta,1, {delay: 0, opacity:1, ease:Power4.easeout}, "-=0")
        .to(endFrame,0.5, {delay: 4, opacity:1, ease:Power4.easeout, onComplete:restartAnimation}, "-=0")
        //tlOne.totalDuration(12);
    }
    
    ////timer
    var myVar = setInterval(function () {myTimer()}, 1000);
    function myTimer() {
        var d = new Date();
        //tlOne.totalDuration(10);
    }

    var animationLoop = 1;
    function restartAnimation() {
        if (animationLoop === 1) {
             animationLoop = animationLoop + 1;
             productAnimationOne.style.opacity = "0";
             catAnimationTwo.style.opacity = "0";
             catAnimationOne.style.opacity = "0";
             catAnimationOneB.style.opacity = "1";
             productAnimationOne.style.opacity = "0";
             productAnimationOneB.style.opacity = "1";
             tlOne.restart();
             productAnimationOne.style.opacity = "0";
        }
    }
    initBannerAdd(); 
    //init(); ///start initialising everything   
    /////////////// /////////////// /////////////// //////////////  
};