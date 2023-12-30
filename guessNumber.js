
let secretNumber = generateRandomNumber();


function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}


function checkGuess() {


  let userGuess = document.getElementById("userGuess").value;
  let resultElement = document.getElementById("result");

  userGuess = parseInt(userGuess);


  if (userGuess === secretNumber) {
    resultElement.innerHTML = "Congratulations! You guessed the correct number!";
    showImageAndPlaySound("picture2.jpeg", "music2.mp3");
    secretNumber = generateRandomNumber();
  } else {
    resultElement.innerHTML = "Sorry, try again!";
    showImageAndPlaySound("picture1.jpeg", "music1.mp3");
  }
  document.getElementById("userGuess").value = "";
}


function showImageAndPlaySound(imageSource, soundSource) {
  let imageElement = document.createElement("img");
  imageElement.src = imageSource;

  let soundElement = document.createElement("audio");
  soundElement.src = soundSource;
  soundElement.autoplay = true;

  let resultContainer = document.getElementById("result");
  resultContainer.innerHTML = "";
  resultContainer.appendChild(imageElement);
  resultContainer.appendChild(soundElement);
}
