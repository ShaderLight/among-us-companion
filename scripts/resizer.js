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
        document.getElementsByClassName('wrapper')[0].style.animationDuration = "80s"
        document.getElementsByClassName('wrapper')[0].style.webkitAnimationDuration = "80s"
        document.getElementsByClassName('wrapper')[0].style.mozAnimationDuration = "80s"
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
        document.getElementsByClassName('wrapper')[0].style.animationDuration = "30s"
        document.getElementsByClassName('wrapper')[0].style.webkitAnimationDuration = "30s"
        document.getElementsByClassName('wrapper')[0].style.mozAnimationDuration = "30s"
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

    if (viewPortWidth <= 559) {
        document.getElementsByClassName('wrapper')[0].style.backgroundSize = 'cover'
        document.getElementsByClassName('wrapper')[0].style.animationDuration = "20s"
        document.getElementsByClassName('wrapper')[0].style.webkitAnimationDuration = "20s"
        document.getElementsByClassName('wrapper')[0].style.mozAnimationDuration = "20s"
    }
    else {
        document.getElementsByClassName('wrapper')[0].style.backgroundSize = 'contain'
    }
}