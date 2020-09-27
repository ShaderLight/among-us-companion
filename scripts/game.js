async function startGame() {
    if ((window.playerColors.length > 10) || (window.playerColors.length < 3)){
        alert("Player count must be between 3 and 10")
    }
    else {
        document.getElementById("player-container").innerHTML = generatePlayerTable()
        initPlayerData()
        loadPlayerImages()
        scaleFont()
        document.getElementById("selection-page").classList.toggle("faded")

        await sleep(80)
        $('.wrapper').scrollTo('#game-page', {duration:600})
        window.currentPage = $('#game-page')
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

function generatePlayerTable() {
    var tableString;
        
    rowNum = Math.ceil(window.playerColors.length/2)
    height = rowNum * 20
    tableString = `<table id="player-table" cellpadding="0" cellspacing="0" style="height: ${height}%">`

    for (i=0; i<rowNum; i++) {
        tableString += "<tr>"
        
        if (window.playerColors[i+rowNum] == undefined) {
            tableString += `<td id="${window.playerColors[i]}-cell" class="player-cell" onclick="stateCycle(this.id)">${window.playerColors[i]}</td>`
        }
        else {
            tableString += `<td id="${window.playerColors[i]}-cell" class="player-cell" onclick="stateCycle(this.id)">${window.playerColors[i]}</td><td id="${window.playerColors[i+rowNum]}-cell" class="player-cell" onclick="stateCycle(this.id)">${window.playerColors[i+rowNum]}`
        }
    }

    tableString += "</table>"

    return tableString
}

function stateCycle(invokedById) {
    var invokedBy = $(`#${invokedById}`)
    switch (invokedBy.data('state')) {
        case "stateless":
            invokedBy.data('state', "clean")
            invokedBy[0].innerHTML = `${invokedBy.data('img')} ${invokedBy.data('color')} (${invokedBy.data('state')})`
            break
        case "clean":
            invokedBy.data('state', "suspected")
            invokedBy[0].innerHTML = `${invokedBy.data('img')} ${invokedBy.data('color')} (${invokedBy.data('state')})`
            break
        case "suspected":
            invokedBy.data('state', "dead")
            invokedBy[0].innerHTML = `${invokedBy.data('img')} ${invokedBy.data('color')} (${invokedBy.data('state')})`
            break
        case "dead":
            invokedBy.data('state', "stateless")
            invokedBy[0].innerHTML = `${invokedBy.data('img')} ${invokedBy.data('color')}`
    }
}

function initPlayerData() {
    var rowNum = Math.ceil(window.playerColors.length/2)
    for (i=0; i<rowNum; i++) {
        if (window.playerColors[i+rowNum] == undefined) {
            $(`#${window.playerColors[i]}-cell`).data("color", window.playerColors[i])
            $(`#${window.playerColors[i]}-cell`).data("state", "stateless")
        }
        else {
            $(`#${window.playerColors[i]}-cell`).data("color", window.playerColors[i])
            $(`#${window.playerColors[i]}-cell`).data("state", "stateless")

            $(`#${window.playerColors[i+rowNum]}-cell`).data("color", window.playerColors[i+rowNum])
            $(`#${window.playerColors[i+rowNum]}-cell`).data("state", "stateless")
        }
    }
}

function loadPlayerImages() {
    var playerCell;
    for (i=0; i<window.playerColors.length; i++) {
        playerCell = $(`#${window.playerColors[i]}-cell`)
        playerCell[0].innerHTML = `<img class="player-img" src="img/crewmate.png"> ${playerCell.data('color')}`
        playerCell.data('img', '<img class="player-img" src="img/crewmate.png">')
    }
}