var i = 0;
var txtWelcome = "Welcome to GameCheap";

var speed = 150;

function typeWriter() {
  if (i < txtWelcome.length) {
    document.getElementById(
      "type-writer-welcome"
    ).innerHTML += txtWelcome.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    let final = document.getElementById("type-writer-welcome");

    final.classList.add("type-writer-animation");
  } else {
  }
}
