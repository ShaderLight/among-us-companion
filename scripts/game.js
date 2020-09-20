async function startGame() {
    if ((window.playerColors.length > 10) || (window.playerColors.length < 3)){
        alert("Player count must be between 3 and 10")
    }
    else {
        document.getElementById("selection-page").classList.toggle("faded")

        await sleep(80)
        $('.wrapper').scrollTo('#game-page', {duration:600})
        window.currentPage = $('game-page')
        await sleep(300)

        document.getElementById("game-page").classList.toggle("faded")
    }
}

async function endGame() {
    document.getElementById("game-page").classList.toggle("faded")

    await sleep(80)
    $('.wrapper').scrollTo('#post-game', {duration:600})
    window.currentPage = $('#post-game')
    await sleep(300)

    document.getElementById("post-game").classList.toggle("faded")
}