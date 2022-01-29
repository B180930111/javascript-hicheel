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
document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
