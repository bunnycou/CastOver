function load() {
    var redTeam = localStorage.getItem("redTeam")
    var blueTeam = localStorage.getItem("blueTeam")
    var redScore = localStorage.getItem("redScore")
    var blueScore = localStorage.getItem("blueScore")
    var redStocks = localStorage.getItem("redStocks")
    var blueStocks = localStorage.getItem("blueStocks")
    var redPlayers = parseInt(localStorage.getItem("redPlayers"))
    var bluePlayers = parseInt(localStorage.getItem("bluePlayers"))

    if (!redTeam) { redTeam = "red" }
    if (!blueTeam) { blueTeam = "blue" }
    if (!redScore) { redScore = 0 }
    if (!blueScore) { blueScore = 0 }
    if (!redStocks) { redStocks = 12 }
    if (!blueStocks) { blueStocks = 12 }

    document.getElementById("redTeam").textContent = redTeam
    document.getElementById("blueTeam").textContent = blueTeam
    document.getElementById("redScore").textContent = redScore
    document.getElementById("blueScore").textContent = blueScore
    document.getElementById("redStocks").textContent = redStocks
    document.getElementById("blueStocks").textContent = blueStocks
    document.getElementById("redPlayers").textContent = playerString(redPlayers)
    document.getElementById("bluePlayers").textContent = playerString(bluePlayers).split("").reverse().join("")
}

setInterval(load, 1000)

function playerString(players) {
    var ret = ""
    for (var i = 0; i < 4; i++) {
        if (i < players) {
            ret += "\u25cf"
        } else {
            ret += "\u26ac"
        }
    }

    return ret
}