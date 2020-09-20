function startGame() {
    if ((window.playerColors.length > 10) || (window.playerColors.length < 3)){
        alert("Player count must be between 3 and 10")
    }
    else {
        console.log('started the game')
    }
}