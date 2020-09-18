async function init() {
    window.playerColors = ["red", "blue", "green", "pink", "orange", "yellow", "grey", "white", "purple", "brown", "cyan", "lime"]
    document.getElementById("welcome-header").classList.toggle("faded")
    document.getElementById("welcome-desc").classList.toggle("faded")
    document.getElementById("begin-button").classList.toggle("faded")
    await sleep(500)
    document.getElementById("color-selection").classList.toggle("faded")

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}