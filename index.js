let randomNumber1 = Math.floor(Math.random()*6 + 1);
let randomNumber2 = Math.floor(Math.random()*6 + 1);

let randomDice1 = "images/dice"+randomNumber1+".png";
let randomDice2 = "images/dice"+randomNumber2+".png";

document.querySelector("img.img1").setAttribute("src",randomDice1);
document.querySelector("img.img2").setAttribute("src",randomDice2);

if(randomNumber1 === randomNumber2){
  document.querySelector("h1").textContent = "Draw🤝";
}
else if(randomNumber1>randomNumber2){
  document.querySelector(".player1").textContent = "👈Player1 Wins";
}
else{
  document.querySelector(".player2").textContent = "Player2 Wins👉";
}
