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
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
    // activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    if (activePlayer === 0) {
      activePlayer = 1;
    } else {
      activePlayer = 0;
    }
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    // shoog tur alga bolgono.
    diceDom.style.display = "none";
  }
});
