$('document').ready(function() {window.currentPage = $('#welcome-page')});
$('document').ready(scaleFont());

async function init() {
    window.playerColors = ["red", "blue", "green", "pink", "orange", "yellow", "grey", "white", "purple", "brown", "cyan", "lime"]
    
    document.getElementById("welcome-page").classList.toggle("faded")

    await sleep(80)
    $('.wrapper').scrollTo('#selection-page', {duration:600})
    await sleep(300)

    document.getElementById("selection-page").classList.toggle("faded")

    window.currentPage = $('#selection-page')
    updateStartButton()
}

async function initAgain() {
    document.getElementById("post-game").classList.toggle("faded")

    await sleep(80)
    $('.wrapper').scrollTo('#welcome-page')
    $('.wrapper').scrollTo('#selection-page', {duration:600})
    await sleep(300)

    document.getElementById("selection-page").classList.toggle("faded")

    window.currentPage = $('#selection-page')
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}