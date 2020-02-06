var rankingEl = document.getElementById("ranking");
var allScores = JSON.parse(localStorage.getItem("highscores"));
var clearIt = document.getElementById("clearIt");
console.log(allScores);
console.log(rankingEl)

function ranking() {
    allScores.sort(function (a, b) { return b.score - a.score });
    console.log(allScores);
    for (var i = 0; i < 5; i++) {
        var rank = document.createElement("h3");
        rank.textContent =  "intials : "+allScores[i].intials+" score: "+allScores[i].score;
        rankingEl.appendChild(rank);
        
    };


}
clearIt.addEventListener("click", function() {
    localStorage.clear();
    rankingEl.innerHTML="";
} );


ranking();