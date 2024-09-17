function loadVars() {
    var redTeam = localStorage.getItem("redTeam")
    var blueTeam = localStorage.getItem("blueTeam")
    var redScore = localStorage.getItem("redScore")
    var blueScore = localStorage.getItem("blueScore")
    var redStocks = localStorage.getItem("redStocks")
    var blueStocks = localStorage.getItem("blueStocks")

    if (!redTeam) { redTeam = "red" }
    if (!blueTeam) { blueTeam = "blue" }
    if (!redScore) { redScore = "0" }
    if (!blueScore) { blueScore = "0" }
    if (!redStocks) { redStocks = "12" }
    if (!blueStocks) { blueStocks = "12" }

    document.getElementById("redTeam").value = redTeam
    document.getElementById("blueTeam").value = blueTeam
    document.getElementById("redScore").value = redScore
    document.getElementById("blueScore").value = blueScore
    document.getElementById("redStocks").value = redStocks
    document.getElementById("blueStocks").value = blueStocks
}

function storeVars() {
    let redTeam = document.getElementById("redTeam").value
    let blueTeam = document.getElementById("blueTeam").value
    let redScore = document.getElementById("redScore").value
    let blueScore = document.getElementById("blueScore").value
    let redStocks = document.getElementById("redStocks").value
    let blueStocks = document.getElementById("blueStocks").value

    localStorage.setItem("redTeam", redTeam)
    localStorage.setItem("blueTeam", blueTeam)
    localStorage.setItem("redScore", redScore)
    localStorage.setItem("blueScore", blueScore)
    localStorage.setItem("redStocks", redStocks)
    localStorage.setItem("blueStocks", blueStocks)
    localStorage.setItem("redPlayers", Math.ceil(redStocks/3))
    localStorage.setItem("bluePlayers", Math.ceil(blueStocks/3))
    localStorage.setItem("game", parseInt(blueScore)+parseInt(redScore)+1)
    
    loadVars();
}

function swapVars() {
    let redTeam = document.getElementById("redTeam").value
    let blueTeam = document.getElementById("blueTeam").value
    let redScore = document.getElementById("redScore").value
    let blueScore = document.getElementById("blueScore").value
    let redStocks = document.getElementById("redStocks").value
    let blueStocks = document.getElementById("blueStocks").value

    var tmp
    tmp = redTeam
    redTeam = blueTeam
    blueTeam = tmp

    tmp = redScore
    redScore = blueScore
    blueScore = tmp

    tmp = redStocks
    redStocks = blueStocks
    blueStocks = tmp

    localStorage.setItem("redTeam", redTeam)
    localStorage.setItem("blueTeam", blueTeam)
    localStorage.setItem("redScore", redScore)
    localStorage.setItem("blueScore", blueScore)
    localStorage.setItem("redStocks", redStocks)
    localStorage.setItem("blueStocks", blueStocks)
    localStorage.setItem("redPlayers", Math.ceil(redStocks/3))
    localStorage.setItem("bluePlayers", Math.ceil(blueStocks/3))
    localStorage.setItem("game", parseInt(blueScore)+parseInt(redScore)+1)
    
    loadVars();
}

document.getElementById("submit").addEventListener("click", storeVars);
document.getElementById("swap").addEventListener("click", swapVars);

loadVars();