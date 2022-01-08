// code to detect buttons click on the document.
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var storingInnerHTML = this.innerHTML;
    makeSound(storingInnerHTML);
    makeAnimation(storingInnerHTML);
  });
}

// code to detect key press on the keyboard.
document.addEventListener("keypress", function (e) {
  makeSound(e.key);
  makeAnimation(e.key);
});

// main function.
function makeSound(key) {
  switch (key) {
    case "a":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "s":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "d":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "f":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "t":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "u":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var clap = new Audio("sounds/clap.wav");
      clap.play();
      break;

    case "l":
      var hiHat = new Audio("sounds/hiHat.mp3");
      hiHat.play();
      break;

    default:
      alert("You press the worng key");
      break;
  }
}
// animation function
function makeAnimation(pressedKey) {
  var activeKey = document.querySelector("." + pressedKey);
  activeKey.classList.add("pressed");

  setTimeout(() => {
    activeKey.classList.remove("pressed");
  }, 100);
}

