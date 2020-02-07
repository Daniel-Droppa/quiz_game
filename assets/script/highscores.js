var rankingEl = document.getElementById("ranking");
var allScores = JSON.parse(localStorage.getItem("highscores"));
var clearIt = document.getElementById("clearIt");
var backToGame = document.getElementById("backToGame")
console.log(allScores);
console.log(rankingEl)

function ranking() {
    allScores.sort(function (a, b) { return b.score - a.score });
    console.log(allScores);
    for (var i = 0; i < 5; i++) {
        var rank = document.createElement("h3");
        rank.textContent = allScores[i].intials +" : "+ allScores[i].score;
        rankingEl.appendChild(rank);
        
    };


}
clearIt.addEventListener("click", function(event) {
    event.stopPropagation();
    localStorage.clear();
    rankingEl.innerHTML="";
} );
backToGame.addEventListener("click", function(event){
    event.stopPropagation();
    window.location.assign("index.html")
});

ranking();