//Тоглогчийн ээлжийг шалгах хувьсагч, нэгдүгээр тоглогч 0, хоёрдугаар тоглогчийг 1
var activePlayer = 0;

//Тоглогч дээр цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

//ээлжийн оноо
var roundScore = 0;

//шооны аль талаар буусныг шалгах хувьсагч, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүй оноож өгнө.
var dice = Math.floor(Math.random() * 6) + 1;
//window.document.querySelector("#score-0").textContent = dice;

//document.querySelector("#score-1").textContent = dice;

// programm ehlehed beltgey
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
window.document.getElementById("current-0").textContent = "0";
window.document.getElementById("current-1").textContent = "0";
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
// shoog shideh eventlistener
document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1-6 sanamsargui too gargah
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  // shoonii zurgiig web deer gargah
  diceDom.style.display = "block";
  // buusan toonii zurgiig gargah
  diceDom.src = "dice-" + diceNumber + ".png";
  //buusan tooon 1ees ylgaaatai bol idevhtei toglogchiin eeljiin onoog nemegduulne
  if (diceNumber !== 1) {
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    //1 buulgasan toglogchiin onoog 0 bolgono
    switchToNextPlayer();
  }
});
// hold tovchnii event listener
document.querySelector(".btn-hold").addEventListener("click", function () {
  // ug toglogchiin onoog global onoon deer ni nemne
  //   if (activePlayer === 0) {
  //     scores[0] = scores[0] + roundScore;
  //   } else {
  //     scores[1] = scores[1] + roundScore;
  //   }
  scores[activePlayer] = scores[activePlayer] + roundScore;
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  // ug toglogch hojson esehiig shalgah
  if (scores[activePlayer] >= 10) {
    document.getElementById("name-" + activePlayer).textContent = "Winner!!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    // toglogchiin eeljiig solino
    switchToNextPlayer();
  }
});

//ene function toglogch eelj shiljuuldeg
function switchToNextPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  //toglogchiin eeljiig solino.
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  // ulaan tseg shiljuuleh
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  // shoog tur alga bolgono.
  diceDom.style.display = "none";
}
