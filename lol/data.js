function loadVars() {
    var blueName = localStorage.getItem("blue")
    var blueScore =  localStorage.getItem("blueScore")
    var redName = localStorage.getItem("red")
    var redScore = localStorage.getItem("redScore")
    var patch = localStorage.getItem("patch")

    if (!blueName) { blueName = "Blue" }

    if (!blueScore) { blueScore = 0 }

    if (!redName) { redName = "Red" }

    if (!redScore) { redScore = 0 }

    if (!patch) { patch = getLatest() }

    document.getElementById("blue").value = blueName
    document.getElementById("blueScore").value = blueScore
    document.getElementById("red").value = redName
    document.getElementById("redScore").value = redScore
    document.getElementById("patch").value = patch
}

function getLatest() {
    return JSON.parse(Get("https://ddragon.leagueoflegends.com/api/versions.json"))[0].split(".").slice(0,2).join(".");
}

function Get(url){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",url,false);
    Httpreq.send(null);
    return Httpreq.responseText;
}

function storeVars() {
    let blueVar = document.getElementById("blue").value
    let blueScoreVar = document.getElementById("blueScore").value
    let redVar = document.getElementById("red").value
    let redScoreVar = document.getElementById("redScore").value
    let patchVar = document.getElementById("patch").value

    localStorage.setItem("blue", blueVar)
    localStorage.setItem("blueScore", blueScoreVar)
    localStorage.setItem("red", redVar)
    localStorage.setItem("redScore", redScoreVar)
    localStorage.setItem("game", parseInt(blueScoreVar)+parseInt(redScoreVar)+1)
    localStorage.setItem("patch", patchVar)
    
    loadVars();
}

function swapVars() {
    let blueVar = document.getElementById("blue").value
    let blueScoreVar = document.getElementById("blueScore").value
    let redVar = document.getElementById("red").value
    let redScoreVar = document.getElementById("redScore").value
    let patchVar = document.getElementById("patch").value

    var tmp
    tmp = redVar
    redVar = blueVar
    blueVar = tmp

    tmp = redScoreVar
    redScoreVar = blueScoreVar
    blueScoreVar = tmp

    localStorage.setItem("blue", blueVar)
    localStorage.setItem("blueScore", blueScoreVar)
    localStorage.setItem("red", redVar)
    localStorage.setItem("redScore", redScoreVar)
    localStorage.setItem("game", parseInt(blueScoreVar)+parseInt(redScoreVar)+1)
    localStorage.setItem("patch", patchVar)
    
    loadVars();
}

document.getElementById("submit").addEventListener("click", storeVars);
document.getElementById("swap").addEventListener("click", swapVars);

loadVars();