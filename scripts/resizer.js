$(window).resize(function(){
    $('.wrapper').scrollTo(window.currentPage)
    try {
        scaleFont()
    }
    catch(e) {
        console.log(e)
    }
})

function scaleFont() {
    var viewPortWidth = $(window).width();
    var elements = document.getElementsByClassName("player-cell")
    var len = elements.length

    if (viewPortWidth >= 1500) {
        for (i = 0; i < len; i++) {
            elements[i].style.fontSize = "xx-large"
        }
    }
    else if (viewPortWidth >= 1200) {
        for (i = 0; i < len; i++) {
            elements[i].style.fontSize = "x-large"
        }
    }
    else if (viewPortWidth >= 1000) {
        for (i = 0; i < len; i++) {
            elements[i].style.fontSize = "large"
        }
    }
    else if (viewPortWidth >= 900) {
        for (i = 0; i < len; i++) {
            elements[i].style.fontSize = "mediun"
        }
    }
    else {
        for (i = 0; i < len; i++) {
            elements[i].style.fontSize = "small"
        }
    }
}