async function init() {
    window.playerColors = ["red", "blue", "green", "pink", "orange", "yellow", "grey", "white", "purple", "brown", "cyan", "lime"]
    
    document.getElementById("welcome-page").classList.toggle("faded")

    await sleep(80)
    $('.wrapper').scrollTo('#color-selection', {duration:600})
    await sleep(300)

    document.getElementById("selection-page").classList.toggle("faded")

    window.currentPage = $('#color-selection')

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}