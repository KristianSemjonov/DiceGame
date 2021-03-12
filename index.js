

  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png")

  // ("src", "images/dice" + randomNumber1 + ".png")  path to be chosen to pick up the image from folder images - images/dice1.png

  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png")

  if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "DRAW! Roll again!";
  } else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🔥 Player 1 WINS!"
  } else {
    document.querySelector("h1").innerHTML = "Player 2 WINS! 🔥"
  }
