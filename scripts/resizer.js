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
    var images = $('.player-img')

    if (viewPortWidth >= 1500) {
        for (i = 0; i < len; i++) {
            elements[i].style.fontSize = "xx-large"
        }
        images.height(60)
        images.width(75)
    }
    else if (viewPortWidth >= 1200) {
        for (i = 0; i < len; i++) {
            elements[i].style.fontSize = "x-large"
        }
        images.height(52)
        images.width(65)
    }
    else if (viewPortWidth >= 1000) {
        for (i = 0; i < len; i++) {
            elements[i].style.fontSize = "large"
        }
        images.height(44)
        images.width(55)
    }
    else if (viewPortWidth >= 900) {
        for (i = 0; i < len; i++) {
            elements[i].style.fontSize = "medium"
        }
        images.height(40)
        images.width(50)
    }
    else {
        for (i = 0; i < len; i++) {
            elements[i].style.fontSize = "small"
        }
        images.height(36)
        images.width(45)
    }
}